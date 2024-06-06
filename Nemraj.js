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
var footer = document.querySelector('footer');

// Define the HTML content you want to add
var newElementHTML = (`
     
 <a class="nsb btn button" href="#"> download new apdate </a>
     
    <style>
        .nsb{font-weight:bold;
               
text-decoration: none;  

position: fixed;
bottom: 30px;
left: 20px;
border-radius:5px;
color: white;
text-transform: capitalize;
font-size: 2px;
   
      color:#000;  opacity:0;}
        
  
    </style> 
     `);

// Insert the new element after the footer
footer.insertAdjacentHTML('afterend', newElementHTML);
      } else {

console.warn("theme by dktechnozone.in")
                        
  }
        };
