import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.73ec3e73.js";var t="/assets/bk565.18787cea.png",p="/assets/bk563.0646ea19.png",o="/assets/bk564.fe2a0778.png",c="/assets/bk566.a36839da.png";const i={},l=e(`<h1 id="\u591A\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u591A\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u73AF\u5883\u914D\u7F6E</h1><p>\u83B7\u53D6\u73AF\u5883\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7 useRuntimeConfig()\u91CC\u9762\u7684public\u83B7\u53D6\uFF0C\u4E0D\u653E\u5728public\u91CC\u9762\u8BDD\uFF0C\u5BA2\u6237\u7AEF\u6E32\u67D3\u662F\u627E\u4E0D\u5230\u53D8\u91CF\u7684</p><p><strong>\u5B89\u88C5@types/node</strong> \u672C\u5730\u5B89\u88C5 Node \u7684 TypeScript \u7C7B\u578B\u63CF\u8FF0\u6587\u4EF6\u5373\u53EF\u89E3\u51B3\u7F16\u8BD1\u5668\u62A5\u9519</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i --save-dev @types/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//nuxt.config.ts </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">VITE_ENV_CONFIG</span></span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_API_URL</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> envScript <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>npm_lifecycle_script<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> envName <span class="token operator">=</span> envScript<span class="token punctuation">[</span>envScript<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u901A\u8FC7\u542F\u52A8\u547D\u4EE4\u533A\u5206\u73AF\u5883</span>
<span class="token keyword">const</span> envData <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>envName<span class="token punctuation">,</span> <span class="token string">&#39;env&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token constant">VITE_ENV_CONFIG</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53\u524D\u73AF\u5883\uFF1A&#39;</span><span class="token punctuation">,</span> envData<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53\u524D\u73AF\u5883\uFF1A&#39;</span><span class="token punctuation">,</span> envData<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   runtimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span><span class="token operator">:</span><span class="token punctuation">{</span>
           baseUrl<span class="token operator">:</span> envData<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span> <span class="token comment">// \u628Aenv\u653E\u5165\u8FD9\u4E2A\u91CC\u9762\uFF0C\u901A\u8FC7useRuntimeConfig\u83B7\u53D6</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    vite<span class="token operator">:</span> <span class="token punctuation">{</span>
        envDir<span class="token operator">:</span> <span class="token string">&#39;~/env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9Aenv\u6587\u4EF6\u5939</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u62FF\u5230\u7684\u73AF\u5883\u53D8\u91CF\u653E\u5728<strong>runtimeConfig</strong>\u91CC\u9762</p><img src="`+t+'" alt="solar"><p>\u7136\u540E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2Aenv\u6587\u4EF6\u5939</p><img src="'+p+`" alt="solar"><p>\u6BCF\u4E2Aenv\u6587\u4EF6\u8BBE\u7F6E\u4E0D\u540C\u7684\u53D8\u91CF\uFF0C\u4F8B\u5982env.dev\u6587\u4EF6\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5F00\u53D1\u73AF\u5883\u8BF7\u6C42\u63A5\u53E3\u5730\u5740
VITE_API_URL=https://nuxtjs.org/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u968F\u4FBF\u6DFB\u52A0\u4EC0\u4E48\u53D8\uFF0C\u9700\u8981\u4EE5VITE_\u5F00\u5934\uFF0C\u7136\u540E\u901A\u8FC7<strong>useRuntimeConfig</strong>\u90FD\u80FD\u83B7\u53D6\u5230\u8FD9\u4E9B\u53D8\u91CF</p><img src="`+o+'" alt="solar"><p>\u7136\u540E\u968F\u4FBF\u5199\u4E2Aaxios\u8BF7\u6C42\u540E\uFF0C\u8BF7\u6C42\u7684\u5730\u5740\u5C31\u6539\u53D8\u4E86</p><img src="'+c+'" alt="solar">',15),u=[l];function r(d,k){return s(),a("div",null,u)}var b=n(i,[["render",r],["__file","\u591A\u73AF\u5883\u914D\u7F6E.html.vue"]]);export{b as default};
