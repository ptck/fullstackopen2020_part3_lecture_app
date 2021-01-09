(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),o=n(15),a=n.n(o),i=n(6),u=n(3),s=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[e.content,Object(c.jsx)("button",{onClick:n,children:r})]})},l=n(4),j=n.n(l),f="/api/notes",b={getAll:function(){return j.a.get(f).then((function(t){return t.data}))},create:function(t){return j.a.post(f,t).then((function(t){return t.data}))},update:function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))}},d=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},p=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},m=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],a=Object(r.useState)(""),l=Object(u.a)(a,2),j=l[0],f=l[1],m=Object(r.useState)(!0),O=Object(u.a)(m,2),h=O[0],v=O[1],x=Object(r.useState)(null),g=Object(u.a)(x,2),S=g[0],k=g[1];Object(r.useEffect)((function(){b.getAll().then((function(t){o(t)}))}),[]);var y=h?n:n.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(p,{message:S}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return v(!h)},children:["show ",h?"important":"all"]})}),Object(c.jsx)("ul",{children:y.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});b.update(t,c).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){k("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()<.5};b.create(e).then((function(t){o(n.concat(t)),f("")}))},children:[Object(c.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(d,{})]})};n(39);a.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f2a8ce42.chunk.js.map