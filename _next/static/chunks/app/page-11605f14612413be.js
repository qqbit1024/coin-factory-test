(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8444:function(e,s,l){Promise.resolve().then(l.bind(l,9898)),Promise.resolve().then(l.t.bind(l,7242,23))},9898:function(e,s,l){"use strict";l.d(s,{default:function(){return d}});var a=l(7437),r=l(2265),t=l(620),n=l.n(t),i=e=>{let{options:s,value:l,onChange:t}=e,[i,h]=(0,r.useState)(!1),m=(0,r.useRef)(null),d=e=>{t(e),h(!1)},u=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};(0,r.useEffect)(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[]);let p=s.find(e=>e.value===l);return(0,a.jsxs)("div",{className:n().customSelect,ref:m,children:[(0,a.jsxs)("div",{className:n().selectTrigger,onClick:()=>h(!i),children:[(0,a.jsxs)("span",{children:[(null==p?void 0:p.icon)&&(0,a.jsx)("div",{className:n().optionIcon,children:p.icon}),null==p?void 0:p.label]}),(0,a.jsx)("div",{className:n().optionIcon,children:i?c:o})]}),i&&(0,a.jsx)("div",{className:n().options,children:s.map(e=>(0,a.jsxs)("div",{className:"".concat(n().option," ").concat(e.value===l?n().selected:""),onClick:()=>d(e.value),children:[e.icon&&(0,a.jsx)("div",{className:n().optionIcon,children:e.icon}),e.label]},e.value))})]})};let c=(0,a.jsx)("svg",{width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M1 8L8 1L15 8",stroke:"black"})}),o=(0,a.jsx)("svg",{width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M1 1L8 8L15 1",stroke:"black"})});var h=l(3796),m=l.n(h),d=()=>{let[e,s]=(0,r.useState)("telegram"),[l,t]=(0,r.useState)("followers"),[n,c]=(0,r.useState)(""),[o,h]=(0,r.useState)(),[d,_]=(0,r.useState)("card"),[x,C]=(0,r.useState)(!1),[j,v]=(0,r.useState)({}),w="telegram"===e?/^https:\/\/t\.me\/[a-zA-Z0-9_]+$/:/^https:\/\/x\.com\/[a-zA-Z0-9_]+$/;return(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:m().form,children:[(0,a.jsx)("h2",{className:m().h2,children:"Create task"}),(0,a.jsx)("hr",{className:m().separator}),(0,a.jsxs)("div",{className:m().formGroup,children:[(0,a.jsx)("label",{htmlFor:"platform",className:m().label,children:"Social network"}),(0,a.jsx)(i,{options:[{value:"telegram",label:"Telegram",icon:u},{value:"twitter",label:"Twitter",icon:p}],value:e,onChange:e=>s(e)})]}),(0,a.jsxs)("div",{className:m().formGroup,children:[(0,a.jsx)("label",{htmlFor:"service",className:m().label,children:"Type of services"}),(0,a.jsx)(i,{options:"telegram"===e?[{value:"followers",label:"Followers"},{value:"reactions",label:"Reactions"},{value:"views",label:"Views"}]:[{value:"followers",label:"Followers"},{value:"likes",label:"Likes"}],value:l,onChange:e=>t(e)})]}),(0,a.jsxs)("div",{className:m().formGroup,children:[(0,a.jsxs)("label",{htmlFor:"link",className:m().label,children:["Channel",(0,a.jsx)("span",{className:m().required,children:"*"})]}),(0,a.jsxs)("div",{className:m().inputWrapper,children:[(0,a.jsx)("input",{id:"link",name:"link",type:"text",value:n,onChange:e=>{let s=e.target.value;c(s),w.test(s)?C(!1):j.link&&C(!0)},onBlur:e=>{let s=e.target.name;v({...j,[s]:!0}),"link"===s&&(w.test(n)?C(!1):C(!0))},placeholder:"telegram"===e?"https://t.me/channel":"https://x.com/channel",className:"".concat(m().input," ").concat(x?m().inputError:"")}),x&&(0,a.jsx)("span",{className:m().errorIcon,children:(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V6ZM10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13Z",fill:"#FF5C1F"})})})]}),(0,a.jsx)("small",{className:m().hint,children:"Provide a link to an open channel or group older than 14 days"})]}),(0,a.jsxs)("div",{className:m().formGroup,children:[(0,a.jsxs)("label",{htmlFor:"subscribers",className:m().label,children:["Number of subscribers",(0,a.jsx)("span",{className:m().required,children:"*"})]}),(0,a.jsx)("input",{id:"subscribers",name:"subscribers",type:"number",value:o,onChange:e=>h(Number(e.target.value)),min:"1",max:"1000",placeholder:"1000",className:m().input}),(0,a.jsx)("small",{className:m().hint,children:"Limit 1-1000"})]}),(0,a.jsxs)("div",{className:m().formGroup,children:[(0,a.jsx)("label",{className:m().label,children:"Choose your payment method"}),(0,a.jsxs)("div",{className:m().paymentMethods,children:[(0,a.jsxs)("div",{className:"".concat(m().paymentMethod," ").concat("card"===d?m().selected:""),onClick:()=>_("card"),children:[(0,a.jsxs)("div",{className:m().paymentHeader,children:[(0,a.jsx)("div",{className:m().paymentIcon,children:(0,a.jsx)("div",{className:m().iconCircle,children:(0,a.jsx)("svg",{width:"20",height:"14",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19 5V11.2857C19 12.2325 18.1942 13 17.2 13H2.8C1.80584 13 1 12.2325 1 11.2857V2.71427C1 1.76754 1.80584 1 2.8 1H17.2C18.1942 1 19 1.76754 19 2.71427V5ZM19 5H5",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})}),(0,a.jsx)("div",{className:m().paymentText,children:"Card"})]}),(0,a.jsx)("hr",{className:m().separatorPayment}),(0,a.jsx)("small",{className:m().hintPayment,children:"Visa, Mastercard"})]}),(0,a.jsxs)("div",{className:"".concat(m().paymentMethod," ").concat("cash"===d?m().selected:""),onClick:()=>_("cash"),children:[(0,a.jsxs)("div",{className:m().paymentHeader,children:[(0,a.jsx)("div",{className:m().paymentIcon,children:(0,a.jsx)("div",{className:m().iconCircle,children:(0,a.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M7 3.76926C6.31497 3.13692 5.10872 2.69713 4 2.66962M4 2.66962C2.68095 2.6368 1.50001 3.18763 1.50001 4.69229C1.50001 7.46156 7 6.07688 7 8.84615C7 10.4256 5.53615 11.1042 4 11.0532M4 2.66962V1M1 9.76926C1.64454 10.5624 2.84283 11.0148 4 11.0532M4 11.0532V13",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})}),(0,a.jsx)("div",{className:m().paymentText,children:"Cash"})]}),(0,a.jsx)("hr",{className:m().separatorPayment}),(0,a.jsx)("small",{className:m().hintPayment,children:"USD, EUR, RUB"})]})]})]}),(0,a.jsx)("button",{type:"submit",className:m().button,children:"Create task"})]})};let u=(0,a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("g",{"clip-path":"url(#clip0_5_156)",children:[(0,a.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"#0098EA"}),(0,a.jsx)("g",{"clip-path":"url(#clip1_5_156)",children:(0,a.jsx)("path",{d:"M4.03198 9.63821C5.29109 8.93301 6.6966 8.34445 8.00983 7.75287C10.2691 6.78392 12.5374 5.83176 14.8285 4.94531C15.2742 4.79427 16.0752 4.6466 16.1538 5.31831C16.1108 6.2691 15.9339 7.21432 15.8125 8.15955C15.5045 10.2382 15.1485 12.3097 14.8014 14.3815C14.6817 15.0715 13.8316 15.4288 13.2875 14.9872C11.9801 14.0893 10.6627 13.2001 9.37198 12.2813C8.94914 11.8444 9.34129 11.2172 9.71881 10.9052C10.7956 9.82613 11.9376 8.90947 12.9581 7.77469C13.2334 7.09869 12.42 7.66836 12.1518 7.84295C10.6776 8.87588 9.2395 9.97187 7.68527 10.8797C6.89137 11.324 5.96606 10.9443 5.17252 10.6963C4.46102 10.3968 3.4184 10.095 4.03189 9.6383L4.03198 9.63821Z",fill:"white"})})]}),(0,a.jsxs)("defs",{children:[(0,a.jsx)("clipPath",{id:"clip0_5_156",children:(0,a.jsx)("rect",{width:"20",height:"20",fill:"white"})}),(0,a.jsx)("clipPath",{id:"clip1_5_156",children:(0,a.jsx)("rect",{width:"12.3077",height:"12.3077",fill:"white",transform:"translate(3.84607 3.84604)"})})]})]}),p=(0,a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("g",{"clip-path":"url(#clip0_5_180)",children:[(0,a.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"black"}),(0,a.jsx)("g",{"clip-path":"url(#clip1_5_180)",children:(0,a.jsx)("path",{d:"M7.71807 15C12.3613 15 14.9017 11.1522 14.9017 7.81635C14.9017 7.70818 14.8993 7.5976 14.8945 7.48943C15.3887 7.13204 15.8152 6.68937 16.1539 6.18221C15.6936 6.38698 15.205 6.52072 14.7046 6.57885C15.2315 6.26304 15.626 5.76692 15.8149 5.18245C15.3193 5.47619 14.7773 5.6834 14.2121 5.79519C13.8312 5.39055 13.3277 5.12263 12.7794 5.03286C12.231 4.94308 11.6683 5.03645 11.1784 5.29852C10.6884 5.5606 10.2984 5.97678 10.0687 6.48273C9.83896 6.98869 9.78231 7.55622 9.90749 8.0976C8.90388 8.04724 7.92206 7.78652 7.02567 7.33237C6.12928 6.87821 5.33834 6.24075 4.70412 5.4613C4.38178 6.01706 4.28314 6.6747 4.42826 7.30057C4.57337 7.92644 4.95135 8.47357 5.48537 8.83077C5.08446 8.81804 4.69233 8.7101 4.34138 8.51587V8.54712C4.34102 9.13034 4.54265 9.6957 4.91199 10.1471C5.28133 10.5984 5.79559 10.908 6.36735 11.0231C5.99596 11.1247 5.60618 11.1395 5.22816 11.0663C5.3895 11.5679 5.70341 12.0066 6.12607 12.3212C6.54874 12.6358 7.05907 12.8106 7.58586 12.8212C6.69154 13.5237 5.58679 13.9047 4.44956 13.9029C4.24788 13.9026 4.0464 13.8902 3.84619 13.8659C5.0015 14.6071 6.34544 15.0007 7.71807 15Z",fill:"white"})})]}),(0,a.jsxs)("defs",{children:[(0,a.jsx)("clipPath",{id:"clip0_5_180",children:(0,a.jsx)("rect",{width:"20",height:"20",fill:"white"})}),(0,a.jsx)("clipPath",{id:"clip1_5_180",children:(0,a.jsx)("rect",{width:"12.3077",height:"12.3077",fill:"white",transform:"translate(3.84619 3.84613)"})})]})]})},7242:function(e){e.exports={banner:"Banner_banner__xsKIg",bannerImage:"Banner_bannerImage__qaMk3",bannerText:"Banner_bannerText__pwuxQ"}},620:function(e){e.exports={customSelect:"CustomSelect_customSelect__EFh5A",selectTrigger:"CustomSelect_selectTrigger__FBlsC",arrowIcon:"CustomSelect_arrowIcon__Csijg",options:"CustomSelect_options__dWXBU",option:"CustomSelect_option__raMaY",optionIcon:"CustomSelect_optionIcon__GBCJ4",selected:"CustomSelect_selected__loUNW"}},3796:function(e){e.exports={form:"PurchaseForm_form__lO_CR",h2:"PurchaseForm_h2__XeRsx",formGroup:"PurchaseForm_formGroup__jJBOx",label:"PurchaseForm_label__Xrhbl",required:"PurchaseForm_required__EdRoY",input:"PurchaseForm_input__1rAlm",inputWrapper:"PurchaseForm_inputWrapper___9u_H",inputError:"PurchaseForm_inputError__rhl_4",selectWrapper:"PurchaseForm_selectWrapper__N7NS1",radioGroup:"PurchaseForm_radioGroup__CinjR",radioLabel:"PurchaseForm_radioLabel__Yc90F",radioInput:"PurchaseForm_radioInput__IH_GR",paymentMethods:"PurchaseForm_paymentMethods__ylPyc",paymentMethod:"PurchaseForm_paymentMethod__qxpYT",selected:"PurchaseForm_selected__EOvmv",paymentHeader:"PurchaseForm_paymentHeader__ECvxY",paymentIcon:"PurchaseForm_paymentIcon__RcS7J",iconCircle:"PurchaseForm_iconCircle__80ZjD",paymentText:"PurchaseForm_paymentText__o24zw",paymentDetails:"PurchaseForm_paymentDetails__CwF3D",hint:"PurchaseForm_hint__9xHos",hintPayment:"PurchaseForm_hintPayment__6Vxot",separatorPayment:"PurchaseForm_separatorPayment__M9hS2",errorIcon:"PurchaseForm_errorIcon__J6oea",separator:"PurchaseForm_separator__OQB23",button:"PurchaseForm_button__yxjMC"}}},function(e){e.O(0,[333,971,23,744],function(){return e(e.s=8444)}),_N_E=e.O()}]);