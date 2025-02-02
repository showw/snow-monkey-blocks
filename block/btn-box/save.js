'use strict';

import classnames from 'classnames';

import {
	RichText,
} from '@wordpress/editor';

export default function( { attributes, className } ) {
	const { lede, note, backgroundColor, btnLabel, btnURL, btnTarget, btnBackgroundColor, btnTextColor, btnSize } = attributes;

	const classes = classnames( 'smb-btn-box', className );

	const btnClasses = classnames(
		'smb-btn',
		{
			[ `smb-btn--${ btnSize }` ]: !! btnSize,
		}
	);

	const btnBoxStyle = {
		backgroundColor: backgroundColor || undefined,
	};

	const btnBoxBtnStyles = {
		backgroundColor: btnBackgroundColor || undefined,
	};
	if ( 'is-style-ghost' === attributes.className ) {
		btnBoxBtnStyles.borderColor = btnBackgroundColor || '#fff';
	}

	return (
		<div className={ classes } style={ btnBoxStyle }>
			<div className="c-container">
				{ ! RichText.isEmpty( lede ) &&
					<div className="smb-btn-box__lede">
						<RichText.Content value={ lede } />
					</div>
				}

				<div className="smb-btn-box__btn-wrapper">
					<a
						className={ btnClasses }
						href={ btnURL }
						style={ btnBoxBtnStyles }
						target={ '_self' === btnTarget ? undefined : btnTarget }
						rel={ '_self' === btnTarget ? undefined : 'noopener noreferrer' }
					>
						<span className="smb-btn__label" style={ { color: btnTextColor } }>
							<RichText.Content value={ btnLabel } />
						</span>
					</a>
				</div>

				{ ! RichText.isEmpty( note ) &&
					<div className="smb-btn-box__note">
						<RichText.Content value={ note } />
					</div>
				}
			</div>
		</div>
	);
}
