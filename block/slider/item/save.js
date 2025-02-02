'use strict';

import classnames from 'classnames';

import {
	RichText,
} from '@wordpress/editor';

import {
	Fragment,
} from '@wordpress/element';

export default function( { attributes, className } ) {
	const { imageID, imageURL, imageAlt, caption, url, target } = attributes;

	const classes = classnames( 'smb-slider__item', className );

	const Item = () => {
		return (
			<Fragment>
				<div className="smb-slider__item__figure">
					<img src={ imageURL } alt={ imageAlt } className={ `wp-image-${ imageID }` } />
				</div>

				{ ! RichText.isEmpty( caption ) &&
					<div className="smb-slider__item__caption">
						<RichText.Content value={ caption } />
					</div>
				}
			</Fragment>
		);
	};

	return !! url ? (
		<a
			className={ classes }
			href={ url }
			target={ '_self' === target ? undefined : target }
			rel={ '_self' === target ? undefined : 'noopener noreferrer' }
		>
			<Item />
		</a>
	) : (
		<div className={ classes }>
			<Item />
		</div>
	);
}
