webpackJsonp([0],{"/pYx":function(t,e){},DSHm:function(t,e){},FYPw:function(t,e){},HFTr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("/pYx")},null,null).exports,l=s("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nx-container"},[e("header",{staticClass:"nx-header"},[this._t("nx-header")],2),this._v(" "),e("main",{staticClass:"nx-main"},[this._t("default")],2),this._v(" "),e("nav",{staticClass:"nx-nav"},[this._t("nx-nav")],2),this._v(" "),e("footer",{staticClass:"nx-footer"},[this._t("nx-footer")],2)])},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nx-header-container"},[t._m(0),t._v(" "),s("div",{staticClass:"system-status"},[s("span",{staticClass:"item"},[t._v(t._s(t.time))]),t._v(" "),s("clr-icon",{staticClass:"item",attrs:{shape:"wifi",size:"24"}}),t._v(" "),s("span",{staticClass:"item"},[t._v("100%")]),t._v(" "),s("clr-icon",{staticClass:"item",attrs:{shape:"battery",size:"24",dir:"right"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profiles"},[e("div",[this._v("you")])])}]};var c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nx-footer-container"},[e("div",{staticClass:"nx-footer-actions"},[e("label",[e("button",[this._v("+")]),this._v("Options")]),this._v(" "),e("label",[e("button",[this._v("A")]),this._v("Start")])])])}]};var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"nx-main-container"},t._l(t.apps,function(e){return s("article",{key:e.id,attrs:{item:e}},[s("header",{directives:[{name:"show",rawName:"v-show",value:e.showTitle,expression:"app.showTitle"}]},[t._v(t._s(t._f("uppercase")(e.title)))]),t._v(" "),s("div",{staticClass:"box-art"},[s("button",{on:{blur:function(s){t.toggleTitle(s,e)},focus:function(s){t.toggleTitle(s,e)}}},[s("img",{attrs:{src:e.imgUrl}})])])])}))},staticRenderFns:[]};var h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nx-nav-container"},t._l(t.navItems,function(e){return s("label",{key:e.label,attrs:{item:e}},[s("button",{on:{focus:function(s){t.toggle(s,e)},blur:function(s){t.toggle(s,e)}}},[s("clr-icon",{staticClass:"icon",class:[e.class],attrs:{size:"28",shape:e.shape}})],1),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showLabel,expression:"item.showLabel"}]},[t._v(t._s(e.label))])])}))},staticRenderFns:[]};var p={components:{NxMainLayout:s("VU/8")({name:"NxMainLayout"},o,!1,function(t){s("f81c")},null,null).exports,NxHeader:s("VU/8")({name:"NxHeader",data:function(){return{time:"time"}}},r,!1,function(t){s("QNGv")},null,null).exports,NxFooter:s("VU/8")({name:"NxFooter"},c,!1,function(t){s("FYPw")},"data-v-207f237e",null).exports,NxMain:s("VU/8")({name:"NxMain",methods:{toggleTitle:function(t,e){e.showTitle=!e.showTitle}},data:function(){return{apps:[{id:"abc",title:"Super Mario Odyssey",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/8/82063/2972168-smoboxartfinal.jpg"},{id:"3030",title:"Xenoblade Chronicles 2",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/8/82063/2978038-xc2.jpg"},{id:"57686",title:"Arms",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/8/82063/2944702-setwidth1920-hacp-aabq-wwillu01-01-r-ad-3-lr.jpg"},{id:"41355",title:"The Legend of Zelda: Breath of the Wild",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/0/3699/2920687-the+legend+of+zelda+-+breath+of+the+wild+v7.jpg"},{id:"53284",title:"Overcooked!",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/8/87790/2994870-box_oc.png"},{id:"34407",title:"Rocket League",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/8/87790/2949245-box_rleague.png"},{id:"Snipperclips: Cut It Out, Together",title:"Other",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/0/1992/2912170-sq_nswitch_snipperclips.jpg"},{id:"57685",title:"1-2-Switch",showTitle:!1,imgUrl:"https://static.giantbomb.com/uploads/scale_small/0/1992/2912138-screen+shot+2017-01-13+at+9.02.52+am.png"}]}}},u,!1,function(t){s("dR73")},"data-v-893ce25c",null).exports,NxNav:s("VU/8")({name:"NxNav",data:function(){return{navItems:[{label:"News",shape:"chat-bubble",class:"icon-red",showLabel:!1},{label:"eShop",shape:"shopping-bag",class:"icon-yellow",showLabel:!1},{label:"Album",shape:"image",class:"icon-blue",showLabel:!1},{label:"Devices",shape:"devices",class:"",showLabel:!1},{label:"System Settings",shape:"cog",class:"",showLabel:!1},{label:"Sleep Mode",shape:"power",class:"",showLabel:!1}]}},methods:{toggle:function(t,e){e.showLabel=!e.showLabel}}},h,!1,function(t){s("DSHm")},"data-v-b32ae686",null).exports},name:"NxHome"},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nx-main-layout",[e("nx-header",{attrs:{slot:"nx-header"},slot:"nx-header"}),this._v(" "),e("nx-footer",{attrs:{slot:"nx-footer"},slot:"nx-footer"}),this._v(" "),e("nx-nav",{attrs:{slot:"nx-nav"},slot:"nx-nav"}),this._v(" "),e("nx-main")],1)},staticRenderFns:[]};var d=s("VU/8")(p,m,!1,function(t){s("NX2r")},"data-v-63a76260",null).exports;a.a.use(l.a);var v=new l.a({routes:[{path:"/",name:"NxHome",component:d}]});s("HFTr"),s("4QZE"),s("AyKG");a.a.config.productionTip=!1,a.a.filter("uppercase",function(t){return t?(t=t.toString()).toUpperCase():""}),new a.a({el:"#app",router:v,components:{App:i},template:"<App/>"})},NX2r:function(t,e){},QNGv:function(t,e){},dR73:function(t,e){},f81c:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2f06246d5f2fe6ed44f7.js.map