'use strict';

import classnames from 'classnames';
import { getColumnSize, divider } from '../../src/js/helper/helper';

import {
	RichText,
	InnerBlocks,
} from '@wordpress/editor';

export default function( { attributes, className } ) {
	const { wrapperTagName, titleTagName, title, backgroundColor, backgroundColor2, backgroundColorAngle, textColor, headingColumnSize, isSlim, topDividerType, topDividerLevel, topDividerColor, bottomDividerType, bottomDividerLevel, bottomDividerColor } = attributes;

	const { textColumnWidth, imageColumnWidth } = getColumnSize( headingColumnSize );

	const Wrapper = wrapperTagName;

	const classes = classnames( 'smb-section', 'smb-section-side-heading', className );

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
			'u-slim-width': !! isSlim,
		}
	);

	const headingColClasses = classnames( 'c-row__col', 'c-row__col--1-1', `c-row__col--md-${ imageColumnWidth }` );

	const contentColClasses = classnames( 'c-row__col', 'c-row__col--1-1', `c-row__col--md-${ textColumnWidth }` );

	const sectionStyles = {};
	if ( textColor ) {
		sectionStyles.color = textColor;
	}
	if ( backgroundColor ) {
		sectionStyles.backgroundColor = backgroundColor;
		if ( backgroundColor2 ) {
			sectionStyles.backgroundImage = `linear-gradient(${ backgroundColorAngle }deg, ${ backgroundColor } 0%, ${ backgroundColor2 } 100%)`;
		}
	}

	const innerStyles = {
		paddingTop: topDividerLevel,
		paddingBottom: bottomDividerLevel,
	};

	return (
		<Wrapper className={ classes } style={ sectionStyles }>
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
					<div className="c-row c-row--md-margin">
						<div className={ headingColClasses }>
							{ ! RichText.isEmpty( title ) &&
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							}
						</div>
						<div className={ contentColClasses }>
							<div className="smb-section__body">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
