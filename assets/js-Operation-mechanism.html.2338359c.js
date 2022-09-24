import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as l,d as p}from"./app.5e75e4f6.js";const t={},a=p('<h1 id="js\u8FD0\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#js\u8FD0\u884C\u673A\u5236" aria-hidden="true">#</a> JS\u8FD0\u884C\u673A\u5236</h1><h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><p><strong>\u652F\u6301\u73AF\u5883\uFF1A</strong></p><ul><li>\u6D4F\u89C8\u5668</li><li>webview</li><li>WebApp\uFF08Hybrede\u6DF7\u5408App\uFF09</li><li>NodeJS</li></ul><p><strong>\u6808\u5185\u5B58\uFF1A</strong></p><p>\u6D4F\u89C8\u5668\u80FD\u591F\u8FD0\u884CJS\u4EE3\u7801\uFF0C\u662F\u56E0\u4E3A\u63D0\u4F9B\u4E86\u4EE3\u7801\u8FD0\u884C\u7684\u73AF\u5883\uFF1A\u6808\u5185\u5B58\uFF08Stack\uFF09</p><ul><li>\u6808\u5185\u5B58\u4E5F\u662F\u4ECE\u8BA1\u7B97\u673A\u7684\u5185\u5B58\u5206\u914D\u51FA\u6765\u7684\u4E00\u5757\u5185\u5B58</li><li><code>\u6267\u884C\u73AF\u5883\u6808\uFF08\u6808\u5185\u5B58\uFF09</code>\uFF0CExecution Context Stack\uFF08ECStask\uFF09\u63D0\u4F9B\u4EE3\u7801\u6267\u884C\u7684\u73AF\u5883</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58\u7684\u533A\u522B\uFF1A</p><p>\u4E8C\u8005\u90FD\u662F\u5185\u5B58</p><p>\u6808\u7528\u4E8E\u6267\u884C\u4EE3\u7801\uFF0C\u5B58\u50A8\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u539F\u59CB\u503C\u7C7B\u578B\uFF09</p><p>\u5806\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u3001\u51FD\u6570</p><p>\u4E8C\u8005\u662F\u72EC\u7ACB\u7684\uFF0C\u4E0D\u76F8\u4E92\u5305\u542B\u7684\u5185\u5B58\u7A7A\u95F4</p></div><p>\u6267\u884C\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E3A\u4E86\u533A\u5206\u662F\u5728\u54EA\u4E2A\u73AF\u5883\u4E0B\u6267\u884C\uFF08\u5168\u5C40/\u51FD\u6570/\u5757\uFF09\uFF0C\u9996\u5148\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587EC</p><ul><li>EC\uFF08G\uFF09\u5168\u5C40\u4E0A\u4E0B\u6587\uFF0C\u5168\u5C40\u4EE3\u7801\u5728\u8FD9\u91CC\u6267\u884C</li><li>EC\uFF08X\uFF09\u67D0\u4E2A\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587</li></ul><h2 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u8FC7\u7A0B</h2><p><strong>\u7B49\u53F7\u8D4B\u503C\u7684\u8FC7\u7A0B\uFF1A</strong></p><ul><li><p>1.\u521B\u5EFA\u503C</p><p>\u539F\u59CB\u503C\u7C7B\u578B\u7684\u503C\uFF0C\u662F\u76F4\u63A5\u5B58\u50A8\u5728\u6808\u5185\u5B58\u4E2D\u7684\uFF1B\u5BF9\u8C61\u6570\u636E\u7C7B\u578B\u503C\u662F\u9700\u8981\u5355\u72EC\u5F00\u8F9F\u5185\u5B58\u5B58\u50A8\u7684\uFF08\u5806\u5185\u5B58Heap\uFF09</p></li><li><p>2.\u58F0\u660E\u53D8\u91CF\uFF08declare\uFF09</p></li></ul><p>\u200B var/function/let/const/import</p><p>\u200B \u628A\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u50A8\u5728\u5F53\u524D\u6240\u5904\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u4E2D\uFF0C\u4F8B\u5982\uFF1AEC\uFF08G\uFF09</p><ul><li>3.\u8D4B\u503C\u64CD\u4F5C</li></ul><p>\u200B \u8D4B\u503C\u64CD\u4F5C\uFF0C\u5373\u5B9A\u4E49\uFF08defined\uFF09\u6570\u636E\uFF0C\u6240\u4EE5\u58F0\u660E\u53D8\u91CF\u6CA1\u6709\u8D4B\u503C\u53EB\u505Aundefined</p><p>\u200B \u6309\u7167\u8BA1\u7B97\u673A\u7684\u5E95\u5C42\u673A\u5236\uFF0C\u8D4B\u503C\u64CD\u4F5C\u662F\u6307\u9488\u7684\u6307\u5411\u548C\u5173\u8054</p><p><strong>\u521B\u5EFA\u5BF9\u8C61\u6570\u636E\u7C7B\u578B\uFF08\u51FD\u6570\u9664\u5916\uFF09\u8FC7\u7A0B\uFF1A</strong></p><ul><li>1.\u4E0D\u80FD\u76F4\u63A5\u5B58\u50A8\u5728\u6808\u4E2D</li></ul><p>\u200B \u5F00\u8F9F\u4E00\u4E2A\u5355\u72EC\u7684\u5185\u5B58\uFF08\u5806\u5185\u5B58\uFF09\u3002\u4E3A\u4E86\u540E\u671F\u8BBF\u95EE\u8FD9\u4E2A\u5185\u5B58\uFF0C\u90FD\u4F1A\u8D4B\u4E88\u5185\u5B58\u4E00\u4E2A16\u8FDB\u5236\u7684\u5730\u5740</p><ul><li>2.\u628A\u5BF9\u8C61\u4E2D\u7684\u952E\u503C\u5BF9\u4F9D\u6B21\u5B58\u50A8\u5230\u5806\u5185\u5B58\u4E2D</li><li>3.\u628A\u5185\u5B58\u7684\u5730\u5740\u653E\u7F6E\u5728\u6808\u4E2D\u4F9B\u53D8\u91CF\u5F15\u7528</li></ul>',22),n=[a];function r(o,s){return e(),l("div",null,n)}const u=i(t,[["render",r],["__file","js-Operation-mechanism.html.vue"]]);export{u as default};
