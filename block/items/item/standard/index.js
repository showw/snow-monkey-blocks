'use strict';

import blockConfig from '../../../../src/js/config/block';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import transforms from './transforms';

import {
	__,
} from '@wordpress/i18n';

export const name = 'snow-monkey-blocks/items--item--standard';

export const settings = {
	title: __( 'Items (Standard)', 'snow-monkey-blocks' ),
	description: __( 'It is a child block of the items block.', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'screenoptions',
	},
	category: blockConfig.blockCategories.common,
	parent: [ 'snow-monkey-blocks/items' ],
	attributes,
	edit,
	save,
	transforms,
};
