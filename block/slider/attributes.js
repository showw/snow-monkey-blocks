'use strict';

export default {
	slidesToShow: {
		type: 'number',
		default: 1,
	},
	slidesToScroll: {
		type: 'number',
		default: 1,
	},
	mdSlidesToShow: {
		type: 'number',
		default: 1,
	},
	mdSlidesToScroll: {
		type: 'number',
		default: 1,
	},
	smSlidesToShow: {
		type: 'number',
		default: 1,
	},
	smSlidesToScroll: {
		type: 'number',
		default: 1,
	},
	dots: {
		type: 'boolean',
		default: false,
	},
	arrows: {
		type: 'boolean',
		default: true,
	},
	speed: {
		type: 'number',
		default: 300,
	},
	autoplay: {
		type: 'boolean',
		default: false,
	},
	autoplaySpeed: {
		type: 'number',
		default: 0,
	},
	fade: {
		type: 'boolean',
		default: false,
	},
	rtl: {
		type: 'boolean',
		default: false,
	},
};
