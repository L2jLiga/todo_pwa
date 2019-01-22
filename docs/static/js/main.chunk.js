(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),s=n(2),c=n(3),l=n(5),u=n(4),d=n(6),p=n(7),h=n.n(p),f=n(1),m=n.n(f),g=n(12),v=n(8),b=(n(20),n(21),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"openEditorWindow",value:function(){var e=window.prompt("Update ToDo",this.props.todo.title);"string"===typeof e&&e.length&&e!==this.props.todo.title&&this.props.update(this.props.todo.id,e)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"todo"},a.a.createElement("input",{className:"todoCheck",type:"checkbox",checked:this.props.todo.completed,onChange:function(){return e.props.toggle(e.props.todo.id)}}),a.a.createElement("span",{className:["todoText",this.props.todo.completed?"todoChecked":""].join(" "),onClick:this.openEditorWindow.bind(this)},this.props.todo.title),a.a.createElement("span",{className:"todoDelete",onClick:function(){return e.props.remove(e.props.todo.id)}},"Delete"))}}]),t}(o.Component)),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchTodos()}},{key:"componentWillUnmount",value:function(){}},{key:"fetchTodos",value:function(){var e=this;fetch("https://www.jsonstore.io/c1e61fddba68a34eb79eeb97fc56d72df86092d86ad5def5dc25a7252e6cf382/todos/"+this.props.login).then(function(e){return e.json()}).then(function(e){return e.result||[]}).then(function(t){return e.setState({todos:t})})}},{key:"getLatestTodos",value:function(){var e=this;return h.a.getItem("todos").then(function(t){return t||e.state.todos})}},{key:"addTodo",value:function(){var e=Object(v.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestTodos();case 2:return n=e.sent,e.next=5,this.postTodos([].concat(Object(g.a)(n),[{title:t,completed:!1,id:n.length+1}]));case 5:document.getElementById("todoText").value="";case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"removeTodo",value:function(){var e=Object(v.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestTodos();case 2:return n=e.sent,e.next=5,this.postTodos(n.filter(function(e){return e.id!==t}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"postTodos",value:function(){var e=Object(v.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.setItem("todos",t);case 2:return e.next=4,navigator.serviceWorker.ready;case 4:return n=e.sent,e.next=7,n.sync.register("sync");case 7:this.setState({todos:t});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"toggleTodo",value:function(){var e=Object(v.a)(m.a.mark(function e(t){var n,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestTodos();case 2:n=e.sent,o=n.map(function(e){return e.id===t&&(e.completed=!e.completed),e}),this.postTodos(o);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateTodo",value:function(){var e=Object(v.a)(m.a.mark(function e(t,n){var o,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestTodos();case 2:o=e.sent,a=o.map(function(e){return e.id===t&&(e.title=n),e}),this.postTodos(a);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"content-wrapper"},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"todoItems"},this.state.todos.filter(function(e){return!e.completed}).map(function(t){return a.a.createElement(b,{key:t.id,todo:t,toggle:e.toggleTodo.bind(e),update:e.updateTodo.bind(e),remove:e.removeTodo.bind(e)})})),a.a.createElement("h2",{className:"labelFinished"},"Finished"),a.a.createElement("div",{className:"todoItems"},this.state.todos.filter(function(e){return e.completed}).map(function(t){return a.a.createElement(b,{key:t.id,todo:t,toggle:e.toggleTodo.bind(e),update:e.updateTodo.bind(e),remove:e.removeTodo.bind(e)})})),a.a.createElement("div",{className:"newTodo"},a.a.createElement("input",{type:"text",id:"todoText",placeholder:"Enter todo..."}),a.a.createElement("svg",{className:"feather right-arrow","aria-label":"Add new todo",role:"button",onClick:function(){return e.addTodo(document.getElementById("todoText").value)}},a.a.createElement("use",{xlinkHref:"/todo_pwa/img/feather-sprite.svg#arrow-right-circle"})))))}}]),t}(o.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"TODO"),this.props.login&&a.a.createElement("div",{className:"icons"},a.a.createElement("svg",{className:"feather"},a.a.createElement("use",{xlinkHref:"/todo_pwa/img/feather-sprite.svg#bell-off"})),a.a.createElement("svg",{className:"feather log-out","aria-label":"Logout",role:"button",onClick:this.props.logOut},a.a.createElement("use",{xlinkHref:"/todo_pwa/img/feather-sprite.svg#log-out"}))))}}]),t}(o.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"loginScreen"},a.a.createElement("h2",{className:"loginLabel"},"Enter user name"),a.a.createElement("div",{className:"loginControls"},a.a.createElement("input",{type:"text",id:"username",placeholder:"Avi"}),a.a.createElement("svg",{className:"feather right-arrow login-button","aria-label":"Login",role:"button",onClick:function(){return e.props.login(document.getElementById("username").value)}},a.a.createElement("use",{xlinkHref:"/todo_pwa/img/feather-sprite.svg#arrow-right-circle"}))))}}]),t}(o.Component),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={login:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.getItem("login").then(function(t){t&&e.setState({login:t})})}},{key:"login",value:function(e){h.a.setItem("login",e),this.setState({login:e})}},{key:"logOut",value:function(){h.a.clear(),this.setState({login:null})}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(k,{logOut:this.logOut.bind(this),login:this.state.login}),this.state.login?a.a.createElement(w,{login:this.state.login}):a.a.createElement(y,{login:this.login.bind(this)}))}}]),t}(o.Component),O=(n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo_pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todo_pwa","/service-worker-custom.js");O?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.chunk.js.map