<?php

require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

// Creating Custom Action Hooks
function after_pagination() {
    echo 'PHP';
}

function after_pagination2() {
    echo 'PHP2';
}

add_action( '_themename_after_pagination', 'after_pagination', 2);
add_action( '_themename_after_pagination', 'after_pagination2', 1);
?>