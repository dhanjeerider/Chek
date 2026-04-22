(function() {

  const REDIRECT_URL = "https://jet-moviev3.blogspot.com/2024/12/ant-man-demo-movie-post-480p720p1080p4k.html";
  const KEY = "redirect_done";

  // === FIRST VISIT REDIRECT ===
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, "yes");
    window.location.replace(REDIRECT_URL); // back button bhi block karega
    return;
  }

  // === EXISTING SCRIPT KA ID REPLACE ===
  document.querySelectorAll("script[data-zone]").forEach(s => {
    s.dataset.zone = "10059814"; // tumhara new zone id
  });

})();
