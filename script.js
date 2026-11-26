(function(){
var bs=document.querySelectorAll("button.copy");
for(var i=0;i<bs.length;i++){bs[i].hidden=false;}
function fb(el){var r=document.createRange();r.selectNodeContents(el);var s=window.getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand("copy");}catch(e){}}
document.addEventListener("click",function(ev){
 var b=ev.target.closest&&ev.target.closest("button.copy");if(!b)return;
 var el=document.getElementById(b.getAttribute("data-copy"));if(!el)return;
 var t=el.textContent;var old=b.getAttribute("data-label")||b.textContent;b.setAttribute("data-label",old);
 function done(){b.textContent="Kopiert ✓";b.classList.add("ok");setTimeout(function(){b.textContent=old;b.classList.remove("ok");},2000);}
 if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(done,function(){fb(el);done();});}else{fb(el);done();}
});
})();
