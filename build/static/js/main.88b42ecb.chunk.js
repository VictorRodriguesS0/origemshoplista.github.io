(this["webpackJsonplista-origem"]=this["webpackJsonplista-origem"]||[]).push([[0],{44:function(t,e,a){},45:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var r,n,c,o,s,i,u=a(0),d=a.n(u),l=a(36),p=a.n(l),j=(a(44),a(45),a(46),a(4)),b=a(5),h=a(7),m=a(6),x=a(1),g=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-nd navbar-dark bg-dark fixed-top",children:Object(x.jsx)("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0 align-items-center",children:"Origem Shop"})})})}}]),a}(u.Component),O=a(12),v=a.n(O),f=a(15),y=a(14),N=a(13),w=a(17),k=(N.a.img(r||(r=Object(y.a)(["\n  max-width: 100%;\n"]))),N.a.div(n||(n=Object(y.a)(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"])))),C=(Object(N.a)(w.b)(c||(c=Object(y.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),u.Component,a(21)),S=a.n(C),A="https://sheet.best/api/sheets/5abdfe25-e959-4f8e-9439-a8d23a1eaf93",P=function(){var t=Object(f.a)(v.a.mark((function t(e){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("".concat(A).concat(e));case 2:return a=t.sent,console.log("Pega Dados",a),t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D={getProdutos:function(){var t=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P("");case 2:return t.t0=t.sent,t.abrupt("return",{slug:"produtos",title:"Todos os Produtos",produtos:t.t0});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),API_BASE:A},E=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.categorias;this.setState({categorias:t}),console.log(t,this.props.categorias)}},{key:"render",value:function(){return Object(x.jsxs)(u.Fragment,{children:[Object(x.jsx)("h1",{children:"Categorias"}),this.props.categorias?Object(x.jsxs)("div",{className:"list-group",children:[Object(x.jsx)("button",{className:"list-group-item list-group-item-action",children:"Todos os produtos"}),this.props.categorias.map((function(t,e){return Object(x.jsx)("button",{className:"list-group-item list-group-item-action",children:t},e)}))]}):Object(x.jsx)("h1",{children:"Carregando Categorias"})]})}}]),a}(u.Component),F=N.a.img(o||(o=Object(y.a)(["\n  max-width: 100%;\n"]))),L=N.a.div(s||(s=Object(y.a)(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]))),M=Object(N.a)(w.b)(i||(i=Object(y.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),B=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={id:"",titulo:"",descricao:"",categoria:"",preco:"",imagem:"",imageLoading:!0,imageError:!1},t}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=this.props,e=t.id,a=t.titulo,r=t.descricao,n=t.categoria,c=t.preco,o=t.imagem;this.setState({id:e,titulo:a,descricao:r,categoria:n,preco:c,imagem:o})}},{key:"render",value:function(){var t=this;return Object(x.jsx)("div",{className:"col-md-3 col-sm-6 mb-5",children:Object(x.jsx)(M,{to:"produto/".concat(this.props.id),children:Object(x.jsxs)(L,{className:"card",children:[this.props.imagem?Object(x.jsx)(F,{className:"card-img-top rounded mx-auto mt-2",onLoad:function(){return t.setState({imageLoading:!1})},onError:function(){return t.setState({imageError:!0})},src:this.props.imagem}):Object(x.jsxs)("h6",{className:"mx-auto",children:[Object(x.jsx)("span",{className:"mt-2",children:"Sem foto"})," "]}),Object(x.jsx)("h5",{className:"card-header",children:this.props.titulo}),Object(x.jsx)("div",{className:"card-body card-title mx-auto",children:this.props.preco})]})})})}}]),a}(u.Component),I=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={produtos:t.props.produtos},t}return Object(b.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(u.Fragment,{children:[Object(x.jsx)("h1",{children:"Produtos"}),this.props.produtos?Object(x.jsx)("div",{className:"row",children:this.props.produtos.map((function(t){return Object(x.jsx)(B,{id:t.id,titulo:t.titulo,descricao:t.descricao,preco:t.preco,imagem:t.imagem},t.id)}))}):Object(x.jsx)("h1",{children:"Carregando Produtos"})]})}}]),a}(u.Component),T=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={produtos:null,categorias:[]},t}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=this;function e(t){return Array.from(new Set(t))}(function(){var a=Object(f.a)(v.a.mark((function a(){var r,n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.getProdutos();case 2:r=a.sent,n=e(n=r.produtos.map((function(t){return t.categoria}))),t.setState({produtos:r.produtos,categorias:n});case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){return console.log("Dash",this.state),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)(E,{categorias:this.state.categorias}),Object(x.jsx)(I,{produtos:this.state.produtos})]})})}}]),a}(u.Component),z=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={id:"",titulo:"",descricao:"",categoria:"",preco:"",imagem:""},t}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=Object(f.a)(v.a.mark((function t(){var e,a,r,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.id,a="".concat(D.API_BASE,"/id/").concat(e),t.next=4,S.a.get(a);case 4:r=t.sent,n=r.data[0],this.setState({id:e,titulo:n.titulo,descricao:n.descricao,categoria:n.categoria,preco:n.preco,imagem:n.imagem});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state),Object(x.jsx)("div",{className:"card mb-3",style:{maxWidth:"540px"},children:Object(x.jsxs)("div",{className:"row g-0",children:[Object(x.jsx)("div",{className:"col-md-4",children:Object(x.jsx)("img",{src:this.state.imagem,className:"img-fluid rounded-start",alt:this.state.titulo})}),Object(x.jsx)("div",{className:"col-md-8",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:this.state.titulo}),Object(x.jsx)("p",{className:"card-text",children:this.state.descricao}),Object(x.jsx)("p",{className:"card-text",children:Object(x.jsx)("small",{className:"text-muted",children:this.state.preco})})]})})]})})}}]),a}(u.Component),J=a(2);var _=function(){return Object(x.jsx)(w.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(J.c,{children:[Object(x.jsx)(J.a,{exact:!0,path:"/",component:T}),Object(x.jsx)(J.a,{exact:!0,path:"/produto/:id",component:z}),Object(x.jsx)(T,{})]})})]})})},W=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),r(t),n(t),c(t),o(t)}))};p.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),W()}},[[71,1,2]]]);
//# sourceMappingURL=main.88b42ecb.chunk.js.map