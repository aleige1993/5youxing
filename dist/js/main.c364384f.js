(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"003b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-order"},[r("ul",{staticClass:"selectcar-type"},t._l(t.activityList,function(e,a){return r("li",{key:a,class:{active:e.active},on:{click:function(a){return t.selectActivity(e.type,e.saleSn,e.saleName)}}},[t._v(t._s(e.saleName))])}),0),r("div",{staticClass:"create-order-inview first"},[r("h1",{on:{click:function(e){return t.selectType("shopInfo","shopList")}}},[t._v("\n      "+t._s(t.shopInfo.corpName||"--")+"\n      "),r("img",{attrs:{src:a("471a")}})]),r("h2",[t._v("地址："+t._s(t.shopInfo.bizProvinceName||"--")+t._s(t.shopInfo.bizCityName)+t._s(t.shopInfo.bizDistrictName)+t._s(t.shopInfo.bizRoadAddr))]),r("h2",[t._v("\n      联系电话：\n      "),r("a",{attrs:{href:"tel:"+t.shopInfo.telephone}},[t._v(t._s(t.shopInfo.telephone))])])]),r("div",{staticClass:"create-order-inview second"},[r("div",{staticClass:"select-time"},[r("div",{staticClass:"datatime",attrs:{id:"startTime"},on:{click:function(e){return t.selectTime("startTime")}}},[r("p",[t._v(t._s(t._f("dateFormate")(t.formData.startTime,"YYYY-MM-dd")))]),r("p",[r("span",[t._v("\n            "+t._s(t._f("dateFormate")(t.formData.startTime,"hh:00"))+"\n            "),r("img",{attrs:{src:a("3183")}})])])]),r("div",{staticClass:"countime"},[t._v(t._s(t.countTime))]),r("div",{staticClass:"datatime",attrs:{id:"endTime"},on:{click:function(e){return t.selectTime("endTime")}}},[r("p",[t._v(t._s(t._f("dateFormate")(t.formData.endTime,"YYYY-MM-dd")))]),r("p",[r("span",[t._v("\n            "+t._s(t._f("dateFormate")(t.formData.endTime,"hh:00"))+"\n            "),r("img",{attrs:{src:a("3183")}})])])])]),"2"!==t.formData.actType?r("div",{staticClass:"car-message",on:{click:function(e){return t.selectType("carInfo","carList")}}},[r("img",{attrs:{src:t.carInfo.attach,alt:""}}),r("p",[t._v("\n        "+t._s(t.carInfo.carsName||"--")+" ￥"+t._s(t.carInfo.unitPrice||"--")+"/"+t._s(t.carInfo.unit||"--")+"\n        "),t._m(0)])]):r("div",{staticClass:"car-message"},[r("img",{attrs:{src:t.carInfo.attach,alt:""}}),r("p",[t._v("\n        "+t._s(t.carInfo.carsName||"--")+"\n        "),r("span",{staticClass:"right"},[t._v("￥"+t._s(t.carInfo.unitPrice||"--")+"/"+t._s(t.carInfo.unit||"--"))])])])]),r("div",{staticClass:"next-button",attrs:{id:"createOrder"},on:{click:t.createOrder}},[r("div",[t._v("下一步")])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"right select"},[t._v("\n          选择车型\n          "),r("img",{attrs:{src:a("471a"),alt:""}})])}],n=a("a745"),o=a.n(n);function s(t){if(o()(t))return t}var c=a("5d73"),m=a.n(c);function d(t,e){var a=[],r=!0,i=!1,n=void 0;try{for(var o,s=m()(t);!(r=(o=s.next()).done);r=!0)if(a.push(o.value),e&&a.length===e)break}catch(c){i=!0,n=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw n}}return a}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(t,e){return s(t)||d(t,e)||l()}a("a481");var f=a("cebc"),u=(a("96cf"),a("3b8d")),p=a("bd86"),b=(a("7f7f"),a("e7e5"),a("d399")),g=a("3de1"),v={components:Object(p["a"])({},b["a"].name,b["a"]),data:function(){return{oneHourTimestamp:36e5,activityList:[],shopList:[],shopInfo:{bizCityName:"",bizDistrictName:"",bizProvinceName:"",bizRoadAddr:"",corpName:"",custMgrName:"",custMgrPhone:"",merchantNo:"",telephone:""},carInfo:{attach:"",brandName:"",carTotal:0,carsCode:"",carsName:"",id:1,modelName:"",remack:"",unit:"",unitPrice:0},carList:[],carAllList:[],placeList:[],personList:[{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"}],formData:{startTime:"",endTime:"",carCode:"",storeNo:"",memberNo:"",startPoint:"",endPoint:"",peopleNum:"",actType:1,actCode:"",actName:""},loading:!1}},computed:{countTime:function(){if("2"===this.$data.formData.actType)return"1小时";var t=0,e=0;if(this.$data.formData.endTime&&this.$data.formData.startTime){var a=new Date(Object(g["formatTimeCompatibleIos"])(this.$data.formData.endTime)).getTime(),r=new Date(Object(g["formatTimeCompatibleIos"])(this.$data.formData.startTime)).getTime(),i=(a-r)/this.$data.oneHourTimestamp;t=Math.floor(i/24),e=i%24}else t=0;return e>0?"".concat(t,"天").concat(e,"小时"):"".concat(t,"天")}},methods:{getStartTime:function(){var t=(new Date).getTime()+3*this.$data.oneHourTimestamp,e=Object(g["timeToHour"])(t);return e},initTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getStartTime();this.$data.formData.startTime=t;var e=new Date(Object(g["formatTimeCompatibleIos"])(t)).getTime();this.$data.formData.endTime=Object(g["timestampToTime"])(e+24*this.$data.oneHourTimestamp)},selectTime:function(t){var e=this,a=(new Date).getFullYear(),r="startTime"===t?this.$data.formData.startTime:this.$data.formData.endTime,i="startTime"===t?Object(g["formatTimeCompatibleIos"])(Object(g["timestampToTime"])(new Date)):Object(g["formatTimeCompatibleIos"])(this.$data.formData.startTime),n="hour";console.log("beginDateTime",i);var o=new mui.DtPicker({type:n,beginYear:a,endYear:a+1,beginDateTime:i,labels:["年","月","日","时"],value:Object(g["timestampToTime"])(r,"d")}),s=this;o.show(function(a){console.log(a);var r="".concat(a.value,":00:00");"startTime"===t?e.validateTime(r)&&s.initTime(Object(g["formatTimeCompatibleIos"])(r)):e.validateTime(e.$data.formData.startTime,r)&&(s.$data.formData.endTime=Object(g["formatTimeCompatibleIos"])("".concat(a.value,":00:00"))),o.dispose()})},validateTime:function(t,e){var a=new Date(Object(g["formatTimeCompatibleIos"])(t)).getTime(),r=new Date(Object(g["formatTimeCompatibleIos"])(this.getStartTime())).getTime();if(r>a)return this.$toast("取车时间需在当前时间的3小时后"),!1;if(!e)return!0;var i=new Date(Object(g["formatTimeCompatibleIos"])(e)).getTime();return i<=r?(this.$toast("还车时间不能小于或等于取车时间"),!1):!("1"===this.$data.formData.actType&&i-r<96*this.$data.oneHourTimestamp)||(this.$Tools.layerOpen("租车时间至少4天起"),!1)},selectType:function(t,e){var a=this,r=new mui.PopPicker;r.setData(a.$data[e]),r.pickers[0].setSelectedIndex(a[t].value,200),r.show(function(i){a[t]=a.$data[e][i[0].value],r.dispose()})},createOrder:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$store.state.user.memberNo,e){t.next=4;break}return this.$router.push("/login"),t.abrupt("return",!1);case 4:if("2"!==this.$data.formData.actType){t.next=11;break}if(""!==this.$data.formData.startPoint&&""!==this.$data.formData.endPoint){t.next=8;break}return this.$toast("出发地或目的地不能为空"),t.abrupt("return",!1);case 8:if(""!==this.$data.formData.peopleNum){t.next=11;break}return this.$toast("请选择出行人数"),t.abrupt("return",!1);case 11:if(this.validateTime(this.formData.startTime,this.formData.endTime)){t.next=13;break}return t.abrupt("return",!1);case 13:return this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),this.$data.formData.memberNo=e,this.$data.formData.storeNo=this.shopInfo.merchantNo,this.$data.formData.carCode=this.carInfo.carsCode,t.next=19,this.$postData("/store/createOrder",Object(f["a"])({},this.formData,{startTime:this.formData.startTime.replace(/\//g,"-"),endTime:this.formData.endTime.replace(/\//g,"-")}));case 19:if(a=t.sent,this.$toast.clear(),"string"!==typeof a&&a){t.next=27;break}if("/logout"!==a){t.next=25;break}return this.$store.dispatch("outLogin"),t.abrupt("return",!1);case 25:return this.$toast(a||"请求错误"),t.abrupt("return",!1);case 27:return this.$router.push({name:"createOrder",query:{orderNo:a.orderNo}}),t.abrupt("return",!1);case 29:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initData:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a,r,i,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),t.next=3,this.$postData("store/storeList");case 3:if(e=t.sent,this.$data.shopList=e.map(function(t,e){return t.value=e,t.text=t.corpName,t}),a=h(this.$data.shopList,1),r=a[0],this.$data.shopInfo=r,this.$toast.clear(),"string"!==typeof e&&e){t.next=11;break}return this.$toast(e||"请求错误"),t.abrupt("return");case 11:return this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),t.next=14,this.$postData("/store/car/carSeriesList",{storeNo:this.shopList[0].merchantNo});case 14:if(i=t.sent,this.$toast.clear(),"string"!==typeof i&&i){t.next=19;break}return this.$toast(i||"请求错误"),t.abrupt("return");case 19:this.$data.carAllList=i,this.$data.carList=i,n=h(this.$data.carList,1),o=n[0],this.$data.carInfo=o,this.$data.carList=this.$data.carList.map(function(t,e){return t.value=e,t.text="".concat(t.carsName,"(￥").concat(t.unitPrice,"/").concat(t.unit,")"),t}),this.initTime();case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){document.body.style.backgroundColor="#eeeeee",this.initData()},beforeDestroy:function(){document.body.style.backgroundColor="#fff"},watch:{shopInfo:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"加载中"}),t.next=3,this.$postData("/store/car/carSeriesList",{storeNo:e.merchantNo});case 3:a=t.sent,this.$toast.clear(),"string"!==typeof a&&a||this.$toast(a||"请求错误"),this.$data.carAllList=a,this.$data.carList=a,r=h(this.$data.carList,1),i=r[0],this.$data.carInfo=i,this.$data.carList=this.$data.carList.map(function(t,e){return t.value=e,t.text="".concat(t.carsName,"(￥").concat(t.unitPrice,"/").concat(t.unit,")"),t});case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},A=v,T=(a("4046"),a("2877")),w=Object(T["a"])(A,r,i,!1,null,"064bc91e",null);e["default"]=w.exports},"0173":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAnCAMAAABHaIrNAAABQVBMVEUAAAD/5B8mdP0ldP4ldPwEYf8ldP4ldP4kdP///gCjunT/6R7//wAldP7/5B7/5R394yEAUv8zePF2n6S2v2v/5hv+4yH/5R4ldP7/5B0PZ///6RYpde4Xa/+FrI//+QA4e+ZXjMtvnaqVtX6vu3Dx5xx0navGyVR/oqb/5R//5h//5B8ccP7/5x7//gAbbv8kdP//6RYlc/7/6Rr/5xx4pYxyo5JAgtjOy1Tr4iX87g7u2zP54CZekL+KqJf/5B+6xF7Rz00mdP0lc/4AXv//5R0ldPz/5x4icf//5h7/5B8ldP7///8LZP4fcP8QZv0pdv5Bhv0bbf3/5hvD2f7/4iL/6RcAW/4AXv//+gDd6f///wCdwP4Xa/8Sav8AV/7/8gXs8/+91f6hw/7O4P6Zvv6Ot/5/rf5uov5Wk/4xe/3V2gwbAAAASnRSTlMAsruwiv1MYEf99Ab6tY5K/Pv49/X18JdZU/v7+vn5+ff39/f19fLx7uvMuI16d3FDQTkuJ/n49/X19fPy7+ze2MfApKGhlG4rFW3VcS4AAAG+SURBVDjL3ZJpU+owFIYD3HIpCIICyvW67/u+77smNo2tRWpFcF/+/w8wSWtpOxXz2efLmfPOkzNnMgcwUh2TkZ+YzACH1AQUIeLorVCMc1ufFtRLth4R1I/t1bOC+niK6SUoyiLTM8J6SXh1ToatXhTWd/mvi7PEVhenla0uzjQA41CcCTAPQ9HDY9DBi6GXDcgo67Zdhnb7VXWfrm8VyzwuFnif3eTP9UKBx3pXl6Mv8eHW0Jil01geyVsGNOrZbVin1co78c6aaXAdnBrQlNf/X4+2mGbLUK5vWDat3pFce69lysNOnM+tbsh1g30kmJ/ZW2lTqt3tyeTAv6rS1pMc7Jew1D+Y7PHEfcv7M4uAc1S7IwRXJKmCCbmrSBUFEaTQ6o1rs8AhRhADI+TUMMiUq9MGS4qLqkgh/h+PrqkvVw0e3hQmxOJzCcpcPB3UpecLH+90fhq4HPp1Dd/79dsaQp0NfSGgoxu//njt0xPB6QH9lup/G3r8F+noPvAztWY6Vp78+mvT6Uj98G3zoGlNdaLiSw9qlXyvswsimuoBUzuouwd8gEKZbeidtD1xLyIdDSPhObFoNHZG6ycHcnX7rdACfQAAAABJRU5ErkJggg=="},"0a91":function(t,e,a){a("b42c"),a("93c4"),t.exports=a("b77f")},1938:function(t,e,a){var r=a("d13f");r(r.S,"Array",{isArray:a("b5aa")})},"2d14":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARBAMAAADwJOuSAAAAMFBMVEUAAAA5hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP/k5oiLAAAAD3RSTlMA8S0WB5Ph27+3nXtzWVHUpk23AAAAP0lEQVQI12OYxAAF/4NhjI9HoIz/3x9AGf9/KEAZ/38ZQBn/pR2gjP+5MMb/AJgIXA1MF8wchMkIuxC2w90DACKCQhRop+sGAAAAAElFTkSuQmCC"},3183:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKBAMAAABLZROSAAAAJFBMVEUAAAA5hP85hP85hP85hP85hP85hP85hP85hP85hP85hP85hP9+9t9NAAAAC3RSTlMADcqm1BW+stscndgjpv0AAABJSURBVAjXY2gTYAADEwbtRDCDfRuD0HYwqzqRgdW7AMhg3gZUFAIStFYEEqzeBgzMm8D6QjaDhcCCizdBjZqxGygEBpxOAUASAJK/DRWWyI3EAAAAAElFTkSuQmCC"},4046:function(t,e,a){"use strict";var r=a("a94a"),i=a.n(r);i.a},"471a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAYAAAC5Sw6hAAAAo0lEQVQokaXRvwpBYRQA8J9LeRPvoJgMNoPdprwDRh7AQimb3WAzGu6klMFjGChKisFVut0brlNnOH++X6e+XHlw36GEq2yRx6WACcYoZoRgFERQ/w9kFvZ0g6gYYpoBWYY9bQjemh0sfkA2aLyKIDZsYv8FckDtvRGHoIrzB6iK4yfogApuKUhdwtVJEGzFTo+ihVXSgzQI1p4fcIpygHna8gNtfB3zrPFMRgAAAABJRU5ErkJggg=="},"553a":function(t,e,a){var r=a("b041");e=t.exports=a("2350")(!1),e.push([t.i,".create-order[data-v-064bc91e]{margin:.4rem .4rem 2.4rem;padding-bottom:.8rem;background-color:#fff}.create-order .van-picker__columns[data-v-064bc91e]{display:block}.create-order-inview[data-v-064bc91e]{padding:.8rem;border-radius:.1rem;background:#fff}.create-order-inview.first[data-v-064bc91e]{min-height:3rem;padding-bottom:.6rem;border-bottom:.02667rem solid #eee}.create-order-inview.second[data-v-064bc91e]{padding-top:.6rem}.create-order-inview h1[data-v-064bc91e],.create-order-inview h2[data-v-064bc91e]{font-weight:400}.create-order-inview h1[data-v-064bc91e],.create-order-inview h1 img[data-v-064bc91e]{vertical-align:middle}.create-order-inview h1[data-v-064bc91e]{margin-bottom:.4rem;padding-left:.6rem;line-height:.5rem;font-size:.48rem;color:#3984ff;background:url("+r(a("0173"))+') 0 0 no-repeat;background-size:.5rem}.create-order-inview h1 img[data-v-064bc91e]{width:.24rem;margin-left:.1rem}.create-order-inview h2[data-v-064bc91e]{margin-top:.2rem;font-size:.4rem;color:grey}.create-order-inview h2 a[data-v-064bc91e]{text-decoration:underline}.selectcar-type[data-v-064bc91e],.selectcar-type li[data-v-064bc91e]{border-top-left-radius:.4rem;border-top-right-radius:.4rem}.selectcar-type[data-v-064bc91e]{display:-webkit-box;display:-ms-flexbox;display:flex;background:#f4f4f4}.selectcar-type li[data-v-064bc91e]{width:100%;padding:.4rem 0;text-align:center;background:#f4f4f4}.selectcar-type li.active[data-v-064bc91e]{background:#fff}.select-place[data-v-064bc91e]{white-space:nowrap;padding-top:0;padding-bottom:0}.select-place li[data-v-064bc91e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:.4rem;line-height:1rem}.select-place li img[data-v-064bc91e]{width:.5rem;margin-right:.1rem}.select-place li span[data-v-064bc91e]{display:inline-block;width:6em}.select-place li input[data-v-064bc91e]{width:100%;height:1rem;font-size:.4rem;text-indent:.4rem;border:.02667rem solid #eee;border-radius:1rem}.select-time[data-v-064bc91e]{position:relative;height:1.6rem}.select-time .datatime[data-v-064bc91e]{position:absolute;top:0;color:grey}.select-time #startTime[data-v-064bc91e]{left:0}.select-time #endTime[data-v-064bc91e]{right:0}.select-time .datatime span[data-v-064bc91e],.select-time .datatime span img[data-v-064bc91e]{vertical-align:middle}.select-time .datatime span[data-v-064bc91e]{display:inline-block;width:100%;margin-top:.2rem;text-align:center;font-size:.6rem;color:#3984ff}.select-time .datatime span img[data-v-064bc91e]{width:.3rem}.select-time .countime[data-v-064bc91e]{position:relative;margin:0 2.8rem;padding:.4rem 0 .1rem;text-align:center;color:grey;border-bottom:.05333rem solid #3984ff}.select-time .countime[data-v-064bc91e]:after{content:"";position:absolute;right:-.10667rem;bottom:-.16rem;width:.26667rem;height:.29333rem;background:url('+r(a("2d14"))+") no-repeat;background-size:cover}.car-message[data-v-064bc91e]{margin-top:.3rem}.car-message img[data-v-064bc91e]{width:100%;border-radius:.1rem}.car-message p[data-v-064bc91e]{margin-top:.2rem}.car-message .right[data-v-064bc91e]{float:right}.car-message .right.select[data-v-064bc91e],.car-message .right.select img[data-v-064bc91e]{vertical-align:middle}.car-message .right.select[data-v-064bc91e]{white-space:nowrap;padding:.02667rem .2rem;color:#3984ff;border:.02667rem solid #3984ff;border-radius:.4rem}.car-message .right.select img[data-v-064bc91e]{width:.24rem;margin-left:.02667rem}.remarks[data-v-064bc91e]{margin-top:.4rem;text-align:center;color:grey}.next-button[data-v-064bc91e]{background:#fff}.next-button div[data-v-064bc91e]{height:1.2rem;margin:.4rem;line-height:1.2rem;text-align:center;color:#fff;background:#2193fc;border-radius:1.2rem}",""])},"5d73":function(t,e,a){t.exports=a("0a91")},a745:function(t,e,a){t.exports=a("d604")},a94a:function(t,e,a){var r=a("553a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("1b1296a8",r,!0,{sourceMap:!1,shadowMode:!1})},b041:function(t,e){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},b77f:function(t,e,a){var r=a("0f89"),i=a("f159");t.exports=a("a7d3").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},d604:function(t,e,a){a("1938"),t.exports=a("a7d3").Array.isArray}}]);
//# sourceMappingURL=main.c364384f.js.map