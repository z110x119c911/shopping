(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-779456f6"],{1276:function(t,e,a){"use strict";var o=a("d784"),s=a("44e7"),i=a("825a"),n=a("1d80"),d=a("4840"),l=a("8aa5"),r=a("50c4"),c=a("14c3"),u=a("9263"),p=a("d039"),m=[].push,v=Math.min,h=4294967295,b=!p((function(){return!RegExp(h,"y")}));o("split",2,(function(t,e,a){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var o=String(n(this)),i=void 0===a?h:a>>>0;if(0===i)return[];if(void 0===t)return[o];if(!s(t))return e.call(o,t,i);var d,l,r,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,p+"g");while(d=u.call(b,o)){if(l=b.lastIndex,l>v&&(c.push(o.slice(v,d.index)),d.length>1&&d.index<o.length&&m.apply(c,d.slice(1)),r=d[0].length,v=l,c.length>=i))break;b.lastIndex===d.index&&b.lastIndex++}return v===o.length?!r&&b.test("")||c.push(""):c.push(o.slice(v)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var s=n(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,s,a):o.call(String(s),e,a)},function(t,s){var n=a(o,t,this,s,o!==e);if(n.done)return n.value;var u=i(t),p=String(this),m=d(u,RegExp),g=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),_=new m(b?u:"^(?:"+u.source+")",f),C=void 0===s?h:s>>>0;if(0===C)return[];if(0===p.length)return null===c(_,p)?[p]:[];var P=0,x=0,y=[];while(x<p.length){_.lastIndex=b?x:0;var w,k=c(_,b?p:p.slice(x));if(null===k||(w=v(r(_.lastIndex+(b?0:x)),p.length))===P)x=l(p,x,g);else{if(y.push(p.slice(P,x)),y.length===C)return y;for(var M=1;M<=k.length-1;M++)if(y.push(k[M]),y.length===C)return y;x=P=w}}return y.push(p.slice(P)),y}]}),!b)},"36bb":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-content mt-4",on:{click:function(e){return t.addModal()}}},[t._v("建立新的優惠券")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupon,(function(e){return a("tr",{key:e.id},[a("td",[t._v(" "+t._s(e.title)+" ")]),a("td",[t._v(" "+t._s(e.percent)+" ")]),a("td",[t._v(" "+t._s(t._f("date")(e.due_date))+" ")]),a("td",[1===e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-outline-content btn-sm w-100 p-1",on:{click:function(a){return t.editModal(e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-content btn-sm w-100 p-1",on:{click:function(a){return t.deleModal(e)}}},[t._v("刪除")])])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"addModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.code,expression:"tempProduct.code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.code},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.percent,expression:"tempProduct.percent"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.percent},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"percent",e.target.value)}}})]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("是否啟用")])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-content",attrs:{type:"button"},on:{click:function(e){return t.addCoupon()}}},[t._v("新增優惠券")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.code,expression:"tempProduct.code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.code},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.percent,expression:"tempProduct.percent"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.percent},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"percent",e.target.value)}}})]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck2","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customCheck2"}},[t._v("是否啟用")])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.editCoupon()}}},[t._v("更新優惠券")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"deleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(3),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 優惠券(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.delCoupon()}}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),a("th",{attrs:{width:"120"}},[t._v("折扣百分比")]),a("th",{attrs:{width:"160"}},[t._v("到期日")]),a("th",{attrs:{width:"160"}},[t._v("是否啟用")]),a("th",{attrs:{width:"100"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-content text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增優惠券")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("編輯優惠券")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("ac1f"),a("1276"),a("1157")),n=a.n(i),d={data:function(){return{coupon:[],tempProduct:{},due_date:""}},watch:{due_date:function(){var t=this,e=Math.floor(new Date(t.due_date)/1e3);t.tempProduct.due_date=e}},methods:{addModal:function(){var t=this;t.tempProduct={},t.due_date="",n()("#addModal").modal("show")},editModal:function(t){var e=this;e.tempProduct=Object.assign({},t);var a=e.tempProduct.due_date,o=new Date(1e3*a).toISOString().split("T");e.due_date=o[0],n()("#editModal").modal("show")},deleModal:function(t){var e=this;e.tempProduct=Object.assign({},t),n()("#deleModal").modal("show")},getCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/admin/coupons");t.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,t.coupon=e.data.coupons,console.log(e.data)}))},addCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/admin/coupon");t.isLoading=!0,this.$http.post(e,{data:t.tempProduct}).then((function(e){e.data.success?(console.log(e.data),t.isLoading=!1,t.getCoupon(),n()("#addModal").modal("hide")):(alert(e.data.message),t.isLoading=!1,t.getCoupon(),n()("#addModal").modal("hide"))}))},editCoupon:function(){var t=this,e=t.tempProduct.id,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/admin/coupon/").concat(e);t.isLoading=!0,this.$http.put(a,{data:t.tempProduct}).then((function(e){e.data.success?(console.log(e.data),t.isLoading=!1,t.getCoupon(),n()("#editModal").modal("hide")):(alert(e.data.message),t.isLoading=!1,t.getCoupon(),n()("#editModal").modal("hide"))}))},delCoupon:function(){var t=this;t.isLoading=!0;var e=t.tempProduct.id,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/admin/coupon/").concat(e);this.$http.delete(a).then((function(e){e.data.success?(console.log(e.data),t.isLoading=!1,t.getCoupon(),n()("#deleModal").modal("hide")):(alert(e.data.message),t.isLoading=!1,t.getCoupon(),n()("#deleModal").modal("hide"))}))}},created:function(){this.getCoupon()}},l=d,r=a("2877"),c=Object(r["a"])(l,o,s,!1,null,null,null);e["default"]=c.exports},"44e7":function(t,e,a){var o=a("861d"),s=a("c6b6"),i=a("b622"),n=i("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==s(t))}}}]);
//# sourceMappingURL=chunk-779456f6.c614fc32.js.map