(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"003b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-order"},[r("ul",{staticClass:"selectcar-type"},t._l(t.activityList,function(e,a){return r("li",{key:a,class:{active:e.active},on:{click:function(a){return t.selectActivity(e.type,e.saleSn,e.saleName)}}},[t._v(t._s(e.saleName))])}),0),r("div",{staticClass:"create-order-inview first"},[r("h1",{on:{click:function(e){return t.selectType("shopInfo","shopList")}}},[t._v("\n      "+t._s(t.shopInfo.corpName||"--")+"\n      "),r("img",{attrs:{src:a("471a")}})]),r("h2",[t._v("地址："+t._s(t.shopInfo.bizProvinceName||"--")+t._s(t.shopInfo.bizCityName)+t._s(t.shopInfo.bizDistrictName)+t._s(t.shopInfo.bizRoadAddr))]),r("h2",[t._v("\n      联系电话：\n      "),r("a",{attrs:{href:"tel:"+t.shopInfo.telephone}},[t._v(t._s(t.shopInfo.telephone))])])]),r("div",{staticClass:"create-order-inview second"},[r("div",{staticClass:"select-time"},[r("div",{staticClass:"datatime",attrs:{id:"startTime"},on:{click:function(e){return t.selectTime("startTime")}}},[r("p",[t._v(t._s(t._f("dateFormate")(t.formData.startTime,"YYYY-MM-dd")))]),r("p",[r("span",[t._v("\n            "+t._s(t._f("dateFormate")(t.formData.startTime,"hh:00"))+"\n            "),r("img",{attrs:{src:a("3183")}})])])]),r("div",{staticClass:"countime"},[t._v(t._s(t.countTime))]),r("div",{staticClass:"datatime",attrs:{id:"endTime"},on:{click:function(e){return t.selectTime("endTime")}}},[r("p",[t._v(t._s(t._f("dateFormate")(t.formData.endTime,"YYYY-MM-dd")))]),r("p",[r("span",[t._v("\n            "+t._s(t._f("dateFormate")(t.formData.endTime,"hh:00"))+"\n            "),r("img",{attrs:{src:a("3183")}})])])])]),"2"!==t.formData.actType?r("div",{staticClass:"car-message",on:{click:function(e){return t.selectType("carInfo","carList")}}},[r("img",{attrs:{src:t.carInfo.attach,alt:""}}),r("p",[t._v("\n        "+t._s(t.carInfo.carsName||"--")+" ￥"+t._s(t.carInfo.unitPrice||"--")+"/"+t._s(t.carInfo.unit||"--")+"\n        "),t._m(0)])]):r("div",{staticClass:"car-message"},[r("img",{attrs:{src:t.carInfo.attach,alt:""}}),r("p",[t._v("\n        "+t._s(t.carInfo.carsName||"--")+"\n        "),r("span",{staticClass:"right"},[t._v("￥"+t._s(t.carInfo.unitPrice||"--")+"/"+t._s(t.carInfo.unit||"--"))])])])]),r("div",{staticClass:"next-button",attrs:{id:"createOrder"},on:{click:t.createOrder}},[r("div",[t._v("下一步")])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"right select"},[t._v("\n          选择车型\n          "),r("img",{attrs:{src:a("471a"),alt:""}})])}],o=a("a745"),n=a.n(o);function s(t){if(n()(t))return t}var c=a("5d73"),d=a.n(c);function m(t,e){var a=[],r=!0,i=!1,o=void 0;try{for(var n,s=d()(t);!(r=(n=s.next()).done);r=!0)if(a.push(n.value),e&&a.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return a}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){return s(t)||m(t,e)||l()}a("a481");var h=a("cebc"),u=(a("96cf"),a("3b8d")),p=a("bd86"),g=(a("7f7f"),a("e7e5"),a("d399")),v=(a("5118"),a("3de1")),A={components:Object(p["a"])({},g["a"].name,g["a"]),data:function(){return{oneHourTimestamp:36e5,activityList:[],shopList:[],shopInfo:{bizCityName:"",bizDistrictName:"",bizProvinceName:"",bizRoadAddr:"",corpName:"",custMgrName:"",custMgrPhone:"",merchantNo:"",telephone:""},carInfo:{attach:"",brandName:"",carTotal:0,carsCode:"",carsName:"",id:1,modelName:"",remack:"",unit:"",unitPrice:0},carList:[],carAllList:[],placeList:[],personList:[{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"}],formData:{startTime:"",endTime:"",carCode:"",storeNo:"",memberNo:"",startPoint:"",endPoint:"",peopleNum:"",actType:"",actCode:"",actName:""},loading:!1}},computed:{countTime:function(){if("2"===this.$data.formData.actType)return"1小时";var t=null;if(this.$data.formData.endTime&&this.$data.formData.startTime){var e=new Date(Object(v["formatTimeCompatibleIos"])(this.$data.formData.endTime)).getTime(),a=new Date(Object(v["formatTimeCompatibleIos"])(this.$data.formData.startTime)).getTime();t=(e-a)/this.$data.oneHourTimestamp/24,t=t<=0?0:t}else t=0;return"".concat(t,"天")}},methods:{getStartTime:function(){var t=(new Date).getTime(),e=t+48*this.$data.oneHourTimestamp;return Object(v["timestampToTime"])(e)},initTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getStartTime();this.$data.formData.startTime=t;var e=new Date(Object(v["formatTimeCompatibleIos"])(t)).getTime();"0"===this.$data.formData.actType?this.$data.formData.endTime=Object(v["timestampToTime"])(e+48*this.$data.oneHourTimestamp):"1"===this.$data.formData.actType?this.$data.formData.endTime=Object(v["timestampToTime"])(e+96*this.$data.oneHourTimestamp):"2"===this.$data.formData.actType&&(this.$data.formData.endTime=Object(v["timestampToTime"])(e+this.$data.oneHourTimestamp))},selectTime:function(t){var e=(new Date).getFullYear(),a="startTime"===t?this.$data.formData.startTime:this.$data.formData.endTime,r="startTime"===t?Object(v["timestampToTime"])(new Date):this.$data.formData.startTime,i="hour";console.log("beginDateTime",r);var o=new mui.DtPicker({type:i,beginYear:e,endYear:e+1,beginDateTime:r,labels:["年","月","日","时"],value:Object(v["timestampToTime"])(a,"d")}),n=this;o.show(function(e){console.log(e),"startTime"===t?n.initTime(Object(v["formatTimeCompatibleIos"])("".concat(e.value,":00:00"))):(console.log(n.$data.formData.endTime),console.log("".concat(e.value,":00:00")),n.$data.formData.endTime=Object(v["formatTimeCompatibleIos"])("".concat(e.value,":00:00"))),o.dispose()})},validateTime:function(){new Date(Object(v["formatTimeCompatibleIos"])(this.getStartTime().substring(0,16))).getTime();var t=new Date(Object(v["formatTimeCompatibleIos"])(this.$data.formData.startTime.substring(0,16))).getTime(),e=new Date(Object(v["formatTimeCompatibleIos"])(this.$data.formData.endTime.substring(0,16))).getTime();return e<=t?(this.$Tools.layerOpen("结束时间不能小于或等于开始时间"),!1):!("1"===this.$data.formData.actType&&e-t<96*this.$data.oneHourTimestamp)||(this.$Tools.layerOpen("租车时间至少4天起"),!1)},selectActivity:function(t,e,a){this.$data.carList=this.$data.carList.map(function(t,e){return t.value=e,t.text="".concat(t.carsName,"(￥").concat(t.unitPrice,"/").concat(t.unit,")"),t}),this.$data.formData.actType=t,this.$data.formData.actCode=e,this.$data.formData.actName=a,this.initTime()},selectType:function(t,e){var a=this,r=new mui.PopPicker;r.setData(a.$data[e]),r.show(function(i){a[t]=a.$data[e][i[0].value],r.dispose()})},popupComfirm:function(t,e){console.log(e),this.$data[this.popupObj]=t},createOrder:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$store.state.user.memberNo,e){t.next=4;break}return this.$router.push("/login"),t.abrupt("return",!1);case 4:if("2"!==this.$data.formData.actType){t.next=11;break}if(""!==this.$data.formData.startPoint&&""!==this.$data.formData.endPoint){t.next=8;break}return this.$toast("出发地或目的地不能为空"),t.abrupt("return",!1);case 8:if(""!==this.$data.formData.peopleNum){t.next=11;break}return this.$toast("请选择出行人数"),t.abrupt("return",!1);case 11:if(this.validateTime()){t.next=13;break}return t.abrupt("return",!1);case 13:return this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),this.$data.formData.memberNo=e,this.$data.formData.storeNo=this.shopInfo.merchantNo,this.$data.formData.carCode=this.carInfo.carsCode,t.next=19,this.$postData("/store/createOrder",Object(h["a"])({},this.formData,{startTime:this.formData.startTime.replace(/\//g,"-"),endTime:this.formData.endTime.replace(/\//g,"-")}));case 19:if(a=t.sent,this.$toast.clear(),"string"!==typeof a&&a){t.next=27;break}if("/logout"!==a){t.next=25;break}return this.$store.dispatch("outLogin"),t.abrupt("return",!1);case 25:return this.$toast(a||"请求错误"),t.abrupt("return",!1);case 27:return this.$router.push({name:"createOrder",query:{orderNo:a.orderNo}}),t.abrupt("return",!1);case 29:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initData:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a,r,i,o,n,s,c,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.query.type||"0",a="",r="",this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),t.next=6,this.$postData("store/storeList");case 6:if(i=t.sent,console.log(i),this.$data.shopList=i.map(function(t,e){return t.value=e,t.text=t.corpName,t}),o=f(this.$data.shopList,1),n=o[0],this.$data.shopInfo=n,this.$toast.clear(),"string"!==typeof i&&i){t.next=15;break}return this.$toast(i||"请求错误"),t.abrupt("return");case 15:return this.shopList=i.map(function(t,e){return console.log(t),t.value=e,t.text=t.corpName,t}),this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),t.next=19,this.$postData("/store/car/carSeriesList",{storeNo:this.shopList[0].merchantNo});case 19:if(s=t.sent,this.$toast.clear(),"string"!==typeof s&&s){t.next=24;break}return this.$toast(s||"请求错误"),t.abrupt("return");case 24:this.$data.carAllList=s,this.$data.carList=s,c=f(this.$data.carList,1),d=c[0],this.$data.carInfo=d,this.selectActivity(e,a,r);case 29:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){document.body.style.backgroundColor="#eeeeee",this.initData()},beforeDestroy:function(){document.body.style.backgroundColor="#fff"},watch:{shopInfo:function(t){console.log(t)}}},b=A,T=(a("9531"),a("2877")),w=Object(T["a"])(b,r,i,!1,null,"36309cd6",null);e["default"]=w.exports},"0173":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAnCAMAAABHaIrNAAABQVBMVEUAAAD/5B8mdP0ldP4ldPwEYf8ldP4ldP4kdP///gCjunT/6R7//wAldP7/5B7/5R394yEAUv8zePF2n6S2v2v/5hv+4yH/5R4ldP7/5B0PZ///6RYpde4Xa/+FrI//+QA4e+ZXjMtvnaqVtX6vu3Dx5xx0navGyVR/oqb/5R//5h//5B8ccP7/5x7//gAbbv8kdP//6RYlc/7/6Rr/5xx4pYxyo5JAgtjOy1Tr4iX87g7u2zP54CZekL+KqJf/5B+6xF7Rz00mdP0lc/4AXv//5R0ldPz/5x4icf//5h7/5B8ldP7///8LZP4fcP8QZv0pdv5Bhv0bbf3/5hvD2f7/4iL/6RcAW/4AXv//+gDd6f///wCdwP4Xa/8Sav8AV/7/8gXs8/+91f6hw/7O4P6Zvv6Ot/5/rf5uov5Wk/4xe/3V2gwbAAAASnRSTlMAsruwiv1MYEf99Ab6tY5K/Pv49/X18JdZU/v7+vn5+ff39/f19fLx7uvMuI16d3FDQTkuJ/n49/X19fPy7+ze2MfApKGhlG4rFW3VcS4AAAG+SURBVDjL3ZJpU+owFIYD3HIpCIICyvW67/u+77smNo2tRWpFcF/+/w8wSWtpOxXz2efLmfPOkzNnMgcwUh2TkZ+YzACH1AQUIeLorVCMc1ufFtRLth4R1I/t1bOC+niK6SUoyiLTM8J6SXh1ToatXhTWd/mvi7PEVhenla0uzjQA41CcCTAPQ9HDY9DBi6GXDcgo67Zdhnb7VXWfrm8VyzwuFnif3eTP9UKBx3pXl6Mv8eHW0Jil01geyVsGNOrZbVin1co78c6aaXAdnBrQlNf/X4+2mGbLUK5vWDat3pFce69lysNOnM+tbsh1g30kmJ/ZW2lTqt3tyeTAv6rS1pMc7Jew1D+Y7PHEfcv7M4uAc1S7IwRXJKmCCbmrSBUFEaTQ6o1rs8AhRhADI+TUMMiUq9MGS4qLqkgh/h+PrqkvVw0e3hQmxOJzCcpcPB3UpecLH+90fhq4HPp1Dd/79dsaQp0NfSGgoxu//njt0xPB6QH9lup/G3r8F+noPvAztWY6Vp78+mvT6Uj98G3zoGlNdaLiSw9qlXyvswsimuoBUzuouwd8gEKZbeidtD1xLyIdDSPhObFoNHZG6ycHcnX7rdACfQAAAABJRU5ErkJggg=="},"0a91":function(t,e,a){a("b42c"),a("93c4"),t.exports=a("b77f")},1938:function(t,e,a){var r=a("d13f");r(r.S,"Array",{isArray:a("b5aa")})},"2d14":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARBAMAAADwJOuSAAAAMFBMVEUAAAA5hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP/k5oiLAAAAD3RSTlMA8S0WB5Ph27+3nXtzWVHUpk23AAAAP0lEQVQI12OYxAAF/4NhjI9HoIz/3x9AGf9/KEAZ/38ZQBn/pR2gjP+5MMb/AJgIXA1MF8wchMkIuxC2w90DACKCQhRop+sGAAAAAElFTkSuQmCC"},3183:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKBAMAAABLZROSAAAAJFBMVEUAAAA5hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP9+9t9NAAAAC3RSTlMADcqm1BW+stscndgjpv0AAABJSURBVAjXY2gTYAADEwbtRDCDfRuD0HYwqzqRgdW7AMhg3gZUFAIStFYEEqzeBgzMm8D6QjaDhcCCizdBjZqxGygEBpxOAUASAJK/DRWWyI3EAAAAAElFTkSuQmCC"},"471a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAYAAAC5Sw6hAAAAo0lEQVQokaXRvwpBYRQA8J9LeRPvoJgMNoPdprwDRh7AQimb3WAzGu6klMFjGChKisFVut0brlNnOH++X6e+XHlw36GEq2yRx6WACcYoZoRgFERQ/w9kFvZ0g6gYYpoBWYY9bQjemh0sfkA2aLyKIDZsYv8FckDtvRGHoIrzB6iK4yfogApuKUhdwtVJEGzFTo+ihVXSgzQI1p4fcIpygHna8gNtfB3zrPFMRgAAAABJRU5ErkJggg=="},"5d73":function(t,e,a){t.exports=a("0a91")},8946:function(t,e,a){var r=a("b041");e=t.exports=a("2350")(!1),e.push([t.i,".create-order[data-v-36309cd6]{margin:.4rem .4rem 2.4rem;padding-bottom:.8rem;background-color:#fff}.create-order .van-picker__columns[data-v-36309cd6]{display:block}.create-order-inview[data-v-36309cd6]{padding:.8rem;border-radius:.1rem;background:#fff}.create-order-inview.first[data-v-36309cd6]{min-height:3rem;padding-bottom:.6rem;border-bottom:.02667rem solid #eee}.create-order-inview.second[data-v-36309cd6]{padding-top:.6rem}.create-order-inview h1[data-v-36309cd6],.create-order-inview h2[data-v-36309cd6]{font-weight:400}.create-order-inview h1[data-v-36309cd6],.create-order-inview h1 img[data-v-36309cd6]{vertical-align:middle}.create-order-inview h1[data-v-36309cd6]{margin-bottom:.4rem;padding-left:.6rem;line-height:.5rem;font-size:.48rem;color:#3984ff;background:url("+r(a("0173"))+') 0 0 no-repeat;background-size:.5rem}.create-order-inview h1 img[data-v-36309cd6]{width:.24rem;margin-left:.1rem}.create-order-inview h2[data-v-36309cd6]{margin-top:.2rem;font-size:.4rem;color:grey}.create-order-inview h2 a[data-v-36309cd6]{text-decoration:underline}.selectcar-type[data-v-36309cd6],.selectcar-type li[data-v-36309cd6]{border-top-left-radius:.4rem;border-top-right-radius:.4rem}.selectcar-type[data-v-36309cd6]{display:-webkit-box;display:-ms-flexbox;display:flex;background:#f4f4f4}.selectcar-type li[data-v-36309cd6]{width:100%;padding:.4rem 0;text-align:center;background:#f4f4f4}.selectcar-type li.active[data-v-36309cd6]{background:#fff}.select-place[data-v-36309cd6]{white-space:nowrap;padding-top:0;padding-bottom:0}.select-place li[data-v-36309cd6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:.4rem;line-height:1rem}.select-place li img[data-v-36309cd6]{width:.5rem;margin-right:.1rem}.select-place li span[data-v-36309cd6]{display:inline-block;width:6em}.select-place li input[data-v-36309cd6]{width:100%;height:1rem;font-size:.4rem;text-indent:.4rem;border:.02667rem solid #eee;border-radius:1rem}.select-time[data-v-36309cd6]{position:relative;height:1.6rem}.select-time .datatime[data-v-36309cd6]{position:absolute;top:0;color:grey}.select-time #startTime[data-v-36309cd6]{left:0}.select-time #endTime[data-v-36309cd6]{right:0}.select-time .datatime span[data-v-36309cd6],.select-time .datatime span img[data-v-36309cd6]{vertical-align:middle}.select-time .datatime span[data-v-36309cd6]{display:inline-block;width:100%;margin-top:.2rem;text-align:center;font-size:.6rem;color:#3984ff}.select-time .datatime span img[data-v-36309cd6]{width:.3rem}.select-time .countime[data-v-36309cd6]{position:relative;margin:0 2.8rem;padding:.4rem 0 .1rem;text-align:center;color:grey;border-bottom:.05333rem solid #3984ff}.select-time .countime[data-v-36309cd6]:after{content:"";position:absolute;right:-.10667rem;bottom:-.16rem;width:.26667rem;height:.29333rem;background:url('+r(a("2d14"))+") no-repeat;background-size:cover}.car-message[data-v-36309cd6]{margin-top:.3rem}.car-message img[data-v-36309cd6]{width:100%;border-radius:.1rem}.car-message p[data-v-36309cd6]{margin-top:.2rem}.car-message .right[data-v-36309cd6]{float:right}.car-message .right.select[data-v-36309cd6],.car-message .right.select img[data-v-36309cd6]{vertical-align:middle}.car-message .right.select[data-v-36309cd6]{white-space:nowrap;padding:.02667rem .2rem;color:#3984ff;border:.02667rem solid #3984ff;border-radius:.4rem}.car-message .right.select img[data-v-36309cd6]{width:.24rem;margin-left:.02667rem}.remarks[data-v-36309cd6]{margin-top:.4rem;text-align:center;color:grey}.next-button[data-v-36309cd6]{background:#fff}.next-button div[data-v-36309cd6]{height:1.2rem;margin:.4rem;line-height:1.2rem;text-align:center;color:#fff;background:#2193fc;border-radius:1.2rem}",""])},9531:function(t,e,a){"use strict";var r=a("bce9"),i=a.n(r);i.a},a745:function(t,e,a){t.exports=a("d604")},b041:function(t,e){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},b77f:function(t,e,a){var r=a("0f89"),i=a("f159");t.exports=a("a7d3").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},bce9:function(t,e,a){var r=a("8946");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("0434208e",r,!0,{sourceMap:!1,shadowMode:!1})},d604:function(t,e,a){a("1938"),t.exports=a("a7d3").Array.isArray}}]);
//# sourceMappingURL=main.2f089a70.js.map