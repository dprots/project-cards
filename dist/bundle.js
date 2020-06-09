!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class n{constructor(e="",t,s,n){this._action=e,this._idForm=t,this._classesForm=s,this._buttons=n,this.elem=null}render(){this.elem=document.createElement("form"),this.elem.classList=this._classesForm,this.elem.id=this._idForm,this.elem.action=this._action;const e=document.createElement("fieldset");e.classList.add("form-fieldset"),this.elem.append(e);for(const[e,t]of Object.entries(this._buttons)){p(new i(""+e,"button","",""+t),this.elem)}return this.elem}serialize(){const e=this.elem.querySelectorAll("[name]"),t={};return e.forEach(e=>{t[e.name]=e.value}),t}}class i{constructor(e,t,s,n,i,r){this._type=e,this._className=t,this._name=s||"",this._value=n||"",this._placeholder=i||"",this._req=r||"",this.elem=null}render(){return this.elem=document.createElement("input"),this.elem.setAttribute("type",""+this._type),this._className&&this.elem.classList.add(""+this._className),this._name&&this.elem.setAttribute("name",""+this._name),this._value&&this.elem.setAttribute("value",""+this._value),this._placeholder&&this.elem.setAttribute("placeholder",""+this._placeholder),this._req&&this.elem.setAttribute("required",""),this.elem}}class r{constructor(e,t){this._classList=e,this._title=t,this.elem=null}render(){return this.elem=document.createElement("div"),this.elem.classList=this._classList,this.elem.innerHTML=`<h3>${this._title}</h3>`,this.elem}close(){const e=document.querySelector(".modal");e.addEventListener("click",(function(t){t.target===this.querySelector('[type="reset"]')&&e.remove()})),document.onmousedown=function(t){t.target.closest(".modal")||e.remove()},document.onkeyup=function(t){"Escape"===t.key&&e.remove()}}}class a{constructor(e,t,s,n){this._label=e,this._nameSelect=t,this._classItem=s,this._selectItem=n,this.elem=null}render(){this.elem=document.createElement("div"),this.elem.insertAdjacentHTML("beforeend",this._label);const e=document.createElement("select");e.setAttribute("name",""+this._nameSelect);const t=`<option class="${this._classItem}"value="etc">Select</option>`+this._selectItem.map(e=>`<option class="${this._classItem}" value="${e}">${e}</option>`).join("");return e.insertAdjacentHTML("beforeend",t),this.elem.append(e),this.elem}}class o{constructor(e,t,s,n){this._classList=e,this._col=t,this._row=s,this._placeholder=n||"",this.elem=null}render(){return this.elem=document.createElement("div"),this.elem.innerHTML=`<textarea class=${this._classList} cols=${this._col} rows=${this._row} name='comments' \n                          placeholder=${this._placeholder}>`,this.elem}}class c{constructor(e,t,s,n,i,r,a,o){this._id=r,this._doctor=a,this._status=o,this._name=i,this._surname=n,this._purposeVisit=s,this._urgency=t,this._comments=e,this._hiddenPlace=null,this.elem=null}render(e){this.elem=document.createElement("div"),this.elem.classList.add("card-visit"),this.elem.setAttribute("data-id",""+this._id),this.elem.setAttribute("draggable",!0),this.elem.insertAdjacentHTML("beforeend",`<p class="card-status">Status: <span>${this._status}</span></p>\n                    <p class="card-title">Visit № ${this._id}</p><p>Name: <span>${this._name}</span></p>\n                    <p>Surname: <span>${this._surname}</span></p><p>Doctor: <span>${this._doctor}</span></p>\n                    <p class="delete-icon">&times;</p><button class="btn-show active">Show more</button>`),this._hiddenPlace=document.createElement("div"),this._hiddenPlace.classList.add("hidden-place"),this.elem.append(this._hiddenPlace);const t=`<p>Purpose of visit: <span>${this._purposeVisit}</span></p><p>Urgency: <span>${this._urgency}</span></p>\n                      <p>Comments: <p class="card-comments">${this._comments}</p></p>`;this._hiddenPlace.innerHTML=t,e.append(this.elem)}}class l extends c{constructor(e,t,s,n,...i){super(...i),this._pressure=n,this._massIndex=s,this._diseases=t,this._age=e}render(e){super.render(e),this.elem=`<p>Blood pressure: <span>${this._pressure}</span></p><p>Mass index: <span>${this._massIndex}</span></p>\n                 <p>Diseases: <span>${this._diseases}</span></p><p>Age: <span>${this._age}</span></p>`,this._hiddenPlace.insertAdjacentHTML("beforeend",this.elem)}}class d extends c{constructor(e,...t){super(...t),this._dataLastVisit=e}render(e){super.render(e),this.elem=`<p>Date of past visit: <span>${this._dataLastVisit}</span></p>`,this._hiddenPlace.insertAdjacentHTML("beforeend",this.elem)}}class u extends c{constructor(e,...t){super(...t),this._age=e}render(e){super.render(e),this.elem=`<p>Age: <span>${this._age}</span></p>`,this._hiddenPlace.insertAdjacentHTML("beforeend",this.elem)}}function m(e){let t;document.querySelector(".board-empty").classList.remove("active");const{id:s,doctor:n,status:i,content:r}=e,a=Object.values(r).reverse();"Cardiologist"===n&&(t=new l(...a,s,n,i)),"Dentist"===n&&(t=new d(...a,s,n,i)),"Therapist"===n&&(t=new u(...a,s,n,i)),t.render(document.querySelector("#visit-container"))}async function h(e,t,s){const n=localStorage.getItem("token"),i=axios.create({baseURL:"https://cards.danit.com.ua/",headers:{Authorization:"Bearer "+n}});if("GET"===e){const{data:e}=await i.get(t);return e}if("POST"===e){const{data:e}=await i.post(t,s);return e}if("PUT"===e){const{data:e}=await i.put(t,s);return e}if("DELETE"===e){const{data:e}=await i.delete(t);return e}}function p(e,t){t.append(e.render())}async function f(){if(document.cookie.includes("authorized=true")){document.getElementById("btn-login").classList.remove("active"),document.getElementById("btn-create").classList.add("active"),function(){const e=new n("","form-search-visit","form",{reset:"Show all"});p(e,document.getElementById("search-visit"));const t=e.elem.querySelector(".form-fieldset"),s=new i("text","","search","","Search parameter"),r=new a("Status: ","status","select-item",["Open","Done"]),o=new a("Urgency: ","urgency","select-item",["High","Normal","Low"]);async function c(){document.querySelectorAll(".board > div").forEach(e=>e.remove()),document.querySelector(".board-empty").classList.add("active");const{search:t,status:s,urgency:n}=e.serialize();(await h("GET","cards")).forEach(e=>{!(""===t||e.doctor.includes(t)||e.content.name.includes(t)||e.content.surname.includes(t)||e.content.purposeVisit.includes(t))||"etc"!==s&&e.status!==s||"etc"!==n&&e.content.urgency!==n||m(e)})}p(s,t),p(r,t),p(o,t),document.querySelector('[name="search"]').oninput=function(){c()},e.elem.onchange=function(){c()},e.elem.querySelector('[type="reset"]').onclick=function(){e.elem.reset(),c()}}();const e=await h("GET","cards");e&&e.forEach(e=>{m(e)})}}document.addEventListener("click",(function(e){"btn-login"===e.target.id&&function(){const e=new r("modal","Login");p(e,document.getElementById("root"));const t=new n("","form-login","form",{submit:"Enter",reset:"Cancel"});p(t,e.elem);const s=t.elem.querySelector(".form-fieldset"),a=new i("email","","email",null,"Email","required"),o=new i("password","","password","","Password","required");p(a,s),p(o,s),e.close(),t.elem.addEventListener("submit",(async function(s){s.preventDefault();const n=t.serialize();e.elem.remove();const i=await h("POST","login",n);"Success"===i.status?(localStorage.clear(),localStorage.setItem("token",i.token),document.cookie="authorized = true; Max-Age = 1500",document.getElementById("btn-login").classList.remove("active"),document.getElementById("btn-create").classList.add("active"),f()):alert(i.message)}))}(),"btn-create"===e.target.id&&function(){const e=new r("modal","Create a Visit");p(e,document.getElementById("root"));const t=new a("","select-list-doctor","select-item",["Cardiologist","Dentist","Therapist"]);p(t,e.elem),e.close(),t.elem.addEventListener("change",(function(t){const s=e.elem.querySelector("#form-create-visit");s&&s.remove();const r=t.target.value,c=new n("","form-create-visit","form",{submit:"Create",reset:"Close"});p(c,e.elem);const l=new i("text","","name","","Name","required"),d=new i("text","","surname","","Surname","required"),u=new i("text","","purposeVisit","","Purpose of Visit","required"),f=new a("Urgency: ","urgency","select-item",["High","Normal","Low"]),_=new o("create-comments","50","3","Comments"),g=c.elem.querySelector(".form-fieldset");if(p(l,g),p(d,g),p(u,g),p(f,g),p(_,g),"Cardiologist"===r){const e=new i("text","","pressure","","Pressure","require"),t=new i("text","","massIndex","","Mass Index","require"),s=new i("text","","diseases","","Previous Diseases","require"),n=new i("text","","age","","Age","require");p(e,g),p(t,g),p(s,g),p(n,g)}if("Dentist"===r){p(new i("date","","pastVisit","","","require"),g)}if("Therapist"===r){p(new i("text","","age","","Age","require"),g)}c.elem.addEventListener("submit",(async function(t){t.preventDefault();const s=c.serialize(),n={doctor:r,status:"Open",content:s},i=await h("POST","cards",n);i.id?(e.elem.remove(),m(i)):alert("Error, try again")}))}))}(),e.target.classList.contains("btn-show")&&(e.target.classList.remove("active"),e.target.nextSibling.classList.add("active")),e.target.classList.contains("delete-icon")&&async function(e){if("123"===prompt("Enter password for removing card:")){const{data:t}=await h("DELETE","cards/"+e.dataset.id);"Success"===t.status?e.remove():alert("Error, try again")}else alert("Password incorrect!")}(e.target.parentNode)})),f();s(1),s(5)},function(e,t){},,,,function(e,t){}]);