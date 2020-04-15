(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{340:function(t,e,v){"use strict";v.r(e);var _=v(28),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"几何组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#几何组件"}},[t._v("#")]),t._v(" 几何组件")]),t._v(" "),v("p",[t._v("几何部件为实体提供基本形状。该primitive 属性定义一般形状。在计算机图形学中，几何图元是不可简化的基本形状。通常定义材料组件以在形状旁边提供外观以创建完整的网格。")]),t._v(" "),v("h2",{attrs:{id:"基本属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本属性"}},[t._v("#")]),t._v(" 基本属性")]),t._v(" "),v("p",[t._v("每个几何类型将具有以下属性：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("buffer")]),t._v(" "),v("td",[t._v("将几何体转换为BufferGeometry以减少内存使用量，但是却难以操作。")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("primitive")]),t._v(" "),v("td",[t._v("几何名称（例如，下面列出的几何之一）。确定几何类型以及其他可用属性。")]),t._v(" "),v("td",[t._v("box")])]),t._v(" "),v("tr",[v("td",[t._v("skipCache")]),t._v(" "),v("td",[t._v("禁用从缓存中检索共享几何对象。")]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("h2",{attrs:{id:"内置几何"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置几何"}},[t._v("#")]),t._v(" 内置几何")]),t._v(" "),v("h3",{attrs:{id:"box"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" box")]),t._v(" "),v("p",[t._v("盒子的几何形状定义了盒子（即，任何四边形，而不仅仅是立方体）。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: box; width: 1; height: 1; depth: 1"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("X轴上的边的宽度（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("Y轴两侧的高度（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("depth")]),t._v(" "),v("td",[t._v("Z轴上侧面的深度（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsDepth")]),t._v(" "),v("td",[t._v("z轴上分割的面数")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsHeight")]),t._v(" "),v("td",[t._v("y轴上的分割面数")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentWidth")]),t._v(" "),v("td",[t._v("x轴上分割的面数")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"circle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#circle"}},[t._v("#")]),t._v(" circle")]),t._v(" "),v("p",[t._v("圆的几何形状将创建平坦的二维圆。这些可以是完整的圈子或部分的圈子（例如吃豆人）。请注意，由于圆是平坦的，因此如果我们未side: double在material组件上指定，则A框架将仅渲染圆的单个面。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: circle; radius: 1" material="side: double"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("圆的半径（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segments")]),t._v(" "),v("td",[t._v("构成圆形的三角形数量，例如披萨片。细分数量越多，圆圈越圆。")]),t._v(" "),v("td",[t._v("32")])]),t._v(" "),v("tr",[v("td",[t._v("thetaStart")]),t._v(" "),v("td",[t._v("第一段的起始角度。可用于定义局部圆。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("thetaLength")]),t._v(" "),v("td",[t._v("圆心角（以度为单位）。默认为360，表示完整的圆圈。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("h4",{attrs:{id:"thetalength和thetastart属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#thetalength和thetastart属性"}},[t._v("#")]),t._v(" thetaLength和thetaStart属性")]),t._v(" "),v("p",[t._v("以度为单位，thetaStart定义圆或弧的起始 thetaLength位置以及圆或弧的终止位置。如果要制作( 形状，可以从半圆开始，将长度定义为半圆。我们可以用做到这一点thetaStart: 180; thetaLength: 180。或者，如果我们想做一个)形状，我们可以做thetaStart: 0; thetaLength: 180。")]),t._v(" "),v("p",[t._v("有用的情况可能是动画thetaStart以创建旋转效果，或动画thetaLength以基于熔断器的光标进行视觉反馈。")]),t._v(" "),v("h3",{attrs:{id:"cone"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cone"}},[t._v("#")]),t._v(" cone")]),t._v(" "),v("p",[t._v("圆锥几何是具有不同顶部和底部半径的圆柱几何。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: cone; radiusBottom: 1; radiusTop: 0.1"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("圆锥体的高度。")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("openEnded")]),t._v(" "),v("td",[t._v("圆锥体的末端是开放的（true）还是有盖的（f​​alse）。")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("radiusBottom")]),t._v(" "),v("td",[t._v("圆锥底端的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("radiusTop")]),t._v(" "),v("td",[t._v("圆锥顶端的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsRadial")]),t._v(" "),v("td",[t._v("圆锥体圆周周围的分段面数。")]),t._v(" "),v("td",[t._v("36")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsHeight")]),t._v(" "),v("td",[t._v("沿圆锥高度的面的行数。")]),t._v(" "),v("td",[t._v("18")])]),t._v(" "),v("tr",[v("td",[t._v("thetaStart")]),t._v(" "),v("td",[t._v("起始角度（度）。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("thetaLength")]),t._v(" "),v("td",[t._v("中心角（度）。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("h3",{attrs:{id:"cylinder"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cylinder"}},[t._v("#")]),t._v(" cylinder")]),t._v(" "),v("p",[t._v("圆柱体的几何形状可以像可口可乐™罐那样在传统意义上创建圆柱体，但是它也可以定义形状，例如管子和曲面。")]),t._v(" "),v("p",[t._v("我们可以使用高度和半径创建一个基本圆柱体：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: cylinder; height: 3; radius: 2"></a-entity>\n\n')])])]),v("p",[t._v("我们可以通过使圆柱体开口来创建管，该圆柱体将除去圆柱体的顶部和底部表面，从而使内部可见。然后，我们需要一种双面材料来正确渲染：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('\x3c!-- Tube --\x3e\n<a-entity geometry="primitive: cylinder; openEnded: true" material="side: double"></a-entity>\n\n')])])]),v("p",[t._v("我们可以通过指定圆弧来创建曲面thetaLength，以使圆柱体不会完全弯曲，使圆柱体为开放式，然后使材质为双面：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('\x3c!-- Curved surface --\x3e\n<a-entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180"\n          material="side: double"></a-entity>\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("圆柱体的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("圆柱体的高度。")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsRadial")]),t._v(" "),v("td",[t._v("圆柱周围的分段面数。")]),t._v(" "),v("td",[t._v("36")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsHeight")]),t._v(" "),v("td",[t._v("沿着圆柱体高度的面的行数。")]),t._v(" "),v("td",[t._v("18")])]),t._v(" "),v("tr",[v("td",[t._v("openEnded")]),t._v(" "),v("td",[t._v("圆柱体的端部是开放的（true）还是有盖的（f​​alse）。")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("thetaStart")]),t._v(" "),v("td",[t._v("起始角度（度）。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("thetaLength")]),t._v(" "),v("td",[t._v("中心角（度）。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("p",[t._v("我们可以通过更改径向段（即边）的数量来创建棱镜。例如，要制作一个六角棱镜：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('\x3c!-- Hexagonal prism --\x3e\n<a-entity geometry="primitive: cylinder; segmentsRadial: 6"></a-entity>\n\n')])])]),v("h3",{attrs:{id:"dodecahedron"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dodecahedron"}},[t._v("#")]),t._v(" dodecahedron")]),t._v(" "),v("p",[t._v("十二面体的几何形状创建具有十二个相等大小的面的多边形。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: dodecahedron; radius: 2"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("十二面体的半径（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"octahedron"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#octahedron"}},[t._v("#")]),t._v(" octahedron")]),t._v(" "),v("p",[t._v("八面体几何形状创建具有八个等边三角形面的多边形。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: octahedron"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("四面体的半径（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"plane"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#plane"}},[t._v("#")]),t._v(" plane")]),t._v(" "),v("p",[t._v("平面几何图形创建一个平坦的表面。由于平面是平坦的，因此除非我们side: double在material组件上指定，否则A框架将仅渲染平面的单个面。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: plane; height: 10; width: 10" material="side: double"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("沿X轴的宽度。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("沿Y轴的高度。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsHeight")]),t._v(" "),v("td",[t._v("y轴上的分割面数")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentWidth")]),t._v(" "),v("td",[t._v("x轴上分割的面数")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"ring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ring"}},[t._v("#")]),t._v(" ring")]),t._v(" "),v("p",[t._v("环的几何形状会形成一个扁平的环，例如CD。由于环是平的，除非我们指定的A型框架将仅呈现环的单个面上side: double的material部件。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: ring; radiusInner: 0.5; radiusOuter: 1"\n          material="side: double"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radiusInner")]),t._v(" "),v("td",[t._v("环内孔的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("radiusOuter")]),t._v(" "),v("td",[t._v("环外边缘的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("SegmentsTheta")]),t._v(" "),v("td",[t._v("段数。较高的数字表示戒指会更圆。")]),t._v(" "),v("td",[t._v("32")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsPhi")]),t._v(" "),v("td",[t._v("由segmentTheta定义的每个面内的三角形数量。")]),t._v(" "),v("td",[t._v("8")])]),t._v(" "),v("tr",[v("td",[t._v("thetaStart")]),t._v(" "),v("td",[t._v("起始角度（度）。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("thetaLength")]),t._v(" "),v("td",[t._v("中心角（度）。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("h3",{attrs:{id:"sphere"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sphere"}},[t._v("#")]),t._v(" sphere")]),t._v(" "),v("p",[t._v("球体几何形状创建球体（例如，球）。我们可以创建一个基本领域：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: sphere; radius: 2"></a-entity>\n\n')])])]),v("p",[t._v("我们可以通过指定水平角和面的数量来创建多面体和抽象形状：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: sphere; segmentsWidth: 2; segmentsHeight: 8"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("球体的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("segmentWidth")]),t._v(" "),v("td",[t._v("水平线段数。")]),t._v(" "),v("td",[t._v("18")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsHeight")]),t._v(" "),v("td",[t._v("垂直线段数。")]),t._v(" "),v("td",[t._v("36")])]),t._v(" "),v("tr",[v("td",[t._v("phiStart")]),t._v(" "),v("td",[t._v("水平起始角度。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("phiLength")]),t._v(" "),v("td",[t._v("水平扫角大小。")]),t._v(" "),v("td",[t._v("360")])]),t._v(" "),v("tr",[v("td",[t._v("thetaStart")]),t._v(" "),v("td",[t._v("垂直起始角度。")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("thetaLength")]),t._v(" "),v("td",[t._v("垂直扫角大小。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("h3",{attrs:{id:"tetrahedron"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tetrahedron"}},[t._v("#")]),t._v(" tetrahedron")]),t._v(" "),v("p",[t._v("四面体几何形状创建具有四个三角形面的多边形。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: tetrahedron; radius: 2"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("四面体的半径（以米为单位）。")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"torus"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#torus"}},[t._v("#")]),t._v(" torus")]),t._v(" "),v("p",[t._v("圆环的几何形状创建了一个甜甜圈或弯曲的管形状：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('\x3c!-- Half donut --\x3e\n<a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.5; arc: 180"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("圆环外边缘的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("radiusTubular")]),t._v(" "),v("td",[t._v("管的半径。")]),t._v(" "),v("td",[t._v("0.2")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsRadial")]),t._v(" "),v("td",[t._v("沿管端圆周的段数。较高的数字表示管将更圆。")]),t._v(" "),v("td",[t._v("36")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsTubular")]),t._v(" "),v("td",[t._v("沿管面圆周的段数。较高的数字表示管将更圆。")]),t._v(" "),v("td",[t._v("32")])]),t._v(" "),v("tr",[v("td",[t._v("arc")]),t._v(" "),v("td",[t._v("中心角。")]),t._v(" "),v("td",[t._v("360")])])])]),t._v(" "),v("h3",{attrs:{id:"torusknot"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#torusknot"}},[t._v("#")]),t._v(" torusKnot")]),t._v(" "),v("p",[t._v("圆环结的几何形状创建了椒盐脆饼的形状。一对互质整数， p和q定义椒盐脆饼的特殊形状。如果p和q不是互质的，那么结果将是一个环面链接：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: torusKnot; p: 3; q:7"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("包含圆环结的半径。")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("radiusTubular")]),t._v(" "),v("td",[t._v("圆环结管的半径。")]),t._v(" "),v("td",[t._v("0.2")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsRadial")]),t._v(" "),v("td",[t._v("沿管端圆周的段数。较高的数字表示管将更圆。")]),t._v(" "),v("td",[t._v("36")])]),t._v(" "),v("tr",[v("td",[t._v("segmentsTubular")]),t._v(" "),v("td",[t._v("沿管面圆周的段数。较高的数字表示管将更圆。")]),t._v(" "),v("td",[t._v("32")])]),t._v(" "),v("tr",[v("td",[t._v("p")]),t._v(" "),v("td",[t._v("几何体绕其旋转对称轴缠绕多少次。")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("q")]),t._v(" "),v("td",[t._v("几何图形在圆环内部绕一个圆圈缠绕了多少次。")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("h3",{attrs:{id:"triangle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#triangle"}},[t._v("#")]),t._v(" triangle")]),t._v(" "),v("p",[t._v("三角形几何图形创建一个平面二维三角形。由于三角形是平坦的，因此除非我们在组件上指定，否则A-Frame将仅呈现一个带有vertexA，的单面vertexB，并 vertexC以逆时针方向出现在屏幕side: double上material。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: triangle" material="side: double"></a-entity>\n\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("vertexA")]),t._v(" "),v("td",[t._v("三个顶点之一的坐标")]),t._v(" "),v("td",[t._v("0 0.5 0")])]),t._v(" "),v("tr",[v("td",[t._v("vertexB")]),t._v(" "),v("td",[t._v("三个顶点之一的坐标")]),t._v(" "),v("td",[t._v("-0.5 -0.5 0")])]),t._v(" "),v("tr",[v("td",[t._v("vertexC")]),t._v(" "),v("td",[t._v("三个顶点之一的坐标")]),t._v(" "),v("td",[t._v("0.5 -0.5 0")])])])]),t._v(" "),v("h2",{attrs:{id:"注册自定义几何"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册自定义几何"}},[t._v("#")]),t._v(" 注册自定义几何")]),t._v(" "),v("p",[t._v("我们可以使用AFRAME.registerGeometry并创建作为的实例的对象来注册自己的几何THREE.Geometry。A-Frame使用此API注册所有内置几何。这是A-Frame注册box几何的方式：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("AFRAME.registerGeometry('box', {\n  schema: {\n    depth: {default: 1, min: 0},\n    height: {default: 1, min: 0},\n    width: {default: 1, min: 0},\n    segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},\n    segmentsWidth: {default: 1, min: 1, max: 20, type: 'int'},\n    segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'}\n  },\n\n  init: function (data) {\n    this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);\n  }\n});\n\n")])])]),v("p",[t._v("与注册组件一样，我们提供一个名称，一个 将显示几何属性的模式以及生命周期方法。然后，我们需要创建几何并 this.geometry通过init生命周期方法进行设置。")]),t._v(" "),v("p",[t._v("当几何图形组件将其primitive属性设置为自定义几何图形名称时，我们可以在几何图形组件上设置自定义几何图形的属性。假设我们注册了一个自定义几何：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("AFRAME.registerGeometry('example', {\n  schema: {\n    vertices: {\n      default: ['-10 10 0', '-10 -10 0', '10 -10 0'],\n    }\n  },\n\n  init: function (data) {\n    var geometry = new THREE.Geometry();\n    geometry.vertices = data.vertices.map(function (vertex) {\n        var points = vertex.split(' ').map(function(x){return parseInt(x);});\n        return new THREE.Vector3(points[0], points[1], points[2]);\n    });\n    geometry.computeBoundingBox();\n    geometry.faces.push(new THREE.Face3(0, 1, 2));\n    geometry.mergeVertices();\n    geometry.computeFaceNormals();\n    geometry.computeVertexNormals();\n    this.geometry = geometry;\n  }\n});\n\n")])])]),v("p",[t._v("然后，我们可以在HTML中使用该自定义几何：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<a-entity geometry="primitive: example; vertices: 1 1 -3, 3 1 -3, 2 2 -3"></a-entity>\n\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);