(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{2936:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(885),r=n(9434),i=n(2791),s=n(1391),o=function(e){return e.contacts},c=n(514),u={item:"contact-item_item__Vpt0m",wrapper:"contact-item_wrapper__eFg5M"},l=n(3329),m=function(e){var t=e.name,n=e.number,a=e.onClick,r=e.id;return(0,l.jsxs)("li",{className:u.item,children:[(0,l.jsxs)("div",{className:u.wrapper,children:[t," : ",n]}),(0,l.jsx)(c.Z,{className:u.button,text:"Detele",type:"button",onClick:function(e){a(r)}})]})},p=(0,i.memo)(m),d="contacts_list__zH7QU",f=function(e){var t=e.items,n=e.onClick,a=t.map((function(e){var t=e.number,a=e.name,r=e.id;return(0,l.jsx)(p,{id:r,onClick:n,number:t,name:a},r)}));return(0,l.jsx)("ul",{className:d,children:a})};f.defaultProps={items:[]};var h=f,b=n(1413),_=n(490),x=n(158),v={name:"",number:""},y={label:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"enter name"},C={label:"Number",type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"enter number"},j="contactForm_form__iMHsr",k=function(e){var t=e.onSubmit,n=(0,x.Z)({onSubmit:t,initialState:v}),a=n.state,r=n.handleChange,i=n.handleSubmit,s=a.name,o=a.number;return(0,l.jsxs)("form",{onSubmit:i,className:j,children:[(0,l.jsx)(_.Z,(0,b.Z)({value:s,onChange:r},y)),(0,l.jsx)(_.Z,(0,b.Z)({value:o,onChange:r},C)),(0,l.jsx)(c.Z,{text:"Add contact"})]})};k.defaultProps={onSubmit:function(){}};var g=(0,i.memo)(k),Z="filter_label__FYczH",N="filter_input__AjN5i",S=function(e){var t=e.onChange;return(0,l.jsxs)("label",{className:Z,children:["Find contacts by name",(0,l.jsx)("input",{onChange:t,className:N,type:"text",name:"filter",placeholder:"Input name"})]})},w=(0,i.memo)(S),P="phone-book_wrapper__UOwyI",R=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],u=(0,r.I0)(),m=(0,r.v9)(o),p=m.items,d=m.error,f=m.loading;(0,i.useEffect)((function(){u((0,s.yF)())}),[u]);var b=(0,i.useCallback)((function(e){return u((0,s.uK)(e))}),[u]),_=(0,i.useCallback)((function(e){u((0,s.zY)(e))}),[u]),x=(0,i.useCallback)((function(e){var t=e.target.value;return c(t.trim())}),[c]),v=n?p.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):p;return(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:P,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"title",children:"Phonebook"}),(0,l.jsx)(w,{onChange:x}),f&&(0,l.jsx)("p",{children:"Loading..."}),d&&(0,l.jsx)("p",{children:"Error: ".concat(d)}),p.length>0&&!d&&!f&&(0,l.jsx)(h,{items:v,onClick:_})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"title",children:"Contacts"}),(0,l.jsx)(g,{onSubmit:b})]})]})})},T=function(){return(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(R,{})})}},514:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a="button_btn__aZIRC",r=n(3329),i=function(e){var t=e.type,n=e.text,i=e.onClick;return(0,r.jsx)("button",{className:a,onClick:i,type:t,children:n})};i.defaultProps={type:"submit",onClick:function(){}};var s=i},490:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(6382),r=n(2791),i="text-field_wrapper__qaF-n",s="text-field_label__VYX-y",o="text-field_input__YM8fs",c=n(3329),u=function(e){var t=e.label,n=e.name,u=e.value,l=e.onChange,m=e.placeholder,p=e.required,d=e.type,f=e.pattern,h=e.title,b=(0,r.useMemo)((function(){return(0,a.x0)()}),[]);return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)("label",{htmlFor:b,className:s,children:t}),(0,c.jsx)("input",{onChange:l,id:b,className:o,type:d,name:n,value:u,placeholder:m,required:p,pattern:f,title:h})]})};u.defaultProps={type:"text",required:!1,onChange:function(){}};var l=u},158:function(e,t,n){"use strict";var a=n(4942),r=n(1413),i=n(885),s=n(2791),o=n(2007),c=n.n(o),u=function(e){var t=e.onSubmit,n=e.initialState,o=e.isReset,c=(0,s.useState)((0,r.Z)({},n)),u=(0,i.Z)(c,2),l=u[0],m=u[1];return{state:l,setState:m,handleChange:function(e){var t=e.target,n=t.name,i=t.value,s=t.type,o=t.checked,c="checkbox"===s?o:i;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,c))}))},handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},l)),o&&m((0,r.Z)({},n))}}};u.defaultProps={onSubmit:function(){},initialState:{},isReset:!0},u.propTypes={onSubmit:c().func.isRequired,initialState:c().shape.isRequired,isReset:c().bool.isRequired},t.Z=u},888:function(e,t,n){"use strict";var a=n(9047);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=936.f7b19baa.chunk.js.map