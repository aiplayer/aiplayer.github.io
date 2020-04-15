(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{299:function(a,i,t){"use strict";t.r(i);var e=t(28),n=Object(e.a)({},(function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"混搭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混搭"}},[a._v("#")]),a._v(" 混搭")]),a._v(" "),t("p",[a._v("Mixins提供了一种组合和重用常用组件属性的方法。它们使用"),t("a-mixin",[a._v("元素定义，并放置在中 "),t("a-assets",[a._v("。Mixins应该设置为id，当实体将id其设置为其mixin属性时，该实体将吸收所有mixin的属性。")])],1)],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a- 场景 > < a- 资产 > < a-mixin id = “红色” material = “颜色：红色” > </ a-mixin > < a-mixin id = “ blue” material = “颜色：蓝色” > </ a-mixin > < a-mixin id = “ cube” geometry = “ primitive：box” > </ a-mixin > </ a- 资产 >\n  \n      \n      \n      \n  \n\n  < a-entity  mixin = “红色立方体” > </ a-entity > < a-entity mixin = “蓝色立方体” > </ a-entity > </ a-场景 >\n   \n")])])]),t("p",[a._v("具有的实体red cube将按照该顺序从redmixin和cubemixin中获取属性。与相同blue cube。从概念上讲，以上实体扩展为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a-实体 材料 = “颜色：红色”  几何 = “原始：盒子” > </ a-实体 > \n< a-实体 材料 = “颜色：蓝色”  几何 = “原始：盒子” > </ a-实体 >\n")])])]),t("h2",{attrs:{id:"合并组件属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并组件属性"}},[a._v("#")]),a._v(" 合并组件属性")]),a._v(" "),t("p",[a._v("如果由多个mixin和/或实体定义，则多属性组件的属性将合并。例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a- 场景 > < a- 资产 > < a-mixin id = “ box” geometry = “ primitive：box” > </ a-mixin > < a-mixin id = “ tall” geometry = “ height：10” > </ a-mixin > < a-mixin id = “ wide” geometry = “ width：10” > </ a-mixin > </ a- 资产 >\n  \n      \n      \n      \n  \n\n  < a-entity  mixin = “宽高的盒子”  geometry = “ depth：2” > </ a-entity > \n</ a-场景 >\n")])])]),t("p",[a._v("由于所有几何图形部件属性均作为混合文件包含并在实体上定义，因此将合并所有几何图形部件属性。该实体将等效于：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a-entity  几何 = “基本：盒子；高度：10；深度：2；宽度：10” > </ a-entity >\n")])])]),t("h2",{attrs:{id:"顺序和优先"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序和优先"}},[a._v("#")]),a._v(" 顺序和优先")]),a._v(" "),t("p",[a._v("当一个实体包含定义相同组件属性的多个混合对象时，最右边的混合对象优先。在下面的示例中，实体同时包含red和blue混合，并且由于blue最后包含了混合，因此多维数据集的最终颜色将是蓝色。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a- 场景 > < a- 资产 > < a-mixin id = “红色” material = “颜色：红色” > </ a-mixin > < a-mixin id = “ blue” material = “颜色：蓝色” > </ a-mixin > < a-mixin id = “ cube” geometry = “ primitive：box” > </ a-mixin > </ a- 资产 >\n  \n      \n      \n      \n  \n\n  < a-entity  mixin = “红色蓝色立方体” > </ a-entity > \n</ a-场景 >\n")])])]),t("p",[a._v("如果实体本身定义了mixin已经定义的属性，则该实体的定义优先。在下面的示例中，实体同时包含red和blue混合并且还定义了绿色。由于实体直接定义其自己的颜色，因此立方体的最终颜色将是绿色。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("< a- 场景 > < a- 资产 > < a-mixin id = “红色” material = “颜色：红色” > </ a-mixin > < a-mixin id = “ blue” material = “颜色：蓝色” > </ a-mixin > < a-mixin id = “ cube” geometry = “ primitive：box” > </ a-mixin > </ a- 资产 >\n  \n      \n      \n      \n  \n\n  < a-entity  mixin = “红色蓝色立方体”  material = “颜色：绿色” > </ a-entity > \n</ a-场景 >\n")])])])])}),[],!1,null,null,null);i.default=n.exports}}]);