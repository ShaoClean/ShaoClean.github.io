import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,d as a}from"./app.f99cef46.js";const c={},n=a(`<h1 id="\u56FE\u7247\u663E\u793A\u7A7A\u767D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u663E\u793A\u7A7A\u767D\u95EE\u9898" aria-hidden="true">#</a> \u56FE\u7247\u663E\u793A\u7A7A\u767D\u95EE\u9898</h1><p>\u524D\u7AEF\u901A\u8FC7\u8C03\u7528\u540E\u7AEF\u7684\u63A5\u53E3\u6765\u4E0B\u8F7D\u670D\u52A1\u5668\u7AEF\u7684\u56FE\u7247\uFF0C\u56FE\u7247\u662F\u53EF\u4EE5\u6B63\u5E38\u7684\u4E0B\u8F7D\u5230\u624B\u673A\u7684\u5185\u5B58\u4E2D\u53BB\u7684\u3002</p><p>\u4F46\u662F\u9700\u8981\u901A\u8FC7<code>Cordova</code>\u8C03\u7528\u624B\u673A\u7AEF\u7684\u539F\u751F\u4E8B\u4EF6\u6765\u663E\u793A\u56FE\u7247\uFF0C\u8FD9\u4E2A\u65F6\u5019\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\uFF0C\u56FE\u7247\u663E\u793A\u7A7A\u767D\u3002</p><p>\u539F\u56E0\u662F\u56E0\u4E3A\u82F9\u679C\u7684\u9650\u5236\uFF0C\u4E0D\u5141\u8BB8app\u8BBF\u95EE\u672C\u5730\u7684\u56FE\u7247\u8DEF\u5F84</p><p>\u53EF\u4EE5\u901A\u8FC7ionic\u7684\u65B9\u6CD5<code>image.src = window.Ionic.WebView.convertFileSrc(result.nativeURL);</code></p><p>\u5C06\u539F\u672C\u672C\u5730\u7684\u56FE\u7247\u8DEF\u5F84\u5730\u5740(\u4EE5file://\u5F00\u5934)\u6539\u6210\u4EE5\u7C7B\u4F3C\u8BF7\u6C42\u670D\u52A1\u5668\u7AEF\u7684\u5730\u5740(\u4EE5ionic://\u5F00\u5934)\uFF0C\u8FD9\u6837\u5C31\u7B49\u4E8E\u6CA1\u6709\u8BBF\u95EE\u672C\u5730\u56FE\u7247\u3002</p><p>\u5C3D\u7BA1\u5982\u6B64\uFF0C\u4F9D\u65E7\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u56FE\u7247\uFF0C\u90A3\u662F\u56E0\u4E3Aangular\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u5BF9\u8DEF\u5F84\u505A\u4E86\u4E00\u4E9B\u5B89\u5168\u7684\u9650\u5236\uFF0C\u9632\u6B62\u901A\u8FC7\u8DEF\u5F84\u94FE\u63A5\u8FDB\u884Cxss\u653B\u51FB</p><p>\u5982\u679C\u8FD9\u4E2Aurl\u5339\u914DaHrefSanitizationWhitelist\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u89C4\u5219\uFF0C\u5219\u4F1A\u88AB\u6DFB\u52A0\u5230DOM\u4E2D\uFF0C\u5426\u5219\u8F6C\u5316\u540E\u7684url\u5C06\u4F1A\u52A0\u4E0A&#39;unsafe://\u2018\u524D\u7F00\u540E\u624D\u80FD\u88AB\u52A0\u5165\u5230DOM\u4E2D</p><p>\u9700\u8981\u901A\u8FC7<code>imgSrcSanitizationWhitelist</code>\u8FD9\u4E2A\u65B9\u6CD5\u6765\u8BBE\u7F6E\u7F16\u8BD1\u65F6\u6E05\u7406\u7684\u767D\u540D\u5355\uFF0C\u5C06\u4EE5<code>ionic</code>\u5F00\u5934\u7684\u8DEF\u5F84\u4E0D\u8F6C\u6362\u4E3A<code>unsafe://</code>\u5F00\u5934\u7684\u8DEF\u5F84</p><div class="language-AngularJS ext-AngularJS line-numbers-mode"><pre class="language-AngularJS"><code>.config(function($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\\s*(https?|local|data|ionic):/);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8DE8\u57DFcookie\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DFcookie\u4E22\u5931" aria-hidden="true">#</a> \u8DE8\u57DFcookie\u4E22\u5931</h1><p>\u7B80\u5355\u7684\u8BB0\u5F55\u4E00\u4E0B\uFF0C\u9632\u6B62\u5FD8\u8BB0\u4E86</p><p><strong>\u573A\u666F</strong>\uFF1A\u4F7F\u7528ios\u7248\u672C13\u5DE6\u53F3\u7684\u6D4B\u8BD5\u673A\u65F6\u662F\u6B63\u5E38\u7684\uFF0C\u4F7F\u7528ios\u7248\u672C15\u5C31\u51FA\u73B0\u4E86\u95EE\u9898\uFF0Ccookie\u4E0D\u80FD\u5728\u8BF7\u6C42\u65F6\u81EA\u52A8\u5E26\u4E0A</p><p>\u6B63\u5E38\u80FD\u81EA\u52A8\u643A\u5E26cookie\u7684\u8BF7\u6C42\u5982\u4E0B\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/\u6B63\u5E38.png" alt="\u6B63\u5E38"></p><p>\u51FA\u73B0\u95EE\u9898\u4E0D\u80FD\u4F20\u8F93cookie\u8BF7\u6C42\u7684\u5982\u4E0B\uFF0C\u53D1\u73B0\u4ED6\u5728\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\u4E0D\u4F1A\u81EA\u52A8\u643A\u5E26cookie\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u5DF2\u7ECF\u660E\u786E\u7684\u8FD4\u56DE\u4E86cookie\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/\u51FA\u9519.png" alt="\u51FA\u9519"></p><p><strong>\u89E3\u51B3\u65B9\u6848\uFF1A</strong></p><p>\u89E3\u51B3\u65B9\u6848\u4E00\uFF1A\u7B80\u5355\u7C97\u66B4\u7684\uFF0C\u5728\u6BCF\u6B21\u8BF7\u6C42\u9700\u8981cookie\u7684\u65F6\u5019\u90FD\u643A\u5E26\u7528\u6237\u7684\u4FE1\u606F\uFF0C\u4E0D\u4F7F\u7528token</p><p>\u89E3\u51B3\u65B9\u6848\u4E8C\uFF1A\u5728\u53D1\u9001ajax\u8BF7\u6C42\u7684\u65F6\u5019\u914D\u7F6E\u4E00\u4E0B\uFF1A</p><p><code>$httpProvider.defaults.withCredentials = true</code></p><p>\u4E4B\u524D\u767E\u5EA6\u89E3\u51B3\u65B9\u6848\u7684\u65F6\u5019\uFF0C\u6211\u770B\u5230\u5927\u591A\u6570\u90FD\u662F\u7528\u8FD9\u4E2A\u65B9\u6848\u89E3\u51B3\u7684\uFF08\u539F\u751F\u3001angular\u3001axios\u4E2D\u90FD\u6709\u76F8\u5173\u7684\u914D\u7F6E\u9879\uFF09\uFF0C\u4F46\u662F\u6211\u4EEC\u7684\u9879\u76EE\u4E2D\u5DF2\u7ECF\u4E8B\u5148\u914D\u7F6E\u597D\u4E86\uFF0C\u6211\u4E5F\u4E0D\u592A\u6E05\u695A\u4E3A\u4EC0\u4E48\u6CA1\u6709\u751F\u6548\u3002</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/IMG_8B5D9731CA0C-1.jpeg" alt="IMG_8B5D9731CA0C-1"></p>`,23),t=[n];function s(p,r){return i(),o("div",null,t)}const u=e(c,[["render",s],["__file","mtydsp.html.vue"]]);export{u as default};
