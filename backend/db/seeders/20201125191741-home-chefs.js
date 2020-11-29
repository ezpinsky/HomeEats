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
          description: 'Catch Me Acai will cater all your celebrations, conferences, and everything in between in the South Florida Area! From our beautiful heavenly charcuterie and cheese boards to our delectable dessert spreads and more, you will have plenty of options to choose from to elevate your event and impress your guests. this'
            street_address: '19680 E Country Club Dr',
					city: 'Aventura',
					zip: '33180',
					phone: '954-455-9788',
				},
				{
					user_id: 3,
					image:
						'https://loremflickr.com/cache/resized/65535_50513345056_fa7f951074_320_240_nofilter.jpg',
					description:
						'Sit dignissimos iure dolorem. Nostrum fuga ullam quis molestiae nulla velit. Sequi consectetur adipisci voluptatem odio ut quibusdam a et. Provident voluptates dicta. Culpa officia quis soluta eligendi rem quaerat iusto ipsam.',
					name: 'Island Grill',
					street_address: '89750 Barrows Haven',
					city: 'Myrnatown',
					zip: '92332',
					phone: '339-224-3785',
				},
				{
					user_id: 4,
					image:
						'https://loremflickr.com/cache/resized/65535_50477995601_74fd8e83ff_320_240_nofilter.jpg',
					description:
						'Aperiam unde sed. Aut accusamus aut a. Iste et quia qui. Explicabo sapiente iure hic a officiis excepturi porro optio quia. Neque et minima impedit voluptas repellendus natus animi ab aut. Aut inventore quam rerum fuga.',
					name: 'Flavoroso',
					street_address: '82276 Gardner Overpass',
					city: 'Jamarcusstad',
					zip: '20157',
					phone: '804-661-0510',
				},
				{
					user_id: 5,
					image:
						'https://loremflickr.com/cache/resized/65535_50223223152_92ae5ff77b_320_240_nofilter.jpg',
					description:
						'Deleniti magni animi ipsum rerum repudiandae voluptatem quos blanditiis. Occaecati odio sint excepturi quam unde et. Omnis numquam asperiores itaque consequuntur ipsam enim deleniti tenetur. Nesciunt qui et sunt labore aut doloremque doloribus soluta quia. Sunt voluptate alias est sit voluptatem.',
					name: 'Green Curry',
					street_address: '60957 Dach Port',
					city: 'Lake Reymundo',
					zip: '67313',
					phone: '515-895-3556',
				},
				{
					user_id: 6,
					image:
						'https://loremflickr.com/cache/resized/65535_50282429371_22128c937c_z_320_240_nofilter.jpg',
					description:
						'Sed distinctio aut et voluptatem asperiores labore aspernatur architecto. Quae dolore ut id qui fuga dignissimos. Accusantium asperiores voluptatem cum. Aut ducimus voluptas voluptatibus sit. Natus nulla qui sint maiores aperiam.',
					name: 'El Pirata Porch',
					street_address: '717 Leannon Path',
					city: 'Eribertoside',
					zip: '11684',
					phone: '849-202-8434',
				},
				{
					user_id: 7,
					image:
						'https://loremflickr.com/cache/resized/65535_50397733162_2dfec9c79b_n_320_240_nofilter.jpg',
					description:
						'Incidunt quibusdam harum dignissimos quidem nihil inventore accusantium. Qui delectus non velit ut temporibus. Vitae vitae dolores delectus odit. Aspernatur omnis iure minima recusandae maiores et tempora libero.',
					name: 'Sweet Escape',
					street_address: '39885 Hayes Plains',
					city: 'New Dillonhaven',
					zip: '02855',
					phone: '660-638-5230',
				},
				{
					user_id: 8,
					image:
						'https://loremflickr.com/cache/resized/6062_6119731880_5c655be08d_320_240_nofilter.jpg',
					description:
						'Nemo placeat odio vero similique. Voluptas est velit quae veniam. Eaque sint laboriosam beatae rerum nulla nemo et qui vel.',
					name: 'Salty Squid',
					street_address: '78618 Ledner Street',
					city: 'Breitenbergchester',
					zip: '78756',
					phone: '789-918-9730',
				},
				{
					user_id: 9,
					image:
						'https://loremflickr.com/cache/resized/8525_8677814782_80c039486f_n_320_240_nofilter.jpg',
					description:
						'Placeat omnis explicabo ipsum sit deserunt. Sunt quae iste et omnis et. Dolorum minima error est cum ut. Voluptatem ducimus placeat excepturi velit officiis repellat qui deserunt veritatis.',
					name: 'Bangalore Spices',
					street_address: '803 Johns Manor',
					city: 'Jastview',
					zip: '82260',
					phone: '709-278-9207',
				},
				{
					user_id: 10,
					image:
						'https://loremflickr.com/cache/resized/65535_50345893987_52c96c570a_320_240_nofilter.jpg',
					description:
						'Voluptate ullam distinctio illum molestiae nisi animi ullam voluptatem voluptatem. Expedita aut iste rerum quasi. Porro dicta provident voluptatem ut voluptate temporibus nihil. Exercitationem velit officia perspiciatis officiis beatae soluta autem voluptatem. Ut ab ea doloremque sed et quia aut ut dolorem. Fugit officiis sed aut.',
					name: 'Pancake World',
					street_address: '424 Kaylie Point',
					city: 'Willashire',
					zip: '09787',
					phone: '665-315-8874',
				},
				{
					user_id: 11,
					image:
						'https://loremflickr.com/cache/resized/2207_2484758976_d7f7c10e44_320_240_nofilter.jpg',
					description:
						'Nobis eligendi recusandae aut nemo ut eos. Distinctio aut beatae totam optio autem laudantium dignissimos est. Tempore aut ea velit ipsam et aperiam voluptate voluptates. Suscipit sit at quasi aliquam amet voluptatem nihil eos excepturi.',
					name: 'Veganic Corner',
					street_address: '677 Frederik Haven',
					city: 'Paucekton',
					zip: '66630',
					phone: '779-878-5927',
				},
				{
					user_id: 12,
					image:
						'https://loremflickr.com/cache/resized/65535_50607823598_6c2edf3d58_320_240_nofilter.jpg',
					description:
						'Tenetur incidunt deleniti consequatur. Ut eum tempora ratione. Amet ea natus neque animi vero a quia.',
					name: 'Masala',
					street_address: '02348 Ledner Motorway',
					city: 'Phyllistown',
					zip: '45939',
					phone: '768-602-8628',
				},
				{
					user_id: 13,
					image:
						'https://loremflickr.com/cache/resized/65535_50544350888_fda244a7d4_320_240_nofilter.jpg',
					description:
						'Quisquam sed officiis. Neque nostrum omnis sunt optio rerum saepe aut. Voluptatem sit quisquam dolor nesciunt quidem quis doloremque ut. Reprehenderit fugit suscipit tempore dolore sunt alias atque quia.',
					name: 'Grassfed Grill',
					street_address: '56811 Anabel Circles',
					city: 'Rebaborough',
					zip: '74547',
					phone: '989-295-8040',
				},
				{
					user_id: 14,
					image:
						'https://loremflickr.com/cache/resized/65535_50570062337_5aac1d7660_320_240_nofilter.jpg',
					description:
						'Cumque magnam libero sed assumenda optio provident voluptas id. Et saepe hic est ratione necessitatibus aut occaecati ex aliquam. Eligendi dolores neque nihil ducimus nobis et voluptatem odit id. Aut facilis numquam rerum. Sapiente minus ut harum sit odit dignissimos.',
					name: 'Greenanic Smoothies',
					street_address: '127 Bauch Junction',
					city: 'Estellmouth',
					zip: '35129',
					phone: '820-596-8013',
				},
				{
					user_id: 15,
					image:
						'https://loremflickr.com/cache/resized/65535_50223223152_92ae5ff77b_320_240_nofilter.jpg',
					description:
						'Aut ducimus iure quaerat qui nisi officia a quo minus. Aut et quam rerum nobis quia aut sed nostrum. Voluptas corporis vel nostrum impedit.',
					name: 'Freddy’s Stove',
					street_address: '431 Carter Run',
					city: 'New Willow',
					zip: '55907',
					phone: '443-246-3930',
				},
				{
					user_id: 16,
					image:
						'https://loremflickr.com/cache/resized/65535_50516877988_7901486cd9_320_240_nofilter.jpg',
					description:
						'Numquam aut quis itaque quia dolor ratione. Quo aut voluptas et illo at consequatur ut. Doloremque aut aliquid libero quo est aliquam quae repellendus. Assumenda voluptatem dolorem tempora.',
					name: 'Grandma’s Sweets',
					street_address: '97241 Bryce Spur',
					city: 'New Judyberg',
					zip: '92989',
					phone: '616-643-0771',
				},
				{
					user_id: 17,
					image:
						'https://loremflickr.com/cache/resized/65535_50299319383_44823debc6_320_240_nofilter.jpg',
					description:
						'Aut qui dolorum numquam magni tenetur odit. Et enim cum harum fuga iure et nesciunt. Saepe quisquam ipsa consequatur. Eos mollitia eius corrupti veniam dignissimos accusamus at nobis. Tempore consequatur impedit voluptatibus illo aut reiciendis.',
					name: 'Spicella Spanish Kitchen',
					street_address: '761 Paris Junctions',
					city: 'Gilbertofort',
					zip: '90547',
					phone: '253-250-2490',
				},
				{
					user_id: 18,
					image:
						'https://loremflickr.com/cache/resized/65535_50382781217_54736db121_n_320_240_nofilter.jpg',
					description:
						'Neque sed dolor porro molestias fugiat. Qui dignissimos sed cupiditate eos maiores. Temporibus ex quibusdam et assumenda consequatur ad ullam.',
					name: 'Xin Chao Vietnamese Restaurant',
					street_address: '6217 Ariel Branch',
					city: 'Walkerview',
					zip: '95428',
					phone: '359-334-2953',
				},
				{
					user_id: 19,
					image:
						'https://loremflickr.com/cache/resized/65535_50306116436_d9658bbe21_n_320_240_nofilter.jpg',
					description:
						'Eius optio doloremque doloribus et id. Ducimus sit modi quia atque voluptas. Quaerat ex hic aperiam qui facere hic minus. Et totam tempore ullam nihil possimus provident nisi rem.',
					name: 'Paterro’s Kitchen',
					street_address: '6857 Vicky Grove',
					city: 'Lake Omaport',
					zip: '68355',
					phone: '300-675-9529',
				},
				{
					user_id: 20,
					image:
						'https://loremflickr.com/cache/resized/65535_50346374413_d959652e0e_320_240_nofilter.jpg',
					description:
						'Facilis excepturi non animi placeat amet dolores ipsam perferendis consequuntur. Excepturi beatae nostrum. Praesentium quia tenetur dignissimos quia qui qui ipsum.',
					name: 'Mediterra Seafood',
					street_address: '524 Heaney Street',
					city: 'Port Kacey',
					zip: '93108',
					phone: '383-997-5748',
				},
				{
					user_id: 21,
					image:
						'https://loremflickr.com/cache/resized/65535_50391667857_652ac589bb_320_240_nofilter.jpg',
					description:
						'Aut sit dicta natus error est incidunt recusandae. Rem voluptatum odio laudantium eveniet distinctio ut dignissimos et. Autem autem ex eveniet nesciunt harum magnam qui blanditiis.',
					name: 'Street Deli',
					street_address: '69145 Toy Terrace',
					city: 'Arianeberg',
					zip: '50412',
					phone: '507-917-5092',
				},
				{
					user_id: 22,
					image:
						'https://loremflickr.com/cache/resized/65535_50585716688_4e2ed01bab_320_240_nofilter.jpg',
					description:
						'Ducimus rerum quisquam magni error et necessitatibus consequatur accusamus et. Sequi occaecati ex doloribus. Et et debitis porro cum. Deserunt ea quo possimus qui qui alias et earum eaque.',
					name: 'Whispering Bamboo',
					street_address: '71840 Schumm Roads',
					city: 'Finnmouth',
					zip: '74066',
					phone: '729-826-9908',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Home_Chefs', null, {});
	},
};
