(this.webpackJsonpattendance_checker=this.webpackJsonpattendance_checker||[]).push([[0],{8:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(3),r=n(5),o=n(4),i=n(1),s=n.n(i),u=n(7),j=n.n(u),l=n(0),h=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return console.log("ListAttendance > render > this.state: ",this.props),Object(l.jsx)("div",{className:"list__attendance",children:this.props.attendance.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:t.day}),Object(l.jsx)("span",{children:t.when}),Object(l.jsx)("span",{children:t.pass}),Object(l.jsx)("span",{children:t.mail})]},t.id)}))})}}]),n}(s.a.Component),b=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"list__header",children:[Object(l.jsx)("h4",{children:"Day"}),Object(l.jsx)("h4",{children:"When"}),Object(l.jsx)("h4",{children:"Pass"}),Object(l.jsx)("h4",{children:"Mail"})]})}}]),n}(s.a.Component);function d(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDay(),c=t.getHours(),r=t.getMinutes();r<10&&(r="0"+String(r));var o=e+"/"+n+"/"+a,i=parseInt(c+""+r),s="";return{day:o,when:i,pass:s=i<parseInt("0700")?"Y":"N",mail:"Y"===s?"N":"Y"}}var O=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleLowToHigh=function(e){e.preventDefault();var n=d();t.props.lowToHigh(n)},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("form",{onSubmit:this.handleLowToHigh,children:Object(l.jsx)("button",{type:"submit",children:"Check In"})})})}}]),n}(s.a.Component),p=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"list",children:[Object(l.jsx)(b,{}),Object(l.jsx)(h,{attendance:this.props.attendance})]})}}]),n}(s.a.Component),v=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:"Starbucks Attendance Checker"})})}}]),n}(s.a.Component),f=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("nav",{})}}]),n}(s.a.Component);var x=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={text:[]},t.lowToHigh=function(e){var n=e;n&&t.setState((function(){return{text:t.state.text.concat(n).map((function(t,e){return t.id=e,t}))}})),console.log("Main > lowToHigh > tihs.state: ",t.state)},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.lowToHigh(),console.log("Main > componentDidMount > tihs.state: ",this.state),navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var e=t.coords.latitude,n=t.coords.longitude,a="https://www.openstreetmap.org/#map=18/".concat(e,"/").concat(n);console.log(a)}),(function(){return console.log("Error")}),{enableHighAccuracy:!0,timeout:5e3})}},{key:"render",value:function(){return console.log("Main > render > this.state: ",this.state),Object(l.jsxs)("main",{children:[Object(l.jsx)(p,{attendance:this.state.text}),Object(l.jsx)(O,{lowToHigh:this.lowToHigh})]})}}]),n}(s.a.Component),g=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)(f,{}),Object(l.jsx)(x,{})]})}}]),n}(s.a.Component);j.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.af7f7247.chunk.js.map