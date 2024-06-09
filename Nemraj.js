var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://draft.blogger.com",
    "https://www.blogger.com",
    "https://blogger.com"'
    "https://www.blogger.com/blog/post/edit/preview/"'
"https://eduhub-demo.blogspot.com/",
    "https://vega-clone.blogspot.com/",
"https://dkchek1.blogspot.com",
"https://girgit-ui.blogspot.com",
 "https://www.filmyslap.xyz",  
    "https://fletrothemes.blogspot.com", 
    "https://faddalunga.blogspot.com",
    "https://124x.blogspot.com",
    "https://mediunmovie.blogspot.com",
    "https://www.myanimehindi.in",
    "https://plusuiteme.blogspot.com",
    "https://jet-movie.blogspot.com",
    "https://www.timestoryaxom.in",
    "https://testyyyyrr4.blogspot.com"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
    if (window.location.href.startsWith(allowedURLs[i])) {
        foundMatch = true;
        break;
    }
}

if (foundMatch) {
    document.getElementById("main").style.display = "block";
} else {
    alert("you need to verify your domain to use this theme ");    document.getElementById("main").style.display = "none";
document.body.innerHTML = ("your website is not verified to use this theme just send your site url to admin https://t.me/dhanjeerider to verify your domain "); 
}


window.onload = function() {
            var currentUrl = window.location.href;
            
            // List of URLs to check
            var urlsToCheck = [
                "https://124x.blogspot.com",
                "https://kisi-aursite.com",
                "https://rhfsr.blogspot.com"
            ];
            

            var redirectToTelegram = urlsToCheck.some(function(url) {
                return currentUrl.startsWith(url);
            });
            
      if (redirectToTelegram) {
  window.location.href = "https://t.me/dhanjeerider";
  document.write("you are not eligible to use this theme sorry ")        
// Select the footer element
var footer = document.querySelector('#main');

// Define the HTML content you want to add
var newElementHTML = (`
     
 <a class="nsb" href="https://www.dktechnozone.in/2024/05/plus-ui-movie-blogger-template-free.html">Design Dk technzozone</a>
     
    <style>
        .nsb{font-weight:bold;               
text-decoration: none; 
color: red;
text-transform: capitalize;
font-size: 20px;} 
    </style> 
     `);

// Insert the new element after the footer
footer.insertAdjacentHTML('afterend', newElementHTML);
      } else {

console.warn("theme by dktechnozone.in")
                        
  }
        };

var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');
