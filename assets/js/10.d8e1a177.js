(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{293:function(a,t,e){"use strict";e.r(t);var s=e(28),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"资产管理系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资产管理系统"}},[a._v("#")]),a._v(" 资产管理系统")]),a._v(" "),e("p",[a._v("A-Frame拥有资产管理系统，该系统使我们能够将资产放置在一个位置，并预加载和缓存资产以提高性能。请注意，资产管理系统仅用于预加载资产。在运行时在实体上设置的资产可以通过指向资产的直接URL来完成。")]),a._v(" "),e("p",[a._v("传统上，游戏和丰富的3D体验会在渲染场景之前预加载其资源，例如模型或纹理。这样可以确保资产在视觉上不会丢失，这对于确保场景在渲染时不尝试获取资产的性能很有帮助。")]),a._v(" "),e("p",[a._v("我们在内部放置资产"),e("a-assets",[a._v("，"),e("a-assets",[a._v("在内部 "),e("a-scene",[a._v("。资产包括：")])],1)],1)],1),a._v(" "),e("a-asset-item",[a._v(" -其他资产，例如3D模型和材料\n"),e("p",[e("audio",[a._v(" -声音文件\n"),e("img"),a._v(" -图像纹理\n"),e("video",[a._v(" -视频纹理\n直到浏览器获取（或出错）所有资产或资产系统达到超时，场景才会渲染或初始化。")])])]),a._v(" "),e("p",[a._v("例\n我们可以"),e("a-assets",[a._v("使用选择器在我们的实体中定义资产并指向这些资产：")])],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("< a-场景 > <！-资产管理系统。- > < A-资产 > < 一个资产项目ID = “马OBJ” SRC = “horse.obj” > </ 一个资产项 > < 一个资产项目ID = “马-MTL” src = “ horse.mtl” > </ a- 资产项目 > < a-mixin id = “巨人” scale = “ 5 5 5” > </ a-mixin > <\n  \n  \n      \n      \n      \n      src = “ neigh.mp3” > </ 音频 > < img id = “广告” src = “ ad.png” > < 视频id = “肯塔基德比” src = “ derby.mp4” > </ 视频 > </ 资产 >\n      \n      \n  \n\n  <！-场景。-> < a- 平面src = “ #advertisement” > </ a- 平面 > < a-sound src = “ #neigh” > </ a-sound > < a-entity geometry = “ primitive：plane” material = “ src：＃kentucky-derby” > </ a-entity > < a-entity mixin = “巨人” obj-model = “ obj：＃horse-obj; mtl：＃horse-mtl” > </ a-entity >\n")])])]),e("p",[a._v("场景及其实体将在初始化和渲染之前等待所有资产（直到超时）。")]),a._v(" "),e("h2",{attrs:{id:"跨域资源共享（cors）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享（cors）"}},[a._v("#")]),a._v(" 跨域资源共享（CORS）")]),a._v(" "),e("p",[a._v("由于A-Frame使用XHR获取资产，因此，浏览器安全性要求浏览器在跨域资源共享（CORS）标头的情况下为资产提供资产。否则，我们必须将资产托管在与场景相同的原始位置。")]),a._v(" "),e("p",[a._v("对于其他选项，GitHub Pages使用CORS标头提供一切。我们建议将GitHub Pages作为一个简单的部署平台。或提供设置了CORS标头的文件的另一项服务（例如Amazon S3）。")]),a._v(" "),e("p",[a._v("鉴于CORS标头 的设置，"),e("a-assets",[a._v("将自动设置 crossorigin在媒体元素的属性（如"),e("audio",[a._v("，"),e("img"),a._v("， "),e("video",[a._v("），如果它检测到的资源是不同的域。")])])])],1),a._v(" "),e("h2",{attrs:{id:"预加载音频和视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预加载音频和视频"}},[a._v("#")]),a._v(" 预加载音频和视频")]),a._v(" "),e("p",[a._v('音频和视频资产仅在设置autoplay或设置preload="auto"以下时才会阻止场景：')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("< a-场景 > < a-资产 > <！-这些不会被阻止。-> < 音频src = “ blockus.mp3” > </ 音频 > < 视频src = “ loadofblocks.mp4” > </ 视频 >\n  \n    \n     \n     \n\n    <！-这些将阻止。-> < 音频src = “ blocky.mp3” 自动播放 > </ 音频 > < 视频src = “ blockiscooking.mp4” preload = “自动” > </ 视频 > </ a- 资产 > \n</ a- 场景 >\n      \n      \n  \n\n")])])]),e("h2",{attrs:{id:"设置超时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置超时"}},[a._v("#")]),a._v(" 设置超时")]),a._v(" "),e("p",[a._v("我们可以设置一个超时时间，当到达时，场景将开始渲染，并且实体将开始初始化，而不管是否所有资产都已加载。默认超时为3秒。要设置不同的超时时间，我们只需将毫秒数传递给timeout属性：")]),a._v(" "),e("p",[a._v("如果某些资产的加载时间很长，我们可能需要设置适当的超时时间，以使用户在网络速度缓慢的情况下不必整天等待。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("< a-场景 > < a-assets 超时 = “ 10000” > <！-您必须加载直到计数10为止，否则表演将在没有您的情况下继续进行。-> < img src = “ bigimage.png” > </ a- 资产 > </ a- 场景 >\n   \n    \n")])])]),e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[a._v("#")]),a._v(" 事件")]),a._v(" "),e("p",[a._v("由于"),e("a-assets",[a._v("和"),e("a-asset-item",[a._v("是A框架中的节点，loaded当它们说完成加载时，它们将发出事件。")])],1)],1),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("活动名称")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("已加载")]),a._v(" "),e("td",[a._v("所有资产已加载，或资产超时。")])]),a._v(" "),e("tr",[e("td",[a._v("超时")]),a._v(" "),e("td",[a._v("资产超时。")])])])]),a._v(" "),e("h2",{attrs:{id:"加载单个资产的进度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载单个资产的进度"}},[a._v("#")]),a._v(" 加载单个资产的进度")]),a._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" "),e("a-asset-item")],1),a._v(" "),e("a-asset-item",[a._v("调用three.js FileLoader。我们可以使用 "),e("a-asset-item",[a._v("任何文件类型。完成后，它将data 使用文本响应设置其成员。\n"),e("table",[e("thead",[e("tr",[e("th",[a._v("活动名称")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("错误")]),a._v(" "),e("td",[a._v("提取错误。事件详细信息中包含xhr有XMLHttpRequest实例。")])]),a._v(" "),e("tr",[e("td",[a._v("进展")]),a._v(" "),e("td",[a._v("发射进度。事件详细信息中包含xhr有XMLHttpRequest实例，loadedBytes和totalBytes。")])]),a._v(" "),e("tr",[e("td",[a._v("已加载")]),a._v(" "),e("td",[a._v("所指向的资产src已加载。")])])])]),a._v(" "),e("h3",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")]),a._v(" "),e("img")]),a._v(" "),e("p",[a._v("图像是标准的DOM元素，因此我们可以侦听标准DOM事件。")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("活动名称")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("加载")]),a._v(" "),e("td",[a._v("图片已加载。")])])])]),a._v(" "),e("h3",{attrs:{id:"htmlmediaelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlmediaelement"}},[a._v("#")]),a._v(" HTMLMediaElement")]),a._v(" "),e("p",[a._v("音频和视频资产为HTMLMediaElements。浏览器触发这些元素上的特定事件。为了方便起见，在此注明：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("活动名称")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("错误")]),a._v(" "),e("td",[a._v("加载资产时出错。")])]),a._v(" "),e("tr",[e("td",[a._v("加载的数据")]),a._v(" "),e("td",[a._v("进展。")])]),a._v(" "),e("tr",[e("td",[a._v("进展")]),a._v(" "),e("td",[a._v("进展。")])])])]),a._v(" "),e("p",[a._v("A-Frame使用这些进度事件，将浏览器缓冲的时间与资产的持续时间进行比较，以检测资产何时加载。")]),a._v(" "),e("h2",{attrs:{id:"指定响应类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定响应类型"}},[a._v("#")]),a._v(" 指定响应类型")]),a._v(" "),e("p",[a._v("所提取的内容"),e("a-asset-item",[a._v("将以纯文本形式返回。如果我们要使用的其他响应类型arraybuffer，请使用"),e("a-asset-item",[a._v("的 response-type属性：")])],1)],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("< a- 资产项目 response-type = “ arraybuffer”  src = “ model.gltf” > </ a- 资产项目 >\n")])])]),e("h2",{attrs:{id:"内部运作方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内部运作方式"}},[a._v("#")]),a._v(" 内部运作方式")]),a._v(" "),e("p",[a._v("从A字架继承的每个元素"),e("a-node",[a._v("的AFRAME.ANode 原型。ANode控制加载和初始化顺序。对于一个元素进行初始化（不管它是"),e("a-assets",[a._v("，"),e("a-asset-item",[a._v("，"),e("a-scene",[a._v("，或 "),e("a-entity",[a._v("），其子女必须已经初始化。节点自下而上初始化。")])],1)],1)],1)],1)],1),a._v(" "),e("a-assets",[a._v("是一个ANode，它在加载之前会等待其子级加载。并且由于"),e("a-assets",[a._v("是的子项"),e("a-scene",[a._v("，因此场景必须有效地等待所有资产加载。我们还添加了额外的加载逻辑，以 "),e("a-entity",[a._v("使它们明确地等待"),e("a-assets",[a._v("加载（如果已定义）"),e("a-assets",[a._v("。\n"),e("a-asset-item",[a._v("用于THREE.FileLoader提取文件。three.js将返回的数据存储在中THREE.Cache。每three.js所装载继承 THREE.FileLoader，无论是一ColladaLoader，OBJLoader， ImageLoader，等他们都可以访问和了解中央的 THREE.Cache。如果A-Frame已获取文件，则A-Frame不会尝试再次获取该文件。\n"),e("p",[a._v("因此，由于我们阻止了实体在资产上的初始化，因此在实体加载时，所有资产都已被获取。只要我们定义 "),e("a-asset-item",[a._v("s，并且实体使用某种形式获取文件 THREE.FileLoader，那么缓存将自动工作。")])],1),a._v(" "),e("h2",{attrs:{id:"访问fileloader和缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问fileloader和缓存"}},[a._v("#")]),a._v(" 访问FileLoader和缓存")]),a._v(" "),e("p",[a._v("FileLoader如果我们想更仔细地听，请访问three.js ：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log（document .querySelector（'a-assets'）.fileLoader）;\n")])])]),e("p",[a._v("要访问存储XHR响应的缓存，请执行以下操作：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log（THREE.Cache）;\n")])])])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=v.exports}}]);