(window["webpackJsonpmaterial-kit-react"]=window["webpackJsonpmaterial-kit-react"]||[]).push([[0],{35:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),s=t(7),n=t.n(s),r=t(5),i=t(3),o=t(24),d=t(25),m=t(32),p=[],u=Object(i.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0,t=a.type,l=a.payload;switch(t){case"SET_ALERT":return[].concat(Object(m.a)(e),[a.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==l}));default:return e}}}),E=[d.a],v=Object(i.createStore)(u,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,E))),w=t(26),b=t(27),f=t(33),g=t(28),h=t(6),y=t(34),x=Object(r.b)((function(e){return{alerts:e.alert}}))((function(e){var a=e.alerts;return null!==a&&a.length>0&&a.map((function(e){return c.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))})),S=t(10),I=t.n(S),U=t(29),L=t(30),k=t.n(L),O=t(31),j=t.n(O),T=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(l){var c=j.a.v4();l({type:"SET_ALERT",payload:{msg:e,alertType:a,id:c}}),setTimeout((function(){return l({type:"REMOVE_ALERT",payload:c})}),t)}},C=function(e){function a(e){var t;return Object(w.a)(this,a),(t=Object(f.a)(this,Object(g.a)(a).call(this,e))).state={email:""},t.onSubmit=t.onSubmit.bind(Object(h.a)(t)),t.onChange=t.onChange.bind(Object(h.a)(t)),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={email:this.state.email};this.props.joinSubscriber(a)}},{key:"render",value:function(){var e=this,a=this.state.email;return c.a.createElement("div",null,c.a.createElement("header",{class:"home-area overlay",id:"home_page"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 hidden-sm col-md-5"},c.a.createElement("figure",{class:"mobile-image wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("img",{src:"/assetes/firstpng1.png",alt:""}))),c.a.createElement("div",{class:"col-xs-12 col-md-7"},c.a.createElement("div",{class:"space-80 hidden-xs"}),c.a.createElement("h1",{class:"wow fadeInUp","data-wow-delay":"0.4s"},"Start connecting with people."),c.a.createElement("div",{class:"space-20"}),c.a.createElement("div",{class:"desc wow fadeInUp","data-wow-delay":"0.6s"},c.a.createElement("p",null,"Mediabox offers a platform for people to get connected through groups created under various catagories.")),c.a.createElement("div",{class:"space-20"}),c.a.createElement("a",{href:"#",class:"bttn-white wow fadeInUp","data-wow-delay":"0.8s"},c.a.createElement("i",{class:"lnr lnr-download"}),"Download App"))))),c.a.createElement("section",{class:"progress-area gray-bg",id:"progress_page"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-md-6"},c.a.createElement("div",{class:"page-title section-padding"},c.a.createElement("h5",{class:"title wow fadeInUp","data-wow-delay":"0.2s"},"About app"),c.a.createElement("div",{class:"space-10"}),c.a.createElement("h3",{class:"dark-color wow fadeInUp","data-wow-delay":"0.4s"},"Interraction within groups"),c.a.createElement("div",{class:"space-20"}),c.a.createElement("div",{class:"desc wow fadeInUp","data-wow-delay":"0.6s"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.")),c.a.createElement("div",{class:"space-50"}),c.a.createElement("a",{href:"#",class:"bttn-default wow fadeInUp","data-wow-delay":"0.8s"},"Learn More"))),c.a.createElement("div",{class:"col-xs-12 col-md-6"},c.a.createElement("figure",{class:"mobile-image"},c.a.createElement("img",{src:"/assetes/images/second4.png",alt:""})))))),c.a.createElement("section",{class:"feature-area section-padding-top",id:"features_page"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-8 col-sm-offset-2"},c.a.createElement("div",{class:"page-title text-center"},c.a.createElement("h5",{class:"title"},"Categories"),c.a.createElement("div",{class:"space-10"}),c.a.createElement("h3",null,"5 Distinct group categories"),c.a.createElement("div",{class:"space-60"})))),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.4s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-apartment"})),c.a.createElement("h4",null,"Job Opportunities"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),c.a.createElement("div",{class:"space-60"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-coffee-cup"})),c.a.createElement("h4",null,"Shay-Buna"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),c.a.createElement("div",{class:"space-60"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.6s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-chart-bars"})),c.a.createElement("h4",null,"Startups"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),c.a.createElement("div",{class:"space-60"})),c.a.createElement("div",{class:"hidden-xs hidden-sm col-md-4"},c.a.createElement("figure",{class:"mobile-image"},c.a.createElement("img",{src:"/assetes/images/second3.png",alt:"Feature Photo"}))),c.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-4"},c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-earth"})),c.a.createElement("h4",null,"Diaspora"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),c.a.createElement("div",{class:"space-60"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.4s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-bicycle"})),c.a.createElement("h4",null,"Sports"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),c.a.createElement("div",{class:"space-60"}),c.a.createElement("div",{class:"space-60"}))))),c.a.createElement("section",{class:"section-padding"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-6"},c.a.createElement("div",{class:"page-title"},c.a.createElement("h5",{class:"title wow fadeInUp","data-wow-delay":"0.2s"},"Features"),c.a.createElement("div",{class:"space-10"}),c.a.createElement("h3",{class:"dark-color wow fadeInUp","data-wow-delay":"0.4s"},"Simplistic Design & easy to use user interface")),c.a.createElement("div",{class:"space-20"}),c.a.createElement("div",{class:"desc wow fadeInUp","data-wow-delay":"0.6s"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.")),c.a.createElement("div",{class:"space-50"}),c.a.createElement("a",{href:"#",class:"bttn-default wow fadeInUp","data-wow-delay":"0.8s"},"Learn More")),c.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-5 col-md-offset-1"},c.a.createElement("div",{class:"space-60 hidden visible-xs"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-clock"})),c.a.createElement("h4",null,"Easy Notifications"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.")),c.a.createElement("div",{class:"space-50"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-laptop-phone"})),c.a.createElement("h4",null,"Chat support"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.")),c.a.createElement("div",{class:"space-50"}),c.a.createElement("div",{class:"service-box wow fadeInUp","data-wow-delay":"0.2s"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("i",{class:"lnr lnr-cog"})),c.a.createElement("h4",null,"Full fledged setting"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.")))))),c.a.createElement("div",{class:"download-area overlay"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-6 hidden-sm"},c.a.createElement("figure",{class:"mobile-image"},c.a.createElement("img",{src:"/assetes/images/download-image2.png",alt:""}))),c.a.createElement("div",{class:"col-xs-12 col-md-6 section-padding"},c.a.createElement("h3",{class:"white-color"},"Download The App"),c.a.createElement("div",{class:"space-20"}),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam eum praesentium unde."),c.a.createElement("div",{class:"space-60"}),c.a.createElement("a",{href:"#",class:"bttn-white sq"},c.a.createElement("img",{src:"/assetes/images/play-store-icon.png",alt:"Play Store Icon"})," Play Store"))))),c.a.createElement("footer",{class:"footer-area",id:"contact_page"},c.a.createElement("div",{class:"section-padding"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12"},c.a.createElement("div",{class:"page-title text-center"},c.a.createElement("h5",{class:"title"},"Contact US"),c.a.createElement("h3",{class:"dark-color"},"Find Us By Bellow Details"),c.a.createElement("div",{class:"space-60"})))),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-4"},c.a.createElement("div",{class:"footer-box"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("span",{class:"lnr lnr-map-marker"})),c.a.createElement("p",null,"8-54 Paya Lebar Square ",c.a.createElement("br",null)," 60 Paya Lebar Roa SG, Singapore")),c.a.createElement("div",{class:"space-30 hidden visible-xs"})),c.a.createElement("div",{class:"col-xs-12 col-sm-4"},c.a.createElement("div",{class:"footer-box"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("span",{class:"lnr lnr-phone-handset"})),c.a.createElement("p",null,"+65 93901336 ",c.a.createElement("br",null)," +65 93901337")),c.a.createElement("div",{class:"space-30 hidden visible-xs"})),c.a.createElement("div",{class:"col-xs-12 col-sm-4"},c.a.createElement("div",{class:"footer-box"},c.a.createElement("div",{class:"box-icon"},c.a.createElement("span",{class:"lnr lnr-envelope"})),c.a.createElement("p",null,"yourmail@gmail.com ",c.a.createElement("br",null)," backpiper.com@gmail.com")))))),c.a.createElement("div",{class:"subscribe-area section-padding"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-xs-12 col-sm-8 col-sm-offset-2"},c.a.createElement("div",{class:"subscribe-form text-center"},c.a.createElement("h3",{class:"blue-color"},"Subscribe To Get Updated"),c.a.createElement(x,null),c.a.createElement("div",{class:"space-20"}),c.a.createElement("form",{id:"mc-form",onSubmit:function(a){return e.onSubmit(a)}},c.a.createElement("input",{type:"email",value:a,onChange:function(a){return e.onChange(a)},class:"control",placeholder:"Enter your email",required:"required",id:"mc-email"}),c.a.createElement("button",{class:"bttn-white active",type:"submit"},c.a.createElement("span",{class:"lnr lnr-location"})," Subscribe"),c.a.createElement("label",{class:"mt10",for:"mc-email"})))))))))}}]),a}(l.Component),R=Object(r.b)(null,{joinSubscriber:function(e){return function(){var a=Object(U.a)(I.a.mark((function a(t){return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.post("http://localhost:5000/user/saveemail",e);case 3:t(T("Thank you for registering! We will keep you updated.","info",1e4)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t(T("Registeration failed ","danger",1e4));case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}})(C),D=function(){return c.a.createElement(r.a,{store:v},c.a.createElement(R,null))};n.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a2836a18.chunk.js.map