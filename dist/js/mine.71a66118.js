(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mine"],{"0653":function(t,e,a){"use strict";a("68ef")},"0a4e":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("van-icon",{staticClass:"item avatar",attrs:{name:"manager",size:"2em",color:"#ddd"}}),a("div",{staticClass:"item"},[t._v("电话: "+t._s(t.mobile))])],1),a("van-cell-group",[a("van-cell",{attrs:{title:"我的优惠券",icon:"coupon-o","is-link":""},on:{click:function(e){return t.gotoPage("couponlist")}}}),a("van-cell",{attrs:{title:"我的租车订单",icon:"bill-o","is-link":""},on:{click:function(e){return t.gotoPage("orderlist")}}}),t.authStatus?a("van-cell",{attrs:{title:"完善信息",icon:"contact","is-link":""},on:{click:function(e){return t.gotoPage("fillinfo")}}}):t._e(),a("van-button",{staticClass:"common-btn",attrs:{type:"info",size:"large"},on:{click:t.logout}},[t._v("退出登录")])],1)],1)},o=[],r=(a("a481"),a("bd86")),s=(a("66b9"),a("b650")),c=(a("68ef"),a("ad06")),l=a("7744"),d=(a("0653"),a("34e9")),u=(a("7f7f"),a("e7e5"),a("d399")),f={components:(n={},Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,d["a"].name,d["a"]),Object(r["a"])(n,l["a"].name,l["a"]),Object(r["a"])(n,c["a"].name,c["a"]),Object(r["a"])(n,s["a"].name,s["a"]),n),data:function(){return{mobile:this.$store.state.user.mobile,authStatus:"0"===this.$store.state.user.authStatus}},methods:{gotoPage:function(t){this.$router.push({name:t})},logout:function(){this.$store.dispatch("outLogin",this.$store.state.user.token),this.$router.replace("/login")}},mounted:function(){this.$store.dispatch("setTabIndex",1)}},b=f,m=(a("5715"),a("2877")),p=Object(m["a"])(b,i,o,!1,null,"68311d40",null);e["default"]=p.exports},"2e81":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".container .header[data-v-68311d40]{height:5.33333rem;background-color:#3984ff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff}.container .header .item[data-v-68311d40]{margin:0 .53333rem}.container .header .item.avatar[data-v-68311d40]{width:2.13333rem;height:2.13333rem;border:.05333rem solid #43986d;border-radius:1.06667rem;background-color:#fff;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container .header .item.avatar[data-v-68311d40],.container .header .item.avatar[data-v-68311d40]:before{display:-webkit-box;display:-ms-flexbox;display:flex}",""])},"34e9":function(t,e,a){"use strict";var n=a("2638"),i=a.n(n),o=a("a142"),r=a("ba31"),s=Object(o["g"])("cell-group"),c=s[0],l=s[1];function d(t,e,a,n){var o=t("div",i()([{class:[l(),{"van-hairline--top-bottom":e.border}]},Object(r["b"])(n,!0)]),[a["default"]&&a["default"]()]);return e.title?t("div",[t("div",{class:l("title")},[e.title]),o]):o}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=c(d)},5715:function(t,e,a){"use strict";var n=a("b051"),i=a.n(n);i.a},b051:function(t,e,a){var n=a("2e81");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("499e").default;i("c67e9cf2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=mine.71a66118.js.map