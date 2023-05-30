---
icon: javascript
date: 2022-09-19
star: 10
category:
    - 前端
    - JS
tag:
    - 事件循环
    - 学习笔记
---

# 事件循环机制

在了解事件循环机制之前，需要了解：

-   同步任务

    在主线程上排队的任务，前一个任务执行完毕，才能继续执行下一个任务

-   异步任务

    不会立马进入主线程，而是先进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，任务才会进入主线程去执行。具体见[如何理解 JS 的异步](./js-async.html)

-   回调函数

-   js 在浏览器中的执行机制

## 概述

事件循环机制是 html 提出的概念，是为了协调事件，用户交互，脚本，渲染，网络等，从整体上告诉了我们所写 JS 代码的执行顺序。

JS 的一大特点就是单线程，并没有专门的异步线程。但它也支持异步操作（暂时理解为又开了一个新的线程），这个异步操作是浏览器提供的，他会放到浏览器的循环队列里面，等待主线程栈发出命令来执行这个队列里面的事件。

在 JS 代码执行的过程中，通过函数的调用栈来决解函数的执行顺序，当然也存在另外一些特殊的状况，通过任务队列（task queue）来解决另外一些代码的执行。任务队列可以分为`宏任务(macro-task)`和`微任务(micro-task)`

## 异步任务

在上面提到了，异步任务是不会立马进入主线程的任务而是进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，任务才会进入主线程执行。异步任务又可以分为：宏任务、微任务

### 宏任务

宏任务就是所谓的主线程？

宏任务包含：script（整体代码）、setTimeout、setInterval、setImmediate、I/O、UI rendering

### 微任务

微任务包含：process.nextTick、Promise、Object.observe

:::warning 注意

Promise 和 setTimeout 等还是同步的代码，称为任务源。而进入任务队列的是他们指定的具体所要执行的任务。Promise 具体需要执行的任务例如`then`函数是微任务，而 setTimeout 中携带的任务是宏任务。无论是微任务还是宏任务的执行，都需要借助`函数调用栈`（栈内存）来完成。

宏任务与微任务的执行顺序：先执行微任务，再执行宏任务

:::

### 2023.4.8 更新

面试题，下面输出的结果

```js
async function asy1() {
	console.log(1);
	await asy2();
	console.log(2);
}

async function asy2() {
	await setTimeout(_ => {
		Promise.resolve().then(_ => {
			console.log(3);
		});
		console.log(4);
	}, 0);
}

async function asy3() {
	Promise.resolve().then(_ => {
		console.log(6);
	});
}

asy1();
console.log(7);
asy3();
```

分析：

1. 执行函数`asy1`的同步代码

2. 输出 7

3. 执行函数`asy3`的同步代码

细化上面的三点：

执行函数`asy1`的同步代码，`输出结果1`。

执行函数`asy2`的同步代码，0 秒后将计时器中的函数加入到宏任务队列。等待函数`asy2`的执行完成后，将`输出结果2`加入到微任务队列。虽然函数`asy2`中的同步代码执行完了，但是由于`await`关键字的存在，实际上是没有执行完的，还有一个`隐形的微任务`存在，所以此时`asy2`并没有执行完成。

相当于：

```js
function asy2(){
  await new Promise((resolve)=>{
    let timer = setTimeout((_)=>{
        Promise.resolve().then((_)=>{
            console.log(3);
        })
        console.log(4);
    },0)
    resolve(timer);
  }).then((value)=>{
    //隐形的.then
    //...
  })
}

```

输出结果 7。

将输出 6 加入到微任务队列。

至此同步代码执行完成，执行微任务队列中的代码。

执行隐形的微任务，此时函数`asy2`执行完成，将输出结果`2`加入到微任务队列。

`输出结果6`

`输出结果2`

执行宏任务队列中的任务。将输出结果 3 加入到微任务队列

执行同步代码，`输出结果4`

执行宏任务队列中的任务，`输出结果3`

所以最终的输出结果为：

```
1、7、6、2、4、3
```

### 2023.4.28 更新

工作中遇到一个问题：

```js
const readline = require("readline");
const fs = require("fs");
let mydata;
async function Outer() {
	await handleData();

	const res = await readData();
	const new_res = res ? res : {};
	new_res.preEvalNumber = 1;

	await updateData(new_res);
	console.log("mydata", mydata);
}

async function handleData() {
	const rl = readline.createInterface({
		input: fs.createReadStream("file.txt"),
	});

	const obj = {};
	rl.on("line", line => {
		obj[line] = line;
	});

	rl.on("close", async () => {
		await updateData(arr);
	});
}

async function readData() {
	return mydata;
}

async function updateData(data) {
	await Promise.resolve().then(() => {
		mydata = data;
	});
}

Outer();
```

输出结果非常的不尽人意。。。。

预期：

```
{
	a: 'a',
	b: 'b',
	c: 'c',
	preEvalNumber: 1
}
```

结果却是：

```
{
	preEvalNumber: 1
}
```

