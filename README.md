<!-- Author script -->
<script src='https://dhanjeerider.github.io/Chek/auther.js'></script>

<!-- Icon script -->
<script src='https://dhanjeerider.github.io/Chek/icon.js'></script>

<!-- Link to view author script -->
<a href='https://dhanjeerider.github.io/Chek/auther.js'>View Author Script</a>

<!-- Copy button -->
<button class="copy-button" data-clipboard-text="<script src='https://dhanjeerider.github.io/Chek/auther.js'></script>">
    Copy Script
</button>

<!-- Include Clipboard.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

<script>
    // Initialize Clipboard.js
    var clipboard = new ClipboardJS('.copy-button');

    clipboard.on('success', function(e) {
        console.log('Copied!');
    });

    clipboard.on('error', function(e) {
        console.error('Error copying: ', e);
    });
</script>
