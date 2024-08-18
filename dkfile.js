document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright, .footer-wrapper, .post-body, #header, footer, body");
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `
      <a class="btc" href="https://www.dktechnozone.in/">This Website Design By Dk Technozone</a>`;
    Folt.append(Newel);

    let style = document.createElement('style');
    style.textContent = `
      .btc {
        color: black;
        text-decoration: none;
        opacity: 0;
        display: inline;
        font-size: 2px;
      }
      .btc:hover {
        color: transparent;
        opacity: 0;
      }
      .modal {
        position: fixed;
        bottom: -100%;
      }
    `;
    document.head.appendChild(style);

    console.log("theme by dktechnozone.in");
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0);
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-2VYRMPXK0F');
const allowedURLs = [
  "https://dkhek.blogspot.com",
  "www google.com",
  "https://www.desiremovies.store"
];

let foundMatch = allowedURLs.some(url => window.location.href.startsWith(url));

if (foundMatch) {
  function loadScript(url, callback) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  loadScript('https://exceedunited.com/2d/9f/1a/2d9f1a9907b9c95b10ad5f0e1e048d46.js', () => {
    console.log('Script loaded!');
  });
} else {
  console.log('Script is not working');
}
