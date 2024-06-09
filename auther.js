var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://draft.blogger.com",
    "https://www.blogger.com",
    "https://blogger.com"'
    "https://www.blogger.com/blog/post/edit/preview/"'
"https://eduhub-demo.blogspot.com/",
    "https://vega-clone.blogspot.com/",
"https://dkchek1.blogspot.com",
"https://girgit-ui.blogspot.com",
 "https://www.filmyslap.xyz",  
    "https://khmer-4hd.blogspot.com",
   "https://fletrothemes.blogspot.com", 
    "https://faddalunga.blogspot.com",
    "https://124x.blogspot.com",
    "https://mediunmovie.blogspot.com",
    "https://www.myanimehindi.in",
    "https://plusuiteme.blogspot.com",
    "https://jet-movie.blogspot.com",
    "https://www.timestoryaxom.in",
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
    alert("you need to verify your domain to use this theme ");    document.getElementById("main").style.display = "none";
document.body.innerHTML = ("your website is not verified to use this theme just send your site url to admin https://t.me/dhanjeerider to verify your domain "); 
}
