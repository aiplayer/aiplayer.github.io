(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{287:function(t,n,a){"use strict";a.r(n);var e=a(28),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通讯"}},[t._v("#")]),t._v(" 通讯")]),t._v(" "),a("p",[t._v("在本指南中，我们将学习如何使用消息与嵌入在网页中的nunu应用程序进行通信，以及如何使用DOM元素来控制应用程序内容。")]),t._v(" "),a("p",[t._v("为了与主机网页进行通信，nunuStudio使用消息模型系统，其中主机可以将消息发送到nunuStudio应用程序，反之亦然，该消息是使用回调函数接收的。要了解有关通信的更多信息，请查看NunuApp API文档。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/nunustudio/video/schema.png",alt:"alt text"}})]),t._v(" "),a("h2",{attrs:{id:"讯息沟通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讯息沟通"}},[t._v("#")]),t._v(" 讯息沟通")]),t._v(" "),a("p",[t._v("为了与正在运行的应用程序进行通信，使用了消息通信模型。应用程序或页面可以相互发送消息，这些消息将被用于处理它们之间发送的信息的回调捕获。")]),t._v(" "),a("p",[t._v("也可以在同一页面上运行的应用程序之间进行通信，为实现此目的，我们可以将应用程序对象从页面传递给应用程序。")]),t._v(" "),a("h2",{attrs:{id:"页面到应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面到应用"}},[t._v("#")]),t._v(" 页面到应用")]),t._v(" "),a("p",[t._v("要将消息从网页发送到运行的nunuStudio应用程序，请使用app.sendData（data）方法。假设nunuApp与发件人位于同一JS上下文中，则数据可以是任何东西，它可以发送甚至引用对象。")]),t._v(" "),a("p",[t._v("为了在应用程序内部接收这些消息，我们需要创建一个onAppData回调并发送数据，我们使用存储在程序对象中的sendDataApp函数。下面的代码是一个简单的示例，当nunuStudio应用接收数据时会在文本对象上显示数据，并且每次按P键nunuStudio应用都会向主机网页发送测试消息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var text, counter;\n\nfunction initialize()\n{\n\ttext = scene.getObjectByName("text");\n\tcounter = 0;\n}\n\nfunction update()\n{\n\tif(Keyboard.keyJustPressed(Keyboard.P))\t\n\t{\n\t\tprogram.sendDataApp("test" + counter);\n\t}\n}\n\nfunction onAppData(data)\n{\n\ttext.setText(data);\n}\n')])])]),a("p",[t._v("##应用到页面\n从nunu应用程序向网页发送数据之前，我们需要定义一个onMessageReceive回调以处理收到的消息。可以如下所示定义此回调，每次从nunuStudio应用程序向网页发送消息时，都会调用此函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//Send data to app\napp.sendData("test text");\n\n//Callback to receive data sent from the app\napp.setOnDataReceived(function(data)\n{\n\tconsole.log("Received message from nunuStudio app", data);\n});\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);