(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644e7ad0"],{"1b9f":function(t,e,i){"use strict";var n=i("cacd"),s=i.n(n);s.a},"28a5":function(t,e,i){"use strict";var n=i("aae3"),s=i("cb7c"),r=i("ebd6"),a=i("0390"),o=i("9def"),c=i("5f1b"),l=i("520a"),d=i("79e5"),u=Math.min,f=[].push,h="split",m="length",p="lastIndex",v=4294967295,g=!d(function(){RegExp(v,"y")});i("214f")("split",2,function(t,e,i,d){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(s,t,e);var r,a,o,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,h=void 0===e?v:e>>>0,g=new RegExp(t.source,d+"g");while(r=l.call(g,s)){if(a=g[p],a>u&&(c.push(s.slice(u,r.index)),r[m]>1&&r.index<s[m]&&f.apply(c,r.slice(1)),o=r[0][m],u=a,c[m]>=h))break;g[p]===r.index&&g[p]++}return u===s[m]?!o&&g.test("")||c.push(""):c.push(s.slice(u)),c[m]>h?c.slice(0,h):c}:"0"[h](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,n):b.call(String(s),i,n)},function(t,e){var n=d(b,t,this,e,b!==i);if(n.done)return n.value;var l=s(t),f=String(this),h=r(l,RegExp),m=l.unicode,p=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),y=new h(g?l:"^(?:"+l.source+")",p),_=void 0===e?v:e>>>0;if(0===_)return[];if(0===f.length)return null===c(y,f)?[f]:[];var x=0,w=0,C=[];while(w<f.length){y.lastIndex=g?w:0;var P,S=c(y,g?f:f.slice(w));if(null===S||(P=u(o(y.lastIndex+(g?0:w)),f.length))===x)w=a(f,w,m);else{if(C.push(f.slice(x,w)),C.length===_)return C;for(var T=1;T<=S.length-1;T++)if(C.push(S[T]),C.length===_)return C;w=x=P}}return C.push(f.slice(x)),C}]})},"2d1a":function(t,e,i){},"3b2b":function(t,e,i){var n=i("7726"),s=i("5dbc"),r=i("86cc").f,a=i("9093").f,o=i("aae3"),c=i("0bfb"),l=n.RegExp,d=l,u=l.prototype,f=/a/g,h=/a/g,m=new l(f)!==f;if(i("9e1e")&&(!m||i("79e5")(function(){return h[i("2b4c")("match")]=!1,l(f)!=f||l(h)==h||"/a/i"!=l(f,"i")}))){l=function(t,e){var i=this instanceof l,n=o(t),r=void 0===e;return!i&&n&&t.constructor===l&&r?t:s(m?new d(n&&!r?t.source:t,e):d((n=t instanceof l)?t.source:t,n&&r?c.call(t):e),i?this:u,l)};for(var p=function(t){t in l||r(l,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},v=a(d),g=0;v.length>g;)p(v[g++]);u.constructor=l,l.prototype=u,i("2aba")(n,"RegExp",l)}i("7a56")("RegExp")},"3e2c":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});i("3b2b"),i("28a5");function n(t,e){if(!s(t,e)){var i=t.className.split(" ");i.push(e),t.className=i.join(" ")}}function s(t,e){var i=new RegExp("(^|\\s)"+e+"(\\s|$)");return i.test(t.className)}function r(t,e,i){var n="data-",s=n+e;return i?t.setAttribute(s,i):t.getAttribute(s)}},"42ba":function(t,e,i){"use strict";i.d(e,"b",function(){return d}),i.d(e,"a",function(){return u}),i.d(e,"c",function(){return f});var n=i("5176"),s=i.n(n),r=i("795b"),a=i.n(r),o=i("da71"),c=i("bc3a"),l=i.n(c);function d(){var t="/api/getCarousel";return console.log("url in getRecommend is : "+t),l.a.get(t).then(function(t){return console.log("res.data = "+t.data),a.a.resolve(t.data)})}function u(){var t="/api/getDiscList",e=s()({},o["b"],{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return l.a.get(t,{params:e}).then(function(t){return a.a.resolve(t.data)})}function f(t){var e="/api/getCdInfo",i=s()({},o["b"],{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return l.a.get(e,{params:i}).then(function(t){return a.a.resolve(t.data)})}},"7c58":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"recommend",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[i("div",[t.recommends.length?i("div",{staticClass:"slider-wrapper"},[i("div",{staticClass:"slider-content"},[i("slider",{ref:"slider"},t._l(t.recommends,function(e,n){return i("div",{key:n},[i("a",{attrs:{href:e.linkUrl}},[i("img",{attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}),0)],1)]):t._e(),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),i("ul",t._l(t.discList,function(e,n){return i("li",{key:n,staticClass:"item",on:{click:function(i){return t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}),0)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1)]),i("router-view")],1)},s=[],r=i("cebc"),a=i("1cb8"),o=i("42ba"),c=i("da71"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),i("div",{staticClass:"dots"},t._l(t.dots,function(e,n){return i("span",{key:n,staticClass:"dot",class:{active:t.currentPageIndex===n}})}),0)])},d=[],u=(i("c5f6"),i("1fba")),f=i("3e2c"),h={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(!1),t._initDots(),t._initSlider(),t.autoPlay&&t._play()},20),window.addEventListener("resize",function(){t.slider&&t.slider.enabled&&(clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.slider.isInTransition?t._onScrollEnd():t.autoPlay&&t._play(),t.refresh()},60))})},activated:function(){this.slider.enable();var t=this.slider.getCurrentPage().pageX;this.slider.goToPage(t,0,0),this.currentPageIndex=t,this.autoPlay&&this._play()},deactivated:function(){this.slider.disable(),clearTimeout(this.timer)},beforeDestroy:function(){this.slider.disable(),clearTimeout(this.timer)},methods:{refresh:function(){this.slider&&(this._setSliderWidth(!0),this.slider.refresh())},_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,n=0;n<this.children.length;n++){var s=this.children[n];Object(f["a"])(s,"slider-item"),s.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new u["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.slider.on("scrollEnd",this._onScrollEnd),this.slider.on("touchend",function(){t.autoPlay&&t._play()}),this.slider.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_onScrollEnd:function(){this.currentPageIndex=this.slider.getCurrentPage().pageX,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.interval)}}},m=h,p=(i("82ff"),i("2877")),v=Object(p["a"])(m,l,d,!1,null,"3201c8fe",null),g=v.exports,b=i("e9fc"),y=i("510f"),_=i("2f62"),x={mixins:[y["a"]],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},activated:function(){var t=this;setTimeout(function(){t.$refs.slider&&t.$refs.slider.refresh()},20)},methods:Object(r["a"])({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.recommend.style.bottom=e,this.$refs.scroll.refresh()},loadImage:function(){var t=this;this.checkloaded||(this.checkloaded=!0,setTimeout(function(){t.$refs.scroll.refresh()},20))},selectItem:function(t){this.$router.push({path:"/recommend/".concat(t.dissid)}),this.setDisc(t)},_getRecommend:function(){var t=this;Object(o["b"])().then(function(e){console.log(e),e.code===c["a"]&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;Object(o["a"])().then(function(e){e.code===c["a"]&&(t.discList=e.data.list)})}},Object(_["d"])({setDisc:"SET_DISC"})),components:{Slider:g,Scroll:b["a"],Loading:a["a"]}},w=x,C=(i("1b9f"),Object(p["a"])(w,n,s,!1,null,"e2181cf2",null));e["default"]=C.exports},"82ff":function(t,e,i){"use strict";var n=i("2d1a"),s=i.n(n);s.a},aae3:function(t,e,i){var n=i("d3f4"),s=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},cacd:function(t,e,i){}}]);
//# sourceMappingURL=chunk-644e7ad0.1cc37eb2.js.map