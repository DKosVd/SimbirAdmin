(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{128:function(e,_,a){},129:function(e,_,a){},16:function(e,_,a){e.exports={login:"login_login__3MsVb",login__enter__wrapper:"login_login__enter__wrapper__33wdT",login__enter__wrapper__details:"login_login__enter__wrapper__details__KcEES",login__enter__wrapper__main:"login_login__enter__wrapper__main__3J7az",login__enter__main__title:"login_login__enter__main__title__3KjgY",login__enter__wrapper__logo:"login_login__enter__wrapper__logo__3bgHy",login__enter__logo_img:"login_login__enter__logo_img__1XDvT",login__enter__logo_title:"login_login__enter__logo_title__Y-f9y",login__enter__form:"login_login__enter__form__1UFlG",login__enter__form__elem:"login_login__enter__form__elem__1ZfhJ",login__enter__form__manipulation:"login_login__enter__form__manipulation__2xbuX",login__enter__form__link:"login_login__enter__form__link__2Z3Io"}},22:function(e,_,a){e.exports={main:"main_main__3B10y",sidebar:"main_sidebar__3BYkR",sidebar__elem:"main_sidebar__elem__2eWJK",sidebar__elem__title:"main_sidebar__elem__title__1hcMV",sidebar__elem__icon:"main_sidebar__elem__icon__3Okzr",sidebar__logo:"main_sidebar__logo__lgYf7",main__content:"main_main__content__3o-FR"}},23:function(e,_,a){e.exports={content__header:"header_content__header__mGfZx",header__search:"header_header__search__14mR1",header__manage:"header_header__manage__3kpzq",header__notification__quantity:"header_header__notification__quantity__37YoV",content__header__user:"header_content__header__user__3E3z1",content__header__avatar:"header_content__header__avatar__1JYiF",content__header__menu:"header_content__header__menu__2T764",content__header__notifications:"header_content__header__notifications__3UBii",content__header__menu__dropdown:"header_content__header__menu__dropdown__2ieOu"}},259:function(e,_,a){"use strict";a.r(_);var t,n=a(0),c=a.n(n),r=a(67),s=a(25),i=a(52),l=a.n(i),o=(a(128),a(10)),d=(a(129),a(1)),m=function(){return Object(d.jsx)("div",{className:"wrapper-preloader",children:Object(d.jsxs)("div",{className:"lds-ring",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})},b=function(e){return function(_){var a=_.path,t=_.LoadingStatus,n=_.status,c=_.preloader;return n===t?Object(d.jsx)(o.a,{to:a}):n!==t&&n!==c?Object(d.jsx)(m,{}):Object(d.jsx)(e,{})}},j=a(30),u=a(16),h=a.n(u),p=a(56),O=a(34),x=a(118);!function(e){e.LOGIN="auth/LOGIN",e.LOGOUT="auth/LOGOUT",e.SET_STATUS="auth/SET_STATUS",e.LOGIN_FETCH="auth/LOGIN_FETCH",e.AUTH_ME="auth/AUTH_ME"}(t||(t={}));var g,f=function(e){return{type:t.SET_STATUS,payload:e}};!function(e){e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e.NEVER="NEVER"}(g||(g={}));var y=p.a().shape({username:p.b().required(),password:p.b().required()}),N=function(){var e=Object(s.b)(),_=Object(s.c)((function(e){return e.auth.loadingStatus})),a=Object(O.d)({resolver:Object(x.a)(y)}),n=a.register,c=a.handleSubmit;a.formState.errors;return _===g.LOADING?Object(d.jsx)(m,{}):Object(d.jsxs)("div",{className:h.a.login,children:[Object(d.jsxs)("div",{className:h.a.login__enter__wrapper__logo,children:[Object(d.jsx)("div",{className:h.a.login__enter__logo_img}),Object(d.jsx)("h2",{className:h.a.login__enter__logo_title,children:"Need for drive"})]}),Object(d.jsx)("div",{className:h.a.login__enter__wrapper,children:Object(d.jsx)("div",{className:h.a.login__enter__wrapper__details,children:Object(d.jsxs)("div",{className:h.a.login__enter__wrapper__main,children:[Object(d.jsx)("div",{className:h.a.login__enter__main__title,children:Object(d.jsx)("h2",{children:"\u0412\u0445\u043e\u0434"})}),Object(d.jsxs)("form",{onSubmit:c((function(_){var a;e((a=_,{type:t.LOGIN_FETCH,payload:a}))})),className:h.a.login__enter__form,children:[Object(d.jsxs)("div",{className:h.a.login__enter__form__elem,children:[Object(d.jsx)("label",{className:"label-mb",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(d.jsx)("input",Object(j.a)({type:"text",className:"input-elem"},n("username")))]}),Object(d.jsxs)("div",{className:h.a.login__enter__form__elem,children:[Object(d.jsx)("label",{className:"label-mb",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",Object(j.a)({type:"password",className:"input-elem"},n("password")))]}),Object(d.jsxs)("div",{className:h.a.login__enter__form__manipulation,children:[Object(d.jsx)("a",{href:"#",className:h.a.login__enter__form__link,children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-blue",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})})]})},v=a(22),w=a.n(v),E=a(115),S=a(108),T=a(23),R=a.n(T),k=function(){return Object(d.jsx)("header",{className:R.a.content__header,children:Object(d.jsxs)("div",{className:"header__wrapper",children:[Object(d.jsx)("div",{className:R.a.header__search,children:Object(d.jsx)("div",{className:R.a.content__header__search,children:Object(d.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",defaultValue:""})})}),Object(d.jsxs)("div",{className:R.a.header__manage,children:[Object(d.jsxs)("div",{className:R.a.content__header__notifications,children:[Object(d.jsx)("span",{children:Object(d.jsx)(S.a,{height:"18px",width:"18px"})}),Object(d.jsx)("div",{className:R.a.header__notification__quantity,children:"3"})]}),Object(d.jsxs)("div",{className:R.a.content__header__user,children:[Object(d.jsx)("div",{className:R.a.content__header__avatar}),Object(d.jsx)("span",{className:R.a.content__header__name,children:"Admin"})]}),Object(d.jsx)("div",{className:R.a.content__header__menu,children:Object(d.jsx)("span",{className:R.a.content__header__menu__dropdown})})]})]})})},A=a(15),L=a(3),I=a.n(L),D=function(){var e=Object(n.useState)(),_=Object(A.a)(e,2);_[0],_[1];return Object(d.jsx)("main",{className:I.a.main,children:Object(d.jsxs)("div",{className:I.a.main__wrapper,children:[Object(d.jsx)("h2",{className:I.a.main__title,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"}),Object(d.jsxs)("div",{className:I.a.car,children:[Object(d.jsxs)("div",{className:I.a.car__model,children:[Object(d.jsx)("div",{className:I.a.car__model__head,children:Object(d.jsxs)("div",{className:I.a.car__model__head__wrapper,children:[Object(d.jsx)("div",{className:I.a.car__model__head__img,children:Object(d.jsx)("img",{height:"110px",width:"242px"})}),Object(d.jsxs)("div",{className:I.a.car__model__head__text,children:[Object(d.jsx)("span",{className:I.a.car__model__head__title,children:"Hyndai, i30 N"}),Object(d.jsx)("span",{className:I.a.car__model__head__type,children:"\u041a\u043e\u043c\u043f\u0430\u043a\u0442-\u043a\u0430\u0440"})]}),Object(d.jsx)("div",{className:I.a.car__model__head__chose,children:Object(d.jsxs)("div",{className:"field__wrapper",children:[Object(d.jsx)("input",{className:"field field__file",type:"file",id:"field"}),Object(d.jsxs)("label",{htmlFor:"field",className:"field__file-wrapper",children:[Object(d.jsx)("div",{className:"field__file-fake",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b..."}),Object(d.jsx)("div",{className:"field__file-button",children:"\u041e\u0431\u0437\u043e\u0440"})]})]})})]})}),Object(d.jsxs)("div",{className:I.a.car__model__body,children:[Object(d.jsx)("div",{className:I.a.car__model__body__full,children:Object(d.jsxs)("div",{className:I.a.car__model__body__wrapper,children:[Object(d.jsxs)("div",{className:I.a.car__model__body__tex_b,children:[Object(d.jsx)("span",{className:I.a.car__model__body__text,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}),Object(d.jsx)("span",{className:I.a.car__model__body__text,children:"70%"})]}),Object(d.jsx)("input",{className:"input-range",type:"range",min:"0",step:"1",value:"70",defaultValue:"0",max:"100"})]})}),Object(d.jsx)("div",{className:I.a.car__model__body__description,children:Object(d.jsxs)("div",{className:I.a.car__model__body__wrapper,children:[Object(d.jsx)("div",{className:I.a.car__model__description__title,children:Object(d.jsx)("span",{className:I.a.car__model__body__text,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),Object(d.jsx)("div",{className:I.a.car__model__description__text,children:Object(d.jsx)("p",{className:I.a.car__model__description__txt,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?"})})]})})]})]}),Object(d.jsx)("div",{className:I.a.car__settings,children:Object(d.jsxs)("div",{className:I.a.car__settings__wrapper,children:[Object(d.jsxs)("div",{className:I.a.car__settings__main,children:[Object(d.jsx)("h3",{className:I.a.car__settings__title,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"}),Object(d.jsx)("div",{className:I.a.car__settings__body,children:Object(d.jsxs)("div",{className:I.a.car__settings__body__main,children:[Object(d.jsxs)("div",{className:I.a.car__settings__body__model,children:[Object(d.jsxs)("div",{className:I.a.car__settings__body__model__elem,children:[Object(d.jsx)("label",{className:I.a.car__settings__body__label,children:"\u041c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"}),Object(d.jsx)("input",{className:I.a.car__settings__input,type:"text"})]}),Object(d.jsxs)("div",{className:I.a.car__settings__body__model__elem,children:[Object(d.jsx)("label",{className:I.a.car__settings__body__label,children:"\u0422\u0438\u043f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"}),Object(d.jsx)("input",{className:"".concat(I.a.car__settings__input," ").concat(I.a.car__settings__input__error),type:"text"}),Object(d.jsx)("span",{className:I.a.car__settings__input__txt_error,children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0448\u0438\u0431\u043a\u0438"})]})]}),Object(d.jsx)("div",{className:I.a.car__settings__body__model,children:Object(d.jsxs)("div",{className:I.a.car__settings__body__model__elem__color,children:[Object(d.jsxs)("div",{className:I.a.car__settings__body__model__color,children:[Object(d.jsx)("label",{className:I.a.car__settings__body__label,children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0446\u0432\u0435\u0442\u0430"}),Object(d.jsx)("input",{className:I.a.car__settings__input,type:"text"})]}),Object(d.jsx)("div",{className:I.a.car__settings__body__model__plus,children:Object(d.jsxs)("div",{className:I.a.car__settings__plus__wrapper,children:[Object(d.jsx)("span",{className:I.a.car__settings__hor__rect}),Object(d.jsx)("span",{className:I.a.car__settings__ver__rect})]})})]})}),Object(d.jsxs)("div",{className:I.a.car__settings__body__colors,children:[Object(d.jsxs)("div",{className:I.a.car__settings__body__color,children:[Object(d.jsx)("input",{id:"green",type:"checkbox"}),Object(d.jsx)("label",{htmlFor:"green",children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"})]}),Object(d.jsxs)("div",{className:I.a.car__settings__body__color,children:[Object(d.jsx)("input",{id:"green",type:"checkbox"}),Object(d.jsx)("label",{htmlFor:"green",children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"})]}),Object(d.jsxs)("div",{className:I.a.car__settings__body__color,children:[Object(d.jsx)("input",{id:"green",type:"checkbox"}),Object(d.jsx)("label",{htmlFor:"green",children:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"})]})]})]})})]}),Object(d.jsxs)("div",{className:I.a.car__settings__manage,children:[Object(d.jsxs)("div",{className:I.a.car__settings__manage__manipulate,children:[Object(d.jsx)("button",{className:"btn btn-blue",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(d.jsx)("button",{className:"btn btn-grey",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]}),Object(d.jsx)("div",{className:I.a.car__settings__manage__delete,children:Object(d.jsx)("button",{className:"btn btn-red",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]})})]})]})})},U=a(31),G=a.n(U),F=function(){return Object(d.jsx)("footer",{className:G.a.footer,children:Object(d.jsxs)("div",{className:"header__wrapper ".concat(G.a.footer__main),children:[Object(d.jsxs)("div",{className:G.a.footer__links,children:[Object(d.jsx)("a",{className:G.a.footer__link,href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(d.jsx)("a",{className:G.a.footer__link,href:"#",children:"\u0421\u0441\u044b\u043b\u043a\u0430"})]}),Object(d.jsx)("div",{className:G.a.footer__copyright,children:Object(d.jsx)("span",{className:G.a.footer__copyright_txt,children:"Copyright \xa9 2020 Simbirsoft"})})]})})},q=b((function(){return Object(d.jsxs)("div",{className:w.a.main,children:[Object(d.jsxs)("div",{className:w.a.sidebar,children:[Object(d.jsx)("div",{className:w.a.sidebar__logo,children:"Need for car"}),Object(d.jsxs)("div",{className:w.a.sidebar__elem,children:[Object(d.jsx)(E.a,{className:w.a.sidebar__elem__icon}),Object(d.jsx)("span",{className:w.a.sidebar__elem__title,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"})]}),Object(d.jsx)("div",{className:w.a.sidebar__elem,children:Object(d.jsx)("span",{className:w.a.sidebar__elem__title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0432\u0442\u043e"})}),Object(d.jsx)("div",{className:w.a.sidebar__elem,children:Object(d.jsx)("span",{className:w.a.sidebar__elem__title,children:"\u0417\u0430\u043a\u0430\u0437\u044b"})})]}),Object(d.jsxs)("div",{className:w.a.main__content,children:[Object(d.jsx)(k,{}),Object(d.jsx)(D,{}),Object(d.jsx)(F,{})]})]})})),H=b(N);var V,z=function(){Object(s.c)((function(e){return e.user.user_id}));var e=Object(s.c)((function(e){return e.auth.loadingStatus})),_=(Object(o.g)(),Object(s.b)());return Object(n.useEffect)((function(){_({type:t.AUTH_ME})}),[_]),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(H,{path:"/admin",LoadingStatus:g.LOADED,status:e,preloader:g.ERROR})}}),Object(d.jsx)(o.b,{path:"/admin",render:function(){return Object(d.jsx)(q,{path:"/",LoadingStatus:g.ERROR,status:e,preloader:g.LOADED})}}),Object(d.jsx)("h1",{children:"ERROR"})]})})},M=a(29),X=a(117),J={loadingStatus:g.NEVER};!function(e){e.SET_USER="user/SET_USER"}(V||(V={}));var Y=function(e){return{type:V.SET_USER,payload:e}},B={user_id:null},C=Object(M.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,_=arguments.length>1?arguments[1]:void 0;switch(_.type){case t.LOGIN:return{isAuth:!0,loadingStatus:g.LOADED};case t.LOGOUT:return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1});case t.SET_STATUS:return Object(j.a)(Object(j.a)({},e),{},{loadingStatus:_.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,_=arguments.length>1?arguments[1]:void 0;switch(_.type){case V.SET_USER:return{user_id:_.payload};default:return e}}}),Z=a(6),K=a.n(Z),W=a(13),P=a(20),Q=a(72),$=function(e){return Object(P.a)(K.a.mark((function _(){var a,t;return K.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Q.b.post("/auth/login",e);case 2:return a=_.sent,t=a.data,_.abrupt("return",t);case 5:case"end":return _.stop()}}),_)})))()},ee=function(){return Object(P.a)(K.a.mark((function e(){var _,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("/auth/check");case 2:return _=e.sent,a=_.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},_e=a(43),ae=K.a.mark(ce),te=K.a.mark(re),ne=K.a.mark(se);function ce(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(t.LOGIN_FETCH,re);case 2:return e.next=4,Object(W.d)(t.AUTH_ME,se);case 4:case"end":return e.stop()}}),ae)}function re(e){var _,a;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _=e.payload,t.prev=1,t.next=4,Object(W.c)(f(g.LOADING));case 4:return t.next=6,Object(W.b)($,_);case 6:return a=t.sent,t.next=9,Object(W.c)(Y(a.user_id));case 9:return t.next=11,Object(W.b)(_e.a.setItem,"access_token",a.access_token);case 11:return t.next=13,Object(W.b)(_e.a.setItem,"refresh_token",a.refresh_token);case 13:return t.next=15,Object(W.c)(f(g.LOADED));case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(1),t.next=21,Object(W.c)(f(g.ERROR));case 21:case"end":return t.stop()}}),te,null,[[1,17]])}function se(){var e;return K.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,Object(W.c)(f(g.LOADING));case 3:return _.next=5,Object(W.b)(ee);case 5:return e=_.sent,_.next=8,Object(W.c)(Y(e.id));case 8:return _.next=10,Object(W.c)(f(g.LOADED));case 10:_.next=16;break;case 12:return _.prev=12,_.t0=_.catch(0),_.next=16,Object(W.c)(f(g.ERROR));case 16:case"end":return _.stop()}}),ne,null,[[0,12]])}var ie=K.a.mark(le);function le(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([ce()]);case 2:case"end":return e.stop()}}),ie)}var oe=Object(X.a)(),de="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,me=Object(M.d)(C,de(Object(M.a)(oe)));oe.run(le),l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(s.a,{store:me,children:Object(d.jsx)(z,{})})})}),document.getElementById("root"))},3:function(e,_,a){e.exports={main:"mainlayout_main__32RDx",main__wrapper:"mainlayout_main__wrapper__2biyb",main__title:"mainlayout_main__title__3XTXj",car:"mainlayout_car__3IaNR",car__model:"mainlayout_car__model__2_UwT",car__model__head:"mainlayout_car__model__head__3_ZTW",car__model__head__img:"mainlayout_car__model__head__img__2zbRR",car__model__head__chose:"mainlayout_car__model__head__chose__2rclZ",car__model__head__text:"mainlayout_car__model__head__text__2s26R",car__model__head__title:"mainlayout_car__model__head__title__1y6h_",car__model__head__type:"mainlayout_car__model__head__type__3tFNY",car__model__body:"mainlayout_car__model__body__3biX0",car__model__body__full:"mainlayout_car__model__body__full__1TzVV",car__model__body__wrapper:"mainlayout_car__model__body__wrapper__SzOcK",car__model__body__text:"mainlayout_car__model__body__text__2ay3P",car__model__body__tex_b:"mainlayout_car__model__body__tex_b__2MjZ_",car__model__description__text:"mainlayout_car__model__description__text__1FTWi",car__model__head__wrapper:"mainlayout_car__model__head__wrapper__2fQFn",car__model__description__txt:"mainlayout_car__model__description__txt__2Xk0g",car__settings:"mainlayout_car__settings__10c1E",car__settings__title:"mainlayout_car__settings__title__uJ_lS",car__settings__wrapper:"mainlayout_car__settings__wrapper__1TPql",car__settings__body:"mainlayout_car__settings__body__3xSyL",car__settings__body__model:"mainlayout_car__settings__body__model__3j0Ob",car__settings__body__model__elem:"mainlayout_car__settings__body__model__elem__mWHGb",car__settings__input:"mainlayout_car__settings__input__3rLO7",car__settings__body__model__elem__color:"mainlayout_car__settings__body__model__elem__color__2-A3F",car__settings__body__model__color:"mainlayout_car__settings__body__model__color__3oYwg",car__settings__body__model__plus:"mainlayout_car__settings__body__model__plus__1vgf6",car__settings__plus__wrapper:"mainlayout_car__settings__plus__wrapper__2Jy4V",car__settings__body__label:"mainlayout_car__settings__body__label__aHAZQ",car__settings__hor__rect:"mainlayout_car__settings__hor__rect__2GGMv",car__settings__ver__rect:"mainlayout_car__settings__ver__rect__3v9r_",car__settings__manage:"mainlayout_car__settings__manage__13z_A",car__settings__manage__manipulate:"mainlayout_car__settings__manage__manipulate__KDi7S",car__settings__input__error:"mainlayout_car__settings__input__error__2_e5N",car__settings__input__txt_error:"mainlayout_car__settings__input__txt_error__Jypka",car__settings__body__colors:"mainlayout_car__settings__body__colors__2nLiF"}},31:function(e,_,a){e.exports={footer:"footer_footer__2E-W1",footer__main:"footer_footer__main__bTC3h",footer__link:"footer_footer__link__2XYSz",footer__copyright_txt:"footer_footer__copyright_txt__1PGUT"}},43:function(e,_,a){"use strict";a.d(_,"a",(function(){return t}));var t={setItem:function(e,_){return window.localStorage.setItem(e,_)},getItem:function(e){return window.localStorage.getItem(e)},deleteItem:function(e){window.localStorage.removeItem(e)},deleteAll:function(){window.localStorage.clear()}}},72:function(e,_,a){"use strict";(function(e){a.d(_,"b",(function(){return o})),a.d(_,"a",(function(){return l}));var t=a(73),n=a.n(t),c=a(116),r=a.n(c),s=a(43);r.a.config();var i=e.from("".concat(Math.random().toString(16).slice(2,8),":").concat("4cbcea96de")).toString("base64"),l=n.a.create({baseURL:"https://api-factory.simbirsoft1.com/api",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b",Authorization:"Bearer ".concat(s.a.getItem("access_token"))}}),o=n.a.create({baseURL:"https://api-factory.simbirsoft1.com/api",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b",Authorization:"Basic ".concat(i)}})}).call(this,a(235).Buffer)}},[[259,1,2]]]);
//# sourceMappingURL=main.2a4010d1.chunk.js.map