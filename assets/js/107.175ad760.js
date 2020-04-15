(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{327:function(a,e,t){"use strict";t.r(e);var s=t(28),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"ar-js-在网络上获得跨浏览器增强现实的最简单方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ar-js-在网络上获得跨浏览器增强现实的最简单方法"}},[a._v("#")]),a._v(" AR.js —在网络上获得跨浏览器增强现实的最简单方法")]),a._v(" "),t("h2",{attrs:{id:"只是另一个ar库？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只是另一个ar库？"}},[a._v("#")]),a._v(" 只是另一个AR库？")]),a._v(" "),t("p",[a._v("对于那些尚不了解的人，AR.js是一个很棒的项目，在Github上拥有超过1万颗星，这使使用Web技术开发增强现实应用变得轻松而有趣。借助几行简单的Javascript和一些3D建模，几乎可以立即开发出增强现实网络应用程序。\n其最有趣的特征包括：\n性能，在我使用两年的手机上可达到〜60 FPS（！）\n兼容性，它是跨浏览器的，可在支持webgl和webrtc的每个电话浏览器（显然是台式机）上运行（因此，基本上所有iOS和11以上的Android手机和iPhone都可以）\n简单起见，它是不同框架的包装，使Web AR开发非常容易。它建立在a-frame和three.js之上。\n因此，我们不需要Hololens，纸板或昂贵的电话；我们只需要访问一个AR.js网络应用，即可体验AR。\n那怎么可能？好吧，事实证明AR.js可与标记一起使用（并非总是如此，但如果我们想跨浏览器，则必须使用标记）。")]),a._v(" "),t("h2",{attrs:{id:"标记物"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记物"}},[a._v("#")]),a._v(" 标记物")]),a._v(" "),t("p",[a._v("标记是一种简化的二维码。在AR.js上，我们为特定的标记定义了特定的3D场景，因此，当相机识别出标记时，网络应用会在其顶部显示3D模型。同样，标记可能包含qr码。")]),a._v(" "),t("h2",{attrs:{id:"模式标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式标记"}},[a._v("#")]),a._v(" 模式标记")]),a._v(" "),t("p",[a._v("AR.js的一个重要功能是可以使用自定义标记，默认类型为'pattern'。我对图案标记的大小，形状的局限性进行了一些研究。我了解到：\n标记的最大分辨率为16x16像素")]),a._v(" "),t("ul",[t("li",[a._v("它们必须是正方形的")]),a._v(" "),t("li",[a._v("它们不能有白色/透明区域，只能是浅灰色（例如，＃F0F0F0）")]),a._v(" "),t("li",[a._v("它们不能包含颜色，只能是黑色和浅灰色")]),a._v(" "),t("li",[a._v("它们必须包含简单的文本，例如一个字母，一个数字或一个符号。")])]),a._v(" "),t("p",[a._v("您可以使用此在线工具生成您的自定义标记。如果分析“ .patt”输出文件，则会发现给定的图像是用一组字符描述的。因此，为了获得良好的效果，最好将不同的图像用于不同的标记，避免图像太复杂或包含单词的图像。\n要记住的另一个重要方面是在标记的“背景”和周围环境之间形成高对比度。例如，如果标记在黑色背景上带有浅灰色符号，则如果将标记打印并放置在黑色的桌子上或在黑屏上显示，相机将难以识别标记。")]),a._v(" "),t("h2",{attrs:{id:"条码标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条码标记"}},[a._v("#")]),a._v(" 条码标记")]),a._v(" "),t("p",[a._v("标记也可以是条形码。它们将数字表示为符号，是在矩阵上使用微积分创建的。建议基于具有较高“汉明距离”的矩阵生成标记（请参见下表），以便相机可以更好地识别它们。矩阵还定义了可能的标记的最大数量（例如，“ AR_MATRIX_CODE_3x3_PARITY65”矩阵可以生成32个不同的条形码标记）。\n请记住，如果可能的话，最好也避免条形码标记中出现白色/透明色（这在条形码标记中并未得到确认，但这是基于经验的）。\n这是我在以下示例中使用的在线条形码标记生成器。\n我正在向您展示AR.js文档和博客中的一些基本代码，以及一些变通方法，因为当前关于自定义标记存在一些未解决的问题。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<!doctype HTML>\n<html>\n    <head>\n        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    </head>\n    <script src="https://aframe.io/releases/0.9.0/aframe.min.js"><\/script>\n    <script src="https://rawgit.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js"><\/script>\n    <script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"><\/script>\n    \n    <body style=\'margin : 0px; overflow: hidden;\'>\n        \x3c!-- we add detectionMode and matrixCodeType to tell AR.js to recognize barcode markers --\x3e\n        <a-scene embedded arjs=\'sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;\'>\n\n        <a-assets>\n            <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>\n        </a-assets>\n\n        <a-marker type=\'barcode\' value=\'7\'>\n            <a-box position=\'0 0.5 0\' color="yellow"></a-box>\n        </a-marker>\n\n        <a-marker id="animated-marker" type=\'barcode\' value=\'6\'>\n            <a-entity\n                gltf-model="#animated-asset"\n                scale="2">\n            </a-entity>\n        </a-marker>\n\n        \x3c!-- use this <a-entity camera> to support multiple-markers, otherwise use <a-marker-camera> instead of </a-marker> --\x3e\n        <a-entity camera></a-entity>\n        </a-scene>\n    </body>\n</html>\n')])])]),t("p",[a._v("在这个简单的HTML中，我们：\n导入库\n告诉AR.js识别由3x3矩阵生成的条形码模式（第12行）\n定义两个"),t("a-marker",[a._v("标签，每个标签由两个不同的条形码值（18和22）标识\n定义一个静态相机实体（第30行）。\n为避免出现问题，请使用上面显示的特定标签和属性。在撰写本文时（2018年4月），该示例已经生效，并且基于最新版本的AR.js（版本1.5.5）。还需要将远程URL用作模式资源，而不是相对URL。\n如果要使用自定义标记而不是条形码标记，则可以使用以前链接的工具来生成它们，而不是使用")])],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<a-marker type =“条形码” value =“ 6”（...）\n")])])]),t("p",[a._v("您可以使用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<a-marker type =“ pattern” preset =“ custom” url =“ ....”（...）\n")])])]),t("p",[a._v("其中“ url”是您的“ .patt”文件的远程绝对URL，该文件位于远程位置（例如，在HTML文件的同一存储库中）。")]),a._v(" "),t("h2",{attrs:{id:"图案详细"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图案详细"}},[a._v("#")]),a._v(" 图案详细")]),a._v(" "),t("p",[a._v("为了简化相机对标记的检测，记住一些用于创建条形码/图案标记的简单规则很有用。\n例如，为“蓝色”图像和“红色”图像生成的图案非常相似（您可以在以下图像上进行检查）；这将使检测非常困难。")]),a._v(" "),t("p",[a._v("如果图像非常复杂，检测也会失败，因为输出看起来像是一组随机字符。从我玩标记的小经验中，我发现条形码标记与图案标记一样可识别。使用后者可以进行更多的自定义，但是创建一组类似的标记也很容易，这些标记可能会使相机感到困惑，或者使复杂的图像成为标记。\n那么，AR.js值得吗？\n我回答“绝对”。它的简单性令人惊叹。基于标记的方法并不是真正的限制，而是一种非常适合各种用例的范例。标记可以显示在移动和桌面显示器上，也可以打印并悬挂在墙壁或板上。")]),a._v(" "),t("p",[a._v("正如AR.js向我们展示的那样，无需通过手机安装其他设备即可体验AR，也无需下载第三方应用（普通用户肯定会在不久后卸载，或者可能根本不会下载） ）。在网络上提供增强现实并使其轻松适用于所有人（从字面上看！）是使该技术普及化的关键。")])])}),[],!1,null,null,null);e.default=r.exports}}]);