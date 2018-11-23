(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(7),r=o.n(i),c=(o(14),o(8)),l=o(1),s=o(2),d=o(4),u=o(3),h=o(5),g="https://www.jsonstore.io/c1e61fddba68a34eb79eeb97fc56d72df86092d86ad5def5dc25a7252e6cf382",f=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"todo"},a.a.createElement("input",{className:"todoCheck",type:"checkbox",checked:this.props.todo.completed,onChange:function(){return e.props.toggle(e.props.todo.id)}}),a.a.createElement("span",{className:["todoText",this.props.todo.completed?"todoChecked":""].join(" ")},this.props.todo.title))}}]),t}(a.a.Component),m=function(e){return a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"TODO"),e.login&&a.a.createElement("div",{className:"icons"},a.a.createElement("svg",{className:"feather"},a.a.createElement("use",{xlinkHref:"%PUBLIC_URL%/img/feather-sprite.svg#bell-off"})),a.a.createElement("svg",{className:"feather log-out","aria-label":"Logout",role:"button",onClick:e.logOut},a.a.createElement("use",{xlinkHref:"%PUBLIC_URL%/img/feather-sprite.svg#log-out"}))))},p=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"loginScreen"},a.a.createElement("h2",{className:"loginLabel"},"Enter user name"),a.a.createElement("div",{className:"loginControls"},a.a.createElement("input",{type:"text",id:"username",placeholder:"Avi"}),a.a.createElement("svg",{className:"feather right-arrow login-button","aria-label":"Login",role:"button",onClick:function(){return e.props.login(document.getElementById("username").value)}},a.a.createElement("use",{xlinkHref:"%PUBLIC_URL%/img/feather-sprite.svg#arrow-right-circle"}))))}}]),t}(a.a.Component),v=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchTodos()}},{key:"fetchTodos",value:function(){var e=this;fetch(g+"/todos/"+this.props.login).then(function(e){return e.json()}).then(function(t){e.setState({todos:t.result||[]})})}},{key:"addTodo",value:function(e){this.postTodos(Object(c.a)(this.state.todos).concat([{title:e,completed:!1,id:this.state.todos.length+1}]))}},{key:"postTodos",value:function(e){var t=this;fetch(g+"/todos/"+this.props.login,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then(function(){t.fetchTodos(),document.getElementById("todoText").value=""}).catch(console.error)}},{key:"toggleTodo",value:function(e){var t=this.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t});this.postTodos(t)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"todoItems"},this.state.todos.filter(function(e){return!e.completed}).map(function(t){return a.a.createElement(f,{key:t.id,todo:t,toggle:e.toggleTodo.bind(e)})})),a.a.createElement("h2",{className:"labelFinished"},"Finished"),a.a.createElement("div",{className:"todoItems"},this.state.todos.filter(function(e){return e.completed}).map(function(t){return a.a.createElement(f,{key:t.id,todo:t,toggle:e.toggleTodo.bind(e)})})),a.a.createElement("div",{className:"newTodo"},a.a.createElement("input",{type:"text",id:"todoText",placeholder:"Enter todo..."}),a.a.createElement("svg",{className:"feather right-arrow","aria-label":"Add new todo",role:"button",onClick:function(){return e.addTodo(document.getElementById("todoText").value)}},a.a.createElement("use",{xlinkHref:"%PUBLIC_URL%/img/feather-sprite.svg#arrow-right-circle"}))))}}]),t}(a.a.Component),b=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={login:null},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("login");e&&this.setState({login:e})}},{key:"login",value:function(e){localStorage.setItem("login",e),this.setState({login:e})}},{key:"logOut",value:function(){localStorage.clear(),this.setState({login:null})}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(m,{logOut:this.logOut.bind(this),login:this.state.login}),this.state.login?a.a.createElement(v,{login:this.state.login}):a.a.createElement(p,{login:this.login.bind(this)}))}}]),t}(a.a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo_pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todo_pwa","/service-worker-custom.js");console.log("Registering"),w?(console.log("Registering"),function(e,t){fetch(e).then(function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):(console.log("Registering"),E(t,e))})}}()},9:function(e,t,o){e.exports=o(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.chunk.js.map