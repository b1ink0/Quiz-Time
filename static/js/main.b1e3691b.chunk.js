(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(18),i=n.n(a),r=(n(23),n(24),n(3)),l=n(13),u=(n(25),n(42),l.a.initializeApp({apiKey:"AIzaSyDfhzeS7B-S4xcRccE-kDKFFX0R3ZVx0bo",authDomain:"quizapp-b1ink0.firebaseapp.com",projectId:"quizapp-b1ink0",storageBucket:"quizapp-b1ink0.appspot.com",messagingSenderId:"979392626883",appId:"1:979392626883:web:89b6e75947c56003272276"})),o=u.auth(),j=new l.a.auth.GoogleAuthProvider,d=u.firestore(),b={users:d.collection("users"),quizs:d.collection("quizs"),answers:d.collection("answers"),results:d.collection("results"),quizShare:d.collection("quizShare"),getCurrentTimeStamp:l.a.firestore.FieldValue.serverTimestamp},f=n(1),m=c.a.createContext();function x(){return Object(s.useContext)(m)}function h(e){var t=e.children,n=Object(s.useState)(),c=Object(r.a)(n,2),a=c[0],i=c[1],l=Object(s.useState)(!0),u=Object(r.a)(l,2),d=u[0],b=u[1];Object(s.useEffect)((function(){return o.onAuthStateChanged((function(e){e?(i(e),b(!1)):b(!1)}))}));var x={currentUser:a,logIn:function(){o.signInWithPopup(j).then().catch((function(e){return console.log(e)}))},logOut:function(){return o.signOut()}};return Object(f.jsx)(m.Provider,{value:x,children:!d&&t})}var O=c.a.createContext(),p=function(){return Object(s.useContext)(O)},v=function(e){var t=e.children,n=Object(s.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1],l=Object(s.useState)(!1),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(s.useState)(!0),b=Object(r.a)(d,2),m=b[0],x=b[1],h=Object(s.useState)(!1),p=Object(r.a)(h,2),v=p[0],g=p[1],N=Object(s.useState)(1),S=Object(r.a)(N,2),y=S[0],z=S[1],q=Object(s.useState)([]),w=Object(r.a)(q,2),C=w[0],Q=w[1],L=Object(s.useState)(""),E=Object(r.a)(L,2),k=E[0],B=E[1],I=Object(s.useState)(!0),A=Object(r.a)(I,2),D=A[0],R=A[1],T=Object(s.useState)(!1),F=Object(r.a)(T,2),P=F[0],U=F[1],G=Object(s.useState)(!0),M=Object(r.a)(G,2),Z=M[0],_=M[1],J=Object(s.useState)(!0),Y=Object(r.a)(J,2),H=Y[0],K=Y[1],V=Object(s.useState)(!1),W=Object(r.a)(V,2),X=W[0],$=W[1],ee=Object(s.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],se=te[1],ce=Object(s.useState)(!0),ae=Object(r.a)(ce,2),ie=ae[0],re=ae[1],le=Object(s.useState)([]),ue=Object(r.a)(le,2),oe=ue[0],je=ue[1],de=Object(s.useState)(""),be=Object(r.a)(de,2),fe=be[0],me=be[1],xe=Object(s.useState)([]),he=Object(r.a)(xe,2),Oe=he[0],pe=he[1],ve=Object(s.useState)(""),ge=Object(r.a)(ve,2),Ne=ge[0],Se=ge[1],ye=Object(s.useState)(""),ze=Object(r.a)(ye,2),qe=ze[0],we=ze[1],Ce=Object(s.useState)(0),Qe=Object(r.a)(Ce,2),Le=Qe[0],Ee=Qe[1],ke=Object(s.useState)(0),Be=Object(r.a)(ke,2),Ie=Be[0],Ae=Be[1],De=Object(s.useState)(0),Re=Object(r.a)(De,2),Te=Re[0],Fe=Re[1],Pe=Object(s.useState)(!1),Ue=Object(r.a)(Pe,2),Ge=Ue[0],Me=Ue[1],Ze=Object(s.useState)(!1),_e=Object(r.a)(Ze,2),Je=_e[0],Ye=_e[1],He=Object(s.useState)(!1),Ke=Object(r.a)(He,2),Ve=Ke[0],We=Ke[1],Xe=Object(s.useState)({quizAnswer:[]}),$e=Object(r.a)(Xe,2),et={logInCheck:a,alert:o,setAlert:j,setLogInCheck:i,profileExist:m,setProfileExist:x,quizExist:v,setQuizExist:g,qNo:y,setQNo:z,quiz:C,setQuiz:Q,tempQuizAnswer:$e[0],quizName:k,setQuizName:B,setTempQuizAnswer:$e[1],displayQuiz:D,setDisplayQuiz:R,displayLeaderboard:P,setDisplayLeaderboard:U,displayQuizSearch:Z,setDisplayQuizSearch:_,displayQuizStart:H,setDisplayQuizStart:K,displayQuizCreate:X,setDisplayQuizCreate:$,quizComplete:ne,setQuizComplete:se,tempAnswer:oe,setTempAnswer:je,score:Le,setScore:Ee,quizShareAnswerName:fe,setQuizShareAnswerName:me,quizShareResultName:qe,setQuizShareResultName:we,quizShareName:Ne,setQuizShareName:Se,quizGiven:ie,setQuizGiven:re,userScore:Ie,setUserScore:Ae,totalScore:Te,setTotalScore:Fe,leaderboard:Oe,setLeaderboard:pe,update:Ge,setUpdate:Me,loading:Je,setLoading:Ye,leaderboardLoading:Ve,setLeaderboardLoading:We};return Object(f.jsx)(O.Provider,{value:et,children:t})};n(16),n(17);function g(e){var t=e.quiz,n=p(),c=n.tempAnswer,a=n.setTempAnswer,i=n.setQuizComplete,l=Object(s.useState)(!1),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(s.useState)(0),b=Object(r.a)(d,2),m=b[0],x=b[1],h=Object(s.useState)(0),O=Object(r.a)(h,2),v=O[0],g=O[1],N=c;void 0===N[0]&&t.forEach((function(e){N.push({qNo:e.qNo,answer:"",solved:!1})})),Object(s.useState)((function(){g(t.length-1)}),[]);var S=function(e){N.forEach((function(n){if(parseInt(e.target.name)===n.qNo){var s;t.forEach((function(t){t.qNo===n.qNo&&(s=e.target.value)}));var c={qNo:parseInt(e.target.name),answer:s,solved:!0};N[n.qNo-1]=c;var a=document.querySelector(".".concat(e.target.value).concat(e.target.name));["a","b","c","d"].forEach((function(t){t===e.target.value?void 0===a.classList[6]&&a.classList.toggle("radioBtnSelected"):"radioBtnSelected"===document.querySelector(".".concat(t).concat(e.target.name)).classList[6]&&document.querySelector(".".concat(t).concat(e.target.name)).classList.toggle("radioBtnSelected")}))}})),y()},y=function(){var e=0;N.forEach((function(t){t.solved&&e++})),e===t.length&&j(!0)},z=function(e,t){if(t){if(t&&""!==N[e-2].answer)try{var n=N[e-2].answer+(e-1);setTimeout((function(){document.getElementById(n).classList.toggle("radioBtnSelected")}),100)}catch(c){console.log("not active")}}else if(""!==N[e].answer)try{var s=N[e].answer+(parseInt(e)+1);setTimeout((function(){document.getElementById(s).classList.toggle("radioBtnSelected")}),100)}catch(a){console.log("not active")}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=0;N.forEach((function(e){e.solved&&n++})),n===t.length&&(j(!0),console.log("submited"),a(N),i(!0))}(e)},className:"qForm relative flex justify-center items-center w-full flex-col text-center",children:[Object(f.jsxs)("div",{className:"queCon flex justify-center items-center flex-col overflow-hidden",children:[Object(f.jsxs)("div",{className:"queTopCon flex justify-between items-center w-full",children:[Object(f.jsxs)("h1",{children:["Q-",t[m].qNo]}),Object(f.jsxs)("h1",{children:[m+1,"/",t.length]})]}),Object(f.jsx)("div",{className:"qCon",children:Object(f.jsx)("h1",{children:t[m].q})}),Object(f.jsxs)("div",{className:"options w-full",children:[Object(f.jsxs)("div",{className:"optionsRow1 flex justify-evenly items-center flex-col",children:[Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center a".concat(t[m].qNo),id:"a".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].a}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"a",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]}),Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center b".concat(t[m].qNo),id:"b".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].b}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"b",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]})]}),Object(f.jsxs)("div",{className:"optionsRow2 flex justify-evenly items-center flex-col",children:[Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center c".concat(t[m].qNo),id:"c".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].c}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"c",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]}),Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center d".concat(t[m].qNo),id:"d".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].d}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"d",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]})]})]}),Object(f.jsxs)("div",{className:"changeButton w-full flex justify-evenly items-center",children:[0===m?"":Object(f.jsx)("button",{className:"prevBtn",type:"button",value:t[m].qNo,onClick:function(e){return function(e){m>0&&x(m-1),z(parseInt(e.target.value),!0)}(e)},children:"Prev"}),m>=v?"":Object(f.jsx)("button",{className:"nextBtn",type:"button",value:t[m].qNo,onClick:function(e){return function(e){m<v&&x(m+1),z(parseInt(e.target.value),!1)}(e)},children:"Next"})]})]}),Object(f.jsx)("button",{className:"submitCon ".concat(o&&"opacitySubmitBtn"),disabled:!o,type:"submit",children:"Submit"})]})})}n(29);function N(e){var t=e.flag;return Object(f.jsx)("div",{className:"loading w-full flex justify-center items-center",style:{background:"".concat(t&&"#000000d4")},children:Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.98 97.96",children:[Object(f.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(f.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(f.jsx)("path",{className:"cls-1",d:"M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"}),Object(f.jsx)("path",{className:"cls-1",d:"M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"})]})}),Object(f.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(f.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(f.jsx)("path",{className:"cls-1",d:"M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"}),Object(f.jsx)("path",{className:"cls-1",d:"M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"})]})})]})})}function S(){var e=x().currentUser,t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=p(),l=i.quizExist,u=i.quiz,o=i.quizComplete,j=i.tempAnswer,m=i.score,h=i.setScore,O=i.quizShareName,v=i.quizShareAnswerName,S=i.quizShareResultName;return Object(s.useEffect)((function(){var t;return o&&e&&(t=b.answers.doc(v).get().then((function(t){t.exists&&b.users.doc(e.uid).get().then((function(n){n.exists&&n.data()&&function(t,n){var s=0;t.quizAnswerContainer.quizAnswer.forEach((function(e){e.answer===j[e.qNo-1].answer&&s++})),h(s),a(!1);var c,i=n.fullName.username;e&&(c=b.results.doc(S).get().then((function(t){var n=t.data().quizResultContainer.submissions;if(n.push({uid:e.uid,quizName:O,userScore:s,totalScore:j.length,username:i}),void 0!==t.data().quizResultContainer.submissions[0]){var c=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(c=!0)})),!1===c&&d.collection("results").doc(S).update({quizResultContainer:{quizName:O,submissions:n}})}else{var a=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(a=!0)})),console.log(a),!1===a&&d.collection("results").doc(S).update({quizResultContainer:{quizName:O,submissions:n}})}s=0})))}(t.data(),n.data())}))}))),t}),[o]),Object(f.jsx)(f.Fragment,{children:l&&!o?Object(f.jsx)(g,{quiz:u}):o?c?Object(f.jsx)(N,{}):Object(f.jsx)("div",{className:"resultCon w-full flex justify-center items-center",children:Object(f.jsxs)("div",{className:"result flex justify-center items-center flex-col",children:[Object(f.jsxs)("h1",{children:["Your Score: ",m,"/",j.length]}),Object(f.jsx)("h1",{children:"Quiz has been submited!"})]})}):"Quiz Does Not Exist"})}n(30);function y(){var e=x().currentUser,t=p().setProfileExist,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],i=c[1],l=Object(s.useState)(""),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(s.useState)(""),m=Object(r.a)(d,2),h=m[0],O=m[1];return Object(f.jsx)("div",{className:"profile_con w-full flex justify-center items-center",children:Object(f.jsxs)("form",{onSubmit:function(n){return function(n){var s;return n.preventDefault(),e&&(s=b.users.doc(e.uid).get().then((function(n){n.exists||(b.users.doc(e.uid).set({fullName:{firstName:a,lastName:o,username:h},uid:e.uid}),i(""),j(""),t(!0))}))),s}(n)},className:"relative overflow-hidden formCon flex justify-start items-center flex-col w-10/12 rounded-2xl",children:[Object(f.jsx)("h1",{className:"text-2xl w-full text-center mt-5 pb-3",children:"Profile"}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-3",children:[Object(f.jsx)("label",{children:"First Name"}),Object(f.jsx)("input",{type:"text",value:a,required:!0,onChange:function(e){return i(e.target.value)},className:"w-10/12"})]}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-5",children:[Object(f.jsx)("label",{children:"Last Name"}),Object(f.jsx)("input",{type:"text",value:o,required:!0,onChange:function(e){return j(e.target.value)},className:"w-10/12"})]}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-5",children:[Object(f.jsx)("label",{children:"Username"}),Object(f.jsx)("input",{type:"text",value:h,required:!0,minLength:"4",maxLength:"10",onChange:function(e){return O(e.target.value)},className:"w-10/12"})]}),Object(f.jsx)("button",{type:"submit",children:"Save"})]})})}var z=n(10),q=n.n(z),w=n(12);n(32);function C(){var e=x().logOut,t=p(),n=t.setLogInCheck,c=t.setProfileExist,a=t.setQuiz,i=t.setQuizExist,l=t.setQuizName,u=t.setDisplayQuiz,j=t.setDisplayLeaderboard,d=t.setQNo,b=t.setQuizComplete,m=t.setTempQuizAnswer,h=t.setScore,O=t.setQuizShareName,v=t.setQuizShareAnswerName,g=t.setQuizShareResultName,N=t.setQuizGiven,S=Object(s.useState)(""),y=Object(r.a)(S,2),z=y[0],C=y[1],Q=Object(s.useState)(!1),L=Object(r.a)(Q,2),E=L[0],k=L[1],B=function(){var t=Object(w.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(),c(!0),n(!1),i(!1),d(1),a([]),l(""),u(!0),j(!1),b(!1),O(""),v(""),g(""),N(!0),m({quizAnswer:[]}),h(0),C(""),o.onAuthStateChanged((function(e){e||(n(!1),window.location.reload())}))}catch(s){C("Failed To LogOut"),console.log(z)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"navBurger absolute flex justify-evenly items-center flex-col",onClick:function(){return E||(k(!0),document.getElementById("burgerSpan1").classList.toggle("burgerSpan1"),document.getElementById("burgerSpan2").classList.toggle("burgerSpan2"),document.getElementById("burgerSpan3").classList.toggle("burgerSpan3")),void(E&&(document.getElementById("nav").classList.toggle("navFadeOut"),document.getElementById("burgerSpan1").classList.toggle("burgerSpan1"),document.getElementById("burgerSpan2").classList.toggle("burgerSpan2"),document.getElementById("burgerSpan3").classList.toggle("burgerSpan3"),setTimeout((function(){k(!1)}),500)))},children:[Object(f.jsx)("span",{id:"burgerSpan1"}),Object(f.jsx)("span",{id:"burgerSpan2"}),Object(f.jsx)("span",{id:"burgerSpan3"})]}),E&&Object(f.jsxs)("nav",{id:"nav",className:"flex justify-center items-center flex-col",children:[Object(f.jsx)("div",{className:"navOption flex justify-center items-center flex-col",children:Object(f.jsx)("div",{className:"logOutCon w-full flex justify-center items-center",children:Object(f.jsx)("button",{className:"",onClick:B,children:"LogOut"})})}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})]})}var Q=n(11);function L(){var e=p(),t=e.setAlert,n=e.setUpdate,s=e.update,c=e.quizGiven,a=e.setProfileExist,i=e.setQuizShareAnswerName,r=e.setQuizShareName,l=e.setQuizShareResultName,u=e.quizShareName,o=e.setQuiz,j=e.setQuizName,d=e.setQuizExist,f=e.setDisplayQuiz,m=e.displayLeaderboard,h=e.setDisplayLeaderboard,O=e.displayQuizCreate,v=e.setDisplayQuizCreate,g=e.quizShareResultName,N=e.quizShareAnswerName,S=e.setLeaderboard,y=e.setLoading,z=e.setLeaderboardLoading,q=e.setUserScore,w=e.setTotalScore,C=e.setQuizGiven,L=x().currentUser,E=function(){document.querySelector(".preBack").classList.toggle("fadeOut"),document.querySelector(".preBackCon").classList.toggle("fadeOut2"),setTimeout((function(){t(!1)}),410)},k=function(){document.querySelector(".back").classList.toggle("fadeOut2"),E(),setTimeout((function(){n(!s)}),410)};return{handleBackSmooth:E,handleBack:k,handleDirectBack:function(){c?k():t(!0)},handleProfileExist:function(){var e;return L&&(e=b.users.doc(L.uid).get().then((function(e){if(e.exists)return e.data()&&(e.data().uid,L.uid),void a(!0);a(!1)}))),e},handleQuizShare:function(){var e;return L&&(e=b.quizShare.doc("quizShare").get().then((function(e){e.exists&&e.data()&&(r(e.data().quizShareContainer.quizName),i(e.data().quizShareContainer.quizAnswerName),l(e.data().quizShareContainer.quizResultName))}))),e},handleSetQuiz:function(){var e;return""!==u&&L&&(e=b.quizs.doc(u).get().then((function(e){e.exists?e.data()&&(o(e.data().quizContainer.quiz),j(e.data().quizContainer.quizName)):d(!1)}))),e},handleQuizGiven:function(){!1===c&&f(!1)},handleLeaderboard:function(){var e;m?m&&(document.getElementById("leaderboardCon").classList.toggle("fadeOut"),setTimeout((function(){h(!1)}),400)):(z(!0),L&&N&&(e=b.results.doc(g).get().then((function(t){if(t.exists){if(t.data()){var n=[],s=t.data().quizResultContainer.submissions.length;if(t.data().quizResultContainer.submissions.forEach((function(e){var t={username:e.username,userScore:e.userScore,totalScore:e.totalScore};n.push(t)})),s===n.length&&void 0!==n[0]){for(var c=0;c<s;c++)for(var a=0;a<s-c-1;a++)if(n[a].userScore<n[a+1].userScore){var i=n[a];n[a]=n[a+1],n[a+1]=i}for(var r=1,l=n[0].userScore,u=0;u<s;u++)n[u].userScore===l||(r++,l=n[u].userScore),n[u]=Object(Q.a)(Object(Q.a)({},n[u]),{},{rank:r});S(n),m||(z(!1),h(!0))}}return e}}))))},handleSetQuizData:function(){var e;return""!==g&&L&&(e=b.results.doc(g).get().then((function(e){if(e.exists){if(e.data())if(void 0!==e.data().quizResultContainer.submissions[0]){var t=!1;e.data().quizResultContainer.submissions.forEach((function(e){e.uid===L.uid&&(t=!0,q(e.userScore),w(e.totalScore))})),y(!1),!1===t?(d(!0),C(!1)):(d(!0),C(!0))}else d(!0),C(!1)}else;}))),e},handleQuizSearch:function(){},handelQuizCreateDisplay:function(){v(!O)}}}n(33);function E(){var e=L(),t=e.handleBackSmooth,n=e.handleBack;return Object(f.jsx)("div",{className:"preBackCon w-full flex justify-center items-center",children:Object(f.jsxs)("div",{className:"preBack flex justify-center items-center flex-col",children:[Object(f.jsx)("h1",{children:"If you go back your progress will be lost!"}),Object(f.jsx)("h1",{children:"Do you still want to go back ?"}),Object(f.jsxs)("div",{className:"w-full flex justify-evenly items-center",children:[Object(f.jsx)("button",{onClick:function(){return t()},children:"No"}),Object(f.jsx)("button",{onClick:function(){return n()},children:"Yes"})]})]})})}n(34);function k(){var e=L().handleDirectBack;return Object(f.jsxs)("div",{className:"back absolute flex justify-center items-center flex-col",onClick:function(){return e()},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})}n(35),n.p,n.p,n.p;n(36);function B(){var e=L().handelQuizCreateDisplay;return Object(f.jsx)("div",{className:"quizCreateStartCon w-full flex justify-center items-center flex-col",children:Object(f.jsxs)("div",{className:"quizCreate w-4/5 flex justify-center items-center flex-col",children:[Object(f.jsx)("h1",{className:"text-center",children:"Create New Quiz"}),Object(f.jsx)("button",{onClick:function(){return e()},className:"",children:"Create +"})]})})}n(37);function I(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1],o=Object(s.useState)(1),j=Object(r.a)(o,2),d=j[0],b=(j[1],Object(s.useState)("")),m=Object(r.a)(b,2),x=m[0],h=m[1],O=Object(s.useState)(""),p=Object(r.a)(O,2),v=p[0],g=p[1],N=Object(s.useState)(""),S=Object(r.a)(N,2),y=S[0],z=S[1],q=Object(s.useState)(""),w=Object(r.a)(q,2),C=w[0],Q=w[1],L=Object(s.useState)(""),E=Object(r.a)(L,2),k=E[0],B=E[1],I=Object(s.useState)(""),A=Object(r.a)(I,2),D=A[0],R=A[1],T=Object(s.useState)(""),F=Object(r.a)(T,2),P=(F[0],F[1]),U=function(e){g(e.target.value),function(e){var t=document.getElementById(e.target.id);t.style.height="auto",t.style.height=t.scrollHeight+"px"}(e)};return Object(f.jsx)("div",{className:"createQuizCon w-full flex justify-center items-center mt-6 mb-8 text-center ",children:Object(f.jsxs)("form",{className:"flex justify-center items-center flex-col text-center",children:[n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"w-full pb-3",children:"Create Quiz"}),Object(f.jsxs)("div",{className:"quizNameInput w-full flex justify-center items-center flex-col",children:[Object(f.jsx)("label",{className:"mt-3 mb-3",children:"Enter Quiz Name"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",minLength:"1",maxLength:"20",value:x,onChange:function(e){return h(e.target.value)},required:!0}),Object(f.jsx)("button",{onClick:function(){return c(!1),void u(!0)},children:"Next"})]})]}),l&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:x}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full mt-3",children:[Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsxs)("label",{children:["Question ",d]}),Object(f.jsx)("textarea",{id:"questionInputId",className:"w-5/6 ",type:"text",required:!0,value:v,minLength:"1",maxLength:"500",onChange:function(e){return U(e)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-A"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:y,onChange:function(e){return z(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-B"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:C,onChange:function(e){return Q(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-C"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:k,onChange:function(e){return B(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-D"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:D,onChange:function(e){return R(e.target.value)}})]}),Object(f.jsxs)("div",{className:"answerOption flex justify-center items-center flex-col w-full mt-3",children:[Object(f.jsx)("h1",{children:"Answer"}),Object(f.jsxs)("div",{className:"flex justify-between items-center w-full mt-5",children:[Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",children:"A"}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"a",required:!0,name:"answer",onChange:function(e){return P(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",children:"B"}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"b",required:!0,name:"answer",onChange:function(e){return P(e.target.value)}})]})]}),Object(f.jsxs)("div",{className:"flex justify-between items-center w-full mt-5 ",children:[Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",children:"C"}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"c",required:!0,name:"answer",onChange:function(e){return P(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",children:"D"}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"d",required:!0,name:"answer",onChange:function(e){return P(e.target.value)}})]})]})]})]}),Object(f.jsx)("div",{className:"btnCon w-full mt-5",children:Object(f.jsxs)("div",{className:"w-full pt-8",children:[Object(f.jsx)("button",{type:"button",children:"Add+"}),Object(f.jsxs)("div",{className:"w-full flex justify-between items-center mt-8",children:[Object(f.jsx)("button",{type:"button",children:"Q-0"}),Object(f.jsx)("button",{type:"button",children:"Q-1"})]})]})}),Object(f.jsx)("div",{className:"saveBtn w-full mt-1 pt-6 pb-5",children:Object(f.jsx)("button",{type:"submit",children:"Save"})})]})]})})}n(38);function A(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],a=L().handleQuizSearch;return Object(f.jsx)("div",{className:"quizSearchCon w-full flex justify-center items-center flex-col mt-5",children:Object(f.jsxs)("div",{className:"quizSearch flex justify-center items-center flex-col p-2",children:[Object(f.jsx)("h1",{children:"Join Quiz"}),Object(f.jsxs)("form",{className:"quizSearchInputCon w-full flex justify-center items-center flex-col mt-4",onSubmit:a,children:[Object(f.jsx)("input",{type:"number",min:"100000",max:"999999",value:n,onChange:function(e){return c(e.target.value)},className:"bg-transparent w-10/12 rounded-full",placeholder:"Enter Quiz Code"}),Object(f.jsx)("button",{type:"submit",children:"Search"})]})]})})}n(39);function D(){var e=p(),t=(e.quizExist,e.quizName,e.quizGiven,e.userScore,e.totalScore,e.displayLeaderboard,e.leaderboardLoading,e.displayQuizSearch),n=e.displayQuizStart,s=e.displayQuizCreate,c=L();c.handleLeaderboard,c.handleQuizGiven;return Object(f.jsx)(f.Fragment,{children:s?Object(f.jsx)(I,{}):Object(f.jsxs)(f.Fragment,{children:[t&&Object(f.jsx)(A,{}),Object(f.jsxs)("div",{className:"quizContainerHr w-full flex justify-center items-center mt-5 mb-5",children:[Object(f.jsx)("span",{className:"w-10/12 rounded-full"}),Object(f.jsx)("h1",{className:"text-center",children:"OR"}),Object(f.jsx)("span",{className:"w-10/12 rounded-full"})]}),n&&Object(f.jsx)(B,{})]})})}function R(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=(t[1],L()),a=c.handleProfileExist,i=c.handleQuizShare,l=c.handleSetQuiz,u=c.handleSetQuizData,o=p(),j=o.profileExist,d=o.alert,b=o.quizExist,m=o.displayQuiz,x=o.setDisplayQuiz,h=o.quizShareAnswerName,O=o.quizShareResultName,v=o.update,g=o.setUpdate,z=o.loading,q=o.setLoading;return Object(s.useEffect)((function(){q(!0),a()}),[]),Object(s.useEffect)((function(){i()}),[j]),Object(s.useEffect)((function(){l()}),[h]),Object(s.useEffect)((function(){u()}),[O]),Object(s.useEffect)((function(){x(!0)}),[v,g]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"logoCon flex justify-center items-center",children:Object(f.jsx)("h1",{children:"Quiz Time"})}),!m&&Object(f.jsx)(k,{}),d&&Object(f.jsx)(E,{}),n&&Object(f.jsx)(C,{}),j?m&&Object(f.jsx)(D,{}):Object(f.jsx)(y,{}),!m&&Object(f.jsx)(S,{}),z&&!b&&j&&Object(f.jsx)(N,{flag:!1})]})}n(40);function T(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=x().logIn,i=function(){var e=Object(w.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(""),e.next=4,a();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c("Failed To Log In"),console.log(n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"welcomePage flex justify-center items-center flex-col",children:[Object(f.jsx)("div",{className:"logoCon flex justify-center items-center",children:Object(f.jsx)("h1",{children:"Quiz Time"})}),Object(f.jsx)("p",{className:"text-center"}),Object(f.jsx)("div",{className:"logInBtnCon flex justify-center items-center font-mono",children:Object(f.jsx)("button",{onClick:i,children:"Log In"})}),Object(f.jsxs)("p",{className:"quoteCon text-center",children:[Object(f.jsx)("span",{children:'"'}),"You should know little about a lot",Object(f.jsx)("span",{children:'"'})]})]})})}function F(){var e=x().currentUser,t=p(),n=t.logInCheck,s=t.setLogInCheck;return e&&o.onAuthStateChanged((function(e){e?s(!0):e||s(!1)})),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(R,{}):Object(f.jsx)(T,{})})}var P=function(){return Object(f.jsx)(h,{children:Object(f.jsxs)(v,{children:[Object(f.jsx)(F,{}),Object(f.jsx)("div",{className:"borderCon"})]})})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.b1e3691b.chunk.js.map