(function(){
var idx=0,slides=[].slice.call(document.querySelectorAll(".slide")),tr=document.getElementById("track"),tabs=[].slice.call(document.querySelectorAll(".tab")),pv=document.getElementById("prev"),nx=document.getElementById("next");
function go(i,type){
idx=Math.max(0,Math.min(slides.length-1,i));
tr.style.transform="translateX("+(-idx*20)+"%)";
slides.forEach(function(s,k){s.inert=k!==idx;s.scrollTop=0});
tabs.forEach(function(t,k){t.setAttribute("aria-current",k===idx)});
pv.disabled=idx===0;nx.disabled=idx===slides.length-1;
if(type)document.getElementById("t").value=type;
document.querySelectorAll(".car").forEach(upd);
}
document.querySelectorAll("[data-go]").forEach(function(b){b.addEventListener("click",function(){go(+b.dataset.go,b.dataset.type)})});
tabs.forEach(function(t){t.addEventListener("click",function(){go(+t.dataset.i)})});
pv.addEventListener("click",function(){go(idx-1)});nx.addEventListener("click",function(){go(idx+1)});
document.addEventListener("keydown",function(e){
if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||!document.getElementById("roul").hidden)return;
if(e.key==="ArrowRight")go(idx+1);if(e.key==="ArrowLeft")go(idx-1);
});
/* carruseles */
function upd(c){
var t=c.querySelector(".ctrack"),it=t.children,v=c.querySelector(".cview");
var step=it[1]?it[1].offsetLeft-it[0].offsetLeft:it[0].offsetWidth;
var max=Math.max(0,Math.round((t.scrollWidth-v.clientWidth)/step));
c._i=Math.min(c._i||0,max);
t.style.transform="translateX("+(-c._i*step)+"px)";
c.querySelector(".cp").disabled=c._i===0;
c.querySelector(".cn").disabled=c._i>=max;
c._max=max;
}
document.querySelectorAll(".car").forEach(function(c){
c.querySelector(".cp").addEventListener("click",function(){c._i=Math.max(0,(c._i||0)-1);upd(c)});
c.querySelector(".cn").addEventListener("click",function(){c._i=Math.min(c._max,(c._i||0)+1);upd(c)});
upd(c);
});
window.addEventListener("resize",function(){document.querySelectorAll(".car").forEach(upd)});
/* decada */
var H={"70":["images/ruleta-vogue-1974.jpg","Collage de moda de los años 70"],"80":["images/ruleta-power-dressing.jpg","Portada de moda de los años 80"],"90":["images/ruleta-lunares-verde-lima.jpg","Outfit colorido estilo años 90"]},M={"70":"Tonos tierra, pana y solapas anchas. Aire de domingo en carretera.","80":"Hombros marcados, rayas y colores con energía. Sale solo, sin esfuerzo.","90":"Denim holgado, capas simples y chaquetas de archivo. Cómodo y con actitud."};
document.querySelectorAll(".dec button").forEach(function(b){
b.addEventListener("click",function(){
document.querySelectorAll(".dec button").forEach(function(x){x.setAttribute("aria-pressed","false")});
b.setAttribute("aria-pressed","true");
var ha=document.getElementById("heroart");ha.src=H[b.dataset.d][0];ha.alt=H[b.dataset.d][1];
document.getElementById("mood").textContent=M[b.dataset.d];
});
});
/* bolsa */
var n=0;
document.querySelectorAll(".add").forEach(function(b){
b.addEventListener("click",function(){
var on=b.dataset.on==="1";
b.dataset.on=on?"0":"1";
b.textContent=on?(b.dataset.l||"Añadir"):"Añadido";
if(!on&&!b.dataset.l)b.dataset.l=b.dataset.l||"";
n+=on?-1:1;document.getElementById("cnt").textContent=n;
});
if(b.textContent==="Reservar")b.dataset.l="Reservar";
});
/* formulario */
document.getElementById("f").addEventListener("submit",function(e){
e.preventDefault();
var m=document.getElementById("m"),a=document.getElementById("n"),c=document.getElementById("e"),d=document.getElementById("d");
if(!a.value.trim()){m.textContent="Escribe tu nombre.";a.focus();return}
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.value)){m.textContent="Escribe un correo válido, por ejemplo nombre@correo.com.";c.focus();return}
if(!d.value.trim()){m.textContent="Cuéntanos qué buscas.";d.focus();return}
m.textContent="Mensaje enviado. Te respondemos pronto.";e.target.reset();
});

