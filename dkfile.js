(function() {
    var currentHour = new Date().getHours();

    // Check if current time is between 6 PM (18) and 4 AM (4)
    if (currentHour >= 3 || currentHour < 4) {
        var s = document.createElement('script');
        s.src = 'https://acscdn.com/script/aclib.js';
        s.setAttribute('data-zone', '9832014');

        function appendScript() {
            var target = document.body || document.documentElement;
            target.appendChild(s);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', appendScript);
        } else {
            appendScript();
        }
    }
})();
 aclib.runPop({
        zoneId: '9832014',
    });
