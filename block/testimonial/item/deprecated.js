'use strict';

import blockAttributes from './attributes';

import {
	RichText,
} from '@wordpress/editor';

export default [
	{
		attributes: blockAttributes,

		save( { attributes } ) {
			const { avatarID, avatarURL, name, lede, content } = attributes;

			return (
				<div className="c-row__col">
					<div className="smb-testimonial__item">
						<div className="smb-testimonial__item__figure">
							<img src={ avatarURL } alt="" className={ `wp-image-${ avatarID }` } />
						</div>
						<div className="smb-testimonial__item__body">
							<div className="smb-testimonial__item__content">
								<RichText.Content value={ content } />
							</div>

							<div className="smb-testimonial__item__name">
								<RichText.Content value={ name } />
							</div>

							{ ! RichText.isEmpty( lede ) &&
								<div className="smb-testimonial__item__lede">
									<RichText.Content value={ lede } />
								</div>
							}
						</div>
					</div>
				</div>
			);
		},
	},
];
