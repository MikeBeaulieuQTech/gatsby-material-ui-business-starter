(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return E});var n=a(0),r=a.n(n),l=a(178),i=a(177),c=a(174),o=a.n(c),u=a(184),s=a.n(u),m=a(156),d=a.n(m),p=a(175),f=a(151),E="3356797152";t.default=Object(p.a)(function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,c=a.image.publicURL,u=a.jobtitle,m=t.markdownRemark.html;return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:n}),r.a.createElement(s.a,{style:{padding:"25px"}},r.a.createElement(o.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(o.a,{item:!0,xs:12,md:4},r.a.createElement("img",{style:{width:"100%"},src:Object(f.c)(c),alt:""})),r.a.createElement(o.a,{item:!0,xs:12,md:8},r.a.createElement(d.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h5"},u),r.a.createElement(d.a,{dangerouslySetInnerHTML:{__html:m}})))))})},151:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.withPrefix});a(166);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Mines Data Hub",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},171:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},172:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Dashboards",link:"/dashboards"}]}}}}},173:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Dashboards",link:"/dashboards"}]}}}}},175:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(165),o=a(202),u=a.n(o),s=a(198),m=a.n(s),d=a(176),p=a(164),f=a.n(p);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(u.a,null),i.a.createElement(f.a,{implementation:"css"},i.a.createElement(e,this.props))))},a}(i.a.Component)}},176:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(54),a(75),a(199);var r=a(183),l=a(165),i=a(200),c=a.n(i),o=a(201),u=a.n(o),s=Object(l.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(188),a(73))},177:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(167),o=a(151),u=(a(169),a(170),a(172)),s=a(180),m=a.n(s),d=a(168),p=a.n(d),f=a(159),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(o.a,{key:e.name,to:e.link},i.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(p.a,{style:{color:"#fff"}},i.a.createElement(f.c,null))))},h=function(e){return i.a.createElement(o.b,{query:"240237662",render:function(e){return i.a.createElement(E,{data:e})},data:u})},g=a(173),y=a(192),b=a.n(y),v=a(193),x=a.n(v),w=a(191),M=a.n(w),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{onClick:this.handleOpen},i.a.createElement(f.a,{style:{color:"#efefef"}})),i.a.createElement(M.a,{onClickAway:this.handleClose},i.a.createElement(b.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return i.a.createElement(o.a,{key:e.name,to:e.link},i.a.createElement(x.a,null,e.name))}))))},t}(i.a.Component),C=function(e){return i.a.createElement(o.b,{query:"709782962",render:function(t){return i.a.createElement(k,{active:e.active,data:t})},data:g})},_=a(164),I=a.n(_),T=a(174),q=a.n(T),R=a(194),j=a.n(R),A=a(187),L=a.n(A),N=a(156),S=a.n(N),O=a(185),P=a.n(O),B=a(182),D=a.n(B),F=function(e){return i.a.createElement(L.a,{id:"appBar"},i.a.createElement(j.a,null,i.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},i.a.createElement(q.a,{item:!0},i.a.createElement(P.a,{id:"logo",variant:"outlined",avatar:i.a.createElement(D.a,{id:"logoIcon"},i.a.createElement(f.d,null)),label:i.a.createElement(o.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),i.a.createElement(q.a,{item:!0},i.a.createElement(I.a,{smDown:!0},i.a.createElement(S.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},i.a.createElement(h,null))),i.a.createElement(I.a,{mdUp:!0},i.a.createElement(C,null)))),i.a.createElement(q.a,{item:!0})))},U=function(e){return i.a.createElement(o.b,{query:"4102418190",render:function(e){return i.a.createElement(F,{data:e})},data:c})},G=a(195),H=a.n(G),J=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("span",null,i.a.createElement(S.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",i.a.createElement(I.a,{only:["xs","sm"]},"–"),i.a.createElement(I.a,{only:["xl","lg","md"]},i.a.createElement("br",null))," ",r," – ",l,i.a.createElement("br",null),"·",i.a.createElement("br",null),"Starter created by"," ",i.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},Q=function(e){return i.a.createElement(o.b,{query:"4102418190",render:function(e){return i.a.createElement(J,{data:e})},data:c})},V=a(196),Y=(a(197),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,null),i.a.createElement(V.Grid,{style:{marginTop:"94px"}},i.a.createElement(V.Row,null,i.a.createElement(V.Col,{xs:12},t?i.a.createElement(S.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,i.a.createElement(Q,null)))))},t}(i.a.Component));t.a=Y},178:function(e,t,a){"use strict";var n=a(179),r=a(0),l=a.n(r),i=a(205),c=a.n(i),o=a(151),u=function(e){return l.a.createElement(o.b,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Mines Data Hub"}}}}}}]);
//# sourceMappingURL=component---src-templates-team-js-c670e16f084e2679d081.js.map