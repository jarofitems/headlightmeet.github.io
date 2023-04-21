import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,a as u}from"./app.73ec3e73.js";var l="/assets/bk577.fc9971bb.png";const s={},d=u(`<h1 id="elementplus\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#elementplus\u5E38\u7528" aria-hidden="true">#</a> elementplus\u5E38\u7528</h1><h2 id="\u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272" aria-hidden="true">#</a> \u5206\u9875\u4FEE\u6539\u80CC\u666F\u8272</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: #494893 !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355" aria-hidden="true">#</a> \u89D2\u8272\u5206\u914D\u6743\u9650\u83DC\u5355</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u89D2\u8272\u7BA1\u7406 --&gt;
&lt;!-- \u522B\u5220\uFF0C\u591A\u6309\u94AE\u5206\u914D\u7684\u6D41\u7A0B --&gt;
&lt;template&gt;
    &lt;div class=&quot;positions&quot; ref=&quot;supHeight&quot;&gt;
        &lt;el-tree class=&quot;positions_row_right&quot; v-model=&quot;ruleForm.menuIds&quot; default-expand-all :data=&quot;dataList&quot; show-checkbox
            node-key=&quot;id&quot; @check=&quot;setUseCheck&quot; :default-checked-keys=&quot;ruleForm.menuIds&quot;
            :props=&quot;{ ...defaultProps, class: customNodeClass }&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, reactive, onMounted } from &#39;vue&#39;
import type Node from &#39;element-plus/es/components/tree/src/model/node&#39;
// \u7F16\u8F91/\u65B0\u589E\u6570\u636E
let ruleForm: any = ref({
    name: &quot;&quot;,//\u89D2\u8272\u540D\u79F0
    resource: &quot;&quot;,////\u83DC\u5355\u6570\u7EC4
    menuIds: &quot;&quot;
})
// \u83DC\u5355\u9009\u53D6
const setUseCheck = (checkedNodes: any, e: any) =&gt; {
    console.log(e.checkedKeys)
    e.checkedKeys.map((item: any, index: any) =&gt; {
        if (item == null) {
            e.checkedKeys.splice(index, 1)
        }
    })
    ruleForm.value.menuIds = e.checkedKeys
}
const customNodeClass: any = (dataList: any, node: Node) =&gt; {
    if (dataList.enable==true || dataList.enable==false) {
        return &#39;is-penultimate&#39;
    }
    return null
}
const defaultProps = {
    children: &#39;modules&#39;,
    label: &#39;view&#39;,
    class: &#39;is-penultimate&#39;
}
let dataList = ref&lt;any&gt;()
onMounted(() =&gt; {
    dataList.value = [

        {
            &quot;view&quot;: &quot;\u4F9B\u5E94\u5546\u7BA1\u7406&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;SUPPLIER&quot;,
                    &quot;view&quot;: &quot;\u673A\u7968\u4F9B\u5E94\u5546\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;SUPPLIER_INTERFACE&quot;,
                    &quot;view&quot;: &quot;\u673A\u7968\u4F9B\u5E94\u5546\u63A5\u53E3\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u673A\u7968\u653F\u7B56\u7BA1\u7406&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;POLICY&quot;,
                    &quot;view&quot;: &quot;\u653F\u7B56\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u62A5\u8868\u4E2D\u5FC3&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;supplierFlowReport&quot;,
                    &quot;view&quot;: &quot;\u4F9B\u5E94\u5546\u6D41\u91CF\u62A5\u8868&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        },
        {
            &quot;view&quot;: &quot;\u57FA\u672C\u8BBE\u7F6E&quot;,
            &quot;modules&quot;: [
                {
                    &quot;name&quot;: &quot;ACCOUNT&quot;,
                    &quot;view&quot;: &quot;\u5458\u5DE5\u8D26\u53F7\u5BC6\u7801\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;deptMgmt&quot;,
                    &quot;view&quot;: &quot;\u90E8\u95E8\u7BA1\u7406&quot;,
                    &quot;enable&quot;: true,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                },
                {
                    &quot;name&quot;: &quot;positionMgmt&quot;,
                    &quot;view&quot;: &quot;\u804C\u4F4D\u7BA1\u7406&quot;,
                    &quot;enable&quot;: false,
                    &quot;actions&quot;: [
                        {
                            &quot;name&quot;: &quot;CREATE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;DELETE&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;EDIT&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        },
                        {
                            &quot;name&quot;: &quot;VIEW&quot;,
                            &quot;configurable&quot;: true,
                            &quot;enable&quot;: true
                        }
                    ]
                }
            ]
        }
    ]
    // \u6570\u636E\u7EC4\u7EC7
    dataList.value.map((item: any, index: number) =&gt; {
        item.id = index + 1
        item.name = item.view
        item.modules.map((items: any, indexs: any) =&gt; {
            items.id = Number(item.id + &#39;&#39; + (indexs + 1))
            items.actions.map((itemt: any, indext: number) =&gt; {
                itemt.view = itemt.name
                itemt.id = Number(items.id + &#39;&#39; + (indext + 1))
            })
            items.modules = items.actions
        })
    })
    console.log(dataList.value)
})


&lt;/script&gt;
&lt;style lang=&quot;scss&quot;&gt;
.is-penultimate &gt; .el-tree-node__content {
  color: #626aef;
}

.el-tree-node.is-expanded.is-penultimate &gt; .el-tree-node__children {
  display: flex;
  flex-wrap: wrap;
}
.is-penultimate &gt; .el-tree-node__children &gt; div {
  width: 25%;
}
.is-penultimate  &gt;.el-collapse-transition-leave-active{
    display: flex !important;
}
.is-penultimate  &gt;.el-collapse-transition-enter-active{
      flex-direction: row !important;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C</p><img src="`+l+'" alt="solar">',7),t=[d];function v(a,o){return e(),i("div",null,t)}var c=n(s,[["render",v],["__file","elementplus\u5E38\u7528.html.vue"]]);export{c as default};
