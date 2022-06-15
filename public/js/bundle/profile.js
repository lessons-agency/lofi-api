/*! For license information please see profile.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6845],{62984:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var a=r(74865),n=r.n(a);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function c(t,e,r,a){var n=e&&e.prototype instanceof p?e:p,o=Object.create(n.prototype),i=new S(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return E()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var u=f(t,e,r);if("normal"===u.type){if(a=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function p(){}function m(){}function v(){}var h={};l(h,n,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(L([])));y&&y!==e&&r.call(y,n)&&(h=y);var g=v.prototype=p.prototype=Object.create(h);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(n,i,s,u){var l=f(t[n],t,i);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==o(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,u)}),(function(t){a("throw",t,s,u)})):e.resolve(d).then((function(t){c.value=t,s(c)}),(function(t){return a("throw",t,s,u)}))}u(l.arg)}var n;this._invoke=function(t,r){function o(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=v,l(g,"constructor",v),l(v,"constructor",m),m.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(w.prototype),l(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new w(c(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(g),l(g,u,"Generator"),l(g,n,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function s(t,e,r,a,n,o,i){try{var s=t[o](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(a,n)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={metaInfo:{title:"Profile"},data:function(){return{data:new FormData,avatar:"",username:"",isLoading:!0,user:{id:"",firstname:"",lastname:"",username:"",NewPassword:null,email:"",phone:"",avatar:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(20629).Se)(["currentUser"])),methods:{Submit_Profile:function(){var t=this;this.$refs.Update_Profile.validate().then((function(e){e?t.Update_Profile():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid;return e||r?void 0===a?null:a:null},Get_Profile_Info:function(){var t=this;axios.get("users/Get_Info/Profile").then((function(e){t.user=e.data.user,t.avatar=t.currentUser.avatar,t.username=t.currentUser.username,t.isLoading=!1})).catch((function(e){t.isLoading=!1}))},onFileSelected:function(t){var e,r=this;return(e=i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$refs.Avatar.validate(t);case 2:a=e.sent,n=a.valid,r.user.avatar=n?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(t){s(o,a,n,i,u,"next",t)}function u(t){s(o,a,n,i,u,"throw",t)}i(void 0)}))})()},Update_Profile:function(){var t=this;n().start(),n().set(.1);var e=this;e.data.append("firstname",e.user.firstname),e.data.append("lastname",e.user.lastname),e.data.append("username",e.user.username),e.data.append("email",e.user.email),e.data.append("NewPassword",e.user.NewPassword),e.data.append("phone",e.user.phone),e.data.append("avatar",e.user.avatar),e.data.append("_method","put"),axios.post("updateProfile/"+e.user.id,e.data).then((function(e){t.makeToast("success",t.$t("Update.TitleProfile"),t.$t("Success")),n().done(),setTimeout((function(){t.Get_Profile_Info()}),500)})).catch((function(t){n().done()}))}},created:function(){this.Get_Profile_Info()}};const f=(0,r(51900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[r("breadcumb",{attrs:{page:t.$t("profil"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?r("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():r("div",{staticClass:"card user-profile o-hidden mb-30"},[r("div",{staticClass:"header-cover"}),t._v(" "),r("div",{staticClass:"user-info"},[r("img",{staticClass:"profile-picture avatar-lg mb-2",attrs:{src:"/images/avatar/"+t.avatar,alt:""}}),t._v(" "),r("p",{staticClass:"m-0 text-24"},[t._v(t._s(t.username))])]),t._v(" "),r("div",{staticClass:"card-body"},[r("validation-observer",{ref:"Update_Profile"},[r("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_Profile.apply(null,arguments)}}},[r("b-row",[r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{attrs:{name:"Firstname",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("Firstname")+" *"}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Firstname-feedback",label:"Firstname"},model:{value:t.user.firstname,callback:function(e){t.$set(t.user,"firstname",e)},expression:"user.firstname"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Firstname-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2648461320)})],1),t._v(" "),r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{attrs:{name:"lastname",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("lastname")+" *"}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"lastname-feedback",label:"lastname"},model:{value:t.user.lastname,callback:function(e){t.$set(t.user,"lastname",e)},expression:"user.lastname"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"lastname-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3016559224)})],1),t._v(" "),r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{attrs:{name:"username",rules:{required:!0,min:4,max:20}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("username")+" *"}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"username-feedback",label:"username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"username-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2089383363)})],1),t._v(" "),r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{attrs:{name:"Phone",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("Phone")+" *"}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Phone-feedback",label:"Phone"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2094202729)})],1),t._v(" "),r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("Email")+" *"}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Email-feedback",label:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2639721465)})],1),t._v(" "),r("b-col",{attrs:{md:"6",sm:"12"}},[r("validation-provider",{ref:"Avatar",attrs:{name:"Avatar",rules:"mimes:image/*|size:200"},scopedSlots:t._u([{key:"default",fn:function(e){e.validate;var a=e.valid,n=e.errors;return r("b-form-group",{attrs:{label:t.$t("UserImage")}},[r("input",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!a||null),label:"Choose Avatar",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Avatar-feedback"}},[t._v(t._s(n[0]))])],1)}}],null,!1,2117094513)})],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("validation-provider",{attrs:{name:"New password",rules:{min:6,max:14}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{label:t.$t("Newpassword")}},[r("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Nawpassword-feedback",placeholder:t.$t("LeaveBlank"),label:"New password"},model:{value:t.user.NewPassword,callback:function(e){t.$set(t.user,"NewPassword",e)},expression:"user.NewPassword"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Nawpassword-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1010016937)})],1),t._v(" "),r("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[r("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null).exports}}]);