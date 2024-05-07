var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://draft.blogger.com",
    "https://www.blogger.com",
    "https://vega-clone.blogspot.com/",
    "https://dkchek1.blogspot.com/",
    "https://girgit-ui.blogspot.com/",
    "https://vegamoviesfilms.blogspot.com/",
    "https://fletrothemes.blogspot.com/", 
    "https://faddalunga.blogspot.com/",
    "https://124x.blogspot.com",
    "https://www.myanimehindi.in",
    "https://jet-movie.blogspot.com",
    "https://testyyyyrr4.blogspot.com"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
    if (window.location.href.startsWith(allowedURLs[i])) {
        foundMatch = true;
        break;
    }
}

if (foundMatch) {
    document.getElementById("main").style.display = "block";
} else {
    document.getElementById("main").style.display = "none";
    // document.body.innerHTML = ("your website is not verified to use this theme just send your site url to admin https://t.me/dhanjeerider to verify your domain "); 
    // Redirect after 4 seconds
    setTimeout(function() {
        window.location.href = "https://t.me/dhanjeerider"; // Replace "https://example.com" with your desired redirect URL
    }, 4000);
}
