'use strict';

import classnames from 'classnames';
import { divider } from '../../src/js/helper/helper';
import blockAttributes from './attributes';

import {
	RichText,
	InnerBlocks,
} from '@wordpress/editor';

export default [
	{
		attributes: blockAttributes,

		migrate( attributes ) {
			const isSlim = !! attributes.contentsWidth;
			return { ...attributes, isSlim: isSlim };
		},

		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
		},

		save( { attributes, className } ) {
			const { titleTagName, title, backgroundColor, contentsWidth, topDividerType, topDividerLevel, topDividerColor, bottomDividerType, bottomDividerLevel, bottomDividerColor } = attributes;

			const classes = classnames( 'smb-section', className );

			const topDividerClasses = classnames(
				'smb-section__divider',
				'smb-section__divider--top',
				`smb-section__divider--${ topDividerType }`
			);

			const bottomDividerClasses = classnames(
				'smb-section__divider',
				'smb-section__divider--bottom',
				`smb-section__divider--${ bottomDividerType }`
			);

			const containerClasses = classnames(
				'c-container',
				{
					'u-slim-width': !! contentsWidth,
				}
			);

			const sectionStyles = {
				backgroundColor: backgroundColor || undefined,
			};

			const innerStyles = {
				paddingTop: topDividerLevel,
				paddingBottom: bottomDividerLevel,
			};

			return (
				<div className={ classes } style={ sectionStyles }>
					{ !! topDividerLevel &&
						<div className={ topDividerClasses }>
							{ divider( topDividerType, topDividerLevel, topDividerColor ) }
						</div>
					}

					{ !! bottomDividerLevel &&
						<div className={ bottomDividerClasses }>
							{ divider( bottomDividerType, bottomDividerLevel, bottomDividerColor ) }
						</div>
					}

					<div className="smb-section__inner" style={ innerStyles }>
						<div className={ containerClasses }>
							{ ! RichText.isEmpty( title ) && 'none' !== titleTagName &&
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							}

							<div className="smb-section__body">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: blockAttributes,

		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
		},

		save( { attributes } ) {
			const { title, backgroundColor, contentsWidth, topDividerType, topDividerLevel, topDividerColor, bottomDividerType, bottomDividerLevel, bottomDividerColor } = attributes;

			const _divider = ( type, level, color ) => {
				color = color ? color : '#fff';

				const renderTiltDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - level } L100,100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderCurveDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - level } q50,${ level },100,0 V100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderWaveDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - ( level / 2 ) } q20,${ level / 2 },40,0 t40,0 t40,0 V100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderTriangleDivider = () => {
					return (
						<path
							d={ `m${ ( 100 - level ) / 2 },100 l${ level },0 l${ -1 * level / 2 },${ -1 * level / 2 } z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderPath = () => {
					switch ( type ) {
						case 'tilt':
							return renderTiltDivider();
						case 'curve':
							return renderCurveDivider();
						case 'wave':
							return renderWaveDivider();
						case 'triangle':
							return renderTriangleDivider();
					}
				};

				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
						{ renderPath( type, level, color ) }
					</svg>
				);
			};

			return (
				<div className="smb-section" style={ { backgroundColor: backgroundColor } }>
					{ !! topDividerLevel &&
						<div className={ `smb-section__divider smb-section__divider--top smb-section__divider--${ topDividerType }` }>
							{ _divider( topDividerType, topDividerLevel, topDividerColor ) }
						</div>
					}

					{ !! bottomDividerLevel &&
						<div className={ `smb-section__divider smb-section__divider--bottom smb-section__divider--${ topDividerType }` }>
							{ _divider( bottomDividerType, bottomDividerLevel, bottomDividerColor ) }
						</div>
					}

					<div className={ classnames( 'c-container', { 'u-slim-width': 'slim' === contentsWidth } ) }>
						{ ! RichText.isEmpty( title ) &&
							<h2 className="smb-section__title">
								<RichText.Content value={ title } />
							</h2>
						}

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: blockAttributes,

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes } ) {
			const { title, backgroundColor, contentsWidth, topDividerType, topDividerLevel, topDividerColor, bottomDividerType, bottomDividerLevel, bottomDividerColor } = attributes;

			const _divider = ( type, level, color ) => {
				color = color ? color : '#fff';

				const renderTiltDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - level } L100,100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderCurveDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - level } q50,${ level },100,0 V100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderWaveDivider = () => {
					return (
						<path
							d={ `m0,${ 100 - ( level / 2 ) } q20,${ level / 2 },40,0 t40,0 t40,0 V100 L0,100 z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderTriangleDivider = () => {
					return (
						<path
							d={ `m${ ( 100 - level ) / 2 },100 l${ level },0 l${ -1 * level / 2 },${ -1 * level / 2 } z` }
							strokeWidth="0"
							fill={ color }
						/>
					);
				};

				const renderPath = () => {
					switch ( type ) {
						case 'tilt':
							return renderTiltDivider();
						case 'curve':
							return renderCurveDivider();
						case 'wave':
							return renderWaveDivider();
						case 'triangle':
							return renderTriangleDivider();
					}
				};

				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
						{ renderPath( type, level, color ) }
					</svg>
				);
			};

			return (
				<div className="smb-section" style={ { backgroundColor: backgroundColor } }>
					{ !! topDividerLevel &&
						<div className="smb-section__divider smb-section__divider--top">
							{ _divider( topDividerType, topDividerLevel, topDividerColor ) }
						</div>
					}

					{ !! bottomDividerLevel &&
						<div className="smb-section__divider smb-section__divider--bottom">
							{ _divider( bottomDividerType, bottomDividerLevel, bottomDividerColor ) }
						</div>
					}

					<div className={ classnames( 'c-container', { 'u-slim-width': 'slim' === contentsWidth } ) }>
						{ ! RichText.isEmpty( title ) &&
							<h2 className="smb-section__title">
								<RichText.Content value={ title } />
							</h2>
						}

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
];
