(()=>{"use strict";function e(e){const t=document.createElement("div"),n=document.createElement("img");return n.setAttribute("src",e.urls.regular),n.id=e.id,t.className="img-cont",t.append(n),t}async function t(){try{const t=document.querySelector("input").value,n="main",{results:c}=await function(e){const t=`https://api.unsplash.com/search/photos?client_id=${"anjascnjalX48MPaqnN2xoEPi2SeDtTZrQPwRPkoWceaZjKi0ZD9ojnalncl".slice(10,53)}&query=${e}`;return fetch(t).then((e=>e.json())).catch((e=>console.log(e)))}(t);!function(t,n){const c=document.getElementById(n),o=new DocumentFragment;for(let n=0;n<t.length-1;n++){const c=e(t[n]);o.append(c)}c.innerHTML=null,c.append(o)}(c,n)}catch(e){console.log(e)}}window.addEventListener("load",(()=>{document.querySelector("nav").append(function(){const e=document.createElement("div"),t=document.createElement("div"),n=function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("input"),c=document.createElement("div");return t.innerHTML="&#x1F50D;&#xFE0E",c.innerHTML="<h1>Search Images</h1>",n.placeholder="Type to search",e.id="search-bar",e.append(c,t,n),e}(),c=document.createElement("img"),o=function(){const e=["3D Renders","Architecture & Interior","Current Events","Experimental","Fashion","Film","Food & Drink","Health & Wellness","Nature","People","Street Photography"],t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");o.textContent="Editorial",r.textContent="Following",t.id="category",n.id="main-category",c.id="sub-category";for(const t of e){const e=document.createElement("div");e.textContent=t,c.append(e)}return n.append(o,r),t.append(n,c),t}();return e.id="navbar",e.append(t,n,c,o),e}()),document.querySelector("input").onkeydown=function(){let e;return()=>{e&&clearTimeout(e),e=setTimeout((()=>{t()}),300)}}()}))})();