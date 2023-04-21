import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.73ec3e73.js";const p={},o=t(`<h1 id="js\u968F\u673A\u6253\u4E71\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#js\u968F\u673A\u6253\u4E71\u6570\u7EC4" aria-hidden="true">#</a> JS\u968F\u673A\u6253\u4E71\u6570\u7EC4</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u968F\u673A\u6253\u4E71\u6570\u7EC4</span>
  <span class="token keyword">let</span> _arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u6570\u7EC4\u526F\u672C\uFF0C\u4E0D\u6539\u53D8\u539F\u6570\u7EC4</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> _arr
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u83B7\u53D6min\u5230max\u7684\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u5305\u542Bmin\u548Cmax\u672C\u8EAB</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: demo [vanilla]</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  \u539F\u6570\u7EC4\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click me\uFF01\u6253\u4E71\u6570\u7EC4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">&gt;</span></span>
  \u6253\u4E71\u7ED3\u679C\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u83B7\u53D6min\u5230max\u7684\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u5305\u542Bmin\u548Cmax\u672C\u8EAB</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u968F\u673A\u6253\u4E71\u6570\u7EC4</span>
      <span class="token keyword">let</span> _arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u6570\u7EC4\u526F\u672C\uFF0C\u4E0D\u6539\u53D8\u539F\u6570\u7EC4</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> _arr
    <span class="token punctuation">}</span>

    <span class="token comment">//\u4F7F\u7528</span>
    <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> $span2 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#span2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#span1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> arr<span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      $span2<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token function">shuffle</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,5),e=[o];function c(l,u){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","js\u968F\u673A\u6253\u4E71\u6570\u7EC4.html.vue"]]);export{r as default};
