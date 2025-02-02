'use strict';

import classnames from 'classnames';

import {
	RichText,
	InnerBlocks,
} from '@wordpress/editor';

export default function( { attributes, className } ) {
	const { wrapperTagName, titleTagName, title, imageID, imageURL, imageAlt, height, contentsAlignment, maskColor, maskColor2, maskColorAngle, maskOpacity, textColor, parallax, isSlim } = attributes;

	const Wrapper = wrapperTagName;

	const classes = classnames(
		'smb-section',
		'smb-section-with-bgimage',
		`smb-section-with-bgimage--${ contentsAlignment }`,
		`smb-section-with-bgimage--${ height }`,
		className,
		{
			'js-bg-parallax': !! parallax,
		}
	);

	const bgimageClasses = classnames(
		'smb-section-with-bgimage__bgimage',
		{
			'js-bg-parallax__bgimage': !! parallax,
		}
	);

	const containerClasses = classnames(
		'c-container',
		{
			'u-slim-width': !! isSlim,
		}
	);

	const sectionStyles = {
		color: textColor || undefined,
	};

	const maskStyles = {};
	if ( maskColor ) {
		maskStyles.backgroundColor = maskColor;
		if ( maskColor2 ) {
			maskStyles.backgroundImage = `linear-gradient(${ maskColorAngle }deg, ${ maskColor } 0%, ${ maskColor2 } 100%)`;
		}
	}

	const bgimageStyles = {
		opacity: maskOpacity,
	};

	return (
		<Wrapper className={ classes } style={ sectionStyles }>
			<div className="smb-section-with-bgimage__mask" style={ maskStyles } />
			{ imageURL &&
				<div className={ bgimageClasses } style={ bgimageStyles }>
					<img src={ imageURL } alt={ imageAlt } className={ `wp-image-${ imageID }` } />
				</div>
			}
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
		</Wrapper>
	);
}
