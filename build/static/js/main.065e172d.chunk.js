(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(r,"?100x100"),alt:"robots"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:t})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(c.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.065e172d.chunk.js.map