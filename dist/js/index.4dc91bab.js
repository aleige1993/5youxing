(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={index:0},o=[];function i(e){return c.p+"js/"+({coupon:"coupon",fill:"fill",main:"main",mine:"mine",order:"order"}[e]||e)+"."+{coupon:"3ad9c91c",fill:"a57e841b",main:"317ecfec",mine:"beda6d31",order:"79225b03"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0736":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".bottom[data-v-5aea881f]{position:fixed;left:0;bottom:0;width:100%}",""])},"365b":function(e,t,n){"use strict";var r=n("ce2f"),a=n.n(r);a.a},"3de1":function(e,t,n){"use strict";n.r(t),n.d(t,"stringAddStar",function(){return i}),n.d(t,"layerOpen",function(){return o}),n.d(t,"formatTimeCompatibleIos",function(){return a}),n.d(t,"timestampToTime",function(){return r});n("a481");function r(e,t){var n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1<10?"0".concat(n.getMonth()+1):n.getMonth()+1,o=n.getDate()<10?"0".concat(n.getDate()):n.getDate(),i=n.getHours()<10?"0".concat(n.getHours()):n.getHours(),c=n.getMinutes()<10?"0".concat(n.getMinutes()):n.getMinutes(),s=n.getSeconds()<10?"0".concat(n.getSeconds()):n.getSeconds();return"h"===t?"".concat(r,"-").concat(a,"-").concat(o," ").concat(i,":00:00"):"d"===t?"".concat(r,"-").concat(a,"-").concat(o):"m"===t?"".concat(r,"-").concat(a,"-").concat(o," ").concat(i,":").concat(c,":00"):"M"===t?"".concat(r,"-").concat(a):"".concat(r,"-").concat(a,"-").concat(o," ").concat(i,":").concat(c,":").concat(s)}function a(e){return e.replace(/-/g,"/")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";layer.open({content:e,skin:"msg",time:3,tips:[2]})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"****").concat(e.substring(t+n,e.length))}},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"user",function(){return Be}),n.d(r,"search",function(){return Fe});n("6b54"),n("a481"),n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),o=n("d847"),i=n.n(o),c=n("795b"),s=n.n(c),u=n("cebc"),l=n("bc3a"),f=n.n(l),p=n("4328"),d=n.n(p),m=n("f499"),h=n.n(m),g=n("7618"),b=window.localStorage,v="youx5",y="youx5User",x="youx5Token";function w(e){b.setItem(v,e)}function j(e,t){b.setItem(e,"object"===Object(g["a"])(t).toLowerCase()?h()(t):t)}function S(e){j(x,e)}function O(){return b.getItem(x)}function k(e){var t=b.getItem(e);try{return t?JSON.parse(t):{}}catch(n){return{}}}function _(){return k(y)||null}function M(e){j(y,e),e.token&&S(e.token)}var T=3e4,C={},$={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},E={timeout:T,headers:C,method:"get"},H={timeout:T,headers:$,method:"post"},D=function(){},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{code:0,data:{}||[],message:"",success:!0,count:0};console.log(e);var t=e.data;return console.log(t),"0000"===t.code?t.data:t.message},R=function(e){return e?"网络错误":new s.a(function(){})},q={url:"",method:"get",baseURL:"",headers:{},timeout:3e4,withCredentials:!0,responseType:"json",responseEncoding:"utf8",validateStatus:function(e){return e>=200&&e<300}};f.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var I=Object(u["a"])({},q,E,{params:{}}),P=Object(u["a"])({},q,H,{data:{},transformRequest:[function(e){var t=d.a.stringify(e);return t}]});f.a.interceptors.request.use(function(e){D(),console.log(e);var t=O(),n=e.headers;return Object(u["a"])({},e,{headers:Object(u["a"])({},n,{token:t})})},function(e){return s.a.reject(e)}),f.a.interceptors.response.use(function(e){return A(e)},function(e){return s.a.reject(e)});var Y=function(e,t){return f()(Object(u["a"])({},I,{url:e,params:t})).then(function(e){return e},function(e){return R(e)})},U=function(e,t){return f()(Object(u["a"])({},P,{url:e,data:t})).then(function(e){return e},function(e){return R(e)})},B=function(e,t,n){return f()(Object(u["a"])({url:e,data:t},n))},F=function(e){e.axios$=B,window.axios=B,i()(e.prototype,{$axios:{get:function(){return B}},$getData:{get:function(){return Y}},$postData:{get:function(){return U}}})},L=F;a["a"].use(L);var z,J,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},W=[],V=(n("7c55"),n("2877")),X={},G=Object(V["a"])(X,N,W,!1,null,null,null),K=G.exports,Q=n("8c4f"),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container flex-column"},[n("Logo"),n("div",{staticClass:"bottom-border row"},[n("van-field",{attrs:{placeholder:"请输入手机号码",clearable:""},on:{input:e.inputHandler},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e.isSms?e._e():n("div",{staticClass:"bottom-border row"},[n("van-field",{attrs:{type:"password",placeholder:"请输入密码",clearable:""},on:{input:e.inputHandler},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.isSms?n("div",{staticClass:"bottom-border row"},[n("van-field",{attrs:{center:"",placeholder:"请输入短信验证码",clearable:""},on:{input:e.inputHandler},model:{value:e.sms,callback:function(t){e.sms=t},expression:"sms"}},[n("van-button",{attrs:{slot:"button",size:"small",plain:"",type:"info"},slot:"button"},[e._v("发送验证码")])],1)],1):e._e(),n("van-button",{staticClass:"common-btn",attrs:{type:"info",size:"large"},on:{click:e.login}},[e._v("登 录")]),n("div",{staticClass:"flex-space gray"},[n("span",{on:{click:e.changeHandler}},[e._v(e._s(e.loginWay))]),n("span",{on:{click:e.register}},[e._v("新用户注册")])])],1)},ee=[],te=(n("96cf"),n("3b8d")),ne=n("bd86"),re=(n("e7e5"),n("d399")),ae=(n("66b9"),n("b650")),oe=(n("7f7f"),n("be7f"),n("565f")),ie=n("69a0"),ce=n.n(ie),se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("5ee5"),alt:"五优行"}})])}],le={},fe=le,pe=(n("365b"),Object(V["a"])(fe,se,ue,!1,null,"087f58a9",null)),de=pe.exports,me={components:(z={Logo:de},Object(ne["a"])(z,oe["a"].name,oe["a"]),Object(ne["a"])(z,ae["a"].name,ae["a"]),Object(ne["a"])(z,re["a"].name,re["a"]),z),data:function(){return{mobile:"",password:"",sms:"",isSms:!1,from:this.$router.currentRoute.query.redirect||""}},computed:{loginWay:function(){return this.isSms?"密码登录":"验证码登录"}},methods:{register:function(){location.href="/register.html"},changeHandler:function(){this.isSms?this.sms="":this.password="",this.isSms=!this.isSms},inputHandler:function(){},login:function(){var e=Object(te["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t={mobile:this.mobile.trim()},n=null,!this.isSms){e.next=13;break}if(this.mobile.trim()&&this.sms.trim()){e.next=6;break}return this.$toast("手机号或验证码不能为空"),e.abrupt("return");case 6:return t.verifyCode=this.sms.trim(),this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),e.next=10,this.$store.dispatch("loginBySms",t);case 10:n=e.sent,e.next=21;break;case 13:if(this.mobile.trim()&&this.password.trim()){e.next=16;break}return this.$toast("手机号或密码不能为空"),e.abrupt("return");case 16:return t.password=ce.a.hash(this.password.trim()),this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),e.next=20,this.$store.dispatch("loginByPwd",t);case 20:n=e.sent;case 21:if(console.log(n),this.$toast.clear(),"string"!==typeof n){e.next=26;break}return this.$toast(n),e.abrupt("return");case 26:this.$router.replace(this.from?this.from:"/main/car");case 27:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){console.log(this.$router)}},he=me,ge=Object(V["a"])(he,Z,ee,!1,null,null,null),be=ge.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("router-view"),n("div",{staticClass:"bottom"},[n("van-tabbar",{attrs:{fixed:""},on:{change:e.barChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"shop",to:"/main/car"}},[e._v("租车")]),n("van-tabbar-item",{attrs:{icon:"manager",to:"/main/mine"}},[e._v("我的")])],1)],1)],1)},ye=[],xe=(n("a52c"),n("2ed4")),we=(n("537a"),n("ac28")),je={components:(J={},Object(ne["a"])(J,we["a"].name,we["a"]),Object(ne["a"])(J,xe["a"].name,xe["a"]),J),data:function(){return{active:this.$store.state.tabIndex}},methods:{barChange:function(e){this.active=e,this.$store.dispatch("setTabIndex",e)}}},Se=je,Oe=(n("f267"),Object(V["a"])(Se,ve,ye,!1,null,"5aea881f",null)),ke=Oe.exports;a["a"].use(Q["a"]);var _e=new Q["a"]({mode:"hash",base:"/",routes:[{path:"/login",name:"login",component:be},{path:"/main",name:"selectCar",component:ke,children:[{path:"car",name:"selectCar",component:function(){return n.e("main").then(n.bind(null,"003b"))}},{path:"mine",name:"mine",component:function(){return n.e("mine").then(n.bind(null,"0a4e"))},meta:{requiresAuth:!0},children:[]}],redirect:"/main/car"},{path:"/create",name:"createOrder",component:function(){return n.e("order").then(n.bind(null,"4fa1"))},meta:{requiresAuth:!0}},{path:"/orderlist",name:"orderlist",title:"我的租车订单",component:function(){return n.e("order").then(n.bind(null,"bf4b"))},meta:{requiresAuth:!0}},{path:"/couponlist",name:"couponlist",title:"我的优惠券",component:function(){return n.e("coupon").then(n.bind(null,"93c1"))},meta:{requiresAuth:!0}},{path:"/fillinfo",name:"fillinfo",title:"完善信息",component:function(){return n.e("fill").then(n.bind(null,"6b88"))},meta:{requiresAuth:!0}},{path:"/",redirect:"/main"}]});_e.beforeEach(function(e,t,n){var r=_();if(e.matched.some(function(e){return e.meta.requiresAuth})){if(!r.memberNo)return void n({path:"/login",query:{redirect:e.fullPath}});n()}else n()});var Me=_e,Te=n("2f62"),Ce=n("b054"),$e=n.n(Ce);function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mobile:"",password:""};return U("user/login",e)}function He(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mobile:"",verifyCode:""};return U("user/smslogin",e)}var De,Ae="SAVE_STATE",Re="SAVE_USER",qe="SET_USER",Ie="SET_SEARCH",Pe="SET_TABINDEX",Ye={loginByPwd:function(){var e=Object(te["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Ee(n);case 3:return a=e.sent,r(qe,a),r(Re),r(Pe,0),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),loginBySms:function(){var e=Object(te["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,He(n);case 3:return a=e.sent,r(qe,a),r(Re),r(Pe,0),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),setTabIndex:function(e,t){var n=e.commit;n(Pe,t)}},Ue=Ye,Be=(n("386d"),function(e){return e.user}),Fe=function(e){return e.search},Le=(De={},Object(ne["a"])(De,qe,function(e,t){e.user=null!==t?Object(u["a"])({},e.user,t):null}),Object(ne["a"])(De,Ie,function(e,t){e.search=t}),Object(ne["a"])(De,Ae,function(e){w(e)}),Object(ne["a"])(De,Re,function(e){M(e.user||{})}),Object(ne["a"])(De,Pe,function(e,t){e.tabIndex=t}),De),ze=Le,Je=_(),Ne={user:Je||{},search:"",tabIndex:0},We=Ne;a["a"].use(Te["a"]);var Ve=!1,Xe=new Te["a"].Store({actions:Ue,getters:r,state:We,mutations:ze,strict:Ve,plugins:Ve?[$e()({collapsed:!1,filter:function(){return!0},transformer:function(e){return e.subTree},mutationTransformer:function(e){return e.type},logger:console})]:[]}),Ge=n("3de1");a["a"].config.productionTip=!1,a["a"].filter("dateFormate",function(e,t){var n=e;"string"===typeof n&&(n=new Date(n));var r=t,a=["日","一","二","三","四","五","六"];return r=r.replace(/yyyy|YYYY/,n.getFullYear()),r=r.replace(/yy|YY/,n.getYear()%100>9?(n.getYear()%100).toString():"0".concat(n.getYear()%100)),r=r.replace(/MM/,n.getMonth()>8?(n.getMonth()+1).toString():"0".concat(n.getMonth()+1)),r=r.replace(/M/g,n.getMonth()+1),r=r.replace(/w|W/g,a[n.getDay()]),r=r.replace(/dd|DD/,n.getDate()>9?n.getDate().toString():"0".concat(n.getDate())),r=r.replace(/d|D/g,n.getDate()),r=r.replace(/hh|HH/,n.getHours()>9?n.getHours().toString():"0".concat(n.getHours())),r=r.replace(/h|H/g,n.getHours()),r=r.replace(/mm/,n.getMinutes()>9?n.getMinutes().toString():"0".concat(n.getMinutes())),r=r.replace(/m/g,n.getMinutes()),r=r.replace(/ss|SS/,n.getSeconds()>9?n.getSeconds().toString():"0".concat(n.getSeconds())),r=r.replace(/s|S/g,n.getSeconds()),r}),a["a"].prototype.$Tools=Ge,new a["a"]({router:Me,store:Xe,render:function(e){return e(K)}}).$mount("#app")},"5ee5":function(e,t,n){e.exports=n.p+"img/youx5.acc262ba.png"},7585:function(e,t,n){var r=n("ba60");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("edc8f156",r,!0,{sourceMap:!1,shadowMode:!1})},"7c55":function(e,t,n){"use strict";var r=n("7585"),a=n.n(r);a.a},a45b:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".logo[data-v-087f58a9]{text-align:center;margin:1.06667rem 0}.logo img[data-v-087f58a9]{width:2.66667rem;height:2.66667rem}",""])},af78:function(e,t,n){var r=n("0736");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("0278ee56",r,!0,{sourceMap:!1,shadowMode:!1})},ba60:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#app{height:100vh;font-size:.37333rem}#app .container{height:100%}#app .container .row{margin:.26667rem 0}#app .container .bottom-border{border-bottom:.02667rem solid #ddd}#app .container input{height:.8rem}#app .container .common-btn{margin:.8rem 0}#app .flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;padding:.53333rem}#app .flex-column,#app .flex-space{display:-webkit-box;display:-ms-flexbox;display:flex}#app .flex-space{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#app .gray{color:#ccc}",""])},ce2f:function(e,t,n){var r=n("a45b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("4c5bfcd4",r,!0,{sourceMap:!1,shadowMode:!1})},f267:function(e,t,n){"use strict";var r=n("af78"),a=n.n(r);a.a}});
//# sourceMappingURL=index.4dc91bab.js.map