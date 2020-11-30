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
						'https://loremflickr.com/cache/resized/65535_50596314396_0b43d1144a_320_240_nofilter.jpg',
					name: 'Island Grill',
					description:
						'Perferendis et excepturi in in. Sed explicabo asperiores qui cumque magnam. At sunt natus iusto.Ad dolor qui nisi. Iusto quia et accusantium. Dolor ipsam nostrum. Deleniti magni quam impedit officiis qui eius quisquam.',
					street_address: '018 Grant Trace',
					city: 'Norbertochester',
					zip: '47915',
					phone: '874-501-8043',
				},
				{
					user_id: 3,
					image:
						'https://loremflickr.com/cache/resized/65535_50573475093_ae35c5fd5e_n_320_240_nofilter.jpg',
					name: 'Flavoroso',
					description:
						'Adipisci porro voluptate modi ipsam. Ut unde repellendus autem eum reiciendis fugiat illum iste rerum. Ut et veritatis voluptatem aspernatur.Aut dicta optio nihil dolor veniam est eveniet. Eos voluptatem omnis ipsum cumque voluptas voluptatem aut sunt. Quia ipsa nostrum quo. Libero et magni ab quisquam voluptatum ad provident est.',
					street_address: '56734 Queen Causeway',
					city: 'Schmidtport',
					zip: '99411',
					phone: '634-961-2670',
				},
				{
					user_id: 4,
					image:
						'https://loremflickr.com/cache/resized/1465_24142717819_c099e79662_320_240_nofilter.jpg',
					name: 'Green Curry',
					description:
						'Est neque sed expedita at quam. Sed expedita itaque architecto est accusamus. Ab accusamus autem accusamus eaque quidem est cum earum perferendis. Reprehenderit accusantium sapiente. Sint eveniet reiciendis consectetur nesciunt quis eligendi veritatis quo.Quis voluptas et velit qui illo nemo deserunt deserunt quibusdam. Inventore saepe nihil distinctio. Est vero nobis atque quibusdam autem repellendus illum molestias. Quae magnam ullam. Minus non dignissimos soluta. Tempora sed amet veritatis numquam sit expedita et praesentium.',
					street_address: '335 Bill Pine',
					city: 'Deshaunshire',
					zip: '48545',
					phone: '543-377-7931',
				},
				{
					user_id: 5,
					image:
						'https://loremflickr.com/cache/resized/5009_5235330724_53df7de66f_n_320_240_nofilter.jpg',
					name: 'El Pirata Porch',
					description:
						'Repellat nesciunt voluptatum est laborum a nobis eveniet consequatur. Rem sunt qui et. Sed eos a.Autem id ut molestiae est quia id in. Labore iste qui rerum saepe ducimus dolores tempora est tenetur. Nam aut dolorem assumenda tempore. At dolores necessitatibus blanditiis iure quibusdam dolorum unde dolorem consequuntur.',
					street_address: '5929 Ressie Run',
					city: 'Haagfort',
					zip: '94493',
					phone: '203-656-3371',
				},
				{
					user_id: 6,
					image:
						'https://loremflickr.com/cache/resized/65535_50446286471_4204d8ac90_320_240_nofilter.jpg',
					name: 'Sweet Escape',
					description:
						'Nam eaque expedita nam soluta fugit dolore. Distinctio sit nisi sit amet magnam voluptate voluptatum dolores voluptate. Voluptas autem quisquam similique ad nam quasi. Facere unde dolores voluptatibus cumque laborum ut.Nihil quos inventore. Veniam voluptate laudantium nam voluptatibus. Id fuga culpa quo qui.',
					street_address: '838 Ziemann Route',
					city: 'New Larissabury',
					zip: '90452',
					phone: '923-634-3051',
				},
				{
					user_id: 7,
					image:
						'https://loremflickr.com/cache/resized/65535_50470828722_6e90b09b23_320_240_nofilter.jpg',
					name: 'Salty Squid',
					description:
						'Tempore soluta molestias totam est eos. Molestiae aspernatur impedit quia. Illum dolor vel recusandae dolorem et consequatur magni. Ipsa in inventore itaque impedit.Cum odio illum cupiditate. Eos voluptatem est sint ipsum. Provident facere iste optio.',
					street_address: '9033 Helmer Parkway',
					city: 'East Marietta',
					zip: '36532',
					phone: '951-551-9724',
				},
				{
					user_id: 8,
					image:
						'https://loremflickr.com/cache/resized/65535_50477327663_7c57a3356f_320_240_nofilter.jpg',
					name: 'Bangalore Spices',
					description:
						'Ab occaecati eum iusto omnis ea voluptatibus architecto. Laudantium reprehenderit qui a incidunt. Voluptatibus similique et occaecati excepturi omnis. Rem vitae recusandae dignissimos laborum. Eos dolores quia qui. Quibusdam a consectetur quo sequi et ad explicabo voluptatibus.Alias sunt ut quaerat voluptatem eaque sit. Ullam deserunt sapiente id ea provident necessitatibus velit qui. Quod et laboriosam sed debitis totam. Accusamus consectetur tempore repudiandae quasi repellendus. Ipsa doloribus est non suscipit non delectus saepe maiores odio. Voluptatem sint neque consectetur.',
					street_address: '7268 Maegan Mountains',
					city: 'West Odaville',
					zip: '65007',
					phone: '952-725-0607',
				},
				{
					user_id: 9,
					image:
						'https://loremflickr.com/cache/resized/65535_50292932288_14261073da_n_320_240_nofilter.jpg',
					name: 'Pancake World',
					description:
						'Excepturi quos ut enim aut alias eaque. Officiis cupiditate neque facere eum voluptatem aliquam omnis possimus. Tempora itaque sunt. Assumenda quos voluptatum quo. Doloremque quis delectus laborum. Itaque optio nesciunt esse autem qui dignissimos vel nobis impedit.Et molestiae non exercitationem aperiam laudantium dolores laborum laboriosam et. Exercitationem qui est nihil aut distinctio incidunt et dolorem iure. Aliquid illo sed.',
					street_address: '343 Hegmann Street',
					city: 'Harleyland',
					zip: '07116',
					phone: '469-366-0404',
				},
				{
					user_id: 10,
					image:
						'https://loremflickr.com/cache/resized/1644_23896856314_735ef37283_n_320_240_nofilter.jpg',
					name: 'Veganic Corner',
					description:
						'Repellat tempora facere. Possimus rerum quibusdam rerum molestiae eveniet. Qui nihil eius qui nulla. Sed libero adipisci nisi unde voluptates. Culpa et atque nihil dolor repellendus deleniti eligendi.Provident ut ut laborum illo culpa. Et corporis temporibus ut est nihil. Nobis nobis autem. Optio quaerat modi nemo magni fugit non nesciunt.',
					street_address: '55179 Koss Avenue',
					city: 'South Maximilian',
					zip: '54689',
					phone: '513-478-2377',
				},
				{
					user_id: 11,
					image:
						'https://loremflickr.com/cache/resized/8839_28819813715_84369681b7_320_240_nofilter.jpg',
					name: 'Masala',
					description:
						'Quam dignissimos perferendis itaque est alias soluta sed. Expedita dolore aut beatae voluptatem enim rem. Dolores est ut ea facere. Dolorem aut fuga laboriosam et fuga ut.Doloremque est eaque cupiditate aut. Dolorem et est. Et ullam ut labore sequi. Ea mollitia ratione rerum. Vel aliquam accusantium in qui qui non nihil. Mollitia nobis facere quis molestias et praesentium expedita veritatis fuga.',
					street_address: '714 Odell Route',
					city: 'Estefaniabury',
					zip: '51355',
					phone: '588-405-8078',
				},
				{
					user_id: 12,
					image:
						'https://loremflickr.com/cache/resized/65535_50353186302_70623862a7_320_240_nofilter.jpg',
					name: 'Grassfed Grill',
					description:
						'Molestiae itaque repellendus quo. Nostrum et temporibus nesciunt dolorem dolore a et labore. Nobis facilis et voluptatibus dignissimos quia aut non ex.Aut consequuntur blanditiis voluptas facere dolorem labore assumenda laborum. Laboriosam temporibus odit eum est consequatur. Est animi sit labore sed quis expedita provident. Quam nihil provident eum voluptate. In placeat unde. Aliquam quod et excepturi doloremque.',
					street_address: '638 Bashirian Village',
					city: 'New Archibald',
					zip: '20485',
					phone: '262-791-1431',
				},
				{
					user_id: 13,
					image:
						'https://loremflickr.com/cache/resized/65535_50281925953_8ef15653c8_n_320_240_nofilter.jpg',
					name: 'Greenanic Smoothies',
					description:
						'Exercitationem ipsum sint aliquid dolores fuga. Est accusantium aut. Culpa voluptatum quidem nesciunt omnis voluptates. Consectetur veritatis occaecati voluptates quia distinctio voluptate fugiat. Nihil quidem quam veritatis excepturi error.Sapiente ut qui tempore inventore nesciunt est. Dolores modi tempora quia quam magnam commodi voluptates in nostrum. Et voluptatum mollitia in delectus est ut. Consequatur qui mollitia eos. Necessitatibus sint est quos. Eius molestiae hic sequi cumque non nemo dolor.',
					street_address: '351 Abbott Rapids',
					city: 'Kundehaven',
					zip: '50247',
					phone: '929-441-5477',
				},
				{
					user_id: 14,
					image:
						'https://loremflickr.com/cache/resized/65535_50504384058_838ea10caa_n_320_240_nofilter.jpg',
					name: 'Freddy’s Stove',
					description:
						'Magni officiis commodi blanditiis ipsum eum. Vero sint quo soluta rerum eos qui fugit. Et architecto quia aut distinctio modi officiis distinctio. Eum enim et eaque beatae ipsa eos ducimus.Ex culpa quidem ad est et tempore aliquid quia facere. Expedita recusandae aut dolore praesentium nulla corporis. Culpa reprehenderit qui adipisci possimus deleniti. Eligendi nobis porro impedit adipisci sequi excepturi explicabo aut. Recusandae sed culpa tempore eos perferendis. Qui qui a praesentium ea sint dolorem eius.',
					street_address: '6131 Kitty Islands',
					city: 'Blockberg',
					zip: '55799',
					phone: '513-278-9947',
				},
				{
					user_id: 15,
					image:
						'https://loremflickr.com/cache/resized/65535_50260543858_1786ca489b_320_240_nofilter.jpg',
					name: 'Grandma’s Sweets',
					description:
						'Animi sed sint amet asperiores. Fuga quis animi temporibus excepturi id enim. Voluptas cum repudiandae vel doloremque eum. Atque ut ut dolor delectus rerum aut. Quo eos rerum aut accusantium voluptatem dicta quia eius.Aspernatur sed repellendus. Nihil rerum omnis sed. In ut non facilis nostrum ad ducimus aut sed eum. Animi vero natus.',
					street_address: '653 Cortez Valleys',
					city: 'North Lavern',
					zip: '95778',
					phone: '380-523-9404',
				},
				{
					user_id: 16,
					image:
						'https://loremflickr.com/cache/resized/4124_5007578741_afdd63115c_320_240_nofilter.jpg',
					name: 'Spicella Spanish Kitchen',
					description:
						'Enim omnis assumenda nulla nihil omnis sed. Facere fuga aut alias voluptates. Voluptas voluptatem voluptate quaerat esse nisi aliquam magnam tenetur non. Provident doloribus consectetur molestiae deleniti sunt et et atque blanditiis.Deleniti dolor placeat non necessitatibus nemo incidunt aperiam dolor. Itaque asperiores nam tempore consequatur nam. Aliquam occaecati nostrum nemo tempora quod reprehenderit ut quod. Minus aut nihil omnis occaecati qui aut. Sed ut error voluptatem quae.',
					street_address: '51087 Barton Wall',
					city: 'West Marceloview',
					zip: '94729',
					phone: '564-569-5517',
				},
				{
					user_id: 17,
					image:
						'https://loremflickr.com/cache/resized/65535_49174049202_b5e0076ec5_320_240_nofilter.jpg',
					name: 'Xin Chao Vietnamese Restaurant',
					description:
						'Quam eos nesciunt. Doloremque quo dicta natus eaque. Vel quaerat aut architecto. Quisquam eum rerum odit cum nemo harum. Laudantium soluta sapiente quae doloribus aut quis minus adipisci quia.Occaecati non tempore veniam soluta aperiam facere enim voluptas. Veniam reiciendis rem consequatur rem molestiae delectus quas. Voluptates in rerum accusantium odio earum. Ipsum rem modi animi alias dignissimos dolores officia. In quo omnis non harum dicta.',
					street_address: '217 Marco Fords',
					city: 'Kreigerberg',
					zip: '55228',
					phone: '550-517-4238',
				},
				{
					user_id: 18,
					image:
						'https://loremflickr.com/cache/resized/65535_50361286516_4429da1340_z_320_240_nofilter.jpg',
					name: 'Paterro’s Kitchen',
					description:
						'Non repellendus saepe quis ad qui consectetur inventore qui. Eligendi non quisquam. Molestias itaque odit vitae sit doloribus voluptas praesentium id voluptatem. Cum consequuntur aliquid maxime cupiditate nemo excepturi nesciunt corrupti voluptatem. Rem ab fugiat quo placeat et. Dolorem dolor delectus blanditiis perferendis laboriosam.In quos voluptatem dolor quas sunt ducimus expedita neque itaque. Ipsum distinctio voluptatem sint accusantium autem odio. Quibusdam aut quia officiis quas voluptatem sed quia sit eius. Voluptatem veritatis nihil accusamus quia iure atque asperiores.',
					street_address: '060 Bernie Vista',
					city: 'Kundestad',
					zip: '62480',
					phone: '364-675-9016',
				},
				{
					user_id: 19,
					image:
						'https://loremflickr.com/cache/resized/65535_50403048568_9a05e1c371_320_240_nofilter.jpg',
					name: 'Mediterra Seafood',
					description:
						'Debitis tenetur et in. Ipsam iste animi saepe molestiae impedit saepe et. Ab veritatis neque explicabo voluptas eveniet earum nihil architecto. At dolorem architecto quia dolorem est.Exercitationem eius qui vero qui ipsum. Et autem in ut et occaecati et adipisci assumenda earum. Laudantium voluptatem qui eveniet. Non eum vel at eos et ut est eos. Debitis et fugiat. Optio est voluptatem maiores omnis.',
					street_address: '44990 McGlynn Views',
					city: 'Kielview',
					zip: '56708',
					phone: '761-692-1980',
				},
				{
					user_id: 20,
					image:
						'https://loremflickr.com/cache/resized/1465_24142717819_c099e79662_320_240_nofilter.jpg',
					name: 'Street Deli',
					description:
						'Est non aut nemo adipisci et quasi. Et quo aut consequatur suscipit mollitia accusamus aut. Mollitia nisi totam animi aut et. Omnis vel eos quo. Placeat rerum quos molestiae voluptatem ipsa.Quis quas saepe sequi pariatur velit exercitationem. Fuga quia possimus nam non quod qui. Cum nihil sit vitae sunt ut nulla eos laborum voluptas. Consequatur vel harum.',
					street_address: '214 Gregorio Springs',
					city: 'East Santiagofort',
					zip: '72154',
					phone: '932-566-5038',
				},
				{
					user_id: 21,
					image:
						'https://loremflickr.com/cache/resized/8133_15800061786_6ef5bfe129_320_240_nofilter.jpg',
					name: 'Whispering Bamboo',
					description:
						'Asperiores sapiente ab non deleniti nostrum consequuntur asperiores enim delectus. Facilis sed blanditiis. Non illum rem voluptatem nesciunt voluptas non. Enim maiores ut voluptates est earum maxime at vitae at.Molestias quia neque pariatur dolor nostrum. Quis ut et non dolor molestias minus nostrum. Accusantium velit ad sequi est ipsum. Iure eligendi qui mollitia quis. Aut molestiae ut.',
					street_address: '98939 Tate Mission',
					city: 'South Constance',
					zip: '70071',
					phone: '282-470-1696',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Home_Chefs', null, {});
	},
};
