(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-address"],{1399:function(t,e,i){"use strict";i("4de4"),i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{addmodalName:"",editmodalName:"",detail:"",details:"",is_default:0,items:[],Address_Item:{username:"",mobile:"",detail:"",details:"",longitude:"",latitude:""},order:0,show:!1}},onLoad:function(t){this.order=t.order?1:0,this.get_lists()},methods:{hideMap:function(){this.show=!1},onSelMap:function(t){this.show=!1,t&&(this.Address_Item.detail=t.address,this.Address_Item.latitude=t.latitude,this.Address_Item.longitude=t.longitude,this.Address_Item.details=t.name)},onSel:function(t){var e=t.currentTarget.dataset.id,i=getCurrentPages(),s=i[i.length-2],a=this.items.filter((function(t){return t.id==e}));s.$vm.address=a[0],uni.navigateBack()},onMap:function(){this.show=!0},get_lists:function(){var t=this;this.fq_get("fanqie/address/index","",(function(e){t.items=e.data?e.data:[]}))},addSub:function(t){var e=this,i=this.Address_Item;this.validation(i)&&this.fq_post("fanqie/address/index",i,(function(t){e.items.push(t.data),e.hideModal(),e.Toast(t.message),e.Address_Item={}}))},editSub:function(){var t=this,e=this.Address_Item;this.validation(e)&&this.fq_edit("fanqie/address/edit",e,(function(i){t.items=t.items.map((function(t){return t.id===e.id?e:t})),t.hideModal(),t.Toast(i.message),t.Address_Item={}}))},validation:function(t){var e="";""==t.username&&(e="姓名不能为空");var i=/^[1][3,4,5,7,8,9][0-9]{9}$/;return i.test(t.mobile)||(e="手机号不正确"),""==t.detail&&(e="详细地址不能为空"),!e||(this.Toast(e,"none"),!1)},onDel:function(t){var e=this,i=t.currentTarget.dataset.id;this.fq_del("fanqie/address/index",{id:i},(function(t){var s=e.items.filter((function(t){return t.id!==i}));e.items=s}))},onListDefault:function(t){var e=this,i=t.detail.value;this.fq_edit("fanqie/address/set_default",{id:i},(function(t){e.Toast(t.message)}))},onDefault:function(t){this.is_default=t.detail.value},onAdd:function(){this.addmodalName="bottomModal"},onEdit:function(t){var e=t.currentTarget.dataset.id,i=this.items.filter((function(t){return t.id==e}));this.editmodalName="bottomModal",this.Address_Item=i[0]},hideModal:function(t){this.addmodalName=null,this.editmodalName=null},ss:function(){}}};e.default=s},"56e0":function(t,e,i){"use strict";i.r(e);var s=i("c0f9"),a=i("8bfa");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var o,d=i("f0c5"),l=Object(d["a"])(a["default"],s["b"],s["c"],!1,null,"43c76814",null,!1,s["a"],o);e["default"]=l.exports},"6d5a":function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"cu-modal bottom-modal typeBox",class:t.show?"show":"",staticStyle:{"z-index":"10000"}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSels.apply(void 0,arguments)}}},[t._v("确定")]),i("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideMap.apply(void 0,arguments)}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"modal-bd"},[t.mapkey?[i("iframe",{attrs:{id:"mapPage",width:"100%",height:t.height,frameborder:"0",src:t.src}})]:t._e()],2)],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}))},"845d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"choosemap",data:function(){return{message:"",src:"",height:this.windowHeight,mapkey:""}},props:{show:{type:Boolean}},created:function(){this.get_key()},mounted:function(){window.addEventListener("message",this.onOpen,!1)},methods:{get_key:function(){var t=this;this.fq_get("fanqie/api/mapkey","",(function(e){t.mapkey=e.data,t.src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key="+t.mapkey+"&referer=myapp"}))},onOpen:function(t){var e=t.data;e&&"locationPicker"===e.module&&(this.message=e)},onSels:function(){if(this.message){var t={};t.name=this.message.poiname,t.address=this.message.poiaddress,t.latitude=this.message.latlng.lat,t.longitude=this.message.latlng.lng,this.$emit("onSels",t)}else this.$emit("onSels","")},hideMap:function(){this.$emit("hideMap")}}};e.default=s},"8bfa":function(t,e,i){"use strict";i.r(e);var s=i("1399"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"8dcd":function(t,e,i){"use strict";i.r(e);var s=i("845d"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"93db":function(t,e,i){"use strict";i.r(e);var s=i("6d5a"),a=i("8dcd");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var o,d=i("f0c5"),l=Object(d["a"])(a["default"],s["b"],s["c"],!1,null,"48c1114b",null,!1,s["a"],o);e["default"]=l.exports},c0f9:function(t,e,i){"use strict";var s={choosemap:i("93db").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-navigator",{staticClass:"action",attrs:{url:"/pages/index/index","open-type":"switchTab","hover-class":"none"}},[i("v-uni-view",{staticClass:"cuIcon-home"})],1)],1),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("地址管理")])],2),i("v-uni-radio-group",{staticClass:"block",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onListDefault.apply(void 0,arguments)}}},t._l(t.items,(function(e,s){return i("v-uni-view",{key:s,staticClass:"cu-list menu sm-border"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content padding-top-sm padding-bottom-sm"},[i("v-uni-view",{staticClass:"text-bold"},[t._v(t._s(e.username)+"，"+t._s(e.mobile))]),i("v-uni-view",[t._v(t._s(e.detail)+t._s(e.details))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content "},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub"},[i("v-uni-radio",{attrs:{checked:"1"==e.is_default,value:e.id}}),i("v-uni-text",{staticClass:"margin-left-sm"},[t._v("默认")])],1),i("v-uni-view",{staticClass:"flex-treble text-right"},[t.order?[i("v-uni-button",{staticClass:"cu-btn round bg-mauve margin-right",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSel.apply(void 0,arguments)}}},[t._v("选择")])]:t._e(),i("v-uni-button",{staticClass:"cu-btn round bg-orange",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onEdit.apply(void 0,arguments)}}},[t._v("编辑")]),i("v-uni-button",{staticClass:"cu-btn round bg-red margin-left",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onDel.apply(void 0,arguments)}}},[t._v("删除")])],2)],1)],1)],1)],1)})),1),i("v-uni-view",{staticClass:"cu-modal text-left bottom-modal",class:"bottomModal"==t.addmodalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.ss.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("姓名")]),i("v-uni-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.Address_Item.username,callback:function(e){t.$set(t.Address_Item,"username",e)},expression:"Address_Item.username"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("电话")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入电话"},model:{value:t.Address_Item.mobile,callback:function(e){t.$set(t.Address_Item,"mobile",e)},expression:"Address_Item.mobile"}})],1),i("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onMap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title"},[t._v("地址")]),i("v-uni-input",{attrs:{placeholder:"点击自动获取"},model:{value:t.Address_Item.detail,callback:function(e){t.$set(t.Address_Item,"detail",e)},expression:"Address_Item.detail"}}),i("v-uni-text",{staticClass:"cuIcon-locationfill text-orange"})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("门牌")]),i("v-uni-input",{attrs:{placeholder:"请输入门牌信息"},model:{value:t.Address_Item.details,callback:function(e){t.$set(t.Address_Item,"details",e)},expression:"Address_Item.details"}})],1),i("v-uni-view",{staticClass:"padding flex flex-direction solid-top"},[i("v-uni-button",{staticClass:"cu-btn bg-orange lg round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addSub.apply(void 0,arguments)}}},[t._v("立即提交")])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal text-left bottom-modal",class:"bottomModal"==t.editmodalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.ss.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("姓名")]),i("v-uni-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.Address_Item.username,callback:function(e){t.$set(t.Address_Item,"username",e)},expression:"Address_Item.username"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("电话")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入电话"},model:{value:t.Address_Item.mobile,callback:function(e){t.$set(t.Address_Item,"mobile",e)},expression:"Address_Item.mobile"}})],1),i("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onMap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title"},[t._v("地址")]),i("v-uni-input",{attrs:{placeholder:"点击自动获取"},model:{value:t.Address_Item.detail,callback:function(e){t.$set(t.Address_Item,"detail",e)},expression:"Address_Item.detail"}}),i("v-uni-text",{staticClass:"cuIcon-locationfill text-orange"})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("门牌")]),i("v-uni-input",{attrs:{placeholder:"请输入详细地址",value:t.Address_Item.details}})],1),i("v-uni-view",{staticClass:"padding flex flex-direction solid-top"},[i("v-uni-button",{staticClass:"cu-btn bg-orange lg round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editSub.apply(void 0,arguments)}}},[t._v("立即修改")])],1)],1)],1)],1)],1),i("choosemap",{ref:"choosemap",attrs:{show:t.show},on:{onSels:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelMap.apply(void 0,arguments)},hideMap:function(e){arguments[0]=e=t.$handleEvent(e),t.hideMap.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"cu-tabbar-height"}),i("v-uni-view",{staticClass:"cu-bar bg-white tabbar border foot"},[i("v-uni-view",{staticClass:"bg-orange submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAdd.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-location margin-right-xs"}),t._v("添加新地址")],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}))}}]);