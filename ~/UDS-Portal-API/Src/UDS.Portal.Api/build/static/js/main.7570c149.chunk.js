(this.webpackJsonpuds_portal_front=this.webpackJsonpuds_portal_front||[]).push([[1],{197:function(t,e,n){t.exports=n(402)},199:function(t,e,n){},207:function(t,e,n){},400:function(t,e,n){},402:function(t,e,n){"use strict";n.r(e);var o=n(120),c=n.n(o),r=n(189),i=n(1),a=n.n(i),s=(n(199),n(69)),u=n.n(s),l=n(194),d=n(91),p=n(124),f=(n(207),n(191)),h=n.n(f),m=(n(208),n(217),n(71)),g="https://my-uds-systems-website-development.azurewebsites.net";m.a.initialize({instance:"https://udscustomersdirectory.b2clogin.com/tfp/",tenant:"udscustomersdirectory.onmicrosoft.com",signInPolicy:"B2C_1_SignUp_SignIn",forgetPasswordPolicy:"B2C_1_PasswordReset",clientId:"dd6f04a9-3f48-418c-bd64-76b3465b4ef6",cacheLocation:"localStorage",scopes:["https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/user_impersonation","https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/write","https://udscustomersdirectory.onmicrosoft.com/uds-portal/prod/read"],redirectUri:g,postLogoutRedirectUri:g});n(400);var b=n(14);function A(){var t=Object(b.h)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}function I(t,e){h.a.load({custom:{families:["SegoeUI","Gilroy"]}});var n=Object(l.a)();u.a.render(a.a.createElement(p.a,{store:e},a.a.createElement(d.a,{history:n},a.a.createElement(A,null),a.a.createElement(t,null))),document.getElementById("root"))}m.a.run(Object(r.a)(c.a.mark((function t(){var e,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,560));case 2:return e=t.sent,t.next=5,Promise.all([n.e(0),n.e(6)]).then(n.bind(null,561));case 5:o=t.sent,console.log(e),I(e.default,o.default);case 8:case"end":return t.stop()}}),t)}))))},71:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o,c=n(192),r=n(193),i=n(196),a=n(195),s=n(404),u=n(1),l=n.n(u),d={API_ACCESS:{scopes:[]}},p={auth:{clientId:"",authority:"",redirectUri:"",validateAuthority:!1,postLogoutRedirectUri:""},cache:{cacheLocation:"",storeAuthStateInCookie:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ")>-1,n=t.indexOf("Trident/")>-1;return e||n}()}},f={stopLoopingRedirect:!1,config:{scopes:[],cacheLocation:null},launchApp:null,accessToken:null,msalObj:null};var h={initialize:function(t){!function(t){var e=t.tenant.split(".")[0],n="https://".concat(e,".b2clogin.com/"),o="".concat(n).concat(t.tenant,"/").concat(t.signInPolicy);p.auth.clientId=t.clientId,p.auth.authority=o,p.auth.redirectUri=t.redirectUri,p.auth.postLogoutRedirectUri=t.postLogoutRedirectUri,p.cache.cacheLocation=t.cacheLocation,d.API_ACCESS.scopes=t.scopes}(t),o=new s.a(p)},run:function(t){var e;f.launchApp=t,o.handleRedirectCallback((function(t){})),o.getAccount()?o.acquireTokenSilent(d.API_ACCESS).then((function(t){"localStorage"===p.cache.cacheLocation?window.localStorage.setItem("Authorization","Bearer "+t):window.sessionStorage.setItem("Authorization","Bearer "+t),f.accessToken=t,f.launchApp&&f.launchApp(),e&&e()}),(function(t){t&&o.acquireTokenRedirect(d.API_ACCESS)})):o.loginRedirect(d.API_ACCESS)},required:function(t,e){return function(n){Object(i.a)(s,n);var o=Object(a.a)(s);function s(t){var e;return Object(c.a)(this,s),(e=o.call(this,t)).state={signedIn:!1,error:null},e}return Object(r.a)(s,[{key:"render",value:function(){return this.state.signedIn?l.a.createElement(t,this.props):"function"===typeof e?e():null}}]),s}(l.a.Component)},signOut:function(){return o.logout()},getAccessToken:function(){return f.accessToken}}}},[[197,2,3]]]);
//# sourceMappingURL=main.7570c149.chunk.js.map