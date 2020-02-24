(this["webpackJsonpgraphql-checklist"]=this["webpackJsonpgraphql-checklist"]||[]).push([[0],{27:function(e,t,n){e.exports=n(38)},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(22),c=n.n(o),i=n(11),s=n.n(i),u=n(18),l=n(15),d=n(14),f=n(12),p=n(10);function m(){var e=Object(d.a)(["\n  mutation deleteTodo($id: uuid!) {\n    delete_todos(where: { id: { _eq: $id } }) {\n      returning {\n        done\n        id\n        text\n      }\n    }\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(d.a)(["\n  mutation addTodo($text: String!) {\n    insert_todos(objects: { text: $text }) {\n      returning {\n        done\n        id\n        text\n      }\n    }\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(d.a)(["\n  mutation toggleTodo($id: uuid!, $done: Boolean!) {\n    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {\n      returning {\n        done\n        id\n        text\n      }\n    }\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  query getTodos {\n    todos {\n      done\n      id\n      text\n    }\n  }\n"]);return v=function(){return e},e}var g=Object(p.b)(v()),k=Object(p.b)(h()),x=Object(p.b)(b()),y=Object(p.b)(m());var w=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(f.b)(g),c=o.data,i=o.loading,d=o.error,p=Object(f.a)(k),m=Object(l.a)(p,1)[0],b=Object(f.a)(x,{onCompleted:function(){return a("")}}),h=Object(l.a)(b,1)[0],v=Object(f.a)(y),w=Object(l.a)(v,1)[0],j="vh-100 code flex flex-column items-center bg-dark-blue white pa3 fl-1";function E(){return(E=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.done,e.next=3,m({variables:{id:n,done:!a}});case 3:r=e.sent,console.log("toggled todo",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.trim()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,h({variables:{text:n},refetchQueries:[{query:g}]});case 5:a=e.sent,console.log("added todo",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,!window.confirm("Do you want to delete this todo?")){e.next=7;break}return e.next=5,w({variables:{id:n},update:function(e){var t=e.readQuery({query:g}).todos.filter((function(e){return e.id!==n}));e.writeQuery({query:g,data:{todos:t}})}});case 5:a=e.sent,console.log("deleted todo",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i?r.a.createElement("div",{className:j},"Loading todos...",r.a.createElement("p",{className:"fl w-50"},"The database for this app uses free heroku hosting, and will go to sleep after an hour of inactivity. Thus, if the app hasn't been visited recently then it can take a few moments for the DB to wake up and send the todo list info. Thank you for your patience!")):d?r.a.createElement("div",{className:j},"Error fetching todos!"):r.a.createElement("div",{className:j},r.a.createElement("h1",{className:"f2-l"},"GraphQL Checklist"," ",r.a.createElement("span",{role:"img","aria-label":"Checkmark"},"\u2705")),r.a.createElement("h5",{className:"tc mt0 fl w-50"},"(Doubleclick on an item to cross it off, or click the '\xd7' to remove it)"),r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)},className:"mb3"},r.a.createElement("input",{className:"pa2 f4 b--dashed",type:"text",placeholder:"write your todo",onChange:function(e){return a(e.target.value)},value:n}),r.a.createElement("button",{className:"pa2 f4 bg-green",type:"submit"},"Create")),r.a.createElement("div",{className:"flex items-center justify-center flex-column"},c.todos.map((function(e){return r.a.createElement("p",{onDoubleClick:function(){return function(e){return E.apply(this,arguments)}(e)},key:e.id},r.a.createElement("span",{className:"pointer list pa1 f3 ".concat(e.done&&"strike")},e.text),r.a.createElement("button",{className:"bg-transparent nt bn f4",onClick:function(){return function(e){return N.apply(this,arguments)}(e)}},r.a.createElement("span",{className:"red"},"\xd7")))}))))},j=n(7),E=(n(36),new p.a({uri:"https://todo-react-graphql.herokuapp.com/v1/graphql"}));c.a.render(r.a.createElement(j.a,{client:E},r.a.createElement(w,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9eea7fa5.chunk.js.map