'use strict';

import {
	PanelBody,
	CheckboxControl,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	InnerBlocks,
} from '@wordpress/editor';

import {
	Fragment,
} from '@wordpress/element';

import {
	__,
} from '@wordpress/i18n';

import classnames from 'classnames';

export default function( { attributes, setAttributes, className } ) {
	const { title, initialState } = attributes;

	const classes = classnames( 'smb-accordion__item', className );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'snow-monkey-blocks' ) }>
					<CheckboxControl
						label={ __( 'Display in open state', 'snow-monkey-blocks' ) }
						checked={ initialState }
						onChange={ ( value ) => setAttributes( { initialState: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ classes }>
				<div className="smb-accordion__item__title">
					<div className="smb-accordion__item__title__label">
						<RichText
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'Enter title here', 'snow-monkey-blocks' ) }
						/>
					</div>
					<div className="smb-accordion__item__title__icon">
						<i className="fas fa-angle-down"></i>
					</div>
				</div>
				<div className="smb-accordion__item__body">
					<InnerBlocks />
				</div>
			</div>
		</Fragment>
	);
}
