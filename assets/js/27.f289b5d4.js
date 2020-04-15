(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{319:function(a,t,e){"use strict";e.r(t);var r=e(28),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"aframe安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aframe安装"}},[a._v("#")]),a._v(" AFrame安装")]),a._v(" "),e("p",[a._v("本安装部分提供了几种开始使用A-Frame的方法，尽管大多数方法不需要任何实际安装，因为A-Frame主要是HTML和JavaScript。")]),a._v(" "),e("h2",{attrs:{id:"浏览器中的代码编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的代码编辑器"}},[a._v("#")]),a._v(" 浏览器中的代码编辑器")]),a._v(" "),e("p",[a._v("最快的方法是从浏览器中开始播放。")]),a._v(" "),e("h3",{attrs:{id:"使用glitch编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用glitch编码"}},[a._v("#")]),a._v(" 使用Glitch编码")]),a._v(" "),e("p",[a._v("Glitch提供了一个在线代码编辑器，可以即时部署和托管网站。编辑器支持前端和后端代码以及多个文件和目录。小故障让我们可以重新混合（即复制）现有项目，并使它们成为我们自己的，立即宿主和部署更改，以供大家查看。")]),a._v(" "),e("p",[a._v("点击这个A-Frame项目中的Remix，在index.HTML中处理HTML，并查看你的网站在每次更改时的实时发布！例如，基本的A-Frame故障发布在aframe.Glitch.me上，但我们将提供您自己的自定义URL名称。")]),a._v(" "),e("p",[a._v("以下是一些其他的a-frame起步例子：")]),a._v(" "),e("ul",[e("li",[a._v("aframe-aincraft - 飞机例子.")]),a._v(" "),e("li",[a._v("aframe-gallery - 360° 图片展览.")]),a._v(" "),e("li",[a._v("aframe-registry - 各种组件例子.")]),a._v(" "),e("li",[a._v("aframe-vaporwave - 一幅怀旧的未来场景.")]),a._v(" "),e("li",[a._v("networked-aframe - 多用户.")])]),a._v(" "),e("h3",{attrs:{id:"其它编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它编辑器"}},[a._v("#")]),a._v(" 其它编辑器")]),a._v(" "),e("ul",[e("li",[a._v("CodePen")])]),a._v(" "),e("h2",{attrs:{id:"本地开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发"}},[a._v("#")]),a._v(" 本地开发")]),a._v(" "),e("h3",{attrs:{id:"使用本地服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用本地服务器"}},[a._v("#")]),a._v(" 使用本地服务器")]),a._v(" "),e("p",[a._v("对于下面的选项，我们应该使用本地服务器开发项目，以便正确地提供文件。本地服务器的选项包括：")]),a._v(" "),e("p",[a._v("下载Mongoose应用程序并从与HTML文件相同的目录中打开它。")]),a._v(" "),e("p",[a._v("在终端中运行python-m SimpleHTTPServer（或者python-m http.server for python 3），与您的HTML文件位于同一目录下。")]),a._v(" "),e("p",[a._v("在终端上运行npm install-g live server&&live server，与HTML文件位于同一目录下。")]),a._v(" "),e("p",[a._v("一旦运行服务器，我们就可以在浏览器中使用服务器运行的本地URL和端口（例如http://localhost:8000）打开项目。尽量不要使用不提供域的file://协议打开项目；绝对和相对URL可能不起作用。")]),a._v(" "),e("h3",{attrs:{id:"下载源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[a._v("#")]),a._v(" 下载源码")]),a._v(" "),e("p",[a._v("github上的源码包包括：")]),a._v(" "),e("ul",[e("li",[a._v("一个简单的HTML文件，链接到"),e("RouterLink",{attrs:{to:"/aframe/aframe-base-installation.html"}},[a._v("当前版本")])],1),a._v(" "),e("li",[a._v("一个本地开发环境")]),a._v(" "),e("li",[a._v("一个部署流程")])]),a._v(" "),e("h3",{attrs:{id:"直接使用预编译js文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接使用预编译js文件"}},[a._v("#")]),a._v(" 直接使用预编译JS文件")]),a._v(" "),e("p",[a._v("可以使用JS引用，直接引用已经编译好的JS：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<head>\n  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"><\/script>\n</head>\n')])])]),e("h3",{attrs:{id:"通过npm安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过npm安装"}},[a._v("#")]),a._v(" 通过npm安装")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install aframe\n\n")])])]),e("p",[a._v("在应用程序中使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("require('aframe')\n\n")])])]),e("p",[a._v("如果使用npm安装，并使用angular前端技术，还可以使用如下的命令进行初始化一个场景模板：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g angle && angle initscene\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);