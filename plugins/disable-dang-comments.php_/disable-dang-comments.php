<?php

/*
 * Plugin Name: Disable The Dang Comments
 * Plugin URI: 
 * Description: Disables All The Dang Comments
 * Version: 0.0.1
 * Author: Randy Kilwag, marginally
 * Author 
 * License: 
 * Text Domain: 
 * Min WP Version: 2.5.0
 * Max WP Version:
 */

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function disable__the_dang_comments ( $open, $post_id = null) {
    return false;
}
add_filter( 'comments_open', 'disable__the_dang_comments', 10 , 2 );