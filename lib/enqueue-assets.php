<?php 
   
   function customtheme_assets() {
       wp_enqueue_style('customtheme-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all' );
   }

   add_action('wp_enqueue_scripts', 'customtheme_assets');

   function customtheme_admin_assets() {
    wp_enqueue_style('customtheme-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all' );
}

add_action('admin_enqueue_scripts', 'customtheme_assets');
