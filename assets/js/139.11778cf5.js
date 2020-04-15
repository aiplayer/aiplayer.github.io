(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{268:function(t,a,e){"use strict";e.r(a);var n=e(28),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"水"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水"}},[t._v("#")]),t._v(" 水")]),t._v(" "),e("p",[t._v("在本教程中，我们将对材料进行更多的实验，并学习如何使用纹理和cubecamera对象创建简单的3D水效果（创建反射）")]),t._v(" "),e("p",[t._v("让我们首先创建一个包含一些对象的基本场景和一个用于创建水的平面，我们必须将平面几何形状配置为具有多个细分，稍后我们将需要它来使用材质创建波浪效果。")]),t._v(" "),e("p",[t._v("在我们的场景允许创建新材料之后，我们可以在本教程中使用标准的，物理的或phong的材料。让我们将此物质命名为水，这种物质将用于我们的水面。您可以根据需要添加一些颜色和透明度。\n"),e("img",{attrs:{src:"/nunustudio/water/material.jpg",alt:"alt text"}}),t._v("\n要创建水效果，我们可以使用水表面法线贴图，我们可以在网上找到一些这样的贴图，这是我在本教程中使用的贴图。我们可以将法线贴图用作展位法线贴图和位移贴图，通过将法线贴图作为位移贴图附加，只有一个颜色通道将用于在几何图形的表面中产生位移，从而产生波浪状效果，使我们的水看起来均匀更好。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/nunustudio/water/normal.jpeg",alt:"alt text"}})]),t._v(" "),e("p",[t._v("我们上面添加的纹理是静态的，下面的代码可用于为纹理设置动画，它使水法线贴图在x和y轴上移动。为了使其正常工作，我们必须将纹理重复设置为“重复”模式，否则将无法工作。为了启用顶点动画，我们可以将材质和纹理的needsUpdate属性设置为true。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var normal;\n\nfunction initialize()\n{\n\tnormal = program.getTextureByName("normal");\n}\n\nfunction update()\n{\n\tnormal.offset.x += 0.002;\n\tnormal.offset.y += 0.002;\n}\n')])])]),e("p",[t._v("现在我们有了一个像水的表面，但是它仍然不能反映周围的环境，要添加它，我们可以创建一个cubecamera对象。将对象添加到场景之后，我们必须检查自动更新，以便不必手动更新cubecamera。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var water, cube;\n\nfunction initialize()\n{\n\t...\n\n\twater = program.getMaterialByName("water");\n\tcube = scene.getObjectByName("cubecamera");\n\twater.envMap = cube.cube;\n}\n')])])]),e("p",[t._v("现在我们已经准备就绪，我添加了一个立方体贴图以使我们的场景看起来更完整，并添加了一个OrbitControl对象来进行摄像机移动。要在编辑器中尝试此示例，可以下载项目文件或在Web编辑器上将其打开。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/nunustudio/water/run.png",alt:"alt text"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);