(function(){"use strict";var t={749:function(t,n,o){var e=o(751),r=o(641);function i(t,n,o,e,i,a){const c=(0,r.g2)("HelloWorld");return(0,r.uX)(),(0,r.Wv)(c)}var a=o.p+"img/обезьянки.a079b4d2.jpg";const c={id:"app",class:"app-container"},u={class:"editor-container"},l={class:"toolbar"},s={class:"editor-content",contenteditable:"true",ref:"editor"};function d(t,n,o,e,i,d){return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("div",u,[(0,r.Lk)("div",l,[(0,r.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>d.undo&&d.undo(...t)),title:"Назад",class:"blue-button"},"↶"),(0,r.Lk)("button",{onClick:n[1]||(n[1]=(...t)=>d.redo&&d.redo(...t)),title:"Вперёд",class:"blue-button"},"↷"),(0,r.Lk)("button",{onClick:n[2]||(n[2]=(...t)=>d.formatHeader&&d.formatHeader(...t)),title:"Заголовок",class:"blue-button"},"TТ"),(0,r.Lk)("button",{onClick:n[3]||(n[3]=(...t)=>d.formatParagraph&&d.formatParagraph(...t)),title:"Абзац",class:"blue-button"},"T"),(0,r.Lk)("button",{onClick:n[4]||(n[4]=(...t)=>d.addImage&&d.addImage(...t)),title:"Добавить картинку",class:"blue-button"},"🖼"),(0,r.Lk)("button",{onClick:n[5]||(n[5]=(...t)=>d.copyHTML&&d.copyHTML(...t)),title:"Скопировать HTML",class:"blue-button"},"Скопировать HTML")]),(0,r.Lk)("div",s,n[6]||(n[6]=[(0,r.Lk)("p",null," Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий. ",-1),(0,r.Lk)("h1",null,"Смотрите какие обезьянки",-1),(0,r.Lk)("img",{src:a,alt:"Обезьянки"},null,-1),(0,r.Lk)("p",null," Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой иную шоу ищущую шоу ищущую шукающую шоущую щупающую эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий. ",-1),(0,r.Lk)("p",null," Товарищи! новая модель организационной деятельности требует от нас анализа направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении постовленных задач. Задача организации, в особенности же реализация намеченных плановых заданий требуют от нас анализа системы обучения кадров, соответствующей насущным потребностям. ",-1)]),512)])])}var f={methods:{undo(){document.execCommand("undo")},redo(){document.execCommand("redo")},formatHeader(){this.applyFormatting("h1")},formatParagraph(){this.applyFormatting("p")},applyFormatting(t){const n=window.getSelection();if(n.rangeCount>0){const o=n.getRangeAt(0),e=this.$refs.editor;e.contains(o.commonAncestorContainer)?("h1"===t?document.execCommand("formatBlock",!1,"h1"):"p"===t&&document.execCommand("formatBlock",!1,"p"),this.$refs.editor.focus()):alert("Выделите текст внутри редактора!")}else alert("Выделите текст для применения форматирования.")},addImage(){const t=prompt("Введите URL картинки:");t&&document.execCommand("insertImage",!1,t)},copyHTML(){const t=this.$refs.editor.innerHTML;navigator.clipboard.writeText(t).then((()=>{alert("HTML скопирован!")}))}}},p=o(262);const m=(0,p.A)(f,[["render",d]]);var b=m,g={name:"App",components:{HelloWorld:b}};const h=(0,p.A)(g,[["render",i]]);var v=h;(0,e.Ef)(v).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var a=1/0;for(s=0;s<t.length;s++){e=t[s][0],r=t[s][1],i=t[s][2];for(var c=!0,u=0;u<e.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[e,r,i]}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.p="/wysiwyg-editor/"}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,a=e[0],c=e[1],u=e[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var s=u(o)}for(n&&n(e);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(s)},e=self["webpackChunkwysiwyg_editor"]=self["webpackChunkwysiwyg_editor"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(749)}));e=o.O(e)})();
//# sourceMappingURL=app.878a8798.js.map