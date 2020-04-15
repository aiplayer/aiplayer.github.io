(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{352:function(t,a,v){"use strict";v.r(a);var e=v(28),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),v("p",[t._v("链接组件在体验之间进行连接，并允许在VR网页之间进行遍历。通过事件激活后，链接组件会将用户发送到其他页面，就像普通的网页重定向一样。要跨页面维护VR，必须满足以下条件：")]),t._v(" "),v("p",[t._v("浏览器是最新的WebVR规范，并实现了该vrdisplayactivate事件。\n目标网页侦听window [ vrdisplayactivate]事件并进入VR。默认情况下，A-Frame体验的行为方式是这样的。\n目前，in-VR导航仅由Firefox桌面，Oculus Browser，Samsung Internet和Supermedium实现。")]),t._v(" "),v("h2",{attrs:{id:"链接用户体验"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链接用户体验"}},[t._v("#")]),t._v(" 链接用户体验")]),t._v(" "),v("p",[t._v("VR中的链接可以是任何东西，例如抓住物体，在我们的头上放一些东西，点击一些东西甚至吃东西！我们提供链接的默认实现，作为门户或窗口，使用360°图片缩略图预览目标。")]),t._v(" "),v("p",[t._v("随着我们在内容和浏览器中进行迭代和实验，链接遍历的UX将继续完善。")]),t._v(" "),v("h2",{attrs:{id:"控制项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制项"}},[t._v("#")]),t._v(" 控制项")]),t._v(" "),v("p",[t._v("链接组件作为门户的默认UX可以使用游标或控制器进行交互。没有在A-Frame核心中直接提供此功能，但是A-Frame示例中有一个链接控制组件。该组件显示工具提示，并提供用于窥视和进入门户的按钮映射。")]),t._v(" "),v("h2",{attrs:{id:"例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[t._v("#")]),t._v(" 例")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-scene>\n  <a-assets>\n    <img id="homeThumbnail" src="home.jpg">\n  </a-assets>\n\n  <a-entity link="href: index.html; title: My Homepage; image: #homeThumbnail"></a-entity>\n</a-scene>\n')])])]),v("p",[t._v("我们还提供了具有不同语法的链接原语：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-link href="index.html" title="My Homepage" image="#homeThumbnail"></a-link>\n\n')])])]),v("h2",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("backgroundColor")]),t._v(" "),v("td",[t._v("门户的内部（背景）颜色。")]),t._v(" "),v("td",[t._v("red")])]),t._v(" "),v("tr",[v("td",[t._v("borderColor")]),t._v(" "),v("td",[t._v("门户的边框颜色。")]),t._v(" "),v("td",[t._v("white")])]),t._v(" "),v("tr",[v("td",[t._v("hightlighted")]),t._v(" "),v("td",[t._v("布尔值可切换链接突出显示颜色。")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("HighlightColor")]),t._v(" "),v("td",[t._v("突出显示时的边框颜色。")]),t._v(" "),v("td",[t._v("'＃24CAFF'")])]),t._v(" "),v("tr",[v("td",[t._v("href")]),t._v(" "),v("td",[t._v("链接指向的目标URL。")]),t._v(" "),v("td",[t._v("''")])]),t._v(" "),v("tr",[v("td",[t._v("image")]),t._v(" "),v("td",[t._v("在门户中将360°图像用作场景预览。可以是"),v("img"),t._v("元素或URL 的选择器。")]),t._v(" "),v("td",[t._v("''")])]),t._v(" "),v("tr",[v("td",[t._v("on")]),t._v(" "),v("td",[t._v("要监听的事件将触发链接遍历。")]),t._v(" "),v("td",[t._v('"click"')])]),t._v(" "),v("tr",[v("td",[t._v("peekMode")]),t._v(" "),v("td",[t._v("360°图像是否完全展开以进行预览。")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("链接上显示的文字。该href如果没有定义使用或页面URL。")]),t._v(" "),v("td",[t._v("''")])]),t._v(" "),v("tr",[v("td",[t._v("titleColor")]),t._v(" "),v("td",[t._v("链接上显示的文本的颜色。")]),t._v(" "),v("td",[t._v("white")])]),t._v(" "),v("tr",[v("td",[t._v("visualAspectEnabled")]),t._v(" "),v("td",[t._v("是否启用门户的默认外观。如果我们要实现自己的链接遍历模式或形式，则设置为false。")]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("h2",{attrs:{id:"手动导航"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手动导航"}},[t._v("#")]),t._v(" 手动导航")]),t._v(" "),v("p",[t._v("要手动导航，请使用window.locationAPI。请参阅有关navigation的StackOverflow问题。例如：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("window.location.href = 'https://supermedium.com/supercraft/';\n// or window.location.replace\n\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);