const faker = require('faker');
const fetch = require('node-fetch');

//made all users
const generateFakeUsers = () => {
	let fakes = [];
	let fake;
	for (let i = 0; i < 30; i++) {
		const email = faker.internet.email();
		const first_name = faker.name.firstName();
		const last_name = faker.name.lastName();
		const hashed_pass = `bcrypt.hashSync('${faker.internet.password()}')`;
		const zip = faker.address.zipCode().slice(0, 5);
		const HomeChefId = i + 1;

		fake = { email, first_name, last_name, hashed_pass, zip, HomeChefId };
		fakes.push(fake);
	}

	console.log(fakes);
};

// generateFakeUsers();

//made all home_chefs
const restaurantNames = [
	'Island Grill',
	'Flavoroso',
	'Green Curry',
	'El Pirata Porch',
	'Sweet Escape',
	'Salty Squid',
	'Bangalore Spices',
	'Pancake World',
	'Veganic Corner',
	'Masala',
	'Grassfed Grill',
	'Greenanic Smoothies',
	'Freddy’s Stove',
	'Grandma’s Sweets',
	'Spicella Spanish Kitchen',
	'Xin Chao Vietnamese Restaurant',
	'Paterro’s Kitchen',
	'Mediterra Seafood',
	'Street Deli',
	'Whispering Bamboo',
];

async function getImgUrl(param) {
	let res = await fetch(`https://loremflickr.com/320/240/${param}`);
	return res.url;
}

const generateFakeHomeChefs = async () => {
	let fakes = [];
	let fake;
	for (let i = 0; i < 20; i++) {
		const user_id = i + 2;
		const image = await getImgUrl('food');
		const name = restaurantNames[i];
		const description = faker.lorem.paragraph() + faker.lorem.paragraph();
		const street_address = faker.address.streetAddress();
		const city = faker.address.city();
		const zip = faker.address.zipCode().slice(0, 5);
		const phone = faker.phone.phoneNumberFormat();
		fake = { user_id, image, name, description, street_address, city, zip, phone };
		fakes.push(fake);
	}
	console.log(fakes);
};

// generateFakeHomeChefs();

const generateFakeMenus = async () => {
	let fakes = [];
	let menuNames = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Catering'];
	let eats = ['Delivery', 'Dine-in', 'Pick-up', 'Ship'];
	let fake;
	for (let i = 0; i < 20; i++) {
		const name = menuNames[Math.floor(Math.random() * 5)];
		const home_chef_id = i + 2;
		let eat_options = [];
		for (let y = 0; y < 2; y++) {
			let eat = eats[Math.floor(Math.random() * 4)];
			if (eat_options.indexOf(eat) === -1) {
				eat_options.push(eat);
			}
		}
		fake = { home_chef_id, name, eat_options };
		fakes.push(fake);
	}
	console.log(fakes);
};

// generateFakeMenus();
let cusineList = [
	'Peruvian',
	'Pizzeria',
	'Chinese',
	'Asian',
	'Japanese',
	'Mexican',
	'Fast Food',
	'BBQ',
	'Mediterranean',
	'Bakery',
	'Steakhouse',
	'Indian',
	'Italian',
	'Thai',
	'French',
];
const generateFakeCuisines = () => {
	let fakes = [];
	for (let x = 0; x < cusineList.length - 1; x++) {
		fakes.push({ name: cusineList[x] });
	}
	console.log(fakes);
};

// generateFakeCuisines();

const generateFakeHomeChefCuisines = () => {
	let fakes = [];
	for (i = 1; i < 21; i++) {
		const n = Math.floor(Math.random() * 4 + 1);
		for (l = 0; l < n; l++) {
			fakes.push({ cuisine_id: Math.floor(Math.random() * (12 + 1)), home_chef_id: i });
		}
	}
	console.log(fakes);
};
generateFakeHomeChefCuisines();
