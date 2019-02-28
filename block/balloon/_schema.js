'use strict';

export const schema = {
	avatarID: {
		type: 'number',
		default: 0,
	},
	avatarURL: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
		default: 'https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g',
	},
	avatarBorderColor: {
		type: 'string',
	},
	balloonName: {
		type: 'string',
		default: '',
	},
	balloonBody: {
		source: 'html',
		selector: '.smb-balloon__body',
	},
	modifier: {
		type: 'string',
		default: '',
	},
};
