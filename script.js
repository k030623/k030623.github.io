(function(){
  var root=document.documentElement,b=document.getElementById('theme');
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s);}catch(e){}
  b.addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    var n=dark?'light':'dark';root.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n);}catch(e){}
  });
})();
