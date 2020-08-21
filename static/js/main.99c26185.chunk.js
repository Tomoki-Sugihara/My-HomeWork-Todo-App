(this["webpackJsonpmy-homework-todo-app"]=this["webpackJsonpmy-homework-todo-app"]||[]).push([[0],{107:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),c=t.n(o),i=t(2),u=t(45),l=t.n(u),s=t(64),d=t(43),m=t(65),p=t(25),b=t(20),f=t.n(b),h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t="".concat("https://my-homework-todo-api.herokuapp.com/","api/todo_lists/");switch(e.type){case"CREATE_TODO_ITEM":var r=function(){return(new Date).toISOString()+"~"+Math.random().toString(36)},a={key:r(),title:e.title,isImportant:e.isImportant,isDone:!1,subjectIndex:e.subjectIndex};return f.a.post(t,a).then((function(n){console.log(n)})),[].concat(Object(p.a)(n),[a]);case"DELETE_TODO_ITEM":var o=Object(p.a)(n);o.splice(e.index,1);var c=n[e.index].key;return f.a.delete(t,{data:{key:c}}).then((function(n){console.log(n)})),o;case"TOGGLE_IS_IMPORTANT":var i=e.index,u=Object(p.a)(n);u[i].isImportant=!u[i].isImportant;var l=n[e.index].key;return f.a.patch(t+"is_important/",{key:l}).then((function(n){console.log(n)})),u;case"TOGGLE_IS_DONE":var s=e.index,d=Object(p.a)(n);d[s].isDone=!d[s].isDone;var m=n[e.index].key;return f.a.patch(t+"is_done/",{key:m}).then((function(n){console.log(n)})),d;case"MOUNT_TODO_LIST":return e.data;default:return n}},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t="".concat("https://my-homework-todo-api.herokuapp.com/","api/subject_lists/");switch(e.type){case"CREATE_SUBJECT":var r=function(){return(new Date).toISOString()+"~"+Math.random().toString(36)},a={key:r(),title:e.title};return f.a.post(t,a).then((function(n){console.log(n)})),[].concat(Object(p.a)(n),[a]);case"MOUNT_SUBJECT_LIST":return e.data;default:return n}},v=Object(m.a)({todoList:h,subjectList:x}),g=Object(r.createContext)(),E={todoList:[],subjectList:[]},j={title:"",isImportant:!1,subjectTitle:""},O=t(29),y=t(4);function k(){var n=Object(i.a)(["\n   display: flex;\n   height: 37.5px;\n   width: 100%;\n   font-size: 15px;\n   margin: auto 0;\n   :hover {\n      background-color: rgb(50, 50, 50);\n      cursor: pointer;\n   }\n   p {\n      margin: auto 0 auto 15px;\n   }\n"]);return k=function(){return n},n}function T(){var n=Object(i.a)(["\n   display: flex;\n   :hover {\n      background-color: rgb(50, 50, 50);\n      cursor: pointer;\n   }\n"]);return T=function(){return n},n}var I=y.b.div(T()),S=y.b.div(k()),w=function(n){var e=Object(r.useContext)(g).setActiveSubjectIndex;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null,a.a.createElement(S,{onClick:function(){e(n.index)}},a.a.createElement("p",null,n.subject.title))))},_=t(5),C=t(129),L=t(38),D=t.n(L),z=t(70),M=t.n(z);function N(){var n=Object(i.a)(["\n   margin: 0;\n  "]);return N=function(){return n},n}function A(){var n=Object(i.a)(["\n   width: 90%;\n   height: 100%;\n   margin-left: 3px;\n   font-size: 13.5px;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   color: white;\n   border-style: none;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   :focus {\n      outline: 0;\n      ::placeholder {\n         color: transparent;\n      }\n   }\n   ","\n"]);return A=function(){return n},n}function G(){var n=Object(i.a)(["\n  "]);return G=function(){return n},n}function U(){var n=Object(i.a)(["\n   display: flex;\n   height: 36px;\n   width: 100%;\n   margin-top: 15px;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   ","\n"]);return U=function(){return n},n}function F(){var n=Object(i.a)([""]);return F=function(){return n},n}function R(){var n=Object(i.a)(["\n    left: -300px;\n    transition: all 0.2s;\n  "]);return R=function(){return n},n}function J(){var n=Object(i.a)(["\n      display: block;\n  "]);return J=function(){return n},n}function B(){var n=Object(i.a)(["\n      display: none;\n  "]);return B=function(){return n},n}function P(){var n=Object(i.a)(["\n      display: block;\n  "]);return P=function(){return n},n}function H(){var n=Object(i.a)(["\n   position: fixed;\n   z-index: 6;\n   height: 100%;\n   width: 230px;\n   padding-top: 10px;\n   background-color: rgb(43, 43, 43);\n   .close {\n      display: none;\n      width: 24px;\n      margin-left: auto;\n      ","\n   }\n   #firstLabel {\n      display: block;\n      ","\n   }\n   #secondLabel {\n      display: none;\n      ","\n   }\n\n   ","\n"]);return H=function(){return n},n}function W(){var n=Object(i.a)(["\n      display: flex;\n  "]);return W=function(){return n},n}function q(){var n=Object(i.a)(["\n   width: 300px;\n   height: 100%;\n   background-color: rgb(43, 43, 43);\n\n   input[type='checkbox'] {\n      position: fixed;\n      left: -200%;\n      :checked ~ #sideMenuContainer {\n         left: 0;\n      }\n\n      :checked ~ .back {\n         position: fixed;\n         width: 100%;\n         height: 100%;\n         background: rgba(0, 0, 0, 0.8);\n         z-index: 4;\n      }\n   }\n   .open {\n      display: none;\n      position: fixed;\n      left: 3%;\n      top: 0;\n      z-index: 3;\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      p {\n         width: 24px;\n         height: 24px;\n         margin: auto;\n      }\n      ","\n   }\n"]);return q=function(){return n},n}var K=y.b.div(q(),_.a.lessThan("medium")(W())),Q=y.b.aside(H(),_.a.lessThan("medium")(P()),_.a.lessThan("medium")(B()),_.a.lessThan("medium")(J()),_.a.lessThan("medium")(R())),V=y.b.div(F()),X=y.b.form(U(),_.a.lessThan("medium")(G())),Y=y.b.input(A(),_.a.lessThan("medium")(N())),Z=function(){var n=Object(r.useContext)(g),e=n.state,t=n.dispatch,o=n.setActiveSubjectIndex,c=n.item,i=n.setItem,u=e.subjectList.map((function(n,e){return a.a.createElement(w,{subject:n,key:e,index:e})})),l=function(){o(-1)},s=function(){""!==c.subjectTitle.trim()&&(t({type:"CREATE_SUBJECT",title:c.subjectTitle}),i((function(n){return Object(O.a)({},n,{subjectTitle:""})})))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement("input",{id:"menu",type:"checkbox"}),a.a.createElement("label",{htmlFor:"menu",className:"open"},a.a.createElement("p",null,a.a.createElement(M.a,{className:"menuIcon"}))),a.a.createElement("label",{htmlFor:"menu",className:"back"}),a.a.createElement(Q,{id:"sideMenuContainer"},a.a.createElement("label",{id:"firstLabel"},a.a.createElement(S,{onClick:l},a.a.createElement("p",{style:{color:"tomato"}},"\u3059\u3079\u3066")),a.a.createElement(V,null,u)),a.a.createElement("label",{htmlFor:"menu",id:"secondLabel"},a.a.createElement(S,{onClick:l},a.a.createElement("p",{style:{color:"tomato"}},"\u3059\u3079\u3066")),a.a.createElement(V,null,u))," ",a.a.createElement(X,{onSubmit:function(n){n.preventDefault(),s()}},a.a.createElement(C.a,{color:"primary",onClick:function(n){n.preventDefault(),s()}},a.a.createElement(D.a,{color:"primary"})),a.a.createElement(Y,{type:"text",placeholder:"Subject\u3092\u8ffd\u52a0",value:c.subjectTitle,onChange:function(n){var e=n.target.value;i((function(n){return Object(O.a)({},n,{subjectTitle:e})}))}})))))};function $(){var n=Object(i.a)(["\n      margin: 0 auto;\n  "]);return $=function(){return n},n}function nn(){var n=Object(i.a)(["\n   display: flex;\n\n   background-color: rgba(33, 33, 33, 0.96);\n   margin-left: 45px;\n   ","\n   h3 {\n      margin: auto 0;\n      user-select: none;\n   }\n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n   width: 94%;\n  "]);return en=function(){return n},n}function tn(){var n=Object(i.a)(["\n   position: fixed;\n   display: flex;\n   width: calc(92% - 230px);\n   height: 48px;\n   background-color: rgba(33, 33, 33, 0.96);\n   ","\n"]);return tn=function(){return n},n}var rn=y.b.div(tn(),_.a.lessThan("medium")(en())),an=y.b.div(nn(),_.a.lessThan("small")($())),on=function(){var n=Object(r.useContext)(g),e=n.state,t=n.activeSubjectIndex;return a.a.createElement(a.a.Fragment,null,a.a.createElement(rn,null,a.a.createElement(an,null,a.a.createElement("h3",null,-1===t?"My HomeWork Todo":e.subjectList[t].title))))},cn=t(128),un=t(73),ln=t.n(un),sn=t(72),dn=t.n(sn),mn=t(76),pn=t.n(mn),bn=t(41),fn=t.n(bn),hn=t(40),xn=t.n(hn),vn=t(130),gn=t(127),En=t(74),jn=t.n(En);function On(){var n=Object(i.a)([""]);return On=function(){return n},n}function yn(){var n=Object(i.a)(["\n   flex-direction: row;\n   margin: auto 0 auto 6px;\n  "]);return yn=function(){return n},n}function kn(){var n=Object(i.a)(["\n   width: auto;\n   font-size: 11px;\n   margin: auto 0 auto 15px;\n   ","\n\n   >p {\n      margin-top: 2px;\n   }\n"]);return kn=function(){return n},n}function Tn(){var n=Object(i.a)(["\n   margin: auto 0 auto 3.5px;\n   font-size: 16.5px;\n"]);return Tn=function(){return n},n}function In(){var n=Object(i.a)(["\n      flex-direction: column;\n  "]);return In=function(){return n},n}function Sn(){var n=Object(i.a)(["\n   display: flex;\n   height: 45px;\n   list-style: none;\n   background-color: rgba(43, 43, 43);\n   border-radius: 5px;\n   margin: 3.5px 0;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   > div {\n      display: flex;\n      ","\n   }\n"]);return Sn=function(){return n},n}var wn=y.b.div(Sn(),_.a.lessThan("small")(In())),_n=y.b.p(Tn()),Cn=y.b.div(kn(),_.a.lessThan("small")(yn())),Ln=y.b.div(On()),Dn=function(n){var e=Object(r.useContext)(g),t=e.state,o=e.dispatch,c=e.activeSubjectIndex;return a.a.createElement(wn,{style:{display:-1===c||c===n.todo.subjectIndex?"flex":"none"}},a.a.createElement(cn.a,{icon:a.a.createElement(dn.a,{color:"primary",fontSize:"small"}),checkedIcon:a.a.createElement(ln.a,{color:"primary",fontSize:"small"}),color:"primary",checked:n.todo.isDone,onClick:function(){o({type:"TOGGLE_IS_DONE",index:n.index})}}),a.a.createElement("div",null,a.a.createElement(_n,null,n.todo.title),a.a.createElement(Cn,{style:{display:-1===c?"flex":"none"}},a.a.createElement(jn.a,{fontSize:"small",style:{margin:"auto 0"}}),a.a.createElement("p",null,-1===n.todo.subjectIndex?"Task":t.subjectList[n.todo.subjectIndex].title))),a.a.createElement(cn.a,{style:{marginLeft:"auto"},icon:a.a.createElement(xn.a,{color:"primary",fontSize:"small"}),checkedIcon:a.a.createElement(fn.a,{color:"primary",fontSize:"small"}),color:"primary",checked:n.todo.isImportant,onClick:function(){o({type:"TOGGLE_IS_IMPORTANT",index:n.index})}}),a.a.createElement(vn.a,{title:"delete",enterDelay:600,leaveDelay:100,TransitionComponent:gn.a},a.a.createElement(Ln,{onClick:function(){o({type:"DELETE_TODO_ITEM",index:n.index})}},a.a.createElement(C.a,{color:"secondary",fontSize:"small",style:{height:"100%"}},a.a.createElement(pn.a,{color:"secondary",fontSize:"small"})))))};function zn(){var n=Object(i.a)(["\n   margin: 48px 0 22.5px 0;\n   width: 100%;\n"]);return zn=function(){return n},n}var Mn=y.b.div(zn()),Nn=function(){var n=Object(r.useContext)(g).state.todoList.map((function(n,e){return a.a.createElement(Dn,{todo:n,key:e,index:e})}));return a.a.createElement(Mn,null,n)};function An(){var n=Object(i.a)(["\n   margin: 0;\n  "]);return An=function(){return n},n}function Gn(){var n=Object(i.a)(["\n   width: 90%;\n   height: 100%;\n   margin-left: 3px;\n   font-size: 13.5px;\n   background-color: rgb(43, 43, 43);\n   color: white;\n   border-style: none;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   :focus {\n      outline: 0;\n      ::placeholder {\n         color: transparent;\n      }\n   }\n   ","\n"]);return Gn=function(){return n},n}function Un(){var n=Object(i.a)(["\n  "]);return Un=function(){return n},n}function Fn(){var n=Object(i.a)(["\n   display: flex;\n   height: 100%;\n   width: 100%;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   ","\n"]);return Fn=function(){return n},n}function Rn(){var n=Object(i.a)(["\n   width: 94%;\n   margin-right: 3%;\n  "]);return Rn=function(){return n},n}function Jn(){var n=Object(i.a)(["\n   position: fixed;\n   bottom: 0;\n   background-color: rgba(33, 33, 33, 0.95);\n   width: calc(92% - 230px);\n   height: 58.5px;\n   padding: 7.5px 0 7.5px 0;\n   margin-right: 5%;\n   ","\n"]);return Jn=function(){return n},n}var Bn=y.b.div(Jn(),_.a.lessThan("medium")(Rn())),Pn=y.b.form(Fn(),_.a.lessThan("medium")(Un())),Hn=y.b.input(Gn(),_.a.lessThan("medium")(An())),Wn=function(){var n=Object(r.useContext)(g),e=n.dispatch,t=n.activeSubjectIndex,o=n.item,c=n.setItem;return a.a.createElement(Bn,null,a.a.createElement(Pn,{onSubmit:function(n){n.preventDefault(),""!==o.title.trim()&&(e({type:"CREATE_TODO_ITEM",title:o.title,isImportant:o.isImportant,subjectIndex:t}),c(j))}},a.a.createElement(C.a,{color:"primary",type:"submit"},a.a.createElement(D.a,{color:"primary"})),a.a.createElement(Hn,{type:"text",placeholder:"\u30bf\u30b9\u30af\u3092\u8ffd\u52a0",value:o.title,onChange:function(n){var e=n.target.value;c((function(n){return Object(O.a)({},n,{title:e})}))}}),a.a.createElement(cn.a,{style:{marginLeft:"auto"},icon:a.a.createElement(xn.a,{color:"primary"}),checkedIcon:a.a.createElement(fn.a,{color:"primary"}),color:"primary",checked:o.isImportant,onClick:function(){c((function(n){return Object(O.a)({},n,{isImportant:!n.isImportant})}))}})))};function qn(){var n=Object(i.a)(["\n   position: relative;\n   grid-area: container;\n   height: 100%;\n"]);return qn=function(){return n},n}function Kn(){var n=Object(i.a)(["\n   grid-template:\n      ' ... ...... ... ' 0px\n      ' ... container ... ' 1fr\n      ' ... ...... ... ' 10px\n      / 3% 1fr 3%;\n    \n  "]);return Kn=function(){return n},n}function Qn(){var n=Object(i.a)(["\n   display: grid;\n   grid-template:\n      ' ... ... ...... ... ' 0px\n      ' ... ... container ... ' 1fr\n      ' ... ... ...... ... ' 10px\n      / 230px 4% 1fr 4%;\n   height: 100%;\n   width: 100%;\n   ","\n"]);return Qn=function(){return n},n}var Vn=y.b.div(Qn(),_.a.lessThan("medium")(Kn())),Xn=y.b.div(qn()),Yn=function(){var n=Object(r.useReducer)(v,E),e=Object(d.a)(n,2),t=e[0],o=e[1];Object(r.useEffect)((function(){var n,e;function t(){return(t=Object(s.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat("https://my-homework-todo-api.herokuapp.com/","api/"),t.next=3,f.a.get(r+"subject_lists/").then((function(n){e=n.data}));case 3:return t.next=5,f.a.get(r+"todo_lists/").then((function(e){n=e.data}));case 5:return t.next=7,o({type:"MOUNT_SUBJECT_LIST",data:e});case 7:return t.next=9,o({type:"MOUNT_TODO_LIST",data:n});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var c=Object(r.useState)(-1),i=Object(d.a)(c,2),u=i[0],m=i[1],p=Object(r.useState)(j),b=Object(d.a)(p,2),h=b[0],x=b[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.Provider,{value:{state:t,dispatch:o,activeSubjectIndex:u,setActiveSubjectIndex:m,item:h,setItem:x}},a.a.createElement(Vn,null,a.a.createElement(Z,null),a.a.createElement(Xn,null,a.a.createElement(on,null),a.a.createElement(Nn,null),a.a.createElement(Wn,null)))))};c.a.render(a.a.createElement(Yn,null),document.getElementById("root"))},80:function(n,e,t){n.exports=t(107)}},[[80,1,2]]]);
//# sourceMappingURL=main.99c26185.chunk.js.map