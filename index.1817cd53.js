document.addEventListener("click",function(t){var e=document.querySelector(".wall"),o=document.querySelector(".spider");if(e.contains(t.target)){var n=e.getBoundingClientRect(),c=parseFloat(window.getComputedStyle(e).getPropertyValue("border-width")),i=t.clientX-n.left-c,l=t.clientY-n.top-c,r=o.offsetWidth,d=o.offsetHeight,a=n.width-2*c-r,u=n.height-2*c-d,f=i-r/2,p=l-d/2;f<0?f=0:f>a&&(f=a),p<0?p=0:p>u&&(p=u),o.style.left="".concat(f,"px"),o.style.top="".concat(p,"px")}});
//# sourceMappingURL=index.1817cd53.js.map
