(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(179),i=a(176),o=a(150),u=a(178),c=a.n(u),s=a(203),d=a.n(s),m=a(204),f=a.n(m),p=a(211),h=a.n(p),y=a(160),E=a.n(y),g=function(e){return r.a.createElement(c.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},e.items.map(function(e){var t=e.node,a=t.excerpt,n=t.frontmatter,l=n.path,i=n.title,u=n.image;return r.a.createElement(c.a,{item:!0,xs:12,md:6,key:l},r.a.createElement(d.a,null,r.a.createElement(h.a,{style:{height:"200px"},image:Object(o.withPrefix)(u)}),r.a.createElement(f.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(o.Link,{to:l},i)),r.a.createElement(E.a,{component:"p"},a))))}))},v=a(174);a.d(t,"query",function(){return b});var b="2782092023";t.default=Object(v.a)(function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,{title:"Products"},r.a.createElement(l.a,{title:"Products"}),r.a.createElement(g,{items:t}))})},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(151),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(164),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},170:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},171:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},172:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},173:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(166),u=a(202),c=a.n(u),s=a(197),d=a.n(s),m=a(175),f=a(163),p=a.n(f);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(m.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(c.a,null),i.a.createElement(p.a,{implementation:"css"},i.a.createElement(e,this.props))))},a}(i.a.Component)}},175:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return m});a(74),a(53),a(75),a(199);var r=a(182),l=a(166),i=a(200),o=a.n(i),u=a(201),c=a.n(u),s=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:c.a[300],main:c.a[500],dark:c.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function m(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(198),a(73))},176:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(165),u=a(150),c=(a(168),a(169),a(171)),s=a(181),d=a.n(s),m=a(167),f=a.n(m),p=a(162),h=function(e){var t=e.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(u.Link,{key:e.name,to:e.link},i.a.createElement(d.a,{style:{color:"#fff"}},e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f.a,{style:{color:"#fff"}},i.a.createElement(p.c,null))))},y=function(e){return i.a.createElement(u.StaticQuery,{query:"240237662",render:function(e){return i.a.createElement(h,{data:e})},data:c})},E=a(172),g=a(191),v=a.n(g),b=a(192),k=a.n(b),x=a(190),w=a.n(x),M=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{onClick:this.handleOpen},i.a.createElement(p.a,{style:{color:"#efefef"}})),i.a.createElement(w.a,{onClickAway:this.handleClose},i.a.createElement(v.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return i.a.createElement(u.Link,{key:e.name,to:e.link},i.a.createElement(k.a,null,e.name))}),i.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(k.a,null,"Fork me on Github")))))},t}(i.a.Component),_=function(e){return i.a.createElement(u.StaticQuery,{query:"709782962",render:function(t){return i.a.createElement(M,{active:e.active,data:t})},data:E})},C=a(163),P=a.n(C),j=a(178),S=a.n(j),T=a(194),I=a.n(T),N=a(193),O=a.n(N),q=a(160),R=a.n(q),L=a(186),G=a.n(L),A=a(185),Q=a.n(A),B=function(e){return i.a.createElement(O.a,{id:"appBar"},i.a.createElement(I.a,null,i.a.createElement(S.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},i.a.createElement(S.a,{item:!0},i.a.createElement(G.a,{id:"logo",variant:"outlined",avatar:i.a.createElement(Q.a,{id:"logoIcon"},i.a.createElement(p.d,null)),label:i.a.createElement(u.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),i.a.createElement(S.a,{item:!0},i.a.createElement(P.a,{smDown:!0},i.a.createElement(R.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},i.a.createElement(y,null))),i.a.createElement(P.a,{mdUp:!0},i.a.createElement(_,null)))),i.a.createElement(S.a,{item:!0})))},U=function(e){return i.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(B,{data:e})},data:o})},F=a(195),D=a.n(F),J=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,{style:{marginTop:"48px",marginBottom:"24px"}}),i.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},i.a.createElement("span",null,i.a.createElement(R.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",i.a.createElement(P.a,{only:["xs","sm"]},"–"),i.a.createElement(P.a,{only:["xl","lg","md"]},i.a.createElement("br",null))," ",r," – ",l,i.a.createElement("br",null),"·",i.a.createElement("br",null),"Starter created by"," ",i.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},z=function(e){return i.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return i.a.createElement(J,{data:e})},data:o})},V=a(196),Y=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,null),i.a.createElement(V.Grid,{style:{marginTop:"94px"}},i.a.createElement(V.Row,null,i.a.createElement(V.Col,{xs:12},t?i.a.createElement(R.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,i.a.createElement(z,null)))))},t}(i.a.Component));t.a=Y},179:function(e,t,a){"use strict";var n=a(180),r=a(0),l=a.n(r),i=a(205),o=a.n(i),u=a(150),c=function(e){return l.a.createElement(u.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var s="1175772"},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},203:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(210))},204:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(213))},210:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(147)),l=n(a(148)),i=n(a(0)),o=(n(a(149)),n(a(153))),u=n(a(184)),c=n(a(152)),s={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,c=(0,l.default)(e,["classes","className","raised"]);return i.default.createElement(u.default,(0,r.default)({className:(0,o.default)(t.root,a),elevation:n?8:1},c))}t.styles=s,d.defaultProps={raised:!1};var m=(0,c.default)(s,{name:"MuiCard"})(d);t.default=m},211:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(212))},212:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(51)),l=n(a(147)),i=n(a(148)),o=n(a(0)),u=(n(a(149)),n(a(153))),c=(n(a(161)),a(154),n(a(152))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var d=["video","audio","picture","iframe","img"];function m(e){var t=e.classes,a=e.className,n=e.component,c=e.image,s=e.src,m=e.style,f=(0,i.default)(e,["classes","className","component","image","src","style"]),p=-1!==d.indexOf(n),h=!p&&c?(0,l.default)({backgroundImage:'url("'.concat(c,'")')},m):m;return o.default.createElement(n,(0,l.default)({className:(0,u.default)(t.root,(0,r.default)({},t.media,p),a),style:h,src:p?c||s:void 0},f))}m.defaultProps={component:"div"};var f=(0,c.default)(s,{name:"MuiCardMedia"})(m);t.default=f},213:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(147)),l=n(a(148)),i=n(a(0)),o=(n(a(149)),n(a(153))),u=(a(154),n(a(152))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,u=(0,l.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,r.default)({className:(0,o.default)(t.root,a)},u))}t.styles=c,s.defaultProps={component:"div"};var d=(0,u.default)(c,{name:"MuiCardContent"})(s);t.default=d}}]);
//# sourceMappingURL=component---src-pages-products-index-js-d33a5bda9ce04a8ea423.js.map