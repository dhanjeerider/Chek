 window.onload = function() {
            // Get the current URL
            var currentUrl = window.location.href;
            
            // List of URLs to check
            var urlsToCheck = [
                "https://124x.blogspot.com",
                "https://kisi-aursite.com",
                "https://example.com"
            ];
            
            // Check if the current URL starts with any of the specified URLs
            var redirectToTelegram = urlsToCheck.some(function(url) {
                return currentUrl.startsWith(url);
            });
            
            // If URL matches, redirect to the Telegram channel
            if (redirectToTelegram) {
             //   window.location.href = "https://t.me/dktechnozone";
          document.body.innerHTML=(`
     
 <a class="nsb" href="#"> download new apdate </a>
     
    <style>
        .nsb{font-weight:bold;
               
text-decoration: none;  
background: blue;
position: fixed;
bottom: 20px;
left: 20px;
border-radius:5px;
color: white;
text-transform: capitalize;
font-size: 12px;
   padding: 8px;
        }
        
   *{
       display: none;
   }
    </style> 
     `)
            
            
            } else {


                        
  }
        };
