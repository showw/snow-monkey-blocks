'use strict';

import blockConfig from '../../src/js/config/block';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import {
	__,
} from '@wordpress/i18n';

export const name = 'snow-monkey-blocks/evaluation-star';

export const settings = {
	title: __( 'Evaluation star', 'snow-monkey-blocks' ),
	description: __( 'Evaluate with star icons', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'star-half',
	},
	category: blockConfig.blockCategories.common,
	snowMonkeyBlocks: {
		screenshot: `${ smb.pluginUrl }/dist/img/screenshot/block/evaluation-star.png`,
	},
	attributes,
	edit,
	save,
	deprecated,
};