/* ruleta */
var IT=[
  {"s": "images/ruleta-vogue-1970.jpg", "e": "70s", "t": "Vogue 1970", "x": "Vestido satinado de estampado psicodélico: la década en movimiento.", "a": "Portada de moda psicodélica de 1970"},
  {"s": "images/ruleta-vogue-1974.jpg", "e": "70s", "t": "Prints psicodélicos", "x": "Solapas enormes, estampados atrevidos y mucha actitud.", "a": "Collage de moda de 1974"},
  {"s": "images/ruleta-vogue-1972.jpg", "e": "70s", "t": "Vogue 1972", "x": "Pantalón acampanado terracota y blusa estampada: el ícono de la década.", "a": "Collage retro de moda setentera"},
  {"s": "images/ruleta-disco-dreams.jpg", "e": "70s", "t": "Disco dreams", "x": "Satín esmeralda, flores y brillo para las noches de disco.", "a": "Collage de moda disco de 1974"},
  {"s": "images/ruleta-sastre-verde.jpg", "e": "70s", "t": "Sastre verde pino", "x": "Saco verde, camisa estampada y pantalón de rayas anchas.", "a": "Look masculino con saco verde"},
  {"s": "images/ruleta-power-dressing.jpg", "e": "80s", "t": "Power dressing", "x": "Hombreras, blusas con lazo y tonos camel: sastrería con carácter.", "a": "Portada de moda ochentera"},
  {"s": "images/ruleta-camisa-multicolor.jpg", "e": "80s", "t": "Seda a rayas", "x": "Camisa de rayas de colores con pantalón blanco y cinturón negro.", "a": "Camisa de rayas de colores"},
  {"s": "images/ruleta-rayas-y-tartan.jpg", "e": "90s", "t": "Rayas y tartán", "x": "Rayas, cuadros y zapatillas: mezcla sin miedo.", "a": "Outfit de rayas y cuadros"},
  {"s": "images/ruleta-lunares-verde-lima.jpg", "e": "90s", "t": "Lunares y verde lima", "x": "Tejido de cuadros, pantalón verde y sneakers: color sin pedir permiso.", "a": "Ilustración de outfit colorido"},
  {"s": "images/ruleta-neon-y-gafas.jpg", "e": "Pop", "t": "Neón y gafas", "x": "Verde neón, estampado animal y gafas de colores.", "a": "Outfits neón con gafas"},
  {"s": "images/ruleta-boina-mostaza.jpg", "e": "Pop", "t": "Boina mostaza", "x": "Boina de lana, gafas ovaladas y cuello alto a rayas.", "a": "Look con boina amarilla"},
  {"s": "images/ruleta-maquillaje.jpg", "e": "Pop", "t": "Color en la cara", "x": "Delineado de colores, aretes naranja y cuello alto morado.", "a": "Maquillaje gráfico retro"}
],RL=document.getElementById("roul"),ring=document.getElementById("ring"),k=0,tm=null,auto=!matchMedia("(prefers-reduced-motion:reduce)").matches,built=false,rad=20,op=null;
function spin(){var n=IT.length,c=((k%n)+n)%n;ring.style.transform="translateZ(-"+rad+"rem) rotateY("+(-k*360/n)+"deg)";
document.getElementById("rera").textContent=IT[c].e;document.getElementById("rtit").textContent=IT[c].t;document.getElementById("rtxt").textContent=IT[c].x;
document.querySelectorAll("#rchips button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.e===IT[c].e)})}
function build(){var n=IT.length,fs=parseFloat(getComputedStyle(document.documentElement).fontSize);rad=(ring.offsetWidth/fs/2)/Math.tan(Math.PI/n)*1.12;ring.innerHTML="";
IT.forEach(function(it,i){var d=document.createElement("div");d.className="rc";d.style.transform="rotateY("+i*360/n+"deg) translateZ("+rad+"rem)";var im=new Image();im.src=it.s;im.alt=it.a;d.appendChild(im);ring.appendChild(d)});
var ch=document.getElementById("rchips");ch.innerHTML="";var seen={};IT.forEach(function(it,i){if(seen[it.e])return;seen[it.e]=1;var b=document.createElement("button");b.className="px";b.textContent=it.e;b.dataset.e=it.e;b.addEventListener("click",function(){stop();var n=IT.length,c=((k%n)+n)%n,d=(i-c)%n;if(d>n/2)d-=n;if(d<-n/2)d+=n;k+=d;spin()});ch.appendChild(b)});built=true}
function step(d){k+=d;spin()}
function play(){clearInterval(tm);if(auto)tm=setInterval(function(){step(1)},3500);var b=document.getElementById("rauto");b.setAttribute("aria-pressed",auto);b.textContent=auto?"Pausar giro":"Girar solo"}
function stop(){auto=false;play()}
function openR(){op=document.activeElement;document.querySelector("header").inert=true;document.querySelector(".view").inert=true;RL.hidden=false;if(!built)build();spin();play();document.getElementById("rclose").focus()}
function closeR(){RL.hidden=true;clearInterval(tm);document.querySelector("header").inert=false;document.querySelector(".view").inert=false;if(op)op.focus()}
document.getElementById("openR").addEventListener("click",openR);
document.getElementById("rclose").addEventListener("click",closeR);
document.getElementById("rp").addEventListener("click",function(){stop();step(-1)});
document.getElementById("rn").addEventListener("click",function(){stop();step(1)});
document.getElementById("rauto").addEventListener("click",function(){auto=!auto;play()});
document.addEventListener("keydown",function(e){if(RL.hidden)return;if(e.key==="Escape")closeR();if(e.key==="ArrowRight"){stop();step(1)}if(e.key==="ArrowLeft"){stop();step(-1)}});
go(0);
})();
