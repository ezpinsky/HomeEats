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
					description:
						'Catch Me Acai will cater all your celebrations, conferences, and everything in between in the South Florida Area! From our jaw-dropping charcuterie and cheese boards to our delectable dessert spreads and more, you will have plenty of options to choose from to elevate your event and impress your guests. Catch me acai also offers dine-in options on select dates. Please call for more info.',
					street_address: '19680 E Country Club Dr',
					city: 'Aventura',
					zip: '33180',
					phone: '954-455-9788',
				},
				{
					user_id: 2,
					image:
						'https://loremflickr.com/cache/resized/65535_50427622663_d99dfcc06e_n_320_240_nofilter.jpg',
					name: 'Island Grill',
					description:
						'Praesentium ipsum voluptates explicabo sed excepturi qui rem saepe aut. Illo ipsa alias aliquid illum vero sunt voluptatibus. Eius fuga dolores sapiente rerum et quisquam rerum et asperiores.',
					street_address: '79294 Flossie Locks',
					city: 'West Elbert',
					zip: '91422',
					phone: '365-497-7273',
				},
				{
					user_id: 3,
					image:
						'https://loremflickr.com/cache/resized/65535_50462847813_e0ba25444e_320_240_nofilter.jpg',
					name: 'Flavoroso',
					description:
						'Exercitationem qui et ipsum et sunt inventore. Mollitia mollitia nihil omnis perspiciatis ut consequatur. Ratione et et sunt quas deleniti non cum.',
					street_address: '1373 Bertrand Mountain',
					city: 'West Damon',
					zip: '54385',
					phone: '347-418-2055',
				},
				{
					user_id: 4,
					image:
						'https://loremflickr.com/cache/resized/65535_50570062337_5aac1d7660_320_240_nofilter.jpg',
					name: 'Green Curry',
					description:
						'Repellendus et veniam delectus quidem amet ipsam nihil. Dolorem qui dolore. Dolor rerum labore et quia qui dolor ut at natus.',
					street_address: '3838 Vanessa Glen',
					city: 'North Rodger',
					zip: '28856',
					phone: '315-960-9859',
				},
				{
					user_id: 5,
					image:
						'https://loremflickr.com/cache/resized/65535_50266219666_956b82a5a7_320_240_nofilter.jpg',
					name: 'El Pirata Porch',
					description:
						'Et optio consequuntur alias sit quas atque. Quis dolor quis et ut qui. Porro voluptatem accusamus tempora temporibus mollitia voluptatum magnam in. Quod quae et et qui voluptas et earum sequi labore.',
					street_address: '518 Vladimir Throughway',
					city: 'East Amanimouth',
					zip: '14354',
					phone: '268-824-5155',
				},
				{
					user_id: 6,
					image:
						'https://loremflickr.com/cache/resized/2355_2103523972_b82a60c918_320_240_nofilter.jpg',
					name: 'Sweet Escape',
					description:
						'Ut ut ipsa a quis. Tempore eum dolorem perspiciatis exercitationem eos sunt ullam veniam. Dolorum et consequatur accusamus voluptatem officiis aut quidem porro omnis.',
					street_address: '0035 Johns Key',
					city: 'Shieldshaven',
					zip: '75597',
					phone: '967-520-2938',
				},
				{
					user_id: 7,
					image:
						'https://loremflickr.com/cache/resized/65535_50316654382_6d84c62fcc_320_240_nofilter.jpg',
					name: 'Salty Squid',
					description:
						'Laboriosam reiciendis itaque. At maxime quisquam laboriosam qui beatae sint. Provident facilis est cupiditate ipsa deserunt qui eum repellendus doloribus. Voluptatem tempora autem ad et quis.',
					street_address: '963 Rodriguez Radial',
					city: 'Peytonmouth',
					zip: '30001',
					phone: '367-461-4130',
				},
				{
					user_id: 8,
					image:
						'https://loremflickr.com/cache/resized/65535_50380928993_0b7c8894c1_320_240_nofilter.jpg',
					name: 'Bangalore Spices',
					description:
						'Earum quis mollitia non deserunt et velit. Consectetur rerum non temporibus. Eius modi sit.',
					street_address: '36500 Tate Manors',
					city: 'South Shane',
					zip: '07895',
					phone: '446-417-0051',
				},
				{
					user_id: 9,
					image:
						'https://loremflickr.com/cache/resized/65535_50600199318_8ae10282e4_320_240_nofilter.jpg',
					name: 'Pancake World',
					description:
						'Sed eaque ipsa delectus debitis at quisquam. Quo iste magni tenetur quia. Quia et ut sit totam consectetur ut. Autem consequatur eos vitae ex. Maiores ullam repellendus distinctio molestias culpa nulla. Molestias tempora ea rerum a.',
					street_address: '5516 Ollie Plaza',
					city: 'Port Haroldton',
					zip: '53622',
					phone: '291-738-9114',
				},
				{
					user_id: 10,
					image:
						'https://loremflickr.com/cache/resized/65535_50403911738_3ba8d98a9a_320_240_nofilter.jpg',
					name: 'Veganic Corner',
					description:
						'Saepe dolores ea velit. Aut laborum dolor voluptatem ut nam. Ut iste voluptatum impedit pariatur sit. Quam repudiandae rerum qui numquam et iure. Perferendis deleniti quia.',
					street_address: '94234 King Pass',
					city: 'Cronaland',
					zip: '99618',
					phone: '411-619-7376',
				},
				{
					user_id: 11,
					image:
						'https://loremflickr.com/cache/resized/65535_50345893987_52c96c570a_320_240_nofilter.jpg',
					name: 'Masala',
					description:
						'Voluptatem a aut hic. Non quibusdam culpa repellat. Mollitia perferendis a ut ut. Dolorem rerum odit. Voluptas voluptate laboriosam totam veritatis quae.',
					street_address: '82826 Kerluke Mountain',
					city: 'Goodwinfort',
					zip: '35622',
					phone: '879-957-7324',
				},
				{
					user_id: 12,
					image:
						'https://loremflickr.com/cache/resized/65535_50397733162_2dfec9c79b_n_320_240_nofilter.jpg',
					name: 'Grassfed Grill',
					description:
						'Ut animi non dolor doloribus. Aperiam ducimus et eos nisi molestiae. Est sed maxime velit esse dolor. Ab nam ut eius unde. Eum sapiente ut vero aut minima ducimus. Neque voluptate laborum minima.',
					street_address: '45999 Okuneva Pines',
					city: 'East Anjaliberg',
					zip: '82156',
					phone: '389-294-8095',
				},
				{
					user_id: 13,
					image:
						'https://loremflickr.com/cache/resized/65535_50266219666_956b82a5a7_320_240_nofilter.jpg',
					name: 'Greenanic Smoothies',
					description:
						'Aliquid vel facilis voluptatem sit et ea quaerat et. Eveniet voluptatum est ipsum aperiam. Tempora aut vel optio quo aspernatur delectus dolor autem consequuntur.',
					street_address: '819 Heathcote Street',
					city: 'West Fredericbury',
					zip: '47951',
					phone: '268-981-7217',
				},
				{
					user_id: 14,
					image:
						'https://loremflickr.com/cache/resized/65535_50380928993_0b7c8894c1_320_240_nofilter.jpg',
					name: 'Freddy’s Stove',
					description:
						'Excepturi laudantium debitis tempora ipsa et. Ipsum qui sed omnis corporis quibusdam. Natus magni quod magni. Necessitatibus sint sed distinctio voluptatibus dolore quibusdam.',
					street_address: '21841 Carroll Landing',
					city: 'South Vergieview',
					zip: '25190',
					phone: '783-260-8431',
				},
				{
					user_id: 15,
					image:
						'https://loremflickr.com/cache/resized/65535_50379068626_9860056076_320_240_nofilter.jpg',
					name: 'Grandma’s Sweets',
					description:
						'Nobis odio fugiat labore dolorem dolorum numquam. Quia sunt numquam quo veritatis perspiciatis. Repellat saepe sint qui sed libero rerum facere placeat. Qui harum sequi sint rem mollitia natus sunt. Officia aut velit.',
					street_address: '24045 Lisandro Mall',
					city: 'Kimberlytown',
					zip: '67157',
					phone: '359-639-4945',
				},
				{
					user_id: 16,
					image:
						'https://loremflickr.com/cache/resized/65535_50428483707_c228b7670a_n_320_240_nofilter.jpg',
					name: 'Spicella Spanish Kitchen',
					description:
						'Officia autem et vero nihil tempore magni eum rerum quod. Hic rerum et dolor illum voluptates aut. Ad perspiciatis impedit fugit repellat qui nihil ea. Nulla rerum sit praesentium iusto atque sit porro. Optio id dignissimos quo. Velit est sit.',
					street_address: '612 Collier Inlet',
					city: 'Erinfort',
					zip: '32918',
					phone: '618-757-6334',
				},
				{
					user_id: 17,
					image:
						'https://loremflickr.com/cache/resized/65535_50585716688_4e2ed01bab_320_240_nofilter.jpg',
					name: 'Xin Chao Vietnamese Restaurant',
					description:
						'Hic quaerat voluptates numquam libero labore at. Culpa soluta iste velit. Voluptatum saepe inventore voluptates in tempora odio aut. Magni dolor officiis laborum aspernatur porro inventore velit itaque.',
					street_address: '571 Nolan Corners',
					city: 'New Noeport',
					zip: '26733',
					phone: '501-204-5506',
				},
				{
					user_id: 18,
					image:
						'https://loremflickr.com/cache/resized/65535_50379068626_9860056076_320_240_nofilter.jpg',
					name: 'Paterro’s Kitchen',
					description:
						'Voluptatum nisi ut minima sint cupiditate. Sunt illo ut ea consequatur in. Reprehenderit dolorem ullam rerum optio consequuntur ut consequatur et.',
					street_address: '46896 Gulgowski Valleys',
					city: 'Lake Gregg',
					zip: '70924',
					phone: '500-471-9611',
				},
				{
					user_id: 19,
					image:
						'https://loremflickr.com/cache/resized/65535_50391667857_652ac589bb_320_240_nofilter.jpg',
					name: 'Mediterra Seafood',
					description:
						'Minima nesciunt ut sed. Quam qui suscipit enim ipsa saepe facilis dolorem consectetur. Omnis fugit eum qui consequuntur est. Aperiam repellat ullam eligendi quis ab id. Excepturi tempora dolorem sint odio repellendus qui. Facilis enim consequatur voluptate iure asperiores est voluptas.',
					street_address: '8786 Prosacco Rapid',
					city: 'South Dollychester',
					zip: '12893',
					phone: '728-380-9128',
				},
				{
					user_id: 20,
					image:
						'https://loremflickr.com/cache/resized/65535_50570066417_cec068f444_320_240_nofilter.jpg',
					name: 'Street Deli',
					description:
						'Et dignissimos vel repudiandae. Magnam omnis quidem ut occaecati. Voluptatum nobis architecto ut voluptatem quaerat explicabo. Provident consequatur incidunt laborum nisi omnis ut consectetur accusantium. Totam natus officiis modi placeat vel earum blanditiis corporis non. Velit occaecati quisquam veniam velit qui exercitationem esse ut voluptatem.',
					street_address: '734 Gregory Terrace',
					city: 'South Virginie',
					zip: '80386',
					phone: '795-731-6374',
				},
				{
					user_id: 21,
					image:
						'https://loremflickr.com/cache/resized/65535_50404471066_8ed7310889_320_240_nofilter.jpg',
					name: 'Whispering Bamboo',
					description:
						'Qui aut sunt id est. Quis in natus voluptatem. Quis hic vel. Minima porro sit.',
					street_address: '97119 Feest Circles',
					city: 'New Raymond',
					zip: '56935',
					phone: '261-743-0310',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Home_Chefs', null, {});
	},
};
