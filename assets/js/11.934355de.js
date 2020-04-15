(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{295:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("p",[t._v("在实体组件系统模式中，组件是可重复使用的模块化数据块，我们将其插入实体中以添加外观，行为和/或功能。")]),t._v(" "),a("p",[t._v("在A框架中，组件会修改场景中作为3D对象的实体。我们将组件混合在一起并组成复杂的对象。他们让我们将three.js和JavaScript代码封装到可以从HTML声明式使用的模块中。")]),t._v(" "),a("p",[t._v("作为一个抽象的类比，如果我们将智能手机定义为实体，则可以使用组件赋予其外观（颜色，形状），定义其行为（调用时振动，低电量关闭）或添加功能（相机） ，屏幕）。")]),t._v(" "),a("p",[t._v("组件大致类似于CSS。就像CSS规则如何修改元素的外观一样，组件属性也可以修改实体的外观，行为和功能。")]),t._v(" "),a("h2",{attrs:{id:"组件html表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件html表单"}},[t._v("#")]),t._v(" 组件HTML表单")]),t._v(" "),a("p",[t._v("组件以一个或多个组件属性的形式保存一桶数据。组件使用此数据来修改实体。考虑一个发动机 组件，我们可以定义诸如马力或汽缸的属性。")]),t._v(" "),a("p",[t._v("HTML属性表示组件名称，这些属性的值表示组件数据。")]),t._v(" "),a("h3",{attrs:{id:"单属性组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单属性组件"}},[t._v("#")]),t._v(" 单属性组件")]),t._v(" "),a("p",[t._v("如果组件是单属性组件，则意味着其数据由单个值组成，那么在HTML中，该组件值看起来像普通的HTML属性：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<！-`position`是位置组件的名称。-> \n<！-`1 2 3`是位置分量的数据。-> \n< a-entity  位置 = “ 1 2 3” > </ a-entity >\n")])])]),a("h3",{attrs:{id:"多功能组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多功能组件"}},[t._v("#")]),t._v(" 多功能组件")]),t._v(" "),a("p",[t._v("如果组件是多属性组件，则意味着数据由多个属性和值组成，那么在HTML中，组件值类似于内联CSS样式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<！-`light`是灯光组件的名称。-> \n<！-灯光的“类型”属性设置为“点”。-> \n<！-灯光的“颜色”属性设置为“深红色”。-> \n< a-entity  light = “类型：点；颜色：深红色” > </ a-entity >\n")])])]),a("h2",{attrs:{id:"注册组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册组件"}},[t._v("#")]),t._v(" 注册组件")]),t._v(" "),a("h3",{attrs:{id:"aframe-registercomponent-name-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aframe-registercomponent-name-definition"}},[t._v("#")]),t._v(" AFRAME.registerComponent (name, definition)")]),t._v(" "),a("p",[t._v("注册一个A框架组件。我们必须先注册组件，然后才能在中的任何位置使用它们"),a("a-scene",[t._v("。根据HTML文件的含义，组件应排在之前"),a("a-scene",[t._v("。")])],1)],1),t._v(" "),a("ul",[a("li",[t._v("{string} name-组件名称。通过HTML属性名称表示的组件的公共API。")]),t._v(" "),a("li",[t._v("{Object} definition-组件定义。包含架构和生命周期处理程序方法。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// Registering component in foo-component.js\nAFRAME.registerComponent('foo', {\n  schema: {},\n  init: function () {},\n  update: function () {},\n  tick: function () {},\n  remove: function () {},\n  pause: function () {},\n  play: function () {}\n});\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- Usage of `foo` component. --\x3e\n<html>\n  <head>\n    <script src="aframe.min.js"><\/script>\n    <script src="foo-component.js"><\/script>\n  </head>\n  <body>\n    <a-scene>\n      <a-entity foo></a-entity>\n    </a-scene>\n  </body>\n</html>\n')])])]),a("h2",{attrs:{id:"架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[t._v("#")]),t._v(" 架构图")]),t._v(" "),a("p",[t._v("架构是一个对象，用于定义和描述组件的一个或多个属性。模式的键是属性的名称，模式的值定义属性的类型和值（如果是多属性组件）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent('bar', {\n  schema: {\n    color: {default: '#FFF'},\n    size: {type: 'int', default: 5}\n  }\n}\n< a-场景 > < a-实体栏 = “颜色：红色；大小：20” > </ a-实体 > </ a-场景 >\n   \n")])])]),a("p",[t._v("道具形象 图片来自vrjump.de的Ruben Mueller")]),t._v(" "),a("h3",{attrs:{id:"物业类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物业类型"}},[t._v("#")]),t._v(" 物业类型")]),t._v(" "),a("p",[t._v("属性类型主要定义架构如何解析每个属性从DOM传入的数据。然后，可以通过data 组件原型上的属性获得解析的数据。以下是A-Frame的内置属性类型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("财产类型")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody")]),t._v(" "),a("p",[t._v("|数组\t|将逗号分隔的值解析为数组（即\"1, 2, 3\" to ['1', '2', '3'])。\t|[]|\n|资产\t|用于指向一般资产的URL。可以解析出字符串形式的URL url("),a("url",[t._v(")。如果值是元素ID选择器（例如#texture），则此属性类型将调用getElementById并getAttribute('src')返回URL。的asset属性类型可以或可以不改变到手柄XHR时或返回MediaElements直接（例如，"),a("img"),t._v("元素）。\t|''|\n|音讯\t|与asset属性类型相同的解析。A框架检查器可能会使用它来呈现音频资产。\t|''|\n|布尔值\t|将字符串解析为布尔值（即，解析\"false\"为false，其他所有内容为真）。\t|假|\n|颜色\t|目前不进行任何解析。主要由A框架检查器用来显示拾色器。另外，需要使用颜色类型才能使彩色动画正常工作。\t|#FFF|\n|整型\t|呼叫parseInt（例如\"124.5\"至124）。\t|0|\n|地图\t|与asset属性类型相同的解析。A框架检查器可能会使用它来显示纹理资产。\t|''|\n|模型\t|与asset属性类型相同的解析。A框架检查器可能会使用它来展示模型资产。\t|''|\n|数\t|呼叫parseFloat（例如\"124.5\"至124.5'）。\t|0|\n|选择器\t|呼叫querySelector（例如\"#box\"至"),a("a-entity",{attrs:{id:"box"}},[t._v("）。\t|空值|\n|selectorAll\t|调用querySelectorAll并转换NodeList为Array（例如，转换为\".boxes\"[<a-entity class =“ boxes”，…]），\t|空值|\n|串\t|不做任何解析。\t|''|\n|vec2\t|解析两个数字到{x, y}对象（例如，1 -2到{x: 1, y: -2}。\t|{x：0，y：0}|\n|vec3\t|将三个数字解析为一个{x, y, z}对象（例如1 -2 3到）|{x: 1, y: -2, z: 3}。\t{x：0，y：0，z：0}|\n|vec4\t|解析四个数字到{x, y, z, w}对象（例如，1 -2 3 -4.5到{x: 1, y: -2, z: 3, w: -4.5}。\t|{x：0，y：0，z：0，w：0}|")])],1)],1),t._v(" "),a("h3",{attrs:{id:"属性类型推断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性类型推断"}},[t._v("#")]),t._v(" 属性类型推断")]),t._v(" "),a("p",[t._v("该模式将尝试推断仅给定默认值的属性类型：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("架构：{ 默认：10 }   //类型： “数字”\n的模式：{ 缺省：“foo”的 }   //类型： “串”\n模式：{ 默认：[ 1，2，3 ]}   //类型： “阵列”\n")])])]),a("p",[t._v("给定属性类型，该模式将设置默认值（如果未提供）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("模式：{type：'number'} //默认值：0 \n模式：{type：'string'} //默认值：'' \n模式：{type：'vec3'} //默认值：{x：0，y：0 ，z：0}\n")])])]),a("h3",{attrs:{id:"自定义属性类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性类型"}},[t._v("#")]),t._v(" 自定义属性类型")]),t._v(" "),a("p",[t._v("我们还可以通过提供parseand stringify 函数代替a 来定义自己的属性类型type：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("schema: {\n  // Parse slash-delimited string to an array (e.g., `foo=\"myProperty: a/b\"` to `['a', 'b']`),\n  // stringify array to string (e.g., `['a', 'b']` to `foo=\"myProperty: a/b\"`)\n  myProperty: {\n    default: [],\n    parse: function (value) {\n      return value.split('/');\n    },\n    stringify: function (value) {\n      return value.join('/');\n    }\n  }\n}\n")])])]),a("p",[t._v("parse通过setAttribute方法更新组件属性时调用。 stringify通过flushToDom方法更新DOM时调用。")]),t._v(" "),a("h3",{attrs:{id:"单属性架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单属性架构"}},[t._v("#")]),t._v(" 单属性架构")]),t._v(" "),a("p",[t._v("组件可以是单属性组件（由一个匿名值组成）或多属性组件（由多个命名值组成）。A框架将根据架构的结构推断组件是单属性还是多属性。")]),t._v(" "),a("p",[t._v("单属性组件的架构包含type和/或default键，并且架构的值是纯值而不是对象：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent('foo', {\n  schema: {type: 'int', default: 5}\n});\n<a-scene>\n  <a-entity foo=\"20\"></a-entity>\n</a-scene>\n")])])]),a("h2",{attrs:{id:"定义生命周期处理程序方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义生命周期处理程序方法"}},[t._v("#")]),t._v(" 定义生命周期处理程序方法")]),t._v(" "),a("p",[t._v("模式是解剖学，生命周期方法是生理学。模式定义了数据的形状，生命周期处理程序方法使用 数据来修改实体。处理程序通常将与Entity API进行交互 。")]),t._v(" "),a("h3",{attrs:{id:"方法概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法概述"}},[t._v("#")]),t._v(" 方法概述")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("在里面")]),t._v(" "),a("td",[t._v("组件初始化时调用一次。用于设置初始状态和实例化变量。")])]),t._v(" "),a("tr",[a("td",[t._v("更新")]),t._v(" "),a("td",[t._v("在组件初始化时以及组件的任何属性更新时（例如，通过setAttribute）都被调用。用于修改实体。")])]),t._v(" "),a("tr",[a("td",[t._v("去掉")]),t._v(" "),a("td",[t._v("当组件从实体中移除（例如，通过removeAttribute）或实体与场景分离时调用。用于撤消对实体的所有先前修改。")])]),t._v(" "),a("tr",[a("td",[t._v("蜱")]),t._v(" "),a("td",[t._v("在场景的每个渲染循环或刻度上调用。用于连续更改或检查。")])]),t._v(" "),a("tr",[a("td",[t._v("ck")]),t._v(" "),a("td",[t._v("场景渲染后，在场景的每个渲染循环或刻度上调用。用于后期处理效果或绘制场景后需要发生的其他逻辑。")])]),t._v(" "),a("tr",[a("td",[t._v("玩")]),t._v(" "),a("td",[t._v("每当场景或实体播放以添加任何背景或动态行为时调用。组件初始化时也调用一次。用于启动或恢复行为。")])]),t._v(" "),a("tr",[a("td",[t._v("暂停")]),t._v(" "),a("td",[t._v("每当场景或实体暂停以删除任何背景或动态行为时调用。当组件从实体中移除或实体与场景分离时也调用")])]),t._v(" "),a("tr",[a("td",[t._v("updateSchema")]),t._v(" "),a("td",[t._v("每当更新组件的任何属性时调用。可用于动态修改架构。")])])])]),t._v(" "),a("h2",{attrs:{id:"组件原型属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件原型属性"}},[t._v("#")]),t._v(" 组件原型属性")]),t._v(" "),a("p",[t._v("在这些方法中，我们可以通过this以下方式访问组件原型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody")]),t._v(" "),a("p",[t._v("|此数据\t|根据架构默认值，mixin和实体的属性计算出的已解析组件属性。\n要点：不要直接修改数据属性。它由A-Frame内部更新。要修改组件，请使用setAttribute。\n||这个\t|将实体引用为HTML元素。\n||this.el.sceneEl\t|将场景作为HTML元素引用。\n||this.id\t|如果该组件可以具有多个实例，则该组件的单个实例的ID（例如foofrom sound__foo）。|")]),t._v(" "),a("h3",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" .init ()")]),t._v(" "),a("p",[t._v(".init ()在组件生命周期的开始被调用一次。实体可以调用组件的init处理程序：")]),t._v(" "),a("p",[t._v("在HTML文件中的实体上静态设置组件并加载页面时。\n当组件通过设置在附加实体上时setAttribute。\n当组件设置在未附加的实体上时，然后将该实体通过附加到场景appendChild。\n该init处理程序通常用于：")]),t._v(" "),a("p",[t._v("设置初始状态和变量\n绑定方法\n附加事件监听器\n例如，游标组件init将设置状态变量，绑定方法并添加事件侦听器：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent('cursor', {\n  // ...\n  init: function () {\n    // Set up initial state and variables.\n    this.intersection = null;\n    // Bind methods.\n    this.onIntersection = AFRAME.utils.bind(this.onIntersection, this);\n    // Attach event listener.\n    this.el.addEventListener('raycaster-intersection', this.onIntersection);\n  }\n  // ...\n")])])]),a("h3",{attrs:{id:"update-olddata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-olddata"}},[t._v("#")]),t._v(" .update (oldData)")]),t._v(" "),a("p",[t._v(".update (oldData)只要组件的属性发生更改（包括在组件生命周期的开始），就会调用。实体可以调用组件的update处理程序：")]),t._v(" "),a("p",[t._v("在init ()组件生命周期的开始，调用after。\n使用来更新组件的属性时.setAttribute。\n该update处理程序通常用于：")]),t._v(" "),a("p",[t._v("使用进行大部分修改实体的工作this.data。\n只要一个或多个组件属性发生更改，就修改实体。\n颗粒状修改的实体可以通过完成版本比较当前数据集（this.data更新之前），与以前的数据集（oldData）。")]),t._v(" "),a("p",[t._v("A-Frame会.update()在组件生命周期的开始以及每次组件数据发生更改时（例如，由于setAttribute）而调用。更新处理程序通常用于this.data修改实体。更新处理程序可以通过其第一个参数访问组件数据的先前状态。我们可以使用组件的先前数据来准确说明更改了哪些属性以进行粒度更新。")]),t._v(" "),a("p",[t._v("例如，可见组件update设置实体的可见性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'visible'，{ / **    * this.el是实体元素。   * this.el.object3D是实体的three.js对象。   * this.data是组件的一个或多个属性。   * /   更新：function（oldData） { this .el.object3D.visible = this .data;   } // ... }）;\n")])])]),a("h3",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" .remove ()")]),t._v(" "),a("p",[t._v(".remove ()每当组件与实体分离时，都会调用。实体可以调用组件的remove处理程序：")]),t._v(" "),a("p",[t._v("通过将该组件从实体中移除时removeAttribute。\n当实体从场景分离时（例如removeChild）。\n该remove处理程序通常用于：")]),t._v(" "),a("p",[t._v("删除，撤消或清除组件对实体的所有修改。\n分离事件侦听器。\n例如，当移除灯光组件时，该灯光组件将移除它先前在实体上设置的灯光对象，从而将其从场景中移除。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'light'，{ // ...   remove：function（\n  \n） { this .el.removeObject3D（'light'）;   } // ... }）;\n")])])]),a("h3",{attrs:{id:"tick-time-timedelta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-time-timedelta"}},[t._v("#")]),t._v(" .tick (time, timeDelta)")]),t._v(" "),a("p",[t._v(".tick ()在场景的渲染循环的每个刻度或帧上调用。场景将调用组件的tick处理程序：")]),t._v(" "),a("p",[t._v("在渲染循环的每个帧上。\n每秒约60至120次。\n如果实体或场景未暂停（例如，检查器处于打开状态）。\n实体是否仍附加到场景。\n该tick处理程序通常用于：")]),t._v(" "),a("p",[t._v("在每个帧或间隔上连续修改实体。\n轮询条件。\n为tick处理程序提供场景的全局运行时间（以毫秒为单位time），以及自上一帧以来的时间差（以毫秒为单位timeDelta）。这些可用于插值或仅tick在设定的时间间隔运行 处理程序的一部分。")]),t._v(" "),a("p",[t._v("例如，被跟踪的控件组件将进行控制器的动画处理，更新控制器的位置和旋转以及检查按钮是否按下。")]),t._v(" "),a("p",[t._v("AFRAME.registerComponent（'tracked-controls'，{ // ...   tick：function（time，timeDelta） { this .updateMeshAnimation（）; this .updatePose（）; this .updateButtons（）;   } // ... } ）;")]),t._v(" "),a("p",[t._v(".tock (time, timeDelta, camera)\n与tick方法相同，但是在渲染场景之后调用。")]),t._v(" "),a("p",[t._v("该tock处理器用于运行之前它推入耳机像后处理效果，需要进入现场绘制逻辑。")]),t._v(" "),a("p",[t._v(".pause ()\n.pause ()在实体或场景暂停时调用。实体可以调用组件的pause处理程序：")]),t._v(" "),a("p",[t._v("在删除组件之前，在remove调用处理程序之前。\n当实体通过暂停时Entity.pause ()。\n当场景暂停时Scene.pause ()（例如，打开检查器）。\n该pause处理程序通常用于：")]),t._v(" "),a("p",[t._v("删除事件监听器。\n消除任何动态行为的机会。\n例如，声音组件将暂停声音并删除将在事件上播放声音的事件侦听器：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'sound'，{ // ...   pause：function（\n  \n） { 这个 .pauseSound（）; 这个 .removeEventListener（）;   } // ... }）;\n")])])]),a("h3",{attrs:{id:"play"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#play"}},[t._v("#")]),t._v(" .play ()")]),t._v(" "),a("p",[t._v(".play ()在实体或场景恢复时调用。实体可以调用组件的play处理程序：")]),t._v(" "),a("p",[t._v("首次附加组件时，在update调用处理程序之后。\n当实体暂停但随后使用恢复时Entity.play ()。\n场景暂停时，然后按恢复Scene.play ()。\n该play处理程序通常用于：")]),t._v(" "),a("p",[t._v("添加事件监听器。\n例如，声音组件将播放声音并更新将在事件上播放声音的事件侦听器：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'sound'，{ // ...   play：function（\n  \n） { 如果（此 .data.autoplay）{ 此 .playSound（）; } 这个 .updateEventListener（）;   } // ... }）;\n    \n")])])]),a("h3",{attrs:{id:"updateschema-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateschema-data"}},[t._v("#")]),t._v(" .updateSchema (data)")]),t._v(" "),a("p",[t._v(".updateSchema ()如果定义了，则会在每次更新时调用，以检查是否需要动态修改架构。")]),t._v(" "),a("p",[t._v("该updateSchema处理程序通常用于：")]),t._v(" "),a("p",[t._v("动态更新或扩展架构，通常取决于属性的值。\n例如，几何图形组件检查primitive 属性是否更改，以确定是否为其他类型的几何图形更新模式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'geometry'，{ // ...   updateSchema：（newData）{ 如果（newData.primitive！== 此 .data.primitive）{ 此 .extendSchema（GEOMETRIES [newData.primitive] .schema）;     }   } // ... }）;\n  \n")])])]),a("h2",{attrs:{id:"定义属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义属性"}},[t._v("#")]),t._v(" 定义属性")]),t._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" dependencies")]),t._v(" "),a("p",[t._v("dependencies如果组件依赖一个或多个其他组件，则允许控制组件初始化的顺序。dependencies数组中指定的组件名称将在初始化当前组件之前从左到右初始化。如果依赖项具有其他依赖项组件，则这些其他依赖项组件将以相同的方式排序：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//最后初始化。\nAFRAME.registerComponent（'a'，{ \n  依赖项：[ 'b' ] \n}）;\n\n//初始化第二个。\nAFRAME.registerComponent（'b'，{ \n  依赖项：[ 'c' ] \n}）;\n\n//首先初始化。\nAFRAME.registerComponent（'c'，{}）;\n")])])]),a("h3",{attrs:{id:"multiple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple"}},[t._v("#")]),t._v(" multiple")]),t._v(" "),a("p",[t._v("该multiple标志允许组件在实体上具有其自身的多个实例。由于默认multiple设置为false，因此实体只能有一个组件的单个实例。例如，一个实体只能有一个几何组件。")]),t._v(" "),a("p",[t._v("但是，如果组件将multiple设置为true，则该组件可以具有多个实例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'foo'，{ \n  multiple：true，// ... }）;\n  \n")])])]),a("p",[t._v("在DOM中，我们可以通过提供双下划线和ID（__"),a("ID",[t._v("）后缀来区分组件实例。例如，要附加声音组件的多个实例：")])],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("< a- 场景 > < a-entity 声音 = “ src：url（sound.mp3）” sound__beep = “ src：url（beep.mp3）” sound__boop = “ src：url（boop.mp3）”   > </ a-实体 > </ a-场景 >\n  \n")])])]),a("p",[t._v('从组件生命周期处理程序方法中，我们可以使用区分组件实例this.id。如果组件实例设置为 foo__bar，this.id则将为"bar"：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'foo'，{ \n  multiple：true，\n\n  更新：功能（） { console .log（'此组件实例具有ID'，此 .id）;   } }）;\n")])])]),a("p",[t._v("如果我们正在做a setObject3D()，我们通常会想使用this.attrName。如果组件实例设置为foo__bar，this.attrName则将为 foo__bar。这为我们提供了一个名称空间和一个ID，用于object3D在实体的上设置object3DMap：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'foo'，{ \n  multiple：true，\n\n  更新：功能（} { //使用`foo__bar`作为键来设置一个object3D。这个 .el.setObject3D（这个 .attrName，新的 THREE.Mesh（））;   } }）;\n")])])]),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" events")]),t._v(" "),a("p",[t._v("该events对象允许方便地定义事件处理程序，这些事件处理程序在组件的生命周期中的适当时间进行绑定并自动附加和分离：")]),t._v(" "),a("ul",[a("li",[t._v("附于 .play()")]),t._v(" "),a("li",[t._v("于.pause()和.remove()\n使用events确保事件处理程序在实体或场景暂停或组件分离时正确地自行清理。如果组件的事件处理程序是手动注册的并且未正确分离，则即使该组件不再存在，事件处理程序仍然可以触发。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'foo'，{ \n  事件：{ \n    单击：函数（evt） { 控制台 .log（'已单击此实体！'）；此 .el.setAttribute（'material'，'color'，'red'） ;     }   } }）;\n")])])]),a("h2",{attrs:{id:"组件原型方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件原型方法"}},[t._v("#")]),t._v(" 组件原型方法")]),t._v(" "),a("h3",{attrs:{id:"flushtodom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flushtodom"}},[t._v("#")]),t._v(" .flushToDOM ()")]),t._v(" "),a("p",[t._v("为了节省字符串化的CPU时间，A-Frame仅在调试模式下更新实际DOM中组件的序列化表示形式。调用 flushToDOM ()将手动序列化组件的数据并更新DOM：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("document .querySelector（'[geometry]'）.components.geometry.flushToDOM（）;\n")])])]),a("p",[t._v("阅读有关组件到DOM序列化的更多信息。")]),t._v(" "),a("h2",{attrs:{id:"访问组件的成员和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问组件的成员和方法"}},[t._v("#")]),t._v(" 访问组件的成员和方法")]),t._v(" "),a("p",[t._v("可以从.components对象通过实体访问组件的成员和方法 。从实体的组件映射中查找组件，然后我们就可以访问组件的内部。考虑以下示例组件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AFRAME.registerComponent（'foo'，{ \n  init：function（） { this .bar = 'baz' ;   }，\n    \n\n\n  qux：函数（） { // ...   } }）;\n    \n")])])]),a("p",[t._v("让我们访问bar成员和qux方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var fooComponent = document .querySelector（'[foo]'）.components.foo; \n控制台 .log（fooComponent.bar）; \nfooComponent.qux（）;\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);