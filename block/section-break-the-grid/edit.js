'use strict';

import classnames from 'classnames';
import hexToRgba from 'hex-to-rgba';
import Figure from '../../src/js/component/figure';
import { toNumber } from '../../src/js/helper/helper';

import {
	times,
} from 'lodash';

import {
	RichText,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	ColorPalette,
} from '@wordpress/editor';

import {
	PanelBody,
	SelectControl,
	BaseControl,
	Button,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import {
	Fragment,
} from '@wordpress/element';

import {
	__,
	sprintf,
} from '@wordpress/i18n';

export default function( { attributes, setAttributes, isSelected, className } ) {
	const { wrapperTagName, titleTagName, title, imageID, imageURL, imageAlt, textColor, imagePosition, imageSize, verticalAlignment, contentSize, contentHorizontalPosition, contentVerticalPosition, contentBackgroundColor, contentPadding, removeContentOutsidePadding, shadowColor, shadowHorizontalPosition, shadowVerticalPosition } = attributes;

	const wrapperTagNames = [ 'div', 'section', 'aside' ];
	const titleTagNames = [ 'h1', 'h2', 'h3', 'none' ];

	const Wrapper = wrapperTagName;

	const classes = classnames(
		'smb-section',
		'smb-section-break-the-grid',
		`smb-section-break-the-grid--${ imagePosition }`,
		{
			[ `smb-section-break-the-grid--vertical-${ contentVerticalPosition }` ]: contentVerticalPosition && verticalAlignment && 'middle' !== verticalAlignment,
			[ className ]: !! className,
		}
	);

	const rowClasses = classnames(
		'c-row',
		'c-row--margin',
		{
			[ `c-row--lg-${ verticalAlignment }` ]: true,
		}
	);

	const textColumnClasses = classnames( 'c-row__col', 'c-row__col--1-1', 'c-row__col--lg-1-2' );
	const imageColumnClasses = classnames( 'c-row__col', 'c-row__col--1-1', 'c-row__col--lg-1-2' );

	const figureClasses = classnames(
		'smb-section-break-the-grid__figure',
		{
			[ `smb-section-break-the-grid__figure--w-${ imageSize }` ]: !! imageSize,
		}
	);

	const contentClasses = classnames(
		'smb-section-break-the-grid__content',
		{
			[ `smb-section-break-the-grid__content--w-${ contentSize }` ]: !! contentSize,
			[ `smb-section-break-the-grid__content--p-${ contentPadding }` ]: !! contentPadding,
			[ `smb-section-break-the-grid__content--horizontal-${ contentHorizontalPosition }` ]: !! contentHorizontalPosition,
			'smb-section-break-the-grid__content--remove-outside-p': contentPadding && removeContentOutsidePadding,
		}
	);

	const shadowClasses = classnames( 'smb-section-break-the-grid__shadow' );

	const sectionStyles = {
		color: textColor || undefined,
	};

	const shadowStyles = {};
	if ( shadowColor ) {
		shadowStyles.backgroundColor = shadowColor;
	}
	if ( shadowHorizontalPosition || shadowVerticalPosition ) {
		shadowStyles.transform = `translate(${ shadowHorizontalPosition || 0 }%, ${ shadowVerticalPosition || 0 }%)`;
	}

	const contentStyles = {
		backgroundColor: contentBackgroundColor && hexToRgba( contentBackgroundColor, 0.98 ),
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Block Settings', 'snow-monkey-blocks' ) }>
					<BaseControl label={ __( 'Wrapper Tag', 'snow-monkey-blocks' ) }>
						<div className="smb-list-icon-selector">
							{ times( wrapperTagNames.length, ( index ) => {
								return (
									<Button
										isDefault
										isPrimary={ wrapperTagName === wrapperTagNames[ index ] }
										onClick={ () => setAttributes( { wrapperTagName: wrapperTagNames[ index ] } ) }
									>
										{ wrapperTagNames[ index ] }
									</Button>
								);
							} ) }
						</div>
					</BaseControl>

					<BaseControl label={ __( 'Title Tag', 'snow-monkey-blocks' ) }>
						<div className="smb-list-icon-selector">
							{ times( titleTagNames.length, ( index ) => {
								return (
									<Button
										isDefault
										isPrimary={ titleTagName === titleTagNames[ index ] }
										onClick={ () => setAttributes( { titleTagName: titleTagNames[ index ] } ) }
									>
										{ titleTagNames[ index ] }
									</Button>
								);
							} ) }
						</div>
					</BaseControl>

					<SelectControl
						label={ __( 'Image position', 'snow-monkey-blocks' ) }
						value={ imagePosition }
						options={ [
							{
								value: 'left',
								label: __( 'Left side', 'snow-monkey-blocks' ),
							},
							{
								value: 'right',
								label: __( 'Right side', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { imagePosition: value } ) }
					/>

					<SelectControl
						label={ __( 'image Size Adjustment', 'snow-monkey-blocks' ) }
						value={ imageSize }
						options={ [
							{
								value: 'm',
								label: __( '+-0%', 'snow-monkey-blocks' ),
							},
							{
								value: 'l',
								label: __( '+40%', 'snow-monkey-blocks' ),
							},
							{
								value: 'xl',
								label: __( '+80%', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { imageSize: value } ) }
					/>

					<SelectControl
						label={ __( 'Vertical Alignment', 'snow-monkey-blocks' ) }
						value={ verticalAlignment }
						options={ [
							{
								value: 'top',
								label: __( 'Top', 'snow-monkey-blocks' ),
							},
							{
								value: 'middle',
								label: __( 'Middle', 'snow-monkey-blocks' ),
							},
							{
								value: 'bottom',
								label: __( 'Bottom', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { verticalAlignment: value } ) }
					/>

				</PanelBody>

				<PanelBody title={ __( 'Contents Settings', 'snow-monkey-blocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Content Size Adjustment', 'snow-monkey-blocks' ) }
						value={ contentSize }
						options={ [
							{
								value: 'xs',
								label: __( '-40%', 'snow-monkey-blocks' ),
							},
							{
								value: 's',
								label: __( '-20%', 'snow-monkey-blocks' ),
							},
							{
								value: 'm',
								label: __( '+-0%', 'snow-monkey-blocks' ),
							},
							{
								value: 'l',
								label: __( '+20%', 'snow-monkey-blocks' ),
							},
							{
								value: 'xl',
								label: __( '+40%', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { contentSize: value } ) }
					/>

					<SelectControl
						label={ __( 'Degree of overlap of content to image', 'snow-monkey-blocks' ) }
						value={ contentHorizontalPosition }
						options={ [
							{
								value: '',
								label: __( '+-0%', 'snow-monkey-blocks' ),
							},
							{
								value: 'xs',
								label: __( '5%', 'snow-monkey-blocks' ),
							},
							{
								value: 's',
								label: __( '10%', 'snow-monkey-blocks' ),
							},
							{
								value: 'm',
								label: __( '15%', 'snow-monkey-blocks' ),
							},
							{
								value: 'l',
								label: __( '20%', 'snow-monkey-blocks' ),
							},
							{
								value: 'xl',
								label: __( '25%', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { contentHorizontalPosition: value } ) }
					/>

					{ verticalAlignment && 'middle' !== verticalAlignment &&
						<SelectControl
							label={ __( 'Vertical position of content', 'snow-monkey-blocks' ) }
							value={ contentVerticalPosition }
							options={ [
								{
									value: '',
									label: __( '+-0%', 'snow-monkey-blocks' ),
								},
								{
									value: 'txl',
									label: sprintf( __( 'Move %1$s up', 'snow-monkey-blocks' ), '100px' ),
								},
								{
									value: 'tl',
									label: sprintf( __( 'Move %1$s up', 'snow-monkey-blocks' ), '80px' ),
								},
								{
									value: 'tm',
									label: sprintf( __( 'Move %1$s up', 'snow-monkey-blocks' ), '60px' ),
								},
								{
									value: 'ts',
									label: sprintf( __( 'Move %1$s up', 'snow-monkey-blocks' ), '40px' ),
								},
								{
									value: 'bs',
									label: sprintf( __( 'Move %1$s down', 'snow-monkey-blocks' ), '40px' ),
								},
								{
									value: 'bm',
									label: sprintf( __( 'Move %1$s down', 'snow-monkey-blocks' ), '60px' ),
								},
								{
									value: 'bl',
									label: sprintf( __( 'Move %1$s down', 'snow-monkey-blocks' ), '80px' ),
								},
								{
									value: 'bxl',
									label: sprintf( __( 'Move %1$s down', 'snow-monkey-blocks' ), '100px' ),
								},
							] }
							onChange={ ( value ) => setAttributes( { contentVerticalPosition: value } ) }
						/>
					}

					<BaseControl
						className="editor-color-palette-control"
						label={ __( 'Background Color', 'snow-monkey-blocks' ) }>
						<ColorPalette
							className="editor-color-palette-control__color-palette"
							onChange={ ( value ) => setAttributes( { contentBackgroundColor: value } ) }
							value={ contentBackgroundColor }
						/>
					</BaseControl>

					<SelectControl
						label={ __( 'Content Padding', 'snow-monkey-blocks' ) }
						value={ contentPadding }
						options={ [
							{
								value: '',
								label: __( 'None', 'snow-monkey-blocks' ),
							},
							{
								value: 's',
								label: __( 'S', 'snow-monkey-blocks' ),
							},
							{
								value: 'm',
								label: __( 'M', 'snow-monkey-blocks' ),
							},
							{
								value: 'l',
								label: __( 'L', 'snow-monkey-blocks' ),
							},
						] }
						onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
					/>

					{ contentPadding &&
						<ToggleControl
							label={ __( 'Remove Outside Padding', 'snow-monkey-blocks' ) }
							checked={ removeContentOutsidePadding }
							onChange={ ( value ) => setAttributes( { removeContentOutsidePadding: value } ) }
						/>
					}
				</PanelBody>

				<PanelBody title={ __( 'Shadow Settings', 'snow-monkey-blocks' ) } initialOpen={ false }>
					<BaseControl
						className="editor-color-palette-control"
						label={ __( 'Color', 'snow-monkey-blocks' ) }>
						<ColorPalette
							className="editor-color-palette-control__color-palette"
							onChange={ ( value ) => setAttributes( { shadowColor: value } ) }
							value={ shadowColor }
						/>
					</BaseControl>

					{ shadowColor &&
						<RangeControl
							label={ __( 'Horizontal Position', 'snow-monkey-blocks' ) }
							value={ shadowHorizontalPosition }
							onChange={ ( value ) => setAttributes( { shadowHorizontalPosition: toNumber( value, -120, 120 ) } ) }
							min="-120"
							max="120"
						/>
					}

					{ shadowColor &&
						<RangeControl
							label={ __( 'Vertical Position', 'snow-monkey-blocks' ) }
							value={ shadowVerticalPosition }
							onChange={ ( value ) => setAttributes( { shadowVerticalPosition: toNumber( value, -120, 120 ) } ) }
							min="-120"
							max="120"
						/>
					}
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'snow-monkey-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: textColor,
							onChange: ( value ) => setAttributes( { textColor: value } ),
							label: __( 'Text Color', 'snow-monkey-blocks' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>

			<Wrapper className={ classes } style={ sectionStyles }>
				<div className="c-container">
					<div className={ rowClasses }>
						<div className={ textColumnClasses }>
							<div className={ contentClasses } style={ contentStyles }>
								{ ( ! RichText.isEmpty( title ) || isSelected ) && 'none' !== titleTagName &&
									<RichText
										className="smb-section__title smb-section-break-the-grid__title"
										tagName={ titleTagName }
										value={ title }
										onChange={ ( value ) => setAttributes( { title: value } ) }
										formattingControls={ [] }
										placeholder={ __( 'Write title...', 'snow-monkey-blocks' ) }
									/>
								}

								<div className="smb-section__body smb-section-break-the-grid__body">
									<InnerBlocks />
								</div>
							</div>
						</div>
						<div className={ imageColumnClasses }>
							<div className={ figureClasses }>
								{ shadowColor &&
									<div className={ shadowClasses } style={ shadowStyles } />
								}
								<Figure
									src={ imageURL }
									id={ imageID }
									alt={ imageAlt }
									selectHandler={ ( media ) => {
										const newImageURL = !! media.sizes && !! media.sizes.xlarge ? media.sizes.large.url : media.url;
										setAttributes( { imageURL: newImageURL, imageID: media.id, imageAlt: media.alt } );
									} }
									removeHandler={ () => setAttributes( { imageURL: '', imageAlt: '', imageID: 0 } ) }
									isSelected={ isSelected }
								/>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</Fragment>
	);
}
