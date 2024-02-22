<?php

function theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'avada-stylesheet' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function avada_lang_setup() {
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain( 'Avada', $lang );
}
add_action( 'after_setup_theme', 'avada_lang_setup' );


/* Fix for Modal Conflict */
// modal appears and then closes almost instantly
// https://www.webzando.com/blog/modal-popup-no-longer-works-in-avada-theme/
add_action( 'wp', function() {
	Fusion_Dynamic_JS::deregister_script( 'bootstrap-modal' );
}, 99);