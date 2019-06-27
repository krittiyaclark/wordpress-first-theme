<?php

// override child theme
if(!function_exists('_themename_posts_meta')) {
    function _themename_posts_meta() {
        /*  translator:: %s Post Date */
        printf(
            esc_html__( 'Posted on %s', '_themename'),
            '<a href="' . esc_url(get_permalink( )) . '"><time datetime="' . esc_attr(get_the_date('c')) . '">' . get_the_date() . '</time></a>'
        );
        /* translator: %s: Post Author*/
        printf(
            esc_html__(' By %s', '_themename'),
            '<a href="' . esc_url(get_author_posts_url( get_the_author_meta( 'ID' ) )) . '">' . esc_html(get_the_author( )) . 
            '</a>'
        );
    }
}
function _themename_readmore_link() {
    echo '<a href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';
    /* tranlators: %s: Post Title */
    printf(
        wp_kses(
            __( 'Read More <span class="u-screen-reader-text">About %s</span>', '_themename' ),
            [
                    'span' => [
                        'class' => []
                    ]
            ]
        ),
        get_the_title()
    );
    echo '</a>';
}

?>