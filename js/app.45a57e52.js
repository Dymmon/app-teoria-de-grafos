(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/app-teoria-de-grafos/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"167e":function(t,e,o){"use strict";var s=o("6d6b"),a=o.n(s);a.a},"1bc3":function(t,e,o){"use strict";var s=o("c7ff"),a=o.n(s);a.a},4025:function(t,e,o){"use strict";var s=o("561b"),a=o.n(s);a.a},"4fdb":function(t,e,o){},"54b8":function(t,e,o){"use strict";var s=o("8c39"),a=o.n(s);a.a},"561b":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("sidebar-menu",{attrs:{menu:t.menu,"hide-toggle":"",collapsed:"",width:"260px"}}),o("b-modal",{attrs:{active:t.editarGrafoModal,"trap-focus":"","destroy-on-hide":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.editarGrafoModal=e}}},[o("ingresar-grafo",{attrs:{onGuardar:t.onFinalizar}})],1),o("div",{staticStyle:{padding:"30px",width:"calc(100% - 50px)",float:"right"}},[o("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[o("b-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"is-primary",inverted:"",rounded:"","icon-left":"pencil",size:"is-medium"},on:{click:function(e){t.editarGrafoModal=!0}}},[t._v("Editar grafo")]),o("a",{attrs:{href:"https://github.com/Dymmon/app-teoria-de-grafos"}},[o("b-icon",{staticStyle:{color:"white"},attrs:{icon:"github-circle",size:"is-medium"}})],1)],1),o("div",{staticClass:"is-flex",staticStyle:{width:"100%"}},[o("div",{staticClass:"card",staticStyle:{width:"100%",height:"calc(100vh - 80px - 45px)","border-radius":"10px"}},[o("router-view")],1)])])],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-flex",staticStyle:{width:"100%"}},[o("div",{staticClass:"card",staticStyle:{width:"100%",height:"calc(100vh - 80px - 45px)","border-radius":"10px"}},[o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-paddingless is-7"},[o("stepper",{attrs:{nodos:t.nodos,origenes:t.origenes,destinos:t.destinos,pesos:t.pesos,onFinalizar:t.onFinalizar}})],1),o("div",{staticClass:"column is-paddingless is-5",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.nodos,origenes:t.origenes,destinos:t.destinos,pesos:t.pesos}})],1)])])])])},r=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"is-full-h"},[o("b-steps",{staticClass:"is-full-h",attrs:{size:"is-small",animated:!0,rounded:!0,"has-navigation":!0,"icon-prev":t.prevIcon,"icon-next":t.nextIcon},scopedSlots:t._u([{key:"navigation",fn:function(e){var s=e.previous,a=e.next;return[o("div",{staticStyle:{heigth:"100%",padding:"10px 20px",display:"flex","justify-content":"space-between","align-items":"center"}},[o("b-button",{attrs:{outlined:"",rounded:"",type:"is-primary","icon-pack":"fas","icon-left":"backward",disabled:s.disabled},on:{click:function(t){return t.preventDefault(),s.action(t)}}},[t._v(" Atrás ")]),1!=t.pasoActual?o("b-button",{attrs:{outlined:"",rounded:"",type:"is-primary","icon-pack":"fas","icon-right":"forward",disabled:a.disabled||0==t.pasoActual&&!t.sonNodosValidos},on:{click:function(t){return t.preventDefault(),a.action(t)}}},[t._v(" Siguiente ")]):o("b-button",{attrs:{rounded:"",type:"is-primary","icon-pack":"fas","icon-right":"forward"},on:{click:t.onFinalizar}},[t._v(" Finalizar ")])],1)]}}]),model:{value:t.pasoActual,callback:function(e){t.pasoActual=e},expression:"pasoActual"}},[o("b-step-item",{staticClass:"is-full-h",staticStyle:{"border-bottom":"2px solid #f5f5f5","border-top":"2px solid #f5f5f5"},attrs:{step:"1",label:"Nodos",clickable:!1}},[o("nodos-input",{attrs:{nodos:t.nodos}})],1),o("b-step-item",{staticClass:"is-full-h",staticStyle:{"border-bottom":"2px solid #f5f5f5","border-top":"2px solid #f5f5f5"},attrs:{step:"2",label:"Aristas",clickable:!1}},[o("aristas-input",{attrs:{nodos:t.nodos,origenes:t.origenes,destinos:t.destinos,pesos:t.pesos}})],1)],1)],1)},c=[],d=(o("4de4"),o("53ca")),u=o("b85c"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px","overflow-y":"scroll"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column",staticStyle:{"padding-right":"20px"}},[t._l(t.origenes,(function(e,s){return o("b-field",{key:s,attrs:{type:null!=t.validarArista(s)?"is-danger":"",message:t.validarArista(s)}},[o("b-field",{staticClass:"is-marginless",attrs:{grouped:""}},[o("b-field",{staticStyle:{"margin-bottom":"5px"},attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de origen",clearable:""},model:{value:t.origenes[s],callback:function(e){t.$set(t.origenes,s,e)},expression:"origenes[i]"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1),o("b-field",{staticStyle:{"margin-bottom":"5px"},attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de destino",clearable:""},model:{value:t.destinos[s],callback:function(e){t.$set(t.destinos,s,e)},expression:"destinos[i]"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1),o("b-field",{staticStyle:{"margin-bottom":"-12px"},attrs:{expanded:""}},[o("b-numberinput",{staticStyle:{"max-width":"200px"},attrs:{"controls-position":"compact","controls-rounded":"",min:"0"},model:{value:t.pesos[s],callback:function(e){t.$set(t.pesos,s,e)},expression:"pesos[i]"}})],1),t.origenes.length>1?o("b-tooltip",{staticClass:"is-danger",staticStyle:{"margin-top":"-25px"},attrs:{label:"Eliminar",position:"is-left"}},[o("a",{staticStyle:{"margin-top":"30px"},on:{click:function(e){return t.eliminarArista(s)}}},[o("b-icon",{staticClass:"is-danger",attrs:{pack:"fa",icon:"minus-circle"}})],1)]):o("div",{staticStyle:{"margin-top":"5px"}},[o("b-icon",{staticStyle:{color:"grey"},attrs:{pack:"fa",icon:"minus-circle"}})],1)],1)],1)})),o("div",{staticClass:"is-marginless is-paddingless"},[o("b-button",{attrs:{type:"is-primary",outlined:"",rounded:"",disabled:!t.sonTodosValidos,expanded:"","icon-left":"plus-circle"},on:{click:t.agregarArista}},[t._v("Agregar arista")])],1)],2)])])},f=[],g=(o("caad"),o("a434"),o("d3b7"),o("25f0"),o("2532"),o("96cf"),o("1da1")),m={name:"AristasInput",props:["nodos","origenes","destinos","pesos"],data:function(){return{config:{style:[{selector:"node",style:{"background-color":"#7958d5",label:"data(id)"}},{selector:"edge",style:{width:3,"curve-style":"bezier","line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"circle",row:1}}}},mounted:function(){},computed:{sonTodosValidos:function(){for(var t=0;t<this.origenes.length;t++)if(this.validarArista(t).length)return!1;return!0}},methods:{agregarArista:function(){this.origenes.push(null),this.destinos.push(null),this.pesos.push(0)},eliminarArista:function(t){this.origenes.splice(t,1),this.destinos.splice(t,1),this.pesos.splice(t,1)},validarArista:function(t){var e=this.origenes[t],o=this.destinos[t],s=this.pesos[t],a=[];return e&&""!=e?this.nodos.filter((function(t){return t.etiqueta==e})).length||a.push("Debe seleccion un nodo de origen válido"):a.push("Debe seleccion un nodo de origen"),o&&""!=o?this.nodos.filter((function(t){return t.etiqueta==o})).length||a.push("Debe seleccion un nodo de destino válido"):a.push("Debe seleccion un nodo de destino"),(null==s||s<0)&&a.push("Debe ingresar un peso válido"),a},getNodosFiltrados:function(t){return null!=t?this.nodos.filter((function(e){e.toString().toLowerCase().includes(t.toString().toLowerCase)})):this.nodos},afterCreated:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t;case 2:t.layout(e.config.layout).run();case 3:case"end":return o.stop()}}),o)})))()}}},h=m,b=(o("b99f"),o("2877")),v=Object(b["a"])(h,p,f,!1,null,null,null),y=v.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px","overflow-y":"scroll"}},[o("div",{staticClass:"is-full-h columns is-marginless is-paddingless"},[o("div",{staticClass:"column",staticStyle:{"padding-right":"20px"}},[t._l(t.nodos,(function(e,s){return o("b-field",{key:e.id,attrs:{grouped:""}},[o("b-field",{attrs:{expanded:"",type:null!=t.validarNodo(e.etiqueta)?"is-danger":"",message:t.validarNodo(e.etiqueta)}},[o("b-input",{ref:"input",refInFor:!0,attrs:{rounded:""},model:{value:t.nodos[s].etiqueta,callback:function(e){t.$set(t.nodos[s],"etiqueta",e)},expression:"nodos[i].etiqueta"}})],1),t.nodos.length>1?o("b-tooltip",{staticClass:"is-danger",attrs:{label:"Eliminar",position:"is-left"}},[o("a",{staticStyle:{"margin-top":"5px"},on:{click:function(e){return t.eliminarNodo(s)}}},[o("b-icon",{staticClass:"is-danger",staticStyle:{"margin-top":"5px"},attrs:{pack:"fa",icon:"minus-circle"}})],1)]):o("div",{staticStyle:{"margin-top":"5px"}},[o("b-icon",{staticStyle:{color:"grey"},attrs:{pack:"fa",icon:"minus-circle"}})],1)],1)})),o("b-button",{attrs:{type:"is-primary",outlined:"",disabled:!t.sonTodosValidos,rounded:"",expanded:"","icon-left":"plus-circle"},on:{click:t.agregarNodo}},[t._v("Agregar nodo")])],2)])])},S=[],_={name:"NodosInput",props:["nodos"],data:function(){return{indiceMaximo:0}},mounted:function(){this.nodos.length||this.nodos.push({id:this.nodos.length+1,etiqueta:"A"})},computed:{sonTodosValidos:function(){var t,e=Object(u["a"])(this.nodos);try{for(e.s();!(t=e.n()).done;){var o=t.value;if(this.validarNodo(o))return!1}}catch(s){e.e(s)}finally{e.f()}return!0}},methods:{agregarNodo:function(){var t=this;this.indiceMaximo++;var e=65,o=String.fromCharCode(e+this.indiceMaximo);this.nodos.push({id:this.nodos.length+1,etiqueta:o}),this.$nextTick((function(){t.$refs.input[t.nodos.length-1].focus()}))},eliminarNodo:function(t){this.nodos.splice(t,1)},validarNodo:function(t){return null==t||""==t?"Debe asignar una etiqueta válida":this.nodos.filter((function(e){return e.etiqueta==t})).length>1?"No puede repetir las etiquetas":null},afterCreated:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t;case 2:t.layout(e.config.layout).run();case 3:case"end":return o.stop()}}),o)})))()}}},j=_,C=(o("54b8"),Object(b["a"])(j,x,S,!1,null,null,null)),w=C.exports,k={name:"StepperData",props:["nodos","origenes","destinos","pesos","onFinalizar"],components:{AristasInput:y,NodosInput:w},data:function(){return{pasoActual:0,prevIcon:"chevron-left",nextIcon:"chevron-right"}},computed:{sonNodosValidos:function(){var t=this;if(!this.nodos||!this.nodos.length)return!1;var e,o=Object(u["a"])(this.nodos);try{var s=function(){var o=e.value;return o.etiqueta&&""!=o.etiqueta?t.nodos.filter((function(t){return t.etiqueta==o.etiqueta})).length>1?{v:!1}:void 0:{v:!1}};for(o.s();!(e=o.n()).done;){var a=s();if("object"===Object(d["a"])(a))return a.v}}catch(n){o.e(n)}finally{o.f()}return!0}}},$=k,O=(o("d043"),Object(b["a"])($,l,c,!1,null,null,null)),z=O.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("cytoscape",{ref:"cy",staticStyle:{height:"100%"},attrs:{config:t.config,afterCreated:t.afterCreated}},t._l(t.elementos,(function(t){return o("cy-element",{key:""+t.data.id,attrs:{sync:"",definition:t}})})),1)},G=[],N={name:"Grafo",props:{nodos:Array,origenes:Array,destinos:Array,pesos:Array,config:{type:Object,default:function(){return{style:[{selector:"node",style:{"background-color":"#7958d5",label:"data(id)"}},{selector:"edge",style:{label:"data(weight)",width:3,"curve-style":"bezier","line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"circle",row:1}}}}},data:function(){return{}},watch:{elementos:function(){var t=this;this.$nextTick((function(){var e=t.$refs.cy.instance;t.afterCreated(e)}))}},computed:{elementos:function(){var t,e=[],o=Object(u["a"])(this.nodos);try{for(o.s();!(t=o.n()).done;){var s=t.value;s&&s.etiqueta&&""!=s.etiqueta&&e.push({data:{id:s.etiqueta},position:{x:1,y:1},group:"nodes"})}}catch(l){o.e(l)}finally{o.f()}for(var a=0;a<this.origenes.length;a++){var n=this.origenes[a],i=this.destinos[a],r=this.pesos[a];n&&i&&e.push({data:{id:n+i,source:n,target:i,weight:r,type:"loop"},group:"edges"})}return e}},methods:{afterCreated:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t;case 2:t.layout(e.config.layout).run();case 3:case"end":return o.stop()}}),o)})))()}}},M=N,q=(o("4025"),Object(b["a"])(M,A,G,!1,null,null,null)),E=q.exports,I={name:"Main",props:["onGuardar"],components:{Stepper:z,Grafo:E},data:function(){return{nodos:[],origenes:[],destinos:[],pesos:[]}},mounted:function(){this.nodos=this.$store.state.nodos,this.origenes=this.$store.state.origenes,this.destinos=this.$store.state.destinos,this.pesos=this.$store.state.pesos},methods:{onFinalizar:function(){this.$store.commit("crearGrafo",{nodos:this.nodos,origenes:this.origenes,destinos:this.destinos,pesos:this.pesos}),this.onGuardar()}}},R=I,T=Object(b["a"])(R,i,r,!1,null,null,null),D=T.exports,P={template:'<hr style="border-color: rgba(255, 255, 255, 0.5); margin: 20px;">'},F={name:"App",components:{IngresarGrafo:D},data:function(){return{editarGrafoModal:!1,menu:[{href:"/",title:"Presentación",icon:"fa fa-user"},{component:P},{href:"/matriz",title:"Matriz de caminos",icon:"fa fa-table"},{href:"/dijkstra",title:"Camino más corto",icon:"fa fa-route"},{href:"/hamiltoniano-euleriano",title:"¿Hamiltoniano o Euleriano?",icon:"fa fa-circle-notch"},{href:"/flujo",title:"Flujo máximo",icon:"fa fa-shower"},{href:"/arbol",title:"Árbol generador mínimo",icon:"fa fa-tree"}]}},methods:{onFinalizar:function(){this.editarGrafoModal=!1,this.$buefy.toast.open({message:"El grafo se actualizó correctamente",type:"is-success"})}}},J=F,H=(o("5c0b"),Object(b["a"])(J,a,n,!1,null,null,null)),V=H.exports,U=o("289d"),B=o("bfc7"),L=o("3a6f"),K=o.n(L),Z=o("8c4f"),Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"container",staticStyle:{height:"100%",padding:"40px"}},[o("p",{staticClass:"title"},[t._v("Universidad Tecnológica Metropolitana")]),o("p",{staticClass:"subtitle"},[t._v("INFB8061 - Grafos y Lenguajes Formales")]),o("div",{staticStyle:{display:"flex","justify-content":"space-between"}},t._l(t.integrantes,(function(t){return o("persona",{key:t.nombre,attrs:{redes:t.redes,nombre:t.nombre,imagen:t.imagen}})})),1)])])},W=[],X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"150px",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},[o("div",{staticClass:"column is-12"},[o("img",{staticStyle:{"border-radius":"100px",width:"100%"},attrs:{src:t.imagen}})]),o("div",{staticClass:"column is-12 has-text-centered has-text-weight-bold is-paddingless"},[o("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.nombre))])]),o("div",{staticClass:"column is-12",staticStyle:{display:"flex","justify-content":"center"}},t._l(t.redes,(function(e,s){return o("a",{key:s+t.nombre,style:"padding: 5px; color: "+e.color,attrs:{href:e.url}},[o("b-icon",{attrs:{icon:e.icono}})],1)})),0)])},Y=[],tt={name:"Persona",props:["nombre","imagen","redes"],data:function(){return{}}},et=tt,ot=Object(b["a"])(et,X,Y,!1,null,null,null),st=ot.exports,at={components:{Persona:st},data:function(){return{integrantes:[{nombre:"Javier Garrido",imagen:"https://user-images.githubusercontent.com/16374322/80979585-88368600-8df5-11ea-8d6b-0a2541ba09bb.png",redes:[{nombre:"GitHub",url:"https://github.com/Scalim",icono:"github-circle",color:"#000"}]},{nombre:"Mariam Maldonado",imagen:"https://user-images.githubusercontent.com/16374322/80976941-114bbe00-8df2-11ea-9d68-6c42c6846944.jpeg",redes:[{nombre:"GitHub",url:"https://github.com/mariam6697",icono:"github-circle",color:"#000"},{nombre:"Twitter",url:"https://twitter.com/mariam_vmm",icono:"twitter",color:"#1da1f2"}]},{nombre:"Carlos Montuyao",imagen:"https://user-images.githubusercontent.com/16374322/80985782-ad2ef700-8dfd-11ea-93ab-23f6434a7422.png",redes:[{nombre:"GitHub",url:"https://github.com/Dymmon",icono:"github-circle",color:"#000"}]},{nombre:"Jorge Verdugo",imagen:"https://user-images.githubusercontent.com/16374322/80977076-3e986c00-8df2-11ea-80c9-d62518f47e34.jpeg",redes:[{nombre:"GitHub",url:"https://github.com/mapacheverdugo",icono:"github-circle",color:"#000"},{nombre:"Instagram",url:"http://instagram.com/mapacheverdugo",icono:"instagram",color:"#c13584"},{nombre:"Twitter",url:"https://twitter.com/mapacheverdugo",icono:"twitter",color:"#1da1f2"}]},{nombre:"Javiera Vergara",imagen:"https://user-images.githubusercontent.com/16374322/80976999-23c5f780-8df2-11ea-8343-061da9c2b69c.jpeg",redes:[{nombre:"GitHub",url:"https://github.com/PollitoMayo",icono:"github-circle",color:"#000"},{nombre:"Twitter",url:"https://twitter.com/pollitomayonesa",icono:"twitter",color:"#1da1f2"},{nombre:"DeviantArt",url:"https://www.deviantart.com/pollitomayo",icono:"deviantart",color:"#4dc47d"}]}]}}},nt=at,it=Object(b["a"])(nt,Q,W,!1,null,null,null),rt=it.exports,lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-6 is-full-h"},[o("h1",{staticClass:"title is-marginless"},[t._v("Matriz de camino de largo n")]),null!=t.esConexo?o("p",{staticStyle:{padding:"0 0 10px  0"}},[t._v(" El grafo"),o("strong",[t._v(t._s(t.esConexo?" es conexo":" no es conexo"))])]):t._e(),null!=t.matriz?o("matriz",{attrs:{vertices:t.vertices,matriz:t.matriz}}):t._e(),o("b-field",{staticStyle:{"margin-top":"20px"}},[o("b-numberinput",{attrs:{"controls-position":"compact","controls-rounded":"",min:"0",expanded:""},model:{value:t.peso,callback:function(e){t.peso=e},expression:"peso"}})],1),o("b-button",{staticClass:"button",attrs:{type:"is-primary",outlined:"",rounded:"",expanded:"",loading:t.cargando},on:{click:t.obtenerMatriz}},[t._v("Calcular")])],1),o("div",{staticClass:"column is-6",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.$store.state.nodos,origenes:t.$store.state.origenes,destinos:t.$store.state.destinos,pesos:t.$store.state.pesos}})],1)])])},ct=[],dt=(o("d80f"),o("8785")),ut=o("bc3a"),pt=o.n(ut),ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("tr",[o("th"),t._l(t.vertices,(function(e){return o("th",{key:"c"+e},[t._v(t._s(e))])}))],2),t._l(t.vertices,(function(e,s){return o("tr",{key:"r"+e},[o("th",[t._v(t._s(e))]),t._l(t.matriz[s],(function(e,a){return o("td",{key:"e"+s+a},[t._v(" "+t._s(e)+" ")])}))],2)}))],2)},gt=[],mt={name:"Matriz",props:["matriz","vertices"],data:function(){return{}}},ht=mt,bt=(o("1bc3"),Object(b["a"])(ht,ft,gt,!1,null,null,null)),vt=bt.exports;function yt(){var t=Object(dt["a"])([" & "]);return yt=function(){return t},t}function xt(){var t=Object(dt["a"])(["\\"],["\\\\"]);return xt=function(){return t},t}function St(){var t=Object(dt["a"])(["end{pmatrix}"],["\\end{pmatrix}"]);return St=function(){return t},t}function _t(){var t=Object(dt["a"])(["\begin{pmatrix}"],["\\begin{pmatrix}"]);return _t=function(){return t},t}var jt={name:"MatrizCaminos",components:{Grafo:E,Matriz:vt},data:function(){return{cargando:!1,matriz:null,peso:1,vertices:[],esConexo:null}},methods:{matrizToKaTexMatrix:function(t){var e,o=String.raw(_t()),s=!0,a=Object(u["a"])(t);try{for(a.s();!(e=a.n()).done;){var n=e.value,i=!0;s||(o+=String.raw(xt()));var r,l=Object(u["a"])(n);try{for(l.s();!(r=l.n()).done;){var c=r.value;i||(o+=String.raw(yt())),o+=c.toString(),i=!1}}catch(d){l.e(d)}finally{l.f()}s=!1}}catch(d){a.e(d)}finally{a.f()}return o+=String.raw(St()),o},obtenerMatriz:function(){var t=this;this.cargando=!0,pt()({method:"post",url:this.$apiUrl+"/matriz",data:{largo:this.peso,grafo:this.$store.getters.grafo}}).then((function(e){t.cargando=!1,t.matriz=e.data.matriz,t.vertices=e.data.vertices,t.esConexo=e.data.esConexo})).catch((function(e){t.cargando=!1}))}}},Ct=jt,wt=Object(b["a"])(Ct,lt,ct,!1,null,null,null),kt=wt.exports,$t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-6"},[o("h1",{staticClass:"title is-marginless"},[t._v("Camino más corto")]),o("span",{staticClass:"subtitle"},[t._v("Algoritmo de Dijkstra")]),t.respuesta?o("div",[o("p",[t._v(" "+t._s(0!=this.objetoRespuesta.ruta.length?"La duración del camino es de "+this.objetoRespuesta.pesoTotal:"La duración del camino es de ∞")+" ")]),o("p",[t._v(" "+t._s(0!=this.objetoRespuesta.ruta.length?"La ruta fue "+this.objetoRespuesta.ruta.join(" ➜ "):"No hay una camino entre los puntos específicados.")+" ")])]):t._e(),o("b-field",{staticStyle:{margin:"0","margin-top":"20px"},attrs:{grouped:""}},[o("b-field",{attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de origen",clearable:""},model:{value:t.origen,callback:function(e){t.origen=e},expression:"origen"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1),o("b-field",{attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de destino",clearable:""},model:{value:t.destino,callback:function(e){t.destino=e},expression:"destino"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1)],1),o("b-button",{attrs:{type:"is-primary",outlined:"",rounded:"",expanded:"",loading:t.cargando},on:{click:t.dijkstra}},[t._v("Calcular")])],1),o("div",{staticClass:"column is-6",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.$store.state.nodos,origenes:t.$store.state.origenes,destinos:t.$store.state.destinos,pesos:t.$store.state.pesos}})],1)])])},Ot=[],zt={name:"Dijkstra",components:{Grafo:E},data:function(){return{cargando:!1,respuesta:!1,objetoRespuesta:null,origen:null,destino:null,nodos:[]}},mounted:function(){this.respuesta=!1,this.objetoRespuesta=null;for(var t=this.$store.state.nodos,e=[],o=0;o<t.length;o++){var s=t[o];e.push(s.etiqueta)}this.nodos=e},methods:{dijkstra:function(){var t=this;this.cargando=!0;var e={grafo:this.$store.getters.grafo,inicio:this.origen,final:this.destino};pt()({method:"post",url:this.$apiUrl+"/dijkstra",data:e}).then((function(e){t.objetoRespuesta=e.data,t.respuesta=!0,t.cargando=!1})).catch((function(e){t.cargando=!1}))}}},At=zt,Gt=Object(b["a"])(At,$t,Ot,!1,null,null,null),Nt=Gt.exports,Mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-6",staticStyle:{"overflow-y":"scroll","padding-right":"20px"}},[o("h1",{staticClass:"title is-marginless"},[t._v("¿Grafo Euleriano o Hamiltoniano?")]),t.respuesta?o("div",[o("p",[t._v(" "+t._s("El grafo "+(this.objetoRespuesta[0].es?"":"no")+" es Hamiltoniano"+(this.objetoRespuesta[0].es?" y su camino es: "+this.objetoRespuesta[0].camino:"")+".")+" ")]),o("p",[t._v(" "+t._s("El grafo "+(this.objetoRespuesta[1].es?"":"no")+" es Euleriano"+(this.objetoRespuesta[1].es?" y su camino es: "+this.objetoRespuesta[1].camino:"")+".")+" ")])]):t._e(),o("b-button",{staticClass:"button",staticStyle:{"margin-top":"20px"},attrs:{type:"is-primary",outlined:"",rounded:"",expanded:"",loading:t.cargando},on:{click:t.obtenerCamino}},[t._v("Determinar")])],1),o("div",{staticClass:"column is-6",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.$store.state.nodos,origenes:t.$store.state.origenes,destinos:t.$store.state.destinos,pesos:t.$store.state.pesos}})],1)])])},qt=[],Et=(o("b64b"),{name:"MatrizCaminos",components:{Grafo:E},data:function(){return{indiceMaximo:1,cargando:!1,respuesta:!1,objetoRespuesta:null,nodos:[],cy:null,config:{style:[{selector:"node",style:{"background-color":"#7958d5",label:"data(id)"}}],layout:{name:"grid",rows:3}}}},mounted:function(){this.respuesta=!1,this.objetoRespuesta=null,this.cargando=!1},watch:{elementos:function(){var t=this;this.$nextTick((function(){var e=t.$refs.cy.instance;t.afterCreated(e)}))}},computed:{elementos:function(){var t,e=[],o=Object(u["a"])(this.nodos);try{for(o.s();!(t=o.n()).done;){var s=t.value;s&&""!=s&&e.push({data:{id:s},position:{x:1,y:1},group:"nodes"})}}catch(a){o.e(a)}finally{o.f()}return e}},methods:{agregarNodo:function(){this.indiceMaximo++;var t=65,e=String.fromCharCode(t+this.indiceMaximo);this.nodos.push(e)},eliminarNodo:function(t){this.nodos.splice(t,1)},afterCreated:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t;case 2:t.layout(e.config.layout).run();case 3:case"end":return o.stop()}}),o)})))()},obtenerCamino:function(){var t=this;this.cargando=!0;var e={grafo:this.$store.getters.grafo};pt()({method:"post",url:this.$apiUrl+"/camino",data:e}).then((function(e){for(var o=e.data,s={es:!1,camino:[]},a={es:!1,camino:[]},n=0;n<o.length;n++){var i=o[n],r=Object.keys(i);"hamiltoniano"==r?s.es=i.hamiltoniano:"euleriano"==r?a.es=i.euleriano:"caminoEuleriano"==r?a.camino=i.caminoEuleriano:s.camino=i.caminoHamiltoniano}t.objetoRespuesta=[s,a],t.respuesta=!0,t.cargando=!1})).catch((function(e){t.cargando=!1}))}}}),It=Et,Rt=(o("167e"),Object(b["a"])(It,Mt,qt,!1,null,null,null)),Tt=Rt.exports,Dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-6",staticStyle:{"overflow-y":"scroll"}},[o("h1",{staticClass:"title is-marginless"},[t._v("Flujo máximo")]),t.respuesta?o("div",[o("p",[t._v(t._s("El flujo máximo es "+this.objetoRespuesta.flujoMaximo))])]):t._e(),o("b-field",{staticStyle:{"margin-top":"20px"},attrs:{grouped:""}},[o("b-field",{attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de origen",clearable:""},model:{value:t.origen,callback:function(e){t.origen=e},expression:"origen"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1),o("b-field",{attrs:{expanded:""}},[o("b-autocomplete",{attrs:{rounded:"",data:t.nodos,"keep-first":"","open-on-focus":"",field:"etiqueta",placeholder:"Nodo de destino",clearable:""},model:{value:t.destino,callback:function(e){t.destino=e},expression:"destino"}},[o("template",{slot:"empty"},[t._v("Sin resultados")])],2)],1)],1),o("b-button",{attrs:{type:"is-primary",outlined:"",rounded:"",expanded:"",loading:t.cargando},on:{click:t.flujo}},[t._v("Calcular")])],1),o("div",{staticClass:"column is-6",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.$store.state.nodos,origenes:t.$store.state.origenes,destinos:t.$store.state.destinos,pesos:t.$store.state.pesos}})],1)])])},Pt=[],Ft={name:"Dijkstra",components:{Grafo:E},data:function(){return{calculado:!1,cargando:!1,respuesta:!1,objetoRespuesta:null,origen:null,destino:null,nodos:[]}},mounted:function(){this.cargando=!1,this.respuesta=!1,this.objetoRespuesta=null;for(var t=this.$store.state.nodos,e=[],o=0;o<t.length;o++){var s=t[o];e.push(s.etiqueta)}this.nodos=e},methods:{flujo:function(){var t=this;this.cargando=!0;var e={grafo:this.$store.getters.grafo,inicio:this.origen,final:this.destino};pt()({method:"post",url:this.$apiUrl+"/flujo",data:e}).then((function(e){t.cargando=!1,t.respuesta=!0,t.objetoRespuesta=e.data})).catch((function(e){t.cargando=!1}))}}},Jt=Ft,Ht=Object(b["a"])(Jt,Dt,Pt,!1,null,null,null),Vt=Ht.exports,Ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"is-full-h",staticStyle:{padding:"20px"}},[o("div",{staticClass:"columns is-marginless is-paddingless is-full-h"},[o("div",{staticClass:"column is-6",staticStyle:{"overflow-y":"scroll","padding-right":"20px"}},[o("h1",{staticClass:"title is-marginless"},[t._v("Árbol generador mínimo")]),o("span",{staticClass:"subtitle"},[t._v("Algoritmo de Krunskal")]),null!=t.arbol&&t.arbol.length?o("div",[t._l(t.arbol,(function(e,s){return o("div",{key:s},[o("p",[t._v(t._s(s+1+". "+t.obtenerPaso(t.arbol,s)))]),o("div",{staticStyle:{height:"200px"}},[o("grafo",{attrs:{nodos:t.getGrafoByArbol(t.arbol,s).nodos,origenes:t.getGrafoByArbol(t.arbol,s).origenes,destinos:t.getGrafoByArbol(t.arbol,s).destinos,pesos:t.getGrafoByArbol(t.arbol,s).pesos,config:t.config}})],1)])})),o("div",[o("p",[t._v(" "+t._s("El peso total es de "+t.getPesoTotal(t.arbol))+" ")])])],2):t._e(),o("b-button",{staticClass:"button",staticStyle:{"margin-top":"20px"},attrs:{type:"is-primary",outlined:"",rounded:"",expanded:"",loading:t.cargando},on:{click:function(e){return t.obtenerArbol()}}},[t._v("Generar")])],1),o("div",{staticClass:"column is-6",staticStyle:{"border-left":"2px solid #f5f5f5"}},[o("grafo",{attrs:{nodos:t.$store.state.nodos,origenes:t.$store.state.origenes,destinos:t.$store.state.destinos,pesos:t.$store.state.pesos}})],1)])])},Bt=[],Lt=(o("c975"),o("fb6a"),{name:"MatrizCaminos",components:{Grafo:E,IngresarGrafo:D},data:function(){return{cargando:!1,arbol:null,config:{userPanningEnabled:!1,userZoomingEnabled:!1,style:[{selector:"node",style:{"background-color":"#7958d5",label:"data(id)"}},{selector:"edge",style:{width:3,label:"data(weight)","curve-style":"bezier","line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"triangle"}}],layout:{name:"circle",row:1}}}},methods:{getPesoTotal:function(t){var e,o=0,s=Object(u["a"])(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;o+=a[2]}}catch(n){s.e(n)}finally{s.f()}return o},getGrafoByArbol:function(t,e){var o,s=t.slice(0,e+1),a=[],n=[],i=[],r=[],l=Object(u["a"])(s);try{for(l.s();!(o=l.n()).done;){var c=o.value;n.push(c[0]),i.push(c[1]),r.push(c[2]),-1==a.indexOf(c[0])&&a.push({etiqueta:c[0]}),-1==a.indexOf(c[1])&&a.push({etiqueta:c[1]})}}catch(d){l.e(d)}finally{l.f()}return{nodos:a,origenes:n,destinos:i,pesos:r}},obtenerArbol:function(){var t=this;this.cargando=!0,pt()({method:"post",url:this.$apiUrl+"/arbol",data:{grafo:this.$store.getters.grafo}}).then((function(e){t.arbol=e.data.arbol,t.cargando=!1})).catch((function(e){t.cargando=!1}))},obtenerPaso:function(t,e){var o=t.slice(0,e+1),s=o.pop();return s[0]+" ➜ "+s[1]+" (".concat(s[2],")")}}}),Kt=Lt,Zt=Object(b["a"])(Kt,Ut,Bt,!1,null,null,null),Qt=Zt.exports;s["default"].use(Z["a"]);var Wt=[{path:"/",name:"presentacion",component:rt},{path:"/matriz",name:"matriz",component:kt},{path:"/dijkstra",name:"camino-mas-corto",component:Nt},{path:"/hamiltoniano-euleriano",name:"hamiltoniano-euleriano",component:Tt},{path:"/flujo",name:"flujo",component:Vt},{path:"/arbol",name:"arbol",component:Qt}],Xt=new Z["a"]({mode:"history",base:"/app-teoria-de-grafos/",routes:Wt}),Yt=Xt,te=o("2f62");s["default"].use(te["a"]);var ee=localStorage.getItem("nodos")&&"undefined"!=localStorage.getItem("nodos")?JSON.parse(localStorage.getItem("nodos")||"null"):[],oe=localStorage.getItem("origenes")&&"undefined"!=localStorage.getItem("origenes")?JSON.parse(localStorage.getItem("origenes")||"null"):[],se=localStorage.getItem("destinos")&&"undefined"!=localStorage.getItem("destinos")?JSON.parse(localStorage.getItem("destinos")||"null"):[],ae=localStorage.getItem("pesos")&&"undefined"!=localStorage.getItem("pesos")?JSON.parse(localStorage.getItem("pesos")||"null"):[],ne=new te["a"].Store({state:{nodos:ee,origenes:oe,destinos:se,pesos:ae},mutations:{crearGrafo:function(t,e){t.nodos=e.nodos,t.origenes=e.origenes,t.destinos=e.destinos,t.pesos=e.pesos,localStorage.setItem("nodos",JSON.stringify(e.nodos)),localStorage.setItem("origenes",JSON.stringify(e.origenes)),localStorage.setItem("destinos",JSON.stringify(e.destinos)),localStorage.setItem("pesos",JSON.stringify(e.pesos))}},getters:{grafo:function(t){var e,o=[],s=[],a=Object(u["a"])(t.nodos);try{for(a.s();!(e=a.n()).done;){var n=e.value;s.push(n.etiqueta)}}catch(d){a.e(d)}finally{a.f()}for(var i=0;i<t.origenes.length;i++){var r=t.origenes[i],l=t.destinos[i],c=t.pesos[i];o.push({inicio:r,final:l,peso:c})}return{aristas:o,vertices:s}}}}),ie=ne,re=o("4776"),le=o.n(re);o("be0f"),o("b15b");s["default"].config.productionTip=!1,s["default"].use(U["a"]),s["default"].use(K.a),s["default"].use(le.a),s["default"].use(B["a"],{globalOptions:{}}),s["default"].prototype.$apiUrl="https://grafopuntojotapege.herokuapp.com",new s["default"]({router:Yt,store:ie,render:function(t){return t(V)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var s=o("9c0c"),a=o.n(s);a.a},"6d6b":function(t,e,o){},"8c39":function(t,e,o){},"9c0c":function(t,e,o){},b99f:function(t,e,o){"use strict";var s=o("4fdb"),a=o.n(s);a.a},bbca:function(t,e,o){},c7ff:function(t,e,o){},d043:function(t,e,o){"use strict";var s=o("bbca"),a=o.n(s);a.a}});
//# sourceMappingURL=app.45a57e52.js.map