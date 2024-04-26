var allowedURLs = [
    "https://dkhek.blogspot.com",
    "https://124x.blogspot.com"
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
    alert("Credit expired.");
    document.getElementById("main").style.display = "none";
}
