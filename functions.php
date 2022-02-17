<?php

function my_theme_enqueue_styles() { 
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

	
function my_scripts_method() {
    wp_enqueue_script(
        'main.js',
        get_stylesheet_directory_uri() . '/main.js',
        array( 'jquery' )
    );
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' ); 



function my_scripts_methodadmin() {
    wp_enqueue_script(
        'admin.js',
        get_stylesheet_directory_uri() . '/admin.js',
        array( 'jquery' )
    );
}

add_action( 'admin_enqueue_scripts', 'my_scripts_methodadmin' ); 


function divi_child_theme_setup() {
    if ( ! class_exists('ET_Builder_Module') ) {
        return;
    }
    get_template_part( 'custom-modules/cfwpm' );
    $cfwpm = new Custom_ET_Builder_Module_Filterable_Portfolio();
    remove_shortcode( 'et_pb_filterable_portfolio' );
    add_shortcode( 'et_pb_filterable_portfolio', array($cfwpm, '_shortcode_callback') );
}
add_action( 'wp', 'divi_child_theme_setup', 9999 );



if (function_exists('register_nav_menus')) {
    register_nav_menus(
        array(
            'main' => 'Main Navigation Menu',
            'second' => 'Secondary Navigation Menu'

            )
        );
};











