(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{270:function(t,e,a){"use strict";a.r(e);var r=a(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),a("p",[t._v("在本指南中，我们将探讨如何在nunuStudio中导入和使用视频文件。视频文件可用作对象的纹理。")]),t._v(" "),a("p",[t._v("要加载新的视频文件，请选择“纹理”，然后选择“视频”纹理，这将首先创建两个内容，即包含选择的视频文件的视频资源，以及使用视频资源显示文件的视频纹理。或者，您可以将视频文件拖放到资源管理器或直接拖放到对象。")]),t._v(" "),a("h2",{attrs:{id:"外部档案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部档案"}},[t._v("#")]),t._v(" 外部档案")]),t._v(" "),a("p",[t._v("可以从其URL加载外部文件。当使用外部文件时，如果它们是不同的域，请不要忘记确保服务器具有适当的CORS配置。下面的代码演示了如何从外部URL创建VideoTexture以及如何将其用作默认材质的纹理。")]),t._v(" "),a("p",[t._v("您可以在Video资源和VideoStream资源之间进行选择，主要区别在于Video会将整个视频文件预加载到内存中，而VideoStream则随视频进行加载。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\tvar texture = new VideoTexture(new VideoStream("sample.mp4"));\n\tvar material = program.getMaterialByName("default");\n\tmaterial.emissiveMap = texture;\n\tmaterial.emissive.setHex(0xFFFFFF);\n}\n')])])]),a("p",[t._v("要在编辑器中尝试此示例，可以下载项目文件或在Web编辑器上将其打开。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/nunustudio/video/run.png",alt:"alt text"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);