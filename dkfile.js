document.addEventListener('DOMContentLoaded', function() {
        // Array of URLs to target
        var targetUrls = [
            'https://ghdjududuxbxbxb.blogspot.com/',
            'https://ghdjududuxbxbxb.blogspot.com',
            'https://example3.blogspot.com'
        ];

        // Get the current URL
        var currentUrl = window.location.href;

        // Check if the current URL matches any in the targetUrls array
        var isTargetUrl = targetUrls.some(function(url) {
            return currentUrl.startsWith(url);
        });

        // If it matches, replace the body content
        if (isTargetUrl) {
            document.body.innerHTML = '';
            document.write('You are not eligible to use this theme ');
        }
    });

console.log("theme by dktechnozone")

