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
                window.location.href = "https://t.me/dktechnozone";
            } else {
                // Show a message if URL doesn't match
                // document.getElementById('message').innerText = "You are not being redirected.";
            }
        };
