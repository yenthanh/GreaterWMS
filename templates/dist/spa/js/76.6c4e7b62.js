(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{c8d8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-top"},[[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"100%"}},[a("q-tabs",{model:{value:t.detaillink,callback:function(e){t.detaillink=e},expression:"detaillink"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-route-tab",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer'\n                         "}],attrs:{name:"stafflist",label:t.$t("staff.staff"),icon:"perm_contact_calendar",to:"/staff/stafflist",exact:""}})],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-route-tab",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type")&&"Inbound"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type")&&"StockControl"!==t.$q.localStorage.getItem("staff_type")&&"Supplier"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                          $q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                          $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                          $q.localStorage.getItem('staff_type') !== 'StockControl' &&\n                          $q.localStorage.getItem('staff_type') !== 'Supplier'\n                         "}],attrs:{name:"stafflist_check_code",label:t.$t("staff.check_code"),icon:"published_with_changes",to:"/staff/stafflist_check_code",exact:""}})],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-route-tab",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type")&&"Inbound"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type")&&"StockControl"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                               $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                               $q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                               $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                               $q.localStorage.getItem('staff_type') !== 'StockControl'\n                             "}],attrs:{name:"stafftype",label:t.$t("staff.view_staff.staff_type"),icon:"img:statics/staff/stafftype.png",to:"/staff/stafftype",exact:""}})],1)],1)],1)])],a("div",{style:{width:"100%",margin:"-10px 10px 0 10px"}},[a("router-view")],1)],2)},s=[],l={name:"Pagestaff",data(){return{detaillink:"staff"}},methods:{}},f=l,r=a("42e1"),n=a("9989"),c=a("429b"),p=a("7867"),i=a("eebe"),g=a.n(i),m=Object(r["a"])(f,o,s,!1,null,null,null);e["default"]=m.exports;g()(m,"components",{QPage:n["a"],QTabs:c["a"],QRouteTab:p["a"]})}}]);