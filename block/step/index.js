'use strict';

import blockConfig from '../../src/js/config/block';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import {
	__,
} from '@wordpress/i18n';

export const name = 'snow-monkey-blocks/step';

export const settings = {
	title: __( 'Step', 'snow-monkey-blocks' ),
	description: __( 'Express the steps in an easy-to-understand manner.', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'editor-ol',
	},
	category: blockConfig.blockCategories.common,
	snowMonkeyBlocks: {
		screenshot: `${ smb.pluginUrl }/dist/img/screenshot/block/step.png`,
	},
	edit,
	save,
	deprecated,
};
