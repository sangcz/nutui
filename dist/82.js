/*! NutUI v1.2.6 Mon May 21 2018 14:26:35 GMT+0800 (中国标准时间) */
webpackJsonpnutui([82],{1027:function(i,e,t){var m=t(1122);"string"==typeof m&&(m=[[i.i,m,""]]),m.locals&&(i.exports=m.locals);t(3)("ffdd66f4",m,!0,{})},1122:function(i,e,t){(i.exports=t(2)()).push([i.i,"",""])},1218:function(i,e){i.exports={render:function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("nut-demoheader",{attrs:{name:i.$route.name}}),i._v(" "),t("p",[i._v("开启webp时，如果浏览器支持，组件尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg。")]),i._v(" "),t("div",{staticStyle:{width:"100%",overflow:"hidden"}},[t("nut-image",{attrs:{imgSrc:"//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg",webp:!0}}),i._v(" "),t("p",[i._v("自定义loading占位图（模拟低速网络环境可看到）")]),i._v(" "),t("div",{staticStyle:{width:"100%",overflow:"hidden"}},[t("nut-image",{attrs:{imgSrc:"//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg",loadingImg:"//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif"}})],1)],1),i._v(" "),t("p",[i._v("自定义加载失败时的占位图")]),i._v(" "),t("div",{staticStyle:{width:"100%",overflow:"hidden"}},[t("nut-image",{attrs:{imgSrc:"//img10.360buyimg.com/test",errorImg:"//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"}})],1),i._v(" "),t("p",[i._v("事件")]),i._v(" "),t("div",{staticStyle:{width:"100%",overflow:"hidden"}},[t("nut-image",{attrs:{imgSrc:"http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg",webp:!0},on:{"image-load-complete":i.imgLoadComplete}})],1),i._v(" "),t("div",[i._v("加载结果："+i._s(i.rst))])],1)},staticRenderFns:[]}},806:function(i,e,t){var m=t(1)(t(899),t(1218),function(i){t(1027)},null,null);i.exports=m.exports},899:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-image \nimgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" \n:webp="true">\n</nut-image>',demo2:'<nut-image \nimgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" \nloadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif">\n</nut-image>',demo3:'<nut-image \nimgSrc="//img10.360buyimg.com/test" \nerrorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg">\n</nut-image>',demo4:'<nut-image \nimgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" \n:webp="true" \n@image-load-complete="imgLoadComplete">\n</nut-image>',rst:""}},methods:{imgLoadComplete:function(i,e){this.rst=e}}}}});