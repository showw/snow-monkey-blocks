'use strict';

const { apiFetch } = wp;

import BlockTemplatePanel from './block-template-panel';

import {
	PanelBody,
	Spinner,
} from '@wordpress/components';

import {
	Component,
	Fragment,
} from '@wordpress/element';

export default class BlockTemplateCategories extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			loading: false,
			categories: null,
			resultCategories: null,
		};

		this.getResultCategories = this.getResultCategories.bind( this );
	}

	getCategories() {
		apiFetch( {
			path: '/snow-monkey-blocks/v5/block-template-categories/',
			method: 'GET',
			parse: true,
		} ).then( ( result ) => {
			this.setState( { categories: result } );
		} );
	}

	getResultCategories() {
		if ( null !== this.state.resultCategories ) {
			return;
		}
		if ( this.state.loading === false ) {
			this.setState( { loading: true } );
			this.getCategories();
			return;
		}
		if ( null !== this.state.categories ) {
			const resultCategories = [];
			this.state.categories.map( ( category ) => {
				if ( ! smb.isPro && category.isPro ) {
					return;
				}

				resultCategories.push(
					<PanelBody
						title={ category.title }
					>
						<BlockTemplatePanel
							slug={ category.slug }
						/>
					</PanelBody>
				);
			} );
			this.setState( { resultCategories: resultCategories } );
		}
	}

	render() {
		this.getResultCategories();
		if ( null !== this.state.resultCategories ) {
			return (
				<Fragment>
					{ this.state.resultCategories }
				</Fragment>
			);
		}
		return (
			<div className="smb-menu__template-part__loading">
				<Spinner />
			</div>
		);
	}
}
