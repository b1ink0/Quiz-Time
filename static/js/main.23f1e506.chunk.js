(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],Array(19).concat([function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(21),i=n.n(a),r=(n(26),n(27),n(3)),l=n(15),u=(n(28),n(46),l.a.initializeApp({apiKey:"AIzaSyDfhzeS7B-S4xcRccE-kDKFFX0R3ZVx0bo",authDomain:"quizapp-b1ink0.firebaseapp.com",projectId:"quizapp-b1ink0",storageBucket:"quizapp-b1ink0.appspot.com",messagingSenderId:"979392626883",appId:"1:979392626883:web:89b6e75947c56003272276"})),o=u.auth(),j=new l.a.auth.GoogleAuthProvider,d=u.firestore(),b={users:d.collection("users"),quizs:d.collection("quizs"),answers:d.collection("answers"),results:d.collection("results"),quizShare:d.collection("quizShare"),getCurrentTimeStamp:l.a.firestore.FieldValue.serverTimestamp},f=n(1),m=s.a.createContext();function x(){return Object(c.useContext)(m)}function h(e){var t=e.children,n=Object(c.useState)(),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(!0),u=Object(r.a)(l,2),d=u[0],b=u[1];Object(c.useEffect)((function(){return o.onAuthStateChanged((function(e){e?(i(e),b(!1)):b(!1)}))}));var x={currentUser:a,logIn:function(){o.signInWithPopup(j).then().catch((function(e){return console.log(e)}))},logOut:function(){return o.signOut()}};return Object(f.jsx)(m.Provider,{value:x,children:!d&&t})}var O=s.a.createContext(),p=function(){return Object(c.useContext)(O)},v=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(!1),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(c.useState)(!0),b=Object(r.a)(d,2),m=b[0],x=b[1],h=Object(c.useState)(!1),p=Object(r.a)(h,2),v=p[0],g=p[1],N=Object(c.useState)(1),S=Object(r.a)(N,2),y=S[0],z=S[1],q=Object(c.useState)([]),w=Object(r.a)(q,2),C=w[0],Q=w[1],L=Object(c.useState)(""),E=Object(r.a)(L,2),k=E[0],I=E[1],B=Object(c.useState)(!0),A=Object(r.a)(B,2),D=A[0],R=A[1],T=Object(c.useState)(!1),F=Object(r.a)(T,2),P=F[0],U=F[1],G=Object(c.useState)(!0),M=Object(r.a)(G,2),Z=M[0],_=M[1],J=Object(c.useState)(!0),K=Object(r.a)(J,2),Y=K[0],H=K[1],V=Object(c.useState)(!1),W=Object(r.a)(V,2),X=W[0],$=W[1],ee=Object(c.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],ce=te[1],se=Object(c.useState)(!1),ae=Object(r.a)(se,2),ie=ae[0],re=ae[1],le=Object(c.useState)(!0),ue=Object(r.a)(le,2),oe=ue[0],je=ue[1],de=Object(c.useState)([]),be=Object(r.a)(de,2),fe=be[0],me=be[1],xe=Object(c.useState)(""),he=Object(r.a)(xe,2),Oe=he[0],pe=he[1],ve=Object(c.useState)([]),ge=Object(r.a)(ve,2),Ne=ge[0],Se=ge[1],ye=Object(c.useState)(""),ze=Object(r.a)(ye,2),qe=ze[0],we=ze[1],Ce=Object(c.useState)(""),Qe=Object(r.a)(Ce,2),Le=Qe[0],Ee=Qe[1],ke=Object(c.useState)(0),Ie=Object(r.a)(ke,2),Be=Ie[0],Ae=Ie[1],De=Object(c.useState)(0),Re=Object(r.a)(De,2),Te=Re[0],Fe=Re[1],Pe=Object(c.useState)(0),Ue=Object(r.a)(Pe,2),Ge=Ue[0],Me=Ue[1],Ze=Object(c.useState)(!1),_e=Object(r.a)(Ze,2),Je=_e[0],Ke=_e[1],Ye=Object(c.useState)(!1),He=Object(r.a)(Ye,2),Ve=He[0],We=He[1],Xe=Object(c.useState)(!1),$e=Object(r.a)(Xe,2),et=$e[0],tt=$e[1],nt=Object(c.useState)({quizAnswer:[]}),ct=Object(r.a)(nt,2),st={logInCheck:a,alert:o,setAlert:j,setLogInCheck:i,profileExist:m,setProfileExist:x,quizExist:v,setQuizExist:g,qNo:y,setQNo:z,quiz:C,setQuiz:Q,tempQuizAnswer:ct[0],quizName:k,setQuizName:I,setTempQuizAnswer:ct[1],displayQuiz:D,setDisplayQuiz:R,displayLeaderboard:P,setDisplayLeaderboard:U,displayQuizSearch:Z,setDisplayQuizSearch:_,displayQuizStart:Y,setDisplayQuizStart:H,displayQuizCreate:X,setDisplayQuizCreate:$,quizComplete:ie,setQuizComplete:re,tempAnswer:fe,setTempAnswer:me,score:Be,setScore:Ae,quizShareAnswerName:Oe,setQuizShareAnswerName:pe,quizShareResultName:Le,setQuizShareResultName:Ee,quizShareName:qe,setQuizShareName:we,quizGiven:oe,setQuizGiven:je,userScore:Te,setUserScore:Fe,totalScore:Ge,setTotalScore:Me,leaderboard:Ne,setLeaderboard:Se,update:Je,setUpdate:Ke,loading:Ve,setLoading:We,leaderboardLoading:et,setLeaderboardLoading:tt,displaySaveQuiz:ne,setDisplaySaveQuiz:ce};return Object(f.jsx)(O.Provider,{value:st,children:t})};n(19),n(20);function g(e){var t=e.quiz,n=p(),s=n.tempAnswer,a=n.setTempAnswer,i=n.setQuizComplete,l=Object(c.useState)(!1),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(c.useState)(0),b=Object(r.a)(d,2),m=b[0],x=b[1],h=Object(c.useState)(0),O=Object(r.a)(h,2),v=O[0],g=O[1],N=s;void 0===N[0]&&t.forEach((function(e){N.push({qNo:e.qNo,answer:"",solved:!1})})),Object(c.useState)((function(){g(t.length-1)}),[]);var S=function(e){N.forEach((function(n){if(parseInt(e.target.name)===n.qNo){var c;t.forEach((function(t){t.qNo===n.qNo&&(c=e.target.value)}));var s={qNo:parseInt(e.target.name),answer:c,solved:!0};N[n.qNo-1]=s;var a=document.querySelector(".".concat(e.target.value).concat(e.target.name));["a","b","c","d"].forEach((function(t){t===e.target.value?void 0===a.classList[6]&&a.classList.toggle("radioBtnSelected"):"radioBtnSelected"===document.querySelector(".".concat(t).concat(e.target.name)).classList[6]&&document.querySelector(".".concat(t).concat(e.target.name)).classList.toggle("radioBtnSelected")}))}})),y()},y=function(){var e=0;N.forEach((function(t){t.solved&&e++})),e===t.length&&j(!0)},z=function(e,t){if(t){if(t&&""!==N[e-2].answer)try{var n=N[e-2].answer+(e-1);setTimeout((function(){document.getElementById(n).classList.toggle("radioBtnSelected")}),100)}catch(s){console.log("not active")}}else if(""!==N[e].answer)try{var c=N[e].answer+(parseInt(e)+1);setTimeout((function(){document.getElementById(c).classList.toggle("radioBtnSelected")}),100)}catch(a){console.log("not active")}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=0;N.forEach((function(e){e.solved&&n++})),n===t.length&&(j(!0),console.log("submited"),a(N),i(!0))}(e)},className:"qForm relative flex justify-center items-center w-full flex-col text-center",children:[Object(f.jsxs)("div",{className:"queCon flex justify-center items-center flex-col overflow-hidden",children:[Object(f.jsxs)("div",{className:"queTopCon flex justify-between items-center w-full",children:[Object(f.jsxs)("h1",{children:["Q-",t[m].qNo]}),Object(f.jsxs)("h1",{children:[m+1,"/",t.length]})]}),Object(f.jsx)("div",{className:"qCon",children:Object(f.jsx)("h1",{children:t[m].q})}),Object(f.jsxs)("div",{className:"options w-full",children:[Object(f.jsxs)("div",{className:"optionsRow1 flex justify-evenly items-center flex-col",children:[Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center a".concat(t[m].qNo),id:"a".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].a}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"a",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]}),Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center b".concat(t[m].qNo),id:"b".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].b}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"b",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]})]}),Object(f.jsxs)("div",{className:"optionsRow2 flex justify-evenly items-center flex-col",children:[Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center c".concat(t[m].qNo),id:"c".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].c}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"c",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]}),Object(f.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center d".concat(t[m].qNo),id:"d".concat(t[m].qNo),children:[Object(f.jsx)("label",{children:t[m].d}),Object(f.jsx)("input",{className:"absolute",type:"radio",value:"d",name:t[m].qNo,onClick:function(e){return S(e)},required:!0})]})]})]}),Object(f.jsxs)("div",{className:"changeButton w-full flex justify-evenly items-center",children:[0===m?"":Object(f.jsx)("button",{className:"prevBtn",type:"button",value:t[m].qNo,onClick:function(e){return function(e){m>0&&x(m-1),z(parseInt(e.target.value),!0)}(e)},children:"Prev"}),m>=v?"":Object(f.jsx)("button",{className:"nextBtn",type:"button",value:t[m].qNo,onClick:function(e){return function(e){m<v&&x(m+1),z(parseInt(e.target.value),!1)}(e)},children:"Next"})]})]}),Object(f.jsx)("button",{className:"submitCon ".concat(o&&"opacitySubmitBtn"),disabled:!o,type:"submit",children:"Submit"})]})})}n(32);function N(e){var t=e.flag;return Object(f.jsx)("div",{className:"loading w-full flex justify-center items-center",style:{background:"".concat(t&&"#000000d4")},children:Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.98 97.96",children:[Object(f.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(f.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(f.jsx)("path",{className:"cls-1",d:"M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"}),Object(f.jsx)("path",{className:"cls-1",d:"M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"})]})}),Object(f.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(f.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(f.jsx)("path",{className:"cls-1",d:"M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"}),Object(f.jsx)("path",{className:"cls-1",d:"M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"})]})})]})})}function S(){var e=x().currentUser,t=Object(c.useState)(!0),n=Object(r.a)(t,2),s=n[0],a=n[1],i=p(),l=i.quizExist,u=i.quiz,o=i.quizComplete,j=i.tempAnswer,m=i.score,h=i.setScore,O=i.quizShareName,v=i.quizShareAnswerName,S=i.quizShareResultName;return Object(c.useEffect)((function(){var t;return o&&e&&(t=b.answers.doc(v).get().then((function(t){t.exists&&b.users.doc(e.uid).get().then((function(n){n.exists&&n.data()&&function(t,n){var c=0;t.quizAnswerContainer.quizAnswer.forEach((function(e){e.answer===j[e.qNo-1].answer&&c++})),h(c),a(!1);var s,i=n.fullName.username;e&&(s=b.results.doc(S).get().then((function(t){var n=t.data().quizResultContainer.submissions;if(n.push({uid:e.uid,quizName:O,userScore:c,totalScore:j.length,username:i}),void 0!==t.data().quizResultContainer.submissions[0]){var s=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(s=!0)})),!1===s&&d.collection("results").doc(S).update({quizResultContainer:{quizName:O,submissions:n}})}else{var a=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(a=!0)})),console.log(a),!1===a&&d.collection("results").doc(S).update({quizResultContainer:{quizName:O,submissions:n}})}c=0})))}(t.data(),n.data())}))}))),t}),[o]),Object(f.jsx)(f.Fragment,{children:l&&!o?Object(f.jsx)(g,{quiz:u}):o?s?Object(f.jsx)(N,{}):Object(f.jsx)("div",{className:"resultCon w-full flex justify-center items-center",children:Object(f.jsxs)("div",{className:"result flex justify-center items-center flex-col",children:[Object(f.jsxs)("h1",{children:["Your Score: ",m,"/",j.length]}),Object(f.jsx)("h1",{children:"Quiz has been submited!"})]})}):"Quiz Does Not Exist"})}n(33);function y(){var e=x().currentUser,t=p().setProfileExist,n=Object(c.useState)(""),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(""),u=Object(r.a)(l,2),o=u[0],j=u[1],d=Object(c.useState)(""),m=Object(r.a)(d,2),h=m[0],O=m[1];return Object(f.jsx)("div",{className:"profile_con w-full flex justify-center items-center",children:Object(f.jsxs)("form",{onSubmit:function(n){return function(n){var c;return n.preventDefault(),e&&(c=b.users.doc(e.uid).get().then((function(n){n.exists||(b.users.doc(e.uid).set({fullName:{firstName:a,lastName:o,username:h},uid:e.uid}),i(""),j(""),t(!0))}))),c}(n)},className:"relative overflow-hidden formCon flex justify-start items-center flex-col w-10/12 rounded-2xl",children:[Object(f.jsx)("h1",{className:"text-2xl w-full text-center mt-5 pb-3",children:"Profile"}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-3",children:[Object(f.jsx)("label",{children:"First Name"}),Object(f.jsx)("input",{type:"text",value:a,required:!0,onChange:function(e){return i(e.target.value)},className:"w-10/12"})]}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-5",children:[Object(f.jsx)("label",{children:"Last Name"}),Object(f.jsx)("input",{type:"text",value:o,required:!0,onChange:function(e){return j(e.target.value)},className:"w-10/12"})]}),Object(f.jsxs)("div",{className:"inputCon flex justify-start items-center flex-col w-full mt-5",children:[Object(f.jsx)("label",{children:"Username"}),Object(f.jsx)("input",{type:"text",value:h,required:!0,minLength:"4",maxLength:"10",onChange:function(e){return O(e.target.value)},className:"w-10/12"})]}),Object(f.jsx)("button",{type:"submit",children:"Save"})]})})}var z=n(10),q=n.n(z),w=n(14);n(35);function C(){var e=x().logOut,t=p(),n=t.setLogInCheck,s=t.setProfileExist,a=t.setQuiz,i=t.setQuizExist,l=t.setQuizName,u=t.setDisplayQuiz,j=t.setDisplayLeaderboard,d=t.setQNo,b=t.setQuizComplete,m=t.setTempQuizAnswer,h=t.setScore,O=t.setQuizShareName,v=t.setQuizShareAnswerName,g=t.setQuizShareResultName,N=t.setQuizGiven,S=Object(c.useState)(""),y=Object(r.a)(S,2),z=y[0],C=y[1],Q=Object(c.useState)(!1),L=Object(r.a)(Q,2),E=L[0],k=L[1],I=function(){var t=Object(w.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(),s(!0),n(!1),i(!1),d(1),a([]),l(""),u(!0),j(!1),b(!1),O(""),v(""),g(""),N(!0),m({quizAnswer:[]}),h(0),C(""),o.onAuthStateChanged((function(e){e||(n(!1),window.location.reload())}))}catch(c){C("Failed To LogOut"),console.log(z)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"navBurger absolute flex justify-evenly items-center flex-col",onClick:function(){return E||(k(!0),document.getElementById("burgerSpan1").classList.toggle("burgerSpan1"),document.getElementById("burgerSpan2").classList.toggle("burgerSpan2"),document.getElementById("burgerSpan3").classList.toggle("burgerSpan3")),void(E&&(document.getElementById("nav").classList.toggle("navFadeOut"),document.getElementById("burgerSpan1").classList.toggle("burgerSpan1"),document.getElementById("burgerSpan2").classList.toggle("burgerSpan2"),document.getElementById("burgerSpan3").classList.toggle("burgerSpan3"),setTimeout((function(){k(!1)}),500)))},children:[Object(f.jsx)("span",{id:"burgerSpan1"}),Object(f.jsx)("span",{id:"burgerSpan2"}),Object(f.jsx)("span",{id:"burgerSpan3"})]}),E&&Object(f.jsxs)("nav",{id:"nav",className:"flex justify-center items-center flex-col",children:[Object(f.jsx)("div",{className:"navOption flex justify-center items-center flex-col",children:Object(f.jsx)("div",{className:"logOutCon w-full flex justify-center items-center",children:Object(f.jsx)("button",{className:"",onClick:I,children:"LogOut"})})}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})]})}var Q=n(12);function L(){var e=p(),t=e.setAlert,n=e.setUpdate,c=e.update,s=e.quizGiven,a=e.setProfileExist,i=e.setQuizShareAnswerName,r=e.setQuizShareName,l=e.setQuizShareResultName,u=e.quizShareName,o=e.setQuiz,j=e.setQuizName,d=e.setQuizExist,f=e.setDisplayQuiz,m=e.displayLeaderboard,h=e.setDisplayLeaderboard,O=e.displayQuizCreate,v=e.setDisplayQuizCreate,g=e.quizShareResultName,N=e.quizShareAnswerName,S=e.setLeaderboard,y=e.setLoading,z=e.setLeaderboardLoading,q=e.setUserScore,w=e.setTotalScore,C=e.setQuizGiven,L=x().currentUser,E=function(){document.querySelector(".preBack").classList.toggle("fadeOut"),document.querySelector(".preBackCon").classList.toggle("fadeOut2"),setTimeout((function(){t(!1)}),410)},k=function(){document.querySelector(".back").classList.toggle("fadeOut2"),E(),setTimeout((function(){n(!c)}),410)};return{handleBackSmooth:E,handleBack:k,handleDirectBack:function(){s?k():t(!0)},handleProfileExist:function(){var e;return L&&(e=b.users.doc(L.uid).get().then((function(e){if(e.exists)return e.data()&&(e.data().uid,L.uid),void a(!0);a(!1)}))),e},handleQuizShare:function(){var e;return L&&(e=b.quizShare.doc("quizShare").get().then((function(e){e.exists&&e.data()&&(r(e.data().quizShareContainer.quizName),i(e.data().quizShareContainer.quizAnswerName),l(e.data().quizShareContainer.quizResultName))}))),e},handleSetQuiz:function(){var e;return""!==u&&L&&(e=b.quizs.doc(u).get().then((function(e){e.exists?e.data()&&(o(e.data().quizContainer.quiz),j(e.data().quizContainer.quizName)):d(!1)}))),e},handleQuizGiven:function(){!1===s&&f(!1)},handleLeaderboard:function(){var e;m?m&&(document.getElementById("leaderboardCon").classList.toggle("fadeOut"),setTimeout((function(){h(!1)}),400)):(z(!0),L&&N&&(e=b.results.doc(g).get().then((function(t){if(t.exists){if(t.data()){var n=[],c=t.data().quizResultContainer.submissions.length;if(t.data().quizResultContainer.submissions.forEach((function(e){var t={username:e.username,userScore:e.userScore,totalScore:e.totalScore};n.push(t)})),c===n.length&&void 0!==n[0]){for(var s=0;s<c;s++)for(var a=0;a<c-s-1;a++)if(n[a].userScore<n[a+1].userScore){var i=n[a];n[a]=n[a+1],n[a+1]=i}for(var r=1,l=n[0].userScore,u=0;u<c;u++)n[u].userScore===l||(r++,l=n[u].userScore),n[u]=Object(Q.a)(Object(Q.a)({},n[u]),{},{rank:r});S(n),m||(z(!1),h(!0))}}return e}}))))},handleSetQuizData:function(){var e;return""!==g&&L&&(e=b.results.doc(g).get().then((function(e){if(e.exists){if(e.data())if(void 0!==e.data().quizResultContainer.submissions[0]){var t=!1;e.data().quizResultContainer.submissions.forEach((function(e){e.uid===L.uid&&(t=!0,q(e.userScore),w(e.totalScore))})),y(!1),!1===t?(d(!0),C(!1)):(d(!0),C(!0))}else d(!0),C(!1)}else;}))),e},handleQuizSearch:function(){},handelQuizCreateDisplay:function(){v(!O)}}}n(36);function E(){var e=L(),t=e.handleBackSmooth,n=e.handleBack;return Object(f.jsx)("div",{className:"preBackCon w-full flex justify-center items-center",children:Object(f.jsxs)("div",{className:"preBack flex justify-center items-center flex-col",children:[Object(f.jsx)("h1",{children:"If you go back your progress will be lost!"}),Object(f.jsx)("h1",{children:"Do you still want to go back ?"}),Object(f.jsxs)("div",{className:"w-full flex justify-evenly items-center",children:[Object(f.jsx)("button",{onClick:function(){return t()},children:"No"}),Object(f.jsx)("button",{onClick:function(){return n()},children:"Yes"})]})]})})}n(37);function k(e){var t=e.option,n=p().setDisplayQuizCreate,c=L().handleDirectBack;return Object(f.jsxs)("div",{className:"back absolute flex justify-center items-center flex-col",onClick:function(){return function(){switch(t){case 1:c();break;case 2:n(!1)}}()},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})}n(38),n.p,n.p,n.p;n(39);function I(){var e=L().handelQuizCreateDisplay;return Object(f.jsx)("div",{className:"quizCreateStartCon w-full flex justify-center items-center flex-col",children:Object(f.jsxs)("div",{className:"quizCreate w-4/5 flex justify-center items-center flex-col",children:[Object(f.jsx)("h1",{className:"text-center",children:"Create New Quiz"}),Object(f.jsx)("button",{onClick:function(){return e()},className:"",children:"Create +"})]})})}var B=n(18);n(40);function A(e){var t=e.quiz,n=e.answer,s=e.questionCount,a=e.quizName,i=p(),l=i.setDisplaySaveQuiz,u=i.setDisplayQuizCreate,o=Object(c.useState)(),j=Object(r.a)(o,2),d=j[0],m=j[1],h=x().currentUser;Object(c.useEffect)((function(){for(var e,c=[],s=[],a=1,i=0;i<t.length;i++){var r={qNo:a,q:t[i].q,a:t[i].a,b:t[i].b,c:t[i].c,d:t[i].d},l={qNo:a,answer:n[i].answer};c.push(r),s.push(l),a++}if(h){var u=Math.floor(1e6*Math.random()).toString();m(u),e=b.quizs.doc(u).get().then((function(e){e.exists}))}return e}),[]);return Object(f.jsx)("div",{className:"save-wrapper fixed top-0 left-0 w-full h-full flex justify-center items-center",children:Object(f.jsxs)("div",{className:"save-wrapper-1 w-5/6 text-center flex justify-center items-center flex-col",children:[Object(f.jsxs)("h1",{className:"mb-1",children:["Quiz Name: ",a]}),Object(f.jsxs)("h1",{className:"mb-2",children:["Total Questions: ",s-1]}),Object(f.jsx)("h3",{children:"Copy The Code Below"}),Object(f.jsxs)("p",{className:"w-5/6 rounded-full flex justify-center items-center mt-2 mb-2 p-1 font-black",onClick:function(e){return function(e){var t=document.createElement("input");t.setAttribute("value",e.target.innerText),document.body.appendChild(t),t.select();var n=document.execCommand("copy");return document.body.removeChild(t),n}(e)},children:[Object(f.jsx)("h2",{className:"mr-1",children:d}),Object(f.jsx)("span",{className:"ml-1",children:"copy"})]}),Object(f.jsx)("button",{onClick:function(){return console.log("run"),l(!1),void u(!1)},children:"OK"})]})})}n(41);function D(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1],o=p(),j=o.displaySaveQuiz,d=o.setDisplaySaveQuiz,b=Object(c.useState)(1),m=Object(r.a)(b,2),x=m[0],h=m[1],O=Object(c.useState)(1),v=Object(r.a)(O,2),g=v[0],N=v[1],S=Object(c.useState)(""),y=Object(r.a)(S,2),z=y[0],q=y[1],w=Object(c.useState)(""),C=Object(r.a)(w,2),Q=C[0],L=C[1],E=Object(c.useState)(""),k=Object(r.a)(E,2),I=k[0],D=k[1],R=Object(c.useState)(""),T=Object(r.a)(R,2),F=T[0],P=T[1],U=Object(c.useState)(""),G=Object(r.a)(U,2),M=G[0],Z=G[1],_=Object(c.useState)(""),J=Object(r.a)(_,2),K=J[0],Y=J[1],H=Object(c.useState)(""),V=Object(r.a)(H,2),W=V[0],X=V[1],$=Object(c.useState)([]),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)([]),se=Object(r.a)(ce,2),ae=se[0],ie=se[1],re=function(e){L(e.target.value),function(e){var t=document.getElementById(e.target.id);t.style.height="auto",t.style.height=t.scrollHeight+"px"}(e)},le=function(e){X(e.target.value);["a","b","c","d"].forEach((function(t){var n=document.getElementById(t).classList;e.target.value===t?void 0===n[1]&&n.toggle("activeInput"):"activeInput"===n[1]&&n.toggle("activeInput")}))},ue=function(){var e=te,t=ae;e.pop(),t.pop(),console.log(e,t),ne(e),ie(t),setTimeout((function(){h(1)}),100),L(""),D(""),P(""),Z(""),Y(""),X("");["a","b","c","d"].forEach((function(e){var t=document.getElementById(e).classList;"activeInput"===t[1]&&t.toggle("activeInput")})),document.querySelectorAll(".answerSelectCon .answerSelect input[type=radio][name=answer]:checked").forEach((function(e){e.checked=!1}))},oe=function(){if(g>1){var e=te[g-2],t=ae[g-2];L(e.q),D(e.a),P(e.b),Z(e.c),Y(e.d),X(t.answer);["a","b","c","d"].forEach((function(e){var n=document.getElementById(e).classList,c=document.getElementById("".concat(t.answer,"i"));e===t.answer?void 0===n[1]&&(c.checked=!0,n.toggle("activeInput")):"activeInput"===n[1]&&n.toggle("activeInput")}))}N(g-1)};return Object(f.jsxs)(f.Fragment,{children:[j&&Object(f.jsx)(A,{quiz:te,answer:ae,questionCount:x,quizName:z}),Object(f.jsx)("div",{className:"createQuizCon w-full flex justify-center items-center mt-6 mb-8 text-center ",children:Object(f.jsxs)("form",{className:"flex justify-center items-center flex-col text-center",onSubmit:function(e){return function(e){e.preventDefault();var t=te,n=ae;t=[].concat(Object(B.a)(t),[{q:Q,a:I,b:F,c:M,d:K}]),n=[].concat(Object(B.a)(n),[{answer:W}]),ne(t),ie(n),h(x+1),N(g+1),L(""),D(""),P(""),Z(""),Y(""),X(""),["a","b","c","d"].forEach((function(e){var t=document.getElementById(e).classList,n=document.getElementById("".concat(e,"i"));!0===n.checked&&(n.checked=!1),"activeInput"===t[1]&&t.toggle("activeInput")}))}(e)},children:[n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"w-full pb-3",children:"Create Quiz"}),Object(f.jsxs)("div",{className:"quizNameInput w-full flex justify-center items-center flex-col",children:[Object(f.jsx)("label",{className:"mt-3 mb-3",children:"Enter Quiz Name"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",minLength:"1",maxLength:"20",value:z,onChange:function(e){return q(e.target.value)},required:!0}),Object(f.jsx)("button",{onClick:function(){return s(!1),void u(!0)},disabled:""===z,className:""===z?"nextBtn":void 0,children:"Next"})]})]}),l&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:z}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full mt-3",children:[Object(f.jsxs)("div",{className:"textAreaCon flex justify-center items-center flex-col w-full",children:[Object(f.jsxs)("label",{children:["Question-",g]}),Object(f.jsx)("textarea",{id:"questionInputId",className:"w-5/6 ",type:"text",required:!0,value:Q,minLength:"1",maxLength:"500",onChange:function(e){return re(e)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-A"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:I,onChange:function(e){return D(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-B"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:F,onChange:function(e){return P(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-C"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:M,onChange:function(e){return Z(e.target.value)}})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col w-full",children:[Object(f.jsx)("label",{children:"Option-D"}),Object(f.jsx)("input",{className:"w-5/6",type:"text",required:!0,minLength:"1",maxLength:"100",value:K,onChange:function(e){return Y(e.target.value)}})]}),Object(f.jsxs)("div",{className:"answerOption flex justify-center items-center flex-col w-full mt-3",children:[Object(f.jsx)("h1",{children:"Answer"}),Object(f.jsxs)("div",{className:"answerSelectCon flex justify-between items-center w-full mt-5",children:[Object(f.jsxs)("div",{className:"answerSelect flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",id:"a",children:"A"}),Object(f.jsx)("input",{className:"absolute",id:"ai",type:"radio",value:"a",required:!0,name:"answer",onClick:function(e){return le(e)}})]}),Object(f.jsxs)("div",{className:"answerSelect flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",id:"b",children:"B"}),Object(f.jsx)("input",{className:"absolute",id:"bi",type:"radio",value:"b",required:!0,name:"answer",onClick:function(e){return le(e)}})]})]}),Object(f.jsxs)("div",{className:"answerSelect flex justify-between items-center w-full mt-5 ",children:[Object(f.jsxs)("div",{className:"flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",id:"c",children:"C"}),Object(f.jsx)("input",{className:"absolute",id:"ci",type:"radio",value:"c",required:!0,name:"answer",onClick:function(e){return le(e)}})]}),Object(f.jsxs)("div",{className:"answerSelect flex justify-center items-center flex-col relative",children:[Object(f.jsx)("label",{className:"absolute",id:"d",children:"D"}),Object(f.jsx)("input",{className:"absolute",id:"di",type:"radio",value:"d",required:!0,name:"answer",onClick:function(e){return le(e)}})]})]})]})]}),Object(f.jsx)("div",{className:"btnCon w-full mt-5",children:Object(f.jsxs)("div",{className:"w-full pt-8",children:[Object(f.jsx)("div",{className:"btnControl w-full flex justify-center items-center",children:x===g?Object(f.jsx)("button",{type:"submit",children:"Add+"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:"removeBtn flex justify-center items-center mr-3",type:"button",onClick:function(){1===g&&2===x?ue():(console.log("run"),ne(te.filter((function(e){return e!=te[g-1]}))),ie(ae.filter((function(e){return e!=ae[g-1]}))),oe(),h(x-1))},children:"Remove"}),Object(f.jsx)("button",{className:"saveBtn flex justify-center items-center ml-3",type:"button",onClick:function(){return function(){var e=te,t=ae;e[g-1]={q:Q,a:I,b:F,c:M,d:K},t[g-1]={answer:W},ne(e),ie(t)}()},children:"Update"})]})}),Object(f.jsx)("div",{className:"controlBtnCon w-full flex justify-center items-center mt-8",children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("button",{type:"button",className:1===x||1===g?"lastBtn":void 0,disabled:1===x||1===g,onClick:function(){return 1===x||1===g?{}:oe()},children:["Q-",g-1]}),Object(f.jsx)("button",{type:"button",className:"middleBtn",children:g}),Object(f.jsxs)("button",{type:"button",className:x===g?"lastBtn":void 0,disabled:x===g,onClick:function(){return x===g?{}:function(){if(g!==x)if(N(g+1),g!==x-1){var e=te[g],t=ae[g];L(e.q),D(e.a),P(e.b),Z(e.c),Y(e.d),X(t.answer),["a","b","c","d"].forEach((function(e){var n=document.getElementById(e).classList,c=document.getElementById("".concat(t.answer,"i"));e===t.answer?void 0===n[1]&&(c.checked=!0,n.toggle("activeInput")):"activeInput"===n[1]&&n.toggle("activeInput")}))}else L(""),D(""),P(""),Z(""),Y(""),X(""),["a","b","c","d"].forEach((function(e){var t=document.getElementById(e).classList;"activeInput"===t[1]&&t.toggle("activeInput")})),document.querySelectorAll(".answerSelectCon .answerSelect input[type=radio][name=answer]:checked").forEach((function(e){e.checked=!1}))}()},children:["Q-",g+1]})]})})]})}),Object(f.jsx)("div",{className:"saveBtn w-full mt-1 pt-6 pb-5 flex justify-center items-center",children:Object(f.jsx)("button",{className:"flex justify-center items-center",type:"button",onClick:function(){void 0!==te[0]&&d(!0)},children:"Save"})})]})]})})]})}n(42);function R(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],s=t[1],a=L().handleQuizSearch;return Object(f.jsx)("div",{className:"quizSearchCon w-full flex justify-center items-center flex-col mt-5",children:Object(f.jsxs)("div",{className:"quizSearch flex justify-center items-center flex-col p-2",children:[Object(f.jsx)("h1",{children:"Join Quiz"}),Object(f.jsxs)("form",{className:"quizSearchInputCon w-full flex justify-center items-center flex-col mt-4",onSubmit:a,children:[Object(f.jsx)("input",{type:"number",value:n,onChange:function(e){return s(e.target.value)},className:"bg-transparent w-10/12 rounded-full",placeholder:"Enter Quiz Code"}),Object(f.jsx)("button",{type:"submit",children:"Join"})]})]})})}n(43);function T(){var e=p(),t=(e.quizExist,e.quizName,e.quizGiven,e.userScore,e.totalScore,e.displayLeaderboard,e.leaderboardLoading,e.displayQuizSearch),n=e.displayQuizStart,c=e.displayQuizCreate,s=L();s.handleLeaderboard,s.handleQuizGiven;return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{option:2}),Object(f.jsx)(D,{})]}):Object(f.jsxs)(f.Fragment,{children:[t&&Object(f.jsx)(R,{}),Object(f.jsxs)("div",{className:"quizContainerHr w-full flex justify-center items-center mt-5 mb-5",children:[Object(f.jsx)("span",{className:"w-10/12 rounded-full"}),Object(f.jsx)("h1",{className:"text-center",children:"OR"}),Object(f.jsx)("span",{className:"w-10/12 rounded-full"})]}),n&&Object(f.jsx)(I,{})]})})}function F(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=(t[1],L()),a=s.handleProfileExist,i=s.handleQuizShare,l=s.handleSetQuiz,u=s.handleSetQuizData,o=p(),j=o.profileExist,d=o.alert,b=o.quizExist,m=o.displayQuiz,x=o.setDisplayQuiz,h=o.quizShareAnswerName,O=o.quizShareResultName,v=o.update,g=o.setUpdate,z=o.loading,q=o.setLoading;return Object(c.useEffect)((function(){q(!0),a()}),[]),Object(c.useEffect)((function(){i()}),[j]),Object(c.useEffect)((function(){l()}),[h]),Object(c.useEffect)((function(){u()}),[O]),Object(c.useEffect)((function(){x(!0)}),[v,g]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"logoCon flex justify-center items-center",children:Object(f.jsx)("h1",{children:"Quiz Time"})}),!m&&Object(f.jsx)(k,{}),d&&Object(f.jsx)(E,{}),n&&Object(f.jsx)(C,{}),j?m&&Object(f.jsx)(T,{}):Object(f.jsx)(y,{}),!m&&Object(f.jsx)(S,{}),z&&!b&&j&&Object(f.jsx)(N,{flag:!1})]})}n(44);function P(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=x().logIn,i=function(){var e=Object(w.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(""),e.next=4,a();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),s("Failed To Log In"),console.log(n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"welcomePage flex justify-center items-center flex-col",children:[Object(f.jsx)("div",{className:"logoCon flex justify-center items-center",children:Object(f.jsx)("h1",{children:"Quiz Time"})}),Object(f.jsx)("p",{className:"text-center"}),Object(f.jsx)("div",{className:"logInBtnCon flex justify-center items-center font-mono",children:Object(f.jsx)("button",{onClick:i,children:"Log In"})}),Object(f.jsxs)("p",{className:"quoteCon text-center",children:[Object(f.jsx)("span",{children:'"'}),"You should know little about a lot",Object(f.jsx)("span",{children:'"'})]})]})})}function U(){var e=x().currentUser,t=p(),n=t.logInCheck,c=t.setLogInCheck;return e&&o.onAuthStateChanged((function(e){e?c(!0):e||c(!1)})),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(F,{}):Object(f.jsx)(P,{})})}var G=function(){return Object(f.jsx)(h,{children:Object(f.jsxs)(v,{children:[Object(f.jsx)(U,{}),Object(f.jsx)("div",{className:"borderCon"})]})})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root"))}]),[[45,1,2]]]);
//# sourceMappingURL=main.23f1e506.chunk.js.map