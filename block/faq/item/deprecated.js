'use strict';

import classnames from 'classnames';
import blockAttributes from './attributes';

import {
	merge,
	omit,
	times,
} from 'lodash';

import {
	RichText,
} from '@wordpress/editor';

import {
	createBlock,
} from '@wordpress/blocks';

export default [
	{
		attributes: merge(
			blockAttributes,
			{
				answer: {
					source: 'html',
					selector: '.smb-faq__item__answer__body',
				},
			},
		),

		migrate( attributes ) {
			const migratedInnerBlocks = () => {
				let answer = attributes.answer;
				if ( answer.match( '</p><p>' ) ) {
					answer = answer.split( '</p><p>' );
				} else {
					answer = answer.split();
				}

				return times( answer.length, ( index ) => {
					const content = answer[ index ].replace( '<p>', '' ).replace( '</p>', '' );

					return createBlock( 'core/paragraph', {
						content: content,
					} );
				} );
			};

			return [
				omit( attributes, 'answer' ),
				migratedInnerBlocks(),
			];
		},

		save( { attributes, className } ) {
			const { question, answer, questionColor, answerColor, questionLabel, answerLabel } = attributes;

			const classes = classnames( 'smb-faq__item', className );

			const faqItemQestionLabelStyles = {
				color: questionColor || undefined,
			};

			const faqItemAnswerLabelStyles = {
				color: answerColor || undefined,
			};

			return (
				<div className={ classes }>
					<div className="smb-faq__item__question">
						<div className="smb-faq__item__question__label" style={ faqItemQestionLabelStyles }>
							{ questionLabel }
						</div>
						<div className="smb-faq__item__question__body">
							<RichText.Content value={ question } />
						</div>
					</div>

					<div className="smb-faq__item__answer">
						<div className="smb-faq__item__answer__label" style={ faqItemAnswerLabelStyles }>
							{ answerLabel }
						</div>
						<div className="smb-faq__item__answer__body">
							<RichText.Content value={ answer } />
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: merge(
			blockAttributes,
			{
				answer: {
					source: 'html',
					selector: '.smb-faq__item__answer__body',
				},
			},
		),

		save( { attributes } ) {
			const { question, answer, questionColor, answerColor } = attributes;

			return (
				<div className="smb-faq__item">
					<div className="smb-faq__item__question">
						<div className="smb-faq__item__question__label" style={ { color: questionColor } }>
							Q
						</div>
						<div className="smb-faq__item__question__body">
							<RichText.Content value={ question } />
						</div>
					</div>

					<div className="smb-faq__item__answer">
						<div className="smb-faq__item__answer__label" style={ { color: answerColor } }>
							A
						</div>
						<div className="smb-faq__item__answer__body">
							<RichText.Content value={ answer } />
						</div>
					</div>
				</div>
			);
		},
	},
];
