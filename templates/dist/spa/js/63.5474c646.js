(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{7974:function(t,e,a){"use strict";var n=a("d651"),i=a.n(n);e["default"]=i.a},d651:function(t,e){},da22:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("new"),icon:"add"},on:{click:function(e){t.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("newtip"))+"\n            ")])],1),a("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("refreshtip"))+"\n            ")])],1),a("q-btn",{attrs:{label:t.$t("download"),icon:"cloud_download"},on:{click:function(e){return t.downloadData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("downloadtip"))+"\n            ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{blur:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(e){return t.getSearchList()}}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[e.row.id===t.editid?[a("q-td",{key:"bin_name",attrs:{props:e}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:t.$t("warehouse.view_binset.bin_name"),autofocus:"",rules:[function(t){return t&&t.length>0||"Please Enter the Bin_name"}]},model:{value:t.editFormData.bin_name,callback:function(e){t.$set(t.editFormData,"bin_name",e)},expression:"editFormData.bin_name"}})],1)]:e.row.id!==t.editid?[a("q-td",{key:"bin_name",attrs:{props:e}},[t._v("\n              "+t._s(e.row.bin_name)+"\n            ")])]:t._e(),e.row.id===t.editid?[a("q-td",{key:"bin_size",attrs:{props:e}},[a("q-select",{attrs:{dense:"",outlined:"",square:"",options:t.bin_size_list,"transition-show":"scale","transition-hide":"scale",label:t.$t("warehouse.view_binset.bin_size"),rules:[function(t){return t&&t.length>0||"Please Enter the Bin Size"}]},model:{value:t.editFormData.bin_size,callback:function(e){t.$set(t.editFormData,"bin_size",e)},expression:"editFormData.bin_size"}})],1)]:e.row.id!==t.editid?[a("q-td",{key:"bin_size",attrs:{props:e}},[t._v("\n              "+t._s(e.row.bin_size)+"\n            ")])]:t._e(),e.row.id===t.editid?[a("q-td",{key:"bin_property",attrs:{props:e}},[a("q-select",{attrs:{dense:"",outlined:"",square:"",options:t.bin_property_list,"transition-show":"scale","transition-hide":"scale",label:t.$t("warehouse.view_binset.bin_property"),rules:[function(t){return t&&t.length>0||"Please Enter the Bin Property"}]},model:{value:t.editFormData.bin_property,callback:function(e){t.$set(t.editFormData,"bin_property",e)},expression:"editFormData.bin_property"}})],1)]:e.row.id!==t.editid?[a("q-td",{key:"bin_property",attrs:{props:e}},[t._v("\n              "+t._s(e.row.bin_property)+"\n            ")])]:t._e(),a("q-td",{key:"empty_label",attrs:{props:e}},[t._v("\n            "+t._s(e.row.empty_label)+"\n          ")]),a("q-td",{key:"creater",attrs:{props:e}},[t._v("\n            "+t._s(e.row.creater)+"\n          ")]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n            "+t._s(e.row.create_time)+"\n          ")]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n            "+t._s(e.row.update_time)+"\n          ")]),t.editMode?t.editMode?[e.row.id===t.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:e}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(e){return t.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                    "+t._s(t.$t("confirmedit"))+"\n                  ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(e){return t.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                    "+t._s(t.$t("canceledit"))+"\n                  ")])],1)],1)]:e.row.id!==t.editid?void 0:t._e()]:t._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:e}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type")&&"StockControl"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                            $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                            $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                            $q.localStorage.getItem('staff_type') !== 'StockControl'\n                           "}],attrs:{round:"",flat:"",push:"",color:"info",icon:"print"},on:{click:function(a){return t.viewData(e.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                  "+t._s(t.$t("goods.view_goodslist.print_goods_label"))+"\n                ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return t.editData(e.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                  "+t._s(t.$t("edit"))+"2222\n                ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return t.deleteData(e.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                  "+t._s(t.$t("delete"))+"1111\n                ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)],a("q-dialog",{model:{value:t.newForm,callback:function(e){t.newForm=e},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v(t._s(t.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[t._v(t._s(t.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:t.$t("warehouse.view_binset.bin_name"),autofocus:"",rules:[function(t){return t&&t.length>0||"Please Enter the Bin Name"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},model:{value:t.newFormData.bin_name,callback:function(e){t.$set(t.newFormData,"bin_name",e)},expression:"newFormData.bin_name"}}),a("q-select",{attrs:{dense:"",outlined:"",square:"",options:t.bin_size_list,"transition-show":"scale","transition-hide":"scale",label:t.$t("warehouse.view_binset.bin_size"),rules:[function(t){return t&&t.length>0||"Please Enter the Bin Size"}]},model:{value:t.newFormData.bin_size,callback:function(e){t.$set(t.newFormData,"bin_size",e)},expression:"newFormData.bin_size"}}),a("q-select",{attrs:{dense:"",outlined:"",square:"",options:t.bin_property_list,"transition-show":"scale","transition-hide":"scale",label:t.$t("warehouse.view_binset.bin_property"),rules:[function(t){return t&&t.length>0||"Please Enter the Bin Property"}]},model:{value:t.newFormData.bin_property,callback:function(e){t.$set(t.newFormData,"bin_property",e)},expression:"newFormData.bin_property"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newDataCancel()}}},[t._v(t._s(t.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.newDataSubmit()}}},[t._v(t._s(t.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v(t._s(t.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[t._v(t._s(t.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t._v("\n        "+t._s(t.$t("deletetip"))+"\n      ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.deleteDataCancel()}}},[t._v(t._s(t.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.deleteDataSubmit()}}},[t._v(t._s(t.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:t.viewForm,callback:function(e){t.viewForm=e},expression:"viewForm"}},[a("div",{staticStyle:{width:"400px",height:"280px","background-color":"white"},attrs:{id:"printMe"}},[a("q-card-section",[a("div",{staticClass:"row",staticStyle:{height:"50px"}},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{width:"60px",height:"50px","margin-top":"5px","margin-left":"5px"},attrs:{src:"/statics/goods/logo.png"}})]),a("div",{staticClass:"col-9",staticStyle:{height:"50px",float:"contour","margin-top":"10px"}},[a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[t._v(t._s(t.$t("warehouse.view_binset.bin_name")+":"+t.bin_name))])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8",staticStyle:{"margin-top":"30px","padding-left":"3%"}},[a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[t._v(t._s(t.$t("warehouse.view_binset.bin_property")+":"))]),a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[t._v(t._s(t.bin_property))])]),a("div",{staticClass:"col-4",staticStyle:{"margin-top":"25px"}},[a("img",{staticStyle:{width:"70%","margin-left":"23px"},attrs:{src:t.bar_code}})])])])],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{directives:[{name:"print",rawName:"v-print",value:t.printObj,expression:"printObj"}],attrs:{color:"primary",icon:"print"}},[t._v("print")])],1)])],2)},i=[],o=a("bd4c"),s=a("a357"),r=a("18d6"),l=a("3004"),c={name:"Pagebinset",data(){return{bin_name:"",bin_property:"",openid:"",login_name:"",authin:"0",pathname:"binset/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],viewForm:!1,printObj:{id:"printMe",popTitle:this.$t("inbound.asn")},columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"empty_label",label:this.$t("warehouse.view_binset.empty_label"),field:"empty_label",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{bin_name:"",bin_size:"",bin_property:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0}},methods:{getList(){var t=this;r["a"].has("auth")&&Object(l["e"])(t.pathname,{}).then((e=>{t.table_list=e.results,t.bin_property_list=e.bin_property_list,t.bin_size_list=e.bin_size_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;r["a"].has("auth")&&Object(l["e"])(t.pathname+"?bin_name__icontains="+t.filter,{}).then((e=>{t.table_list=e.results,t.bin_property_list=e.bin_property_list,t.bin_size_list=e.bin_size_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;r["a"].has("auth")&&Object(l["e"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.bin_property_list=e.bin_property_list,t.bin_size_list=e.bin_size_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;r["a"].has("auth")&&Object(l["e"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.bin_property_list=e.bin_property_list,t.bin_size_list=e.bin_size_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},newDataSubmit(){var t=this;t.newFormData.creater=t.login_name,Object(l["h"])(t.pathname,t.newFormData).then((e=>{t.getList(),t.newDataCancel(),t.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataCancel(){var t=this;t.newForm=!1,t.newFormData={bin_name:"",bin_size:"",bin_property:"",creater:""}},editData(t){var e=this;e.editMode=!0,e.editid=t.id,e.editFormData={bin_name:t.bin_name,bin_size:t.bin_size,bin_property:t.bin_property,creater:e.login_name}},editDataSubmit(){var t=this;Object(l["i"])(t.pathname+t.editid+"/",t.editFormData).then((e=>{t.editDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},editDataCancel(){var t=this;t.editMode=!1,t.editid=0,t.editFormData={bin_name:"",bin_size:"",bin_property:"",empty_label:"",creater:""}},deleteData(t){var e=this;e.deleteForm=!0,e.deleteid=t},deleteDataSubmit(){var t=this;Object(l["d"])(t.pathname+t.deleteid+"/").then((e=>{t.deleteDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var t=this;t.deleteForm=!1,t.deleteid=0},downloadData(){var t=this;Object(l["f"])(t.pathname+"file/?lang="+r["a"].getItem("lang")).then((e=>{var a=Date.now(),n=o["a"].formatDate(a,"YYYYMMDDHHmmssSSS");const i=Object(s["a"])(t.pathname+n+".csv","\ufeff"+e.data,"text/csv");!0!==i&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},viewData(t){var e=this,n=a("d055");n.toDataURL(t.bin_name,[{errorCorrectionLevel:"H",mode:"byte",version:"2",type:"image/jpeg"}]).then((a=>{e.bin_name=t.bin_name,e.bin_property=t.bin_property,e.bar_code=a})).catch((t=>{console.error(t)})),e.viewForm=!0}},created(){var t=this;r["a"].has("openid")?t.openid=r["a"].getItem("openid"):(t.openid="",r["a"].set("openid","")),r["a"].has("login_name")?t.login_name=r["a"].getItem("login_name"):(t.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},p=c,d=a("42e1"),_=a("7974"),b=a("eaac"),u=a("e7a9"),m=a("9c40"),h=a("05c0"),f=a("2c91"),g=a("27f9"),v=a("0016"),w=a("bd08"),y=a("db86"),x=a("ddd8"),q=a("24e8"),k=a("f09f"),$=a("d847"),D=a("a370"),S=a("7f67"),z=a("eebe"),F=a.n(z),C=Object(d["a"])(p,n,i,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(C);e["default"]=C.exports;F()(C,"components",{QTable:b["a"],QBtnGroup:u["a"],QBtn:m["a"],QTooltip:h["a"],QSpace:f["a"],QInput:g["a"],QIcon:v["a"],QTr:w["a"],QTd:y["a"],QSelect:x["a"],QDialog:q["a"],QCard:k["a"],QBar:$["a"],QCardSection:D["a"]}),F()(C,"directives",{ClosePopup:S["a"]})}}]);