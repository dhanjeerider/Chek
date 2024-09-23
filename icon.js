document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
"https://biographyhero.lovestoblog.com",
"https://hdhub4u-wp-theme-dktzn.is-best.net",
"https://dktech.000.pe",
"https://dkflix.000.pe",
"https://hdhub4u.fashion",
"https://19flicks.com",
"https://vegamovieshub4uplus.blogspot.com",
"https://neuplayer.blogspot.com",
"https://www.ajaykumbhar.com",
"https://vegamovies.com.co",
"https://gp-discover.000.pe",
 "https://movies4u.my-style.in",
 "https://onpesstheme.blogspot.com",
"https://gp-afiliate.000.pe",
"https://gp-lifehacker.000.pe/",
"https://gp-newspape.000.pe",
"https://jettheme-pro.blogspot.com",
"https://mariyaui.blogspot.com",
"https://1stepno.blogspot.com",
"https://www.films4u.in",
"https://gpmovie-dktzone.rf.gd",
"https://filmyfly.solutions",
"https://hindustaniparivar.in/",
"https://taagsqywsg.blogspot.com",
"https://hdhub4u-clone.blogspot.com",
"https://exprothikhad.blogspot.com",
"https://hdhub4u-clone.blogspot.com",
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
"https://testyyyyrr4.blogspot.com"
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
                display: none !important;
            }
        `;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    if (foundMatch) {
  document.querySelector('.buy').style.display = 'none';  
    } else {
        hideSemanticTags();
        alert('You need to verify your domain to use this theme. Please contact support.');
        document.write(`Your License Is Not Active Contact <a href="t.me/dhanjeerider"> DHANJEE Rider </a>To Get Licence`);
    }
});
