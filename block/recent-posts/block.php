<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */

use Snow_Monkey\Plugin\Blocks\App\DynamicBlocks;

register_block_type(
	'snow-monkey-blocks/recent-posts',
	[
		'attributes' => [
			'postType' => [
				'type'    => 'string',
				'default' => 'post',
			],
			'postsPerPage' => [
				'type'    => 'number',
				'default' => 6,
			],
			'layout' => [
				'type'    => 'string',
				'default' => 'rich-media',
			],
			'ignoreStickyPosts' => [
				'type'    => 'boolean',
				'default' => true,
			],
			'className' => [
				'type'    => 'string',
				'default' => '',
			],
			'myAnchor' => [
				'type'    => 'string',
				'default' => '',
			],
		],
		'render_callback' => function( $attributes ) {
			return DynamicBlocks::render( 'recent-posts', $attributes );
		},
		'supports' => [
			'anchor' => false,
		],
	]
);
