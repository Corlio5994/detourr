var scatter_widget;(()=>{"use strict";var t,e={976:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,"button {\n  background-color: transparent;\n  position: absolute;\n  color: rgb(0, 0, 0);\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  border-color: transparent;\n  left: 10px;\n}\n\nbutton:hover {\n  color: rgb(56, 56, 56);\n}\n\nbutton.playPauseButton {\n  top: 10px;\n}\n\nbutton.resetButton {\n  top: 45px;\n  border: 5px;\n}\n\nbutton.panButton {\n  top: 80px;\n  border: 5px;\n}\n\nbutton.orbitButton {\n  top: 80px;\n  border: 5px;\n}\n\nbutton.selectButton {\n  top: 115px;\n  border: 5px;\n}\nbutton.selectButton.enabled {\n  color: rgb(0, 0, 204);\n}\n\nbutton.selectButton.disabled {\n  color: rgb(0, 0, 0);\n}\n\ninput.colourSelector {\n  position: absolute;\n  top: 150px;\n  left: 10px;\n  width: 22px;\n  height: 22px;\n}\n\n.scatterWidgetContainer {\n  position: relative;\n}\n\n.scatterWidgetCanvas {\n  position: absolute;\n}\n\n.selectBox.enabled {\n  border: 1px solid #55aaff;\n  background-color: rgba(75, 160, 255, 0.3);\n  position: fixed;\n}\n",""]);const r=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},252:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var i=n(379),o=n.n(i),r=n(795),s=n.n(r),a=n(569),c=n.n(a),l=n(565),u=n.n(l),d=n(216),h=n.n(d),p=n(589),f=n.n(p),v=n(976),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=h(),o()(v.Z,m);const g=v.Z&&v.Z.locals?v.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},s=[],a=0;a<t.length;a++){var c=t[a],l=i.base?c[0]+i.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var h=n(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(e[h].references++,e[h].updater(p)):e.push({identifier:d,updater:o(p,i),references:1}),s.push(d)}return s}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=i(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=n(r[s]);e[a].references--}for(var c=i(t,o),l=0;l<r.length;l++){var u=n(r[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},28:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.orbitIcon=e.selectIcon=e.panIcon=e.resetIcon=e.playIcon=e.pauseIcon=void 0,e.pauseIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" class="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>\n',e.playIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>\n',e.resetIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo-alt" class="svg-inline--fa fa-redo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>\n',e.panIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" class="svg-inline--fa fa-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>',e.selectIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="object-group" class="svg-inline--fa fa-object-group fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"></path></svg>\n',e.orbitIcon='\n<?xml version="1.0" encoding="utf-8"?>\x3c!-- Generator: Adobe Illustrator 25.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<svg version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve"><style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:80;stroke-miterlimit:10;} .st1{stroke:#000000;stroke-width:27;stroke-miterlimit:10;} .st2{fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-miterlimit:10;} .st3{fill:none;stroke:#000000;stroke-width:40;stroke-miterlimit:10;}</style><g> <path d="M179.7,542.3c-2.3,7-9.8,10.7-16.7,8.3c-41.1-14.5-74.7-32.5-99.8-53.6c-42.5-35.5-51.4-72.1-51.4-96.5  c0-25,9.3-62.3,53.5-98.3c26.3-21.4,61.4-39.6,104.3-54.1c6.9-2.3,14.4,1.5,16.5,8.5l16,51.6c2.1,6.7-1.6,13.9-8.3,16.2  c-32.8,11.2-59.6,24.9-78,39.9c-9,7.3-24,21.7-24,36.3c0,13.4,12.3,26.5,22.7,35.2c17.4,14.5,42.8,27.9,74,39.1  c6.6,2.4,10.1,9.6,7.9,16.2L179.7,542.3z"/></g><g> <path d="M401.9,587.4c-10.5,0-21-0.2-31.5-0.6c-7.2-0.3-12.9-6.4-12.5-13.7l2.7-53.9c0.4-7.1,6.4-12.6,13.5-12.3  c9.2,0.3,18.5,0.5,27.8,0.5c88.3,0,170.7-14.2,232.1-39.9c47.4-19.9,78-46.2,78-67s-30.6-47.1-78-67  c-61.3-25.7-143.7-39.9-232.1-39.9c-10.6,0-21.3,0.2-31.9,0.6c-7.1,0.3-13-5.2-13.4-12.3l-3-53.9c-0.4-7.2,5.2-13.4,12.4-13.7  c11.9-0.5,24-0.7,36-0.7c98.7,0,192.1,16.4,263,46.2c81.9,34.4,127,84.4,127,140.8s-45.1,106.4-127,140.8  C594,571,500.6,587.4,401.9,587.4z"/></g><g> <path d="M401.9,790.5c-56.4,0-106.4-45.1-140.8-127c-29.8-70.9-46.2-164.3-46.2-263s16.4-192.1,46.2-263  c34.4-81.9,84.4-127,140.8-127c29.4,0,71.6,12.5,110.4,69.8c4.2,6.1,2.3,14.5-4.1,18.4l-46.2,28.1c-5.8,3.5-13.5,2-17.4-3.6  c-14.6-20.8-29.8-32.6-42.7-32.6c-20.8,0-47.1,30.6-67,78c-25.7,61.3-39.9,143.7-39.9,232.1c0,88.3,14.2,170.7,39.9,232.1  c19.9,47.4,46.2,78,67,78c20.8,0,47.1-30.6,67-78c25.7-61.3,39.9-143.7,39.9-232.1c0-15.3-0.4-30.7-1.3-45.8  c-0.4-7.1,4.9-13.2,12-13.8l53.9-4c7.2-0.5,13.5,4.9,13.9,12.2c1,17,1.5,34.2,1.5,51.4c0,98.7-16.4,192.1-46.2,263  C508.3,745.4,458.3,790.5,401.9,790.5z"/></g><g> <path d="M511.3,175.3c-3.4,6.6-11.9,9.6-18.6,6.4L441,157.1l-37.5-17.8c-10.1-4.8-8.5-18.9,2.7-22.7L473,93.8l66.8-22.9  c11.1-3.8,21,6.3,16,16.3l-18.7,37L511.3,175.3z"/> <path d="M498.6,196.5c-3.9,0-7.9-0.8-11.7-2.6l-89.1-42.3c-9.5-4.5-15-13.7-14.4-23.9c0.6-10.8,7.9-20,18.5-23.7l133.6-45.7  c10.6-3.6,22-0.7,29.1,7.4c6.8,7.8,8,18.4,3.3,27.7l-44.5,88.1C518.5,190.9,508.7,196.5,498.6,196.5z M412.7,128.7l85.8,40.7  c0.2,0,0.7-0.1,0.8-0.3l42.8-84.7L412.7,128.7z"/></g><g> <path d="M339.2,540.4c-3.9-6.3-2-15.2,4.3-19.2l47.8-31.3l34.7-22.7c9.4-6.1,20.5,2.6,18,14.1l-15.2,68.9L413.5,619  c-2.5,11.5-16.3,14.7-22.2,5.2L369.4,589L339.2,540.4z"/> <path d="M400.9,643.3c-8.5,0-16.4-4.4-21.1-12l-52-83.8c-7.8-12.6-4.1-29.5,8.3-37.7l82.5-54.1c8.8-5.7,19.5-5.7,27.9,0.2  c8.9,6.1,13,17.1,10.6,28.1l-30.5,137.9c-2.4,10.9-10.8,19.2-21.5,21C403.8,643.2,402.3,643.3,400.9,643.3z M350.7,533.3l50.1,80.6  l29.5-133.5l-79.4,52C350.8,532.6,350.7,533.1,350.7,533.3z"/></g></svg>\n'},467:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ScatterWidget=void 0;var i=n(96);Object.defineProperty(e,"ScatterWidget",{enumerable:!0,get:function(){return i.ScatterWidget}})},96:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ScatterWidget=void 0;var s=r(n(212)),a=n(681),c=n(148),l=n(886),u=n(903),d=n(803),h=n(28);n(252);var p=function(){function t(t,e,n){var i=this;this.canvas=document.createElement("canvas"),this.clock=new s.Clock,this.minPointSize=.02,this.isSelecting=!1,this.selectionStartEventListener=function(t){i.selectionBox.startPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0)},this.selectionMoveEventListener=function(t){i.selectionHelper.isDown&&i.selectionBox.endPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0)},this.selectionEndEventListener=function(t){i.selectionBox.endPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0),i.setPointIndicesFromBoxSelection(i.selectionBox),i.setSelectedPointColour()},this.width=e,this.height=n,this.addContainerElement(t),this.addCanvas(),this.addScene(),this.addRenderer(),this.addControls()}return t.prototype.constructPlot=function(){this.colMeans=a.getColMeans(this.dataset),this.pointColours=this.coloursToBufferAttribute(this.mapping.colour),this.pickingColours=this.getPickingColours();var t=new s.BufferGeometry,e=Math.pow(this.dataset.length,-1/3),n=this.getShaderOpts(e,this.dim),i=new s.ShaderMaterial(n),o=this.getPointsBuffer(0,this.config.center);t.setAttribute("position",o),this.points=new s.Points(t,i),this.points.geometry.setAttribute("color",this.pointColours),this.scene.add(this.points);var r=new s.BufferGeometry,c=new s.LineBasicMaterial({color:0,linewidth:1}),l=this.getAxisLinesBuffer(0);r.setAttribute("position",l),this.axisSegments=new s.LineSegments(r,c),this.scene.add(this.axisSegments),this.addOrbitControls();var h=this.renderer.getPixelRatio();this.pickingTexture=new s.WebGLRenderTarget(this.width*h,this.height*h),this.selectionBox=new u.SelectionBox(this.camera,this.scene),this.selectionHelper=new d.SelectionHelper(this.selectionBox,this.renderer,"disabled"),this.clock=new s.Clock,this.time=0,this.oldFrame=-1,this.isPaused=!1},t.prototype.resize=function(t,e){var n=t/e,i=this.renderer.getPixelRatio();this.canvas.width=t,this.canvas.height=e,3==this.dim?this.camera.aspect=n:(this.camera.left=-1*n,this.camera.right=1*n,this.camera.top=1,this.camera.bottom=-1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.pickingTexture.setSize(t*i,e*i)},t.prototype.renderValue=function(t){this.config=t.config,this.dataset=t.dataset,this.projectionMatrices=t.projectionMatrices,this.dim=t.projectionMatrices[0][0].length,3==this.dim?this.multiply=a.multiply3:this.multiply=a.multiply2,this.addCamera(this.dim),this.mapping=t.mapping,this.constructPlot(),this.animate()},t.prototype.addContainerElement=function(t){t.className="scatterWidgetContainer",this.container=t},t.prototype.addScene=function(){var t=new s.Scene;t.background=new s.Color(268435455);var e=new s.AmbientLight(4210752);t.add(e),this.scene=t},t.prototype.addCanvas=function(){var t=document.createElement("canvas");t.width=this.width,t.height=this.height,t.id=this.container.id+"-canvas",t.className="scatterWidgetCanvas",this.container.appendChild(t),this.canvas=t},t.prototype.addCamera=function(t){var e,n=this.width/this.height;3==t?(e=new s.PerspectiveCamera(45,n,.01,1e3)).position.setZ(4):((e=new s.OrthographicCamera(-1*n,1*n,1,-1,-1e3,1e3)).position.setY(4),e.up.set(0,-1,0)),this.camera=e},t.prototype.addRenderer=function(){var t=new s.WebGLRenderer({canvas:this.canvas});t.setPixelRatio(window.devicePixelRatio),t.setSize(this.width,this.height),this.renderer=t},t.prototype.addOrbitControls=function(){var t=new l.OrbitControls(this.camera,this.renderer.domElement);2==this.dim&&(t.minPolarAngle=Math.PI,t.maxPolarAngle=Math.PI),this.orbitControls=t},t.prototype.getShaderOpts=function(t,e){return 2==e?{uniforms:{size:{value:Math.max(t,this.minPointSize)},zoom:{value:this.camera.zoom}},vertexShader:c.VERTEX_SHADER_2D,fragmentShader:c.FRAGMENT_SHADER}:{uniforms:{size:{value:Math.max(t,this.minPointSize)}},vertexShader:c.VERTEX_SHADER_3D,fragmentShader:c.FRAGMENT_SHADER}},t.prototype.getPointsBuffer=function(t,e){var n=this.multiply(this.dataset,this.projectionMatrices[t]);if(e){var i=this.multiply(this.colMeans,this.projectionMatrices[t]);n=a.centerColumns(n,i)}var o=new Float32Array([].concat.apply([],n));return new s.BufferAttribute(o,3)},t.prototype.getAxisLinesBuffer=function(t){var e,n=this.projectionMatrices[t];return 3==this.dim?e=n.map((function(t){return[0,0,0].concat(t)})):2==this.dim&&(e=n.map((function(t){return[0,0,0,t[0],0,t[1]]}))),new s.BufferAttribute(new Float32Array([].concat.apply([],e)),3)},t.prototype.coloursToBufferAttribute=function(t){var e=new s.Color,n=new Float32Array(3*this.dataset.length);if(t.length>0)for(var i=0,o=0;o<t.length;o++)i=3*o,e.set(t[o]),n[i]=e.r,n[i+1]=e.g,n[i+2]=e.b;return new s.BufferAttribute(n,3)},t.prototype.getPickingColours=function(){for(var t=new Float32Array(3*this.dataset.length),e=0,n=1;n<=this.dataset.length;n++)t[e]=(n>>16&255)/255,t[e+1]=(n>>8&255)/255,t[e+2]=(255&n)/255,e+=3;return new s.BufferAttribute(t,3)},t.prototype.addControls=function(){var t=this;this.addButton("playPause","Play / Pause",h.pauseIcon,(function(){return t.setIsPaused(!t.getIsPaused())})),this.addButton("reset","Restart tour",h.resetIcon,(function(){return t.resetClock()})),this.addButton("pan","Switch to pan controls",h.panIcon,(function(){return t.setControlType("PAN"==t.controlType?"ORBIT":"PAN")})),this.addButton("select","Switch to selection controls",h.selectIcon,(function(){return t.setSelectionMode(!t.isSelecting)})),this.addColourSelector()},t.prototype.addButton=function(t,e,n,i){var o=document.createElement("button");o.innerHTML=n,o.title=e,o.className=t+"Button",o.onclick=function(){return i()},this.container.appendChild(o)},t.prototype.addColourSelector=function(){var t=document.createElement("input");t.setAttribute("type","color"),t.className="colourSelector",t.setAttribute("value","#619CFF"),t.setAttribute("title","Select colour to apply using selection box"),this.container.appendChild(t)},t.prototype.setPointIndicesFromBoxSelection=function(t){var e=this,n=e.pickingTexture,i=e.renderer,o=e.canvas,r=i.getPixelRatio(),s=o.getBoundingClientRect(),a=(Math.min(t.startPoint.x,t.endPoint.x)-s.left)*r,c=(Math.max(t.startPoint.y,t.endPoint.y)-s.top)*r,l=Math.abs(t.startPoint.x-t.endPoint.x)*r,u=Math.abs(t.startPoint.y-t.endPoint.y)*r,d=new Uint8Array(4*l*u);this.renderer.readRenderTargetPixels(n,a,n.height-c,l,u,d);for(var h,p=new Set,f=0;f<l*u;f++)0!=(h=d[4*f]<<16|d[4*f+1]<<8|d[4*f+2])&&16777215!=h&&p.add(h);this.selectedPointIndices=Array.from(p)},t.prototype.animate=function(){var t=this,e=this.clock.getDelta();this.getIsPaused()||(this.time+=e),this.time>=this.config.duration&&(this.time=0);var n,i=Math.floor(this.time*this.config.fps);i!=this.oldFrame&&(n=this.getPointsBuffer(i,this.config.center),this.points.geometry.setAttribute("position",n),this.points.geometry.attributes.position.needsUpdate=!0,this.axisSegments.geometry.setAttribute("position",this.getAxisLinesBuffer(i)),this.axisSegments.geometry.attributes.position.needsUpdate=!0,this.oldFrame=i);2==this.dim&&(this.points.material.uniforms.zoom.value=this.camera.zoom),this.points.geometry.setAttribute("color",this.pickingColours),this.renderer.setRenderTarget(this.pickingTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.points.geometry.setAttribute("color",this.pointColours),this.renderer.render(this.scene,this.camera),requestAnimationFrame((function(){return t.animate()}))},t.prototype.getIsPaused=function(){return this.isPaused},t.prototype.setIsPaused=function(t){this.isPaused=t;var e=this.container.querySelector(".playPauseButton");t?e.innerHTML=h.playIcon:(this.animate(),e.innerHTML=h.pauseIcon)},t.prototype.setControlType=function(t){var e="ORBIT"==t?".orbitButton":".panButton",n=this.container.querySelector(e);"ORBIT"==t?(n.innerHTML=h.panIcon,n.title="Switch to pan controls",n.className="panButton",this.orbitControls.mouseButtons={LEFT:s.MOUSE.ROTATE,MIDDLE:s.MOUSE.DOLLY,RIGHT:s.MOUSE.PAN}):(n.innerHTML=h.orbitIcon,n.title="Switch to orbit controls",n.className="orbitButton",this.orbitControls.mouseButtons={LEFT:s.MOUSE.PAN,MIDDLE:s.MOUSE.DOLLY,RIGHT:s.MOUSE.ROTATE}),this.controlType=t},t.prototype.setSelectedPointColour=function(){for(var t=this.container.querySelector(".colourSelector"),e=new s.Color(t.value),n=0,i=this.selectedPointIndices;n<i.length;n++){var o=i[n];this.pointColours.set([e.r,e.g,e.b],3*(o-1)),this.pointColours.needsUpdate=!0}},t.prototype.setSelectionMode=function(t){var e=this.container.querySelector("button.selectButton");t?(this.orbitControls.enabled=!1,e.className="selectButton enabled",this.selectionHelper.element.className="selectBox enabled",this.renderer.domElement.addEventListener("pointerdown",this.selectionStartEventListener),this.renderer.domElement.addEventListener("pointermove",this.selectionMoveEventListener),this.renderer.domElement.addEventListener("pointerup",this.selectionEndEventListener)):(e.className="selectButton disabled",this.orbitControls.enabled=!0,this.renderer.domElement.removeEventListener("pointerdown",this.selectionStartEventListener),this.renderer.domElement.removeEventListener("pointermove",this.selectionMoveEventListener),this.renderer.domElement.removeEventListener("pointerup",this.selectionEndEventListener),this.selectionHelper.element.className="selectBox disabled"),this.isSelecting=t},t.prototype.resetClock=function(){this.time=0},t}();e.ScatterWidget=p},148:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.VERTEX_SHADER_2D=e.VERTEX_SHADER_3D=e.FRAGMENT_SHADER=void 0,e.FRAGMENT_SHADER="\nvarying float vSize;\nvarying vec3 vColor;\n\nvoid main(){\n    gl_FragColor = vec4( vColor, 1.0 );\n\n    // make points circular\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    if (distance > 1.0) {\n        discard;\n    }\n}\n",e.VERTEX_SHADER_3D="\nuniform float size;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main(){\n    vColor=color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = 200.0 * size / -mvPosition.z;\n}\n",e.VERTEX_SHADER_2D="\nuniform float size;\nuniform float zoom;\n\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main(){\n    vColor=color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = 100.0 * size * sqrt(zoom);\n}\n"},681:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.centerColumns=e.getColMeans=e.multiply2=e.multiply3=void 0,e.multiply3=function(t,e){for(var n=t.length,i=t[0].length,o=new Array(n),r=0;r<n;++r){var s=new Array(3);o[r]=s;for(var a=t[r],c=0;c<3;++c){for(var l=0,u=0;u<i;++u)l+=a[u]*e[u][c];s[c]=l}}return o},e.multiply2=function(t,e){for(var n=t.length,i=t[0].length,o=new Array(n),r=0;r<n;++r){var s=new Array(3);o[r]=s;for(var a=t[r],c=0;c<2;c++){for(var l=0,u=0;u<i;++u)l+=a[u]*e[u][c];s[2*c]=l}s[1]=0}return o},e.getColMeans=function(t){var e=t.length;return[t.reduce((function(t,e){return t.map((function(t,n){return t+e[n]}))})).map((function(t){return t/e}))]},e.centerColumns=function(t,e){return t.map((function(t){return t.map((function(t,n){return t-e[0][n]}))}))}}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={id:t,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.exports}i.m=e,t=[],i.O=(e,n,o,r)=>{if(!n){var s=1/0;for(l=0;l<t.length;l++){for(var[n,o,r]=t[l],a=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((t=>i.O[t](n[c])))?n.splice(c--,1):(a=!1,r<s&&(s=r));a&&(t.splice(l--,1),e=o())}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,o,r]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={499:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var o,r,[s,a,c]=n,l=0;for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var u=c(i);for(e&&e(n);l<s.length;l++)r=s[l],i.o(t,r)&&t[r]&&t[r][0](),t[s[l]]=0;return i.O(u)},n=self.webpackChunkscatter_widget=self.webpackChunkscatter_widget||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=i.O(void 0,[841],(()=>i(467)));o=i.O(o),scatter_widget=o})();