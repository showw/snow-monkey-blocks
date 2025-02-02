<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */
?>

<!-- wp:snow-monkey-blocks/section-with-bgimage {"imageID":1,"height":"wide","contentsAlignment":"center","maskColor":"#000000","maskOpacity":0.6,"align":"full"} -->
<div class="wp-block-snow-monkey-blocks-section-with-bgimage alignfull smb-section smb-section-with-bgimage smb-section-with-bgimage--center smb-section-with-bgimage--wide" style="color:#fff">
	<div class="smb-section-with-bgimage__mask" style="background-color:#000000"></div>
	<div class="smb-section-with-bgimage__bgimage" style="opacity:0.6">
		<img src="<?php echo esc_url( SNOW_MONKEY_BLOCKS_DIR_URL ); ?>/dist/img/photos/people-walking-towards-eiffel-tower-at-night.jpg" alt="" class="wp-image-1"/>
	</div>
	<div class="c-container">
		<h2 class="smb-section__title">Lorem ipsum dolor sit amet</h2>
		<div class="smb-section__body">
			<!-- wp:snow-monkey-blocks/container {"isSlim":true} -->
			<div class="wp-block-snow-monkey-blocks-container smb-container c-container">
				<div class="smb-container__body u-slim-width">
					<!-- wp:paragraph {"align":"left"} -->
					<p style="text-align:left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<!-- /wp:paragraph -->
				</div>
			</div>
			<!-- /wp:snow-monkey-blocks/container -->
		</div>
	</div>
</div>
<!-- /wp:snow-monkey-blocks/section-with-bgimage -->
