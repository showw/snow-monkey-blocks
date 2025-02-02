'use strict';

import classnames from 'classnames';
import blockAttributes from './attributes';

import {
	RichText,
} from '@wordpress/editor';

export default [
	{
		attributes: blockAttributes,

		save( { attributes } ) {
			const { avatarID, avatarURL, avatarBorderColor, balloonName, balloonBody, modifier } = attributes;

			return (
				<div className={ classnames( 'smb-balloon', { [ `smb-balloon--${ modifier }` ]: !! modifier } ) }>
					<div className="smb-balloon__person">
						<div
							className="smb-balloon__figure"
							style={ { borderColor: avatarBorderColor } }
						>
							<img src={ avatarURL } alt="" className={ `wp-image-${ avatarID }` } />
						</div>
						<div className="smb-balloon__name">
							{ balloonName }
						</div>
					</div>
					<div className="smb-balloon__body">
						<RichText.Content value={ balloonBody } />
					</div>
				</div>
			);
		},
	},
	{
		attributes: blockAttributes,

		save( { attributes } ) {
			const { avatarURL, avatarBorderColor, balloonName, balloonBody, modifier } = attributes;

			return (
				<div className={ classnames( 'smb-balloon', { [ `smb-balloon--${ modifier }` ]: !! modifier } ) }>
					<div className="smb-balloon__person">
						<div
							className="smb-balloon__figure"
							style={ { borderColor: avatarBorderColor } }
						>
							<img src={ avatarURL } alt="" />
						</div>
						<div className="smb-balloon__name">
							{ balloonName }
						</div>
					</div>
					<div className="smb-balloon__body">
						<RichText.Content value={ balloonBody } />
					</div>
				</div>
			);
		},
	},
];
