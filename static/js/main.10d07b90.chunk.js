(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),i=n(17),a=n.n(i),r=(n(22),n(23),n(5)),u=n(12),o=(n(24),n(31),u.a.initializeApp({apiKey:"AIzaSyDfhzeS7B-S4xcRccE-kDKFFX0R3ZVx0bo",authDomain:"quizapp-b1ink0.firebaseapp.com",projectId:"quizapp-b1ink0",storageBucket:"quizapp-b1ink0.appspot.com",messagingSenderId:"979392626883",appId:"1:979392626883:web:89b6e75947c56003272276"})),l=o.auth(),j=new u.a.auth.GoogleAuthProvider,b=o.firestore(),d={users:b.collection("users"),quizs:b.collection("quizs"),answers:b.collection("answers"),results:b.collection("results"),quizShare:b.collection("quizShare"),getCurrentTimeStamp:u.a.firestore.FieldValue.serverTimestamp},m=n(1),f=c.a.createContext();function h(){return Object(s.useContext)(f)}function O(e){var t=e.children,n=Object(s.useState)(),c=Object(r.a)(n,2),i=c[0],a=c[1],u=Object(s.useState)(!0),o=Object(r.a)(u,2),b=o[0],d=o[1];Object(s.useEffect)((function(){return l.onAuthStateChanged((function(e){e?(a(e),d(!1)):d(!1)}))}));var h={currentUser:i,logIn:function(){l.signInWithPopup(j).then().catch((function(e){return console.log(e)}))},logOut:function(){return l.signOut()}};return Object(m.jsx)(f.Provider,{value:h,children:!b&&t})}var x=c.a.createContext(),p=function(){return Object(s.useContext)(x)},v=function(e){var t=e.children,n=Object(s.useState)(!1),c=Object(r.a)(n,2),i=c[0],a=c[1],u=Object(s.useState)(!0),o=Object(r.a)(u,2),l=o[0],j=o[1],b=Object(s.useState)(!1),d=Object(r.a)(b,2),f=d[0],h=d[1],O=Object(s.useState)(1),p=Object(r.a)(O,2),v=p[0],z=p[1],N=Object(s.useState)([]),q=Object(r.a)(N,2),S=q[0],g=q[1],C=Object(s.useState)(""),w=Object(r.a)(C,2),y=w[0],Q=w[1],A=Object(s.useState)(!0),E=Object(r.a)(A,2),k=E[0],I=E[1],R=Object(s.useState)(!1),T=Object(r.a)(R,2),F=T[0],B=T[1],L=Object(s.useState)(!0),P=Object(r.a)(L,2),D=P[0],U=P[1],G=Object(s.useState)([]),Z=Object(r.a)(G,2),J=Z[0],K=Z[1],M=Object(s.useState)(""),V=Object(r.a)(M,2),Y=V[0],$=V[1],W=Object(s.useState)(""),X=Object(r.a)(W,2),_=X[0],H=X[1],ee=Object(s.useState)(""),te=Object(r.a)(ee,2),ne=te[0],se=te[1],ce=Object(s.useState)(0),ie=Object(r.a)(ce,2),ae=ie[0],re=ie[1],ue=Object(s.useState)(0),oe=Object(r.a)(ue,2),le=oe[0],je=oe[1],be=Object(s.useState)(0),de=Object(r.a)(be,2),me=de[0],fe=de[1],he=Object(s.useState)({quizAnswer:[]}),Oe=Object(r.a)(he,2),xe={logInCheck:i,setLogInCheck:a,profileExist:l,setProfileExist:j,quizExist:f,setQuizExist:h,qNo:v,setQNo:z,quiz:S,setQuiz:g,tempQuizAnswer:Oe[0],quizName:y,setQuizName:Q,setTempQuizAnswer:Oe[1],displayQuiz:k,setDisplayQuiz:I,quizComplete:F,setQuizComplete:B,tempAnswer:J,setTempAnswer:K,score:ae,setScore:re,quizShareAnswerName:Y,setQuizShareAnswerName:$,quizShareResultName:ne,setQuizShareResultName:se,quizShareName:_,setQuizShareName:H,quizGiven:D,setQuizGiven:U,userScore:le,setUserScore:je,totalScore:me,setTotalScore:fe};return Object(m.jsx)(x.Provider,{value:xe,children:t})},z=n(10),N=n.n(z),q=n(11);n(15),n(16);function S(e){var t=e.quiz,n=p(),c=n.tempAnswer,i=n.setTempAnswer,a=n.setQuizComplete,u=Object(s.useState)(!1),o=Object(r.a)(u,2),l=(o[0],o[1],Object(s.useState)(0)),j=Object(r.a)(l,2),b=j[0],d=j[1],f=Object(s.useState)(0),h=Object(r.a)(f,2),O=h[0],x=h[1],v=c;void 0===v[0]&&t.map((function(e){v.push({qNo:e.qNo,answer:"",solved:!1})})),Object(s.useState)((function(){x(t.length-1)}),[]);var z=function(e){v.forEach((function(n){if(parseInt(e.target.name)===n.qNo){var s;t.forEach((function(t){t.qNo===n.qNo&&(s=e.target.value)}));var c={qNo:parseInt(e.target.name),answer:s,solved:!0};v[n.qNo-1]=c}}))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=0;v.forEach((function(e){e.solved&&n++})),n===t.length&&(console.log("submited"),i(v),a(!0))}(e)},className:"qForm relative flex justify-center items-center w-full flex-col text-center",children:[Object(m.jsxs)("div",{className:"queCon flex justify-center items-center flex-col overflow-hidden",children:[Object(m.jsx)("div",{className:"qCon",children:Object(m.jsx)("h1",{children:t[b].q})}),Object(m.jsxs)("div",{className:"options w-full",children:[Object(m.jsxs)("div",{className:"optionsRow1 flex justify-evenly items-center",children:[Object(m.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center",children:[Object(m.jsx)("label",{children:t[b].a}),Object(m.jsx)("input",{className:"absolute",type:"radio",value:"a",name:t[b].qNo,onChange:function(e){return z(e)},required:!0})]}),Object(m.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center",children:[Object(m.jsx)("label",{children:t[b].b}),Object(m.jsx)("input",{className:"absolute",type:"radio",value:"b",name:t[b].qNo,onChange:function(e){return z(e)},required:!0})]})]}),Object(m.jsxs)("div",{className:"optionsRow2 flex justify-evenly items-center",children:[Object(m.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center",children:[Object(m.jsx)("label",{children:t[b].c}),Object(m.jsx)("input",{className:"absolute",type:"radio",value:"c",name:t[b].qNo,onChange:function(e){return z(e)},required:!0})]}),Object(m.jsxs)("div",{className:"radioBtnCon relative flex justify-center items-center",children:[Object(m.jsx)("label",{children:t[b].d}),Object(m.jsx)("input",{className:"absolute",type:"radio",value:"d",name:t[b].qNo,onChange:function(e){return z(e)},required:!0})]})]})]}),Object(m.jsxs)("div",{className:"changeButton w-full flex justify-evenly items-center",children:[0===b?"":Object(m.jsx)("button",{className:"prevBtn",type:"button",onClick:function(){b>0&&d(b-1)},children:"Prev"}),b>=O?"":Object(m.jsx)("button",{className:"nextBtn",type:"button",onClick:function(){b<O&&d(b+1)},children:"Next"})]})]}),Object(m.jsx)("button",{className:"submitCon",type:"submit",children:"Submit"})]})})}function g(){var e=h().currentUser,t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],i=n[1],a=p(),u=a.quizExist,o=a.quiz,l=a.quizComplete,j=a.tempAnswer,f=a.score,O=a.setScore,x=a.quizShareName,v=a.quizShareAnswerName,z=a.quizShareResultName;return Object(s.useEffect)((function(){var t;return l&&e&&(t=d.answers.doc(v).get().then((function(t){t.exists&&function(t){var n,s=0;t.quizAnswerContainer.quizAnswer.forEach((function(e){e.answer===j[e.qNo-1].answer&&s++})),O(s),i(!1),e&&(n=d.results.doc(z).get().then((function(t){var n=t.data().quizResultContainer.submissions;if(n.push({uid:e.uid,quizName:x,userScore:s,totalScore:j.length}),void 0!==t.data().quizResultContainer.submissions[0]){var c=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(c=!0)})),console.log(c),!1===c&&b.collection("results").doc(z).update({quizResultContainer:{quizName:x,submissions:n}})}else{var i=!1;t.data().quizResultContainer.submissions.forEach((function(t){t.uid===e.uid&&(i=!0)})),console.log(i),!1===i&&b.collection("results").doc(z).update({quizResultContainer:{quizName:x,submissions:n}})}s=0})))}(t.data())}))),t}),[l]),Object(m.jsx)(m.Fragment,{children:u&&!l?Object(m.jsx)(S,{quiz:o}):l?!c&&Object(m.jsxs)("div",{className:"result",children:[f,"/",j.length,Object(m.jsx)("h1",{children:"Quiz has been submited!"})]}):"Quiz Does Not Exist"})}var C=n.p+"static/media/logoT.72657f0b.svg";function w(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(""),a=Object(r.a)(i,2),u=a[0],o=a[1],j=Object(s.useState)(""),b=Object(r.a)(j,2),f=b[0],O=b[1],x=Object(s.useState)(""),v=Object(r.a)(x,2),z=v[0],S=v[1],w=Object(s.useState)(""),y=Object(r.a)(w,2),Q=y[0],A=y[1],E=Object(s.useState)(""),k=Object(r.a)(E,2),I=k[0],R=k[1],T=h(),F=T.currentUser,B=T.logOut,L=p(),P=L.setLogInCheck,D=L.profileExist,U=L.setProfileExist,G=L.setQuiz,Z=L.setQuizExist,J=L.quizExist,K=L.setQuizName,M=L.quizName,V=L.displayQuiz,Y=L.setDisplayQuiz,$=L.setQNo,W=L.setQuizComplete,X=(L.setTempAnswer,L.setTempQuizAnswer),_=L.setScore,H=L.quizShareName,ee=L.setQuizShareName,te=L.quizShareAnswerName,ne=L.setQuizShareAnswerName,se=L.quizShareResultName,ce=L.setQuizShareResultName,ie=L.quizGiven,ae=L.setQuizGiven,re=L.userScore,ue=L.setUserScore,oe=L.totalScore,le=L.setTotalScore,je=function(){var e=Object(q.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{B(),U(!0),P(!1),Z(!1),$(1),G([]),K(""),Y(!0),W(!1),ee(""),ne(""),ce(""),ae(!0),X({quizAnswer:[]}),_(0),c(""),l.onAuthStateChanged((function(e){e||P(!1)}))}catch(t){c("Failed To LogOut"),console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e;return F&&(e=d.users.doc(F.uid).get().then((function(e){if(e.exists)return e.data()&&(e.data().uid,F.uid),void U(!0);U(!1)}))),e}),[]),Object(s.useEffect)((function(){var e;return F&&(e=d.quizShare.doc("quizShare").get().then((function(e){e.exists&&e.data()&&(ee(e.data().quizShareContainer.quizName),ne(e.data().quizShareContainer.quizAnswerName),ce(e.data().quizShareContainer.quizResultName))}))),e}),[D]),Object(s.useEffect)((function(){var e;return""!==H&&F&&(e=d.quizs.doc(H).get().then((function(e){e.exists?e.data()&&(G(e.data().quizContainer.quiz),K(e.data().quizContainer.quizName)):Z(!1)}))),e}),[te]),Object(s.useEffect)((function(){var e;return""!==se&&F&&(e=d.results.doc(se).get().then((function(e){if(e.exists){if(e.data())if(void 0!==e.data().quizResultContainer.submissions[0]){var t=!1;e.data().quizResultContainer.submissions.forEach((function(e){e.uid===F.uid&&(t=!0,ue(e.userScore),le(e.totalScore))})),!1===t?(Z(!0),ae(!1)):(Z(!0),ae(!0))}else Z(!0),ae(!1)}else;}))),e}),[se]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"logoCon flex justify-center items-center",children:[Object(m.jsx)("img",{src:C,alt:"logo"}),Object(m.jsx)("h1",{children:"Quiz Time"})]}),Object(m.jsx)("div",{className:"subTitle",children:Object(m.jsx)("h1",{children:"Avilable Quizes"})}),D?V&&(J?Object(m.jsx)("div",{className:"quizPrevCon cursor-pointer flex justify-center items-center w-full flex-col",onClick:function(){!1===ie&&Y(!1)},children:Object(m.jsxs)("div",{className:"quizCon flex justify-center items-start flex-col text-center",children:[Object(m.jsxs)("h1",{className:"w-full text-center",children:["Quiz Name: ",M]}),ie?Object(m.jsxs)("div",{className:"w-full text-center",children:[Object(m.jsx)("p",{className:"w-full text-center",children:"You have already submited the quiz"}),Object(m.jsxs)("h1",{className:"w-full text-center",children:["Score: ",re,"/",oe]})]}):Object(m.jsx)("p",{className:"w-full text-center",children:"Click To Start The Quiz"})]})}):Object(m.jsx)("h1",{className:"w-full text-center",children:'"Quiz are not avilable yet!"'})):Object(m.jsxs)("form",{onSubmit:function(e){return function(e){var t;return e.preventDefault(),I.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?F&&(t=d.users.doc(F.uid).get().then((function(e){e.exists||(d.users.doc(F.uid).set({fullName:{firstName:u,middleName:f,lastName:z,username:Q},email:I,uid:F.uid}),o(""),O(""),S(""),R(""),U(!0))}))):window.location.reload(),t}(e)},className:"formCon flex justify-start items-center flex-col",children:[Object(m.jsxs)("div",{className:"inputCon",children:[Object(m.jsx)("label",{children:"First Name:"}),Object(m.jsx)("input",{type:"text",value:u,required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputCon",children:[Object(m.jsx)("label",{children:"Middle Name:"}),Object(m.jsx)("input",{type:"text",value:f,required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputCon",children:[Object(m.jsx)("label",{children:"Last Name:"}),Object(m.jsx)("input",{type:"text",value:z,required:!0,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputCon",children:[Object(m.jsx)("label",{children:"Username:"}),Object(m.jsx)("input",{type:"text",value:Q,required:!0,minLength:"4",maxLength:"10",onChange:function(e){return A(e.target.value)}})]}),Object(m.jsxs)("div",{className:"inputCon",children:[Object(m.jsx)("label",{children:"Email:"}),Object(m.jsx)("input",{type:"email",value:I,required:!0,onChange:function(e){return R(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",children:"Save"})]}),!V&&Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"logOutCon w-full flex justify-center items-center",children:Object(m.jsx)("button",{className:"",onClick:je,children:"LogOut"})})]})}n(29);function y(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=h().logIn,a=function(){var e=Object(q.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(""),e.next=4,i();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c("Failed To Log In"),console.log(n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"welcomePage flex justify-center items-center flex-col",children:[Object(m.jsxs)("div",{className:"logoCon flex justify-center items-center",children:[Object(m.jsx)("img",{src:C,alt:"logo"}),Object(m.jsx)("h1",{children:"Quiz Time"})]}),Object(m.jsx)("p",{className:"text-center"}),Object(m.jsx)("div",{className:"logInBtnCon flex justify-center items-center font-mono",children:Object(m.jsx)("button",{onClick:a,children:"Log In"})}),Object(m.jsxs)("p",{className:"quoteCon text-center",children:[Object(m.jsx)("span",{children:'"'}),"You should know little about a lot",Object(m.jsx)("span",{children:'"'})]})]})})}function Q(){var e=h().currentUser,t=p(),n=t.logInCheck,s=t.setLogInCheck;return e&&l.onAuthStateChanged((function(e){e?s(!0):e||s(!1)})),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(w,{}):Object(m.jsx)(y,{})})}var A=function(){return Object(m.jsx)(O,{children:Object(m.jsxs)(v,{children:[Object(m.jsx)(Q,{}),Object(m.jsx)("div",{className:"borderCon"})]})})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.10d07b90.chunk.js.map