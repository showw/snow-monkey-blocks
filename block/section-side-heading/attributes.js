'use strict';

export default {
	wrapperTagName: {
		type: 'string',
		default: 'div',
	},
	titleTagName: {
		type: 'string',
		default: 'h2',
	},
	title: {
		source: 'html',
		selector: '.smb-section__title',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundColor2: {
		type: 'string',
	},
	backgroundColorAngle: {
		type: 'number',
		default: 0,
	},
	textColor: {
		type: 'string',
	},
	isSlim: {
		type: 'boolean',
		default: false,
	},
	headingColumnSize: {
		type: 'string',
		default: 33,
	},
	topDividerType: {
		type: 'string',
		default: 'tilt',
	},
	topDividerLevel: {
		type: 'number',
		default: 0,
	},
	topDividerColor: {
		type: 'string',
		default: '#fff',
	},
	bottomDividerType: {
		type: 'string',
		default: 'tilt',
	},
	bottomDividerLevel: {
		type: 'number',
		default: 0,
	},
	bottomDividerColor: {
		type: 'string',
		default: '#fff',
	},
};
