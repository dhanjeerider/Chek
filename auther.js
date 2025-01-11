document.addEventListener('DOMContentLoaded', function() {
        var allowedURLs = [
"https://orgmovies.store",    
 "https://vega-movies.news",
 "https://vegaflix.com",
"https://www.boomfilms.xyz", 
  "https://cinema4free.xyz",
    "https://www.mkv.icu",  
                "https://exprothikhad.blogspot.com",
 "https://vegamovies.mywire.org",
 "https://hdhub4uui.blogspot.com",     
   "https://afilmy4wap.org",
                "https://plusuiteme.blogspot.com",
"https://solution-manualspdf.blogspot.com",  
                "https://www.timestoryaxom.in",
                 "https://www.myanimehindi.in",
                "https://girgit-ui.blogspot.com",
   "https://www.filmyslap.xyz", 
                 "https://codingrider.blogspot.com",
                "https://www.moviehubplay.in",
                "https://hdhub4u-clone.blogspot.com",
                "https://neuplayer.blogspot.com"
];
    
    var foundMatch = false;
    for (var i = 0; i < allowedURLs.length; i++) {
        if (window.location.href.startsWith(allowedURLs[i])) {
            foundMatch = true;
            break;
        }
    }

    if (!foundMatch) {
        var css = `
            .entry-content, article {
                display: none !important;
            }
            .alert {
                padding: 8px;
                margin: 15px auto;
                background: red;
                color: white;
                border-radius: 5px;
            } .buy{display:none;}
        `;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);

        var mainElement = document.querySelector('#main');
        if (mainElement) {
            mainElement.style.display = 'block';
            mainElement.innerHTML = `<div class="alert">Your License Is Not Active. Please contact <a href="https://t.me/dhanjeerider" target="_blank">Theme designer</a> to activate your license.</div>`;
        } else {
            console.error('Element with ID "main" not found.');
        }

      alert('Your domain is not authorized to use this theme. Please contact support.');
    }
});
