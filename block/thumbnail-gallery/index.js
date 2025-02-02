'use strict';

import blockConfig from '../../src/js/config/block';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import {
	__,
} from '@wordpress/i18n';

export const name = 'snow-monkey-blocks/thumbnail-gallery';

export const settings = {
	title: __( 'Thumbnail gallery', 'snow-monkey-blocks' ),
	description: __( 'You can display a slide show with thumbnails.', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'format-gallery',
	},
	category: blockConfig.blockCategories.common,
	supports: {
		align: [ 'wide', 'full' ],
	},
	snowMonkeyBlocks: {
		screenshot: `${ smb.pluginUrl }/dist/img/screenshot/block/thumbnail-gallery.png`,
	},
	attributes,
	edit,
	save,
	deprecated,
};