有点难受的，接着我就开始漫长的分析了。

**4.29:**

过了一天早上，我终于知道了！！！

```js
rl.on("line", line => {
	obj[line] = line;
});

rl.on("close", async () => {
	await updateData(arr);
});
```

看这一段代码，尝试着了解它的用意，这样子就很好理解了。

它其实就是一个读写文件的方法，而读写文件嘛，是需要时间的，所以为了防止阻塞，自然而然就设置成了异步的咯。

其实昨天困扰我的地方就是这个`close`事件，今天突然就醒悟了！读写文件是需要时间的呀，所以说这个`close`事件触发的时机，其实就是文件读写完成的时机。

难怪我昨天直接套了一层`setTimeout`时间写成 0 没有用呢，原来是这样的，我今天测试了一下，30 几行的文件需要至少 4ms 的时间，所以 setTimeout 的时间设置就成了关键。然后去百度了一下，大概一秒钟，也就是 1000ms，可以读写文件的大小为 70M 左右，所以我的解决方案：

```js
setTimeout(async () => {
	const res = await readData();
	const new_res = res ? res : {};
	new_res.preEvalNumber = 1;

	await updateData(new_res);

	const latest_res = await readData();
	console.log("latest_res", latest_res);
	console.log(mydata);
}, 6);
```

**5.27 更新**

今天在纠结 Promise 的时候，突然对上面的例子有了新的理解，所以就来更新一下。

在看红宝书的时候看到一句关于对 Promise 的描述：`支持优雅的定义和组织异步逻辑`。

虽然还在纠结 Promise 这玩意的意义，但是突然就联想到了上面的事例，有了新的解决方式。用 setTimeout 解决实在不够优雅，而且还不能确定这个时间。

其实可以这样子来处理 close 事件：

```js
function handleData() {
	return new Promise((resolve, reject) => {
		const rl = readline.createInterface({
			input: fs.createReadStream("file.txt"),
		});

		const obj = {};
		rl.on("line", line => {
			obj[line] = line;
		});

		rl.on("close", async () => {
			await updateData(obj);
			resolve(obj);
		});
	});
}
```

用 Promise 包裹这一段处理逻辑，核心是用到了 Promise 的 resolve 思想，等待 close 时间梳理完毕的时候，再将这个处理逻辑的状态改为完成，这样子就可以在外部使用 await 来等待这个处理逻辑的完成。

优雅，属实优雅，真的太优雅了。

但是关于 Promise 和异步编程，在我心里面还有有一小块疙瘩，总感觉使不上劲。。。

期待后面的一点点解决吧。

**5.30 更新**

解决了，终于解决了。出错的原因在前端传参数的时候传了一个空的 model_config，后端在这个地方的时候报错了：

```ts
class xxx {
	//验证中间模型
	evalMiddleModel = async (option: CreatTrainQueue) => {
		try {
			this.funMap.set(this.EVAL_KEY, EvalStatus.PAD);
			console.log("start eval middle model...");
			const TrainData = await this.handleMiddleModelOrEvalDataset(option);

			await this.goEval(TrainData as TrainData, option.model_path);

			return { status: true };
		} catch (e) {
			return { status: false };
		}
	};

	handleMiddleModelOrEvalDataset = (){
		this.model_id = option.model_id;
		this.model_type_id = option.model_type_id;
		this.model_path = option.model_path;
		const evalOption = {
			evalType: option.model_config.eval_type,//model_config为null，报错了
			divide: option.model_config.divide,
			evalProject: option.model_config.eval_project,
			evalClass: option.model_config.eval_classes,
		}
		const { model_type_id, model_path } = option;
	}
}
```

前端代码是这样的：

```ts
const model_config = typeof modelInfo.model_config === "string" ? JSON.parse(modelInfo.model_config) : modelInfo.model_config;
// 查看测试结果
const option: PostData["createTrainQueue"] = {
	...modelInfo,
	model_id: modelInfo.id,
	sample_img_path: "",
	task_type: "continue",
	model_config: model_config,
	sampleConfig: model_config,
};

const stopResult = await stopTrainQueue(); //停止
eventBus.emit("getModelList");
const needEval = await getMiddleModelNeedEval({ model_id: modelInfo.id });
console.log("needEval", needEval);
if (needEval.status) {
	setEvalLoading(true);
	await evalModel(option);
	repeatGetEvalStatus();
	return;
}
```

今天把前面说的`appendFile`回调里面的`rl.on('close')`给删掉了，改成了同步的代码，就能够百分之百的复现了。

也就是在第一次走验证的时候会触发。是因为执行`evalType: option.model_config.eval_type`这里代码的时候报错了，然后我的trycatch在报错的时候又没有打印日志，所以造成了我的误解，我还一直以为是因为任务队列中返回的消息给函数执行打断了。

现在找到了为什么会报错，再来思考一下🤔为什么之前用异步的时候是偶然出现这个问题呢？

暂时不是很确定，明天再好好思考确认一下