(this.webpackJsonpattendance_checker=this.webpackJsonpattendance_checker||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(5),r=n(7),o=n(6),i=n(0),s=n.n(i),j=n(11),l=n.n(j),u=n(12),h=n(1),b=n(2),d=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return console.log("ListAttendance > render > this.state: ",this.props),Object(b.jsx)("div",{className:"list__attendance",children:this.props.attendance.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:t.day}),Object(b.jsx)("span",{children:t.when}),Object(b.jsx)("span",{children:t.pass}),Object(b.jsx)("span",{children:t.mail})]},t.id)}))})}}]),n}(s.a.Component),p=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"list__header",children:[Object(b.jsx)("h4",{children:"Day"}),Object(b.jsx)("h4",{children:"When"}),Object(b.jsx)("h4",{children:"Pass"}),Object(b.jsx)("h4",{children:"Mail"})]})}}]),n}(s.a.Component);function O(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDay(),c=t.getHours(),r=t.getMinutes();r<10&&(r="0"+String(r));var o=e+"/"+n+"/"+a,i=parseInt(c+""+r),s="";return{day:o,when:i,pass:s=i<parseInt("0700")?"Y":"N",mail:"Y"===s?"N":"Y"}}var v=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleLowToHigh=function(e){e.preventDefault();var n=O();t.props.lowToHigh(n)},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"button",children:Object(b.jsx)("form",{onSubmit:this.handleLowToHigh,children:Object(b.jsx)("button",{type:"submit",children:"Check In"})})})}}]),n}(s.a.Component),f=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=O();console.log(t),this.props.lowToHigh(t)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"From iPhone"})})}}]),n}(v),g=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"list",children:[Object(b.jsx)(p,{}),Object(b.jsx)(d,{attendance:this.props.attendance})]})}}]),n}(s.a.Component);s.a.Component,s.a.Component;s.a.Component;var x=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={text:[]},t.lowToHigh=function(e){var n=e;n&&t.setState((function(){return{text:t.state.text.concat(n).map((function(t,e){return t.id=e,t}))}})),console.log("Main > lowToHigh > tihs.state: ",t.state)},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.lowToHigh(),console.log("Main > componentDidMount > tihs.state: ",this.state),navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var e=t.coords.latitude,n=t.coords.longitude,a="https://www.openstreetmap.org/#map=18/".concat(e,"/").concat(n);console.log(a)}),(function(){return console.log("Error")}),{enableHighAccuracy:!0,timeout:5e3})}},{key:"render",value:function(){return console.log("Main > render > this.state: ",this.state),Object(b.jsxs)("main",{children:[Object(b.jsx)(g,{attendance:this.state.text}),this.props.arrived?Object(b.jsx)(f,{lowToHigh:this.lowToHigh}):Object(b.jsx)(v,{lowToHigh:this.lowToHigh})]})}}]),n}(s.a.Component),m=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/test",element:Object(b.jsx)(x,{arrived:"true"})}),Object(b.jsx)(h.a,{path:"/",element:Object(b.jsx)(x,{})})]})})})}}]),n}(s.a.Component);l.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b3245a98.chunk.js.map