'use strict';

import classnames from 'classnames';

import {
	Button,
} from '@wordpress/components';

import {
	RichText,
	MediaUpload,
} from '@wordpress/editor';

import {
	__,
} from '@wordpress/i18n';

export default function( { attributes, setAttributes, isSelected, className } ) {
	const { avatarID, avatarURL, avatarAlt, name, lede, content } = attributes;

	const renderAvatar = ( obj ) => {
		return (
			<Button className="image-button" onClick={ obj.open } style={ { padding: 0 } }>
				<img src={ avatarURL } alt={ avatarAlt } className={ `wp-image-${ avatarID }` } />
			</Button>
		);
	};

	const colClasses = classnames( 'c-row__col', className );

	return (
		<div className={ colClasses }>
			<div className="smb-testimonial__item">
				{ ( !! avatarID || isSelected ) &&
					<div className="smb-testimonial__item__figure">
						<MediaUpload
							onSelect={ ( media ) => {
								const newAvatarURL = !! media.sizes.thumbnail ? media.sizes.thumbnail.url : media.url;
								setAttributes( { avatarURL: newAvatarURL, avatarID: media.id, avatarAlt: media.alt } );
							} }
							type="image"
							value={ avatarID }
							render={ renderAvatar }
						/>
					</div>
				}

				<div className="smb-testimonial__item__body">
					<div className="smb-testimonial__item__content">
						<RichText
							placeholder={ __( 'Write content...', 'snow-monkey-blocks' ) }
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>
					</div>

					<RichText
						className="smb-testimonial__item__name"
						placeholder={ __( 'Write name...', 'snow-monkey-blocks' ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
					/>

					{ ( ! RichText.isEmpty( lede ) || isSelected ) &&
						<RichText
							className="smb-testimonial__item__lede"
							placeholder={ __( 'Write lede...', 'snow-monkey-blocks' ) }
							value={ lede }
							onChange={ ( value ) => setAttributes( { lede: value } ) }
						/>
					}
				</div>
			</div>
		</div>
	);
}
