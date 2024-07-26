document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright, .footer-wrapper, .post-body");
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `
      <a class="btc" href="https://www.dktechnozone.in/">This Website Design By Dk Technozone</a>
      <style>
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
          bottom: 10%;
        }
      </style>
      <script>
        // Function to shuffle an array randomly
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }

        // Function to refresh the page at a fixed interval
        function refreshPage() {
          var refreshInterval = 200000;
          setInterval(function () {
            location.reload();
          }, refreshInterval);
        }

        // CHANGE LINKS WITH YOUR ADSTERA DIRECT LINK
        function executeLoop() {
          var links = [
            'https://exceedunited.com/nnszc5hpvg?key=0f6c62487080b962c49ba0e7006ac10a',
            'https://exceedunited.com/gg9rbjekn?key=33da1ad62c46a4d4fba17fc5fc1550a4',
            'https://exceedunited.com/nnszc5hpvg?key=0f6c62487080b962c49ba0e7006ac10a',
            'https://exceedunited.com/rpri0fci5?key=f3a5ace88b9fac83ee39f030744f1057'
          ];

          // Shuffle the array randomly
          shuffleArray(links);
          var currentIndex = 0;

          function openLink() {
            var link = links[currentIndex];
            // Display the link in the modal
            openModalWithLink(link);

            var interval = Math.floor(Math.random() * (30000 - 20000 + 1) + 20000);
            // Close the modal after the specified interval
            setTimeout(function () {
              closeModal();
              // Move to the next link
              currentIndex = (currentIndex + 1) % links.length;
              // Call openLink again with the updated index
              openLink();
            }, interval);
          }

          // Initial execution
          openLink();
        }

        // Function to open the modal with a given link
        function openModalWithLink(link) {
          document.getElementById('modalIframe').src = link;
          // Explicitly load the iframe after setting the source
          document.getElementById('modalIframe').onload = function () {
            document.getElementById('myModal').style.display = 'block';
          };
        }

        // Function to close the modal
        function closeModal() {
          document.getElementById('myModal').style.display = 'none';
        }

        // Initial execution
        window.onload = function () {
          refreshPage(); // Start the page refresh
          executeLoop(); // Start the link loop
        };
      </script>
      <!-- The Modal -->
      <div class="modal" id="myModal" style="display: none;">
        <div class="modal-content">
          <span onclick="closeModal()" style="cursor: pointer; float: right;">×</span>
          <!-- Content of the modal -->
          <iframe loading="lazy" id="modalIframe" src="" style="border: none; height: 100vh; width: 100%;"></iframe>
        </div>
      </div>`;
    Folt.append(Newel);
    console.log("theme by dktechnozone.in");

    var lazyanalisis = false;
    window.addEventListener("scroll", function () {
      if ((document.documentElement.scrollTop !== 0 && !lazyanalisis) || (document.body.scrollTop !== 0 && !lazyanalisis)) {
        (function () {
          var e = document.createElement("script");
          e.type = "text/javascript";
          e.async = true;
          e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(e, a);
        })();
        lazyanalisis = true;
      }
    }, true);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-2VYRMPXK0F');
  }
});

var allowedURLs = [
  "https://dkhek.blogspot.com",
  "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/auther%20.html",
  "https://www.desiremovies.store"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
  if (window.location.href.startsWith(allowedURLs[i])) {
    foundMatch = true;
    break;
  }
}

if (foundMatch) {
  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = function () {
      if (callback) callback();
    };
    document.head.appendChild(script);
  }
  loadScript('https://exceedunited.com/2d/9f/1a/2d9f1a9907b9c95b10ad5f0e1e048d46.js', function () {
    console.log('Script loaded!');
  });
} else {
  console.log('script is not working');
}
