'use strict';

import classnames from 'classnames';
import { deprecated } from './_deprecated.js';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { __ } = wp.i18n;

registerBlockType( 'snow-monkey-blocks/pricing-table', {
	title: __( 'Pricing table', 'snow-monkey-blocks' ),
	icon: 'warning',
	category: 'smb',

	edit( { className } ) {
		const allowedBlocks = [ 'snow-monkey-blocks/pricing-table--item' ];
		const template = [ [ 'snow-monkey-blocks/pricing-table--item' ] ];

		const classes = classnames( 'smb-pricing-table', className );

		return (
			<div className={ classes }>
				<div className="c-row c-row--md-nowrap" data-columns>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ template }
						templateLock={ false }
					/>
				</div>
			</div>
		);
	},

	save( { className } ) {
		const classes = classnames( 'smb-pricing-table', className );

		return (
			<div className={ classes }>
				<div className="c-row c-row--md-nowrap">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

	deprecated: deprecated,
} );
