'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Home_Chefs',
			[
				{
					user_id: 1,
					name: 'Catch Me Acai',
					image:
						'https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/119472679_955743081570279_7133992288319446444_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=18s4-zmcStEAX9i5DIN&tp=1&oh=2e5a17c33417407e4a06810d384ef2fa&oe=5FE8E5D4',
					street_address: '19680 E Country Club Dr',
					city: 'Aventura',
					zip: '33180',
					phone: '954-455-9788',
				},
				{
					user_id: 3,
					image:
						'https://loremflickr.com/cache/resized/65535_50353193971_299457a8e9_320_240_nofilter.jpg',
					name: 'Island Grill',
					street_address: '446 Langworth Crossroad',
					city: 'Feilstad',
					zip: '26338',
					phone: '852-777-3530',
				},
				{
					user_id: 4,
					image:
						'https://loremflickr.com/cache/resized/2096_1693875951_d0702d5e98_320_240_nofilter.jpg',
					name: 'Flavoroso',
					street_address: '786 Blanda Pine',
					city: 'South Jalon',
					zip: '30926',
					phone: '825-703-2038',
				},
				{
					user_id: 5,
					image:
						'https://loremflickr.com/cache/resized/65535_50278741796_85129c643a_320_240_nofilter.jpg',
					name: 'Green Curry',
					street_address: '32803 Fadel Roads',
					city: 'Gutmannshire',
					zip: '08829',
					phone: '680-430-9762',
				},
				{
					user_id: 6,
					image:
						'https://loremflickr.com/cache/resized/65535_50585716688_4e2ed01bab_320_240_nofilter.jpg',
					name: 'El Pirata Porch',
					street_address: '6828 Joaquin Villages',
					city: 'Port Albertaside',
					zip: '50744',
					phone: '971-487-3266',
				},
				{
					user_id: 7,
					image:
						'https://loremflickr.com/cache/resized/2090_2271495210_eaf995a3ef_320_240_nofilter.jpg',
					name: 'Sweet Escape',
					street_address: '048 Stroman Crossing',
					city: 'New Miltonshire',
					zip: '26142',
					phone: '906-605-3836',
				},
				{
					user_id: 8,
					image:
						'https://loremflickr.com/cache/resized/2355_2103523972_b82a60c918_320_240_nofilter.jpg',
					name: 'Salty Squid',
					street_address: '11546 Schulist Locks',
					city: 'Port Holden',
					zip: '25752',
					phone: '431-703-8097',
				},
				{
					user_id: 9,
					image:
						'https://loremflickr.com/cache/resized/65535_50428484167_a32682b811_320_240_nofilter.jpg',
					name: 'Bangalore Spices',
					street_address: '36881 Wyman Grove',
					city: 'West Kurttown',
					zip: '22765',
					phone: '519-350-4262',
				},
				{
					user_id: 10,
					image:
						'https://loremflickr.com/cache/resized/65535_50546490912_a5fc6b2fac_320_240_nofilter.jpg',
					name: 'Pancake World',
					street_address: '8044 Collier Creek',
					city: 'Port Muriel',
					zip: '06872',
					phone: '706-519-9988',
				},
				{
					user_id: 11,
					image:
						'https://loremflickr.com/cache/resized/65535_50379068626_9860056076_320_240_nofilter.jpg',
					name: 'Veganic Corner',
					street_address: '8817 Burley Corner',
					city: 'Genevievehaven',
					zip: '40901',
					phone: '588-432-6490',
				},
				{
					user_id: 12,
					image:
						'https://loremflickr.com/cache/resized/65535_50266933712_a8edeae5c5_n_320_240_nofilter.jpg',
					name: 'Masala',
					street_address: '850 Pouros Walks',
					city: 'Lavadafort',
					zip: '63682',
					phone: '289-658-9761',
				},
				{
					user_id: 13,
					image:
						'https://loremflickr.com/cache/resized/65535_50234425136_e722940937_320_240_nofilter.jpg',
					name: 'Grassfed Grill',
					street_address: '8037 Sabrina Ridge',
					city: 'South Dagmar',
					zip: '62206',
					phone: '515-732-0755',
				},
				{
					user_id: 14,
					image:
						'https://loremflickr.com/cache/resized/65535_50381848578_58a2faa714_320_240_nofilter.jpg',
					name: 'Greenanic Smoothies',
					street_address: '25315 Schumm Glen',
					city: 'Oceanetown',
					zip: '51219',
					phone: '416-344-7862',
				},
				{
					user_id: 15,
					image:
						'https://loremflickr.com/cache/resized/65535_50223223152_92ae5ff77b_320_240_nofilter.jpg',
					name: 'Freddy’s Stove',
					street_address: '97719 Imogene Estate',
					city: 'East Kristianport',
					zip: '08829',
					phone: '366-551-3776',
				},
				{
					user_id: 16,
					image:
						'https://loremflickr.com/cache/resized/65535_50262214971_57609c0689_n_320_240_nofilter.jpg',
					name: 'Grandma’s Sweets',
					street_address: '022 Maia Bridge',
					city: 'New Ritaside',
					zip: '97025',
					phone: '335-963-0305',
				},
				{
					user_id: 17,
					image:
						'https://loremflickr.com/cache/resized/65535_50381848578_58a2faa714_320_240_nofilter.jpg',
					name: 'Spicella Spanish Kitchen',
					street_address: '804 Medhurst Mill',
					city: 'East Hazelchester',
					zip: '58516',
					phone: '788-283-9724',
				},
				{
					user_id: 18,
					image:
						'https://loremflickr.com/cache/resized/65535_50333366396_d251c64325_320_240_nofilter.jpg',
					name: 'Xin Chao Vietnamese Restaurant',
					street_address: '6504 Peyton Ferry',
					city: 'Port Hayley',
					zip: '73120',
					phone: '642-958-1218',
				},
				{
					user_id: 19,
					image:
						'https://loremflickr.com/cache/resized/65535_50326974501_9e8cc3263e_320_240_nofilter.jpg',
					name: 'Paterro’s Kitchen',
					street_address: '73802 Runolfsdottir Rapid',
					city: 'West Rodgerfurt',
					zip: '24088',
					phone: '564-472-3873',
				},
				{
					user_id: 20,
					image:
						'https://loremflickr.com/cache/resized/65535_50310139988_791d877e17_320_240_nofilter.jpg',
					name: 'Mediterra Seafood',
					street_address: '29428 Littel Fall',
					city: 'Shaniamouth',
					zip: '27129',
					phone: '925-437-1715',
				},
				{
					user_id: 21,
					image:
						'https://loremflickr.com/cache/resized/65535_50260363867_48b59f38d0_320_240_nofilter.jpg',
					name: 'Street Deli',
					street_address: '598 Medhurst Parkway',
					city: 'East Jamelfort',
					zip: '26746',
					phone: '911-540-3951',
				},
				{
					user_id: 22,
					image:
						'https://loremflickr.com/cache/resized/1669_25721232183_0587e4b056_320_240_nofilter.jpg',
					name: 'Whispering Bamboo',
					street_address: '2014 Juliana Mount',
					city: 'South Thad',
					zip: '84362',
					phone: '672-659-5598',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Home_Chefs', null, {});
	},
};
