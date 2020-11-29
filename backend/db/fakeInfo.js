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

async function getImgUrl() {
	let res = await fetch('https://loremflickr.com/320/240/house');
	return res.url;
}

const generateFakeHomeChefs = async () => {
	let fakes = [];
	let fake;
	for (let i = 0; i < 20; i++) {
		const user_id = i + 2;
		const image = await getImgUrl();
		const name = restaurantNames[i];
		const description = faker.lorem.paragraph();
		const street_address = faker.address.streetAddress();
		const city = faker.address.city();
		const zip = faker.address.zipCode().slice(0, 5);
		const phone = faker.phone.phoneNumberFormat();
		fake = { user_id, image, name, description, street_address, city, zip, phone };
		fakes.push(fake);
	}
	console.log(fakes);
};

generateFakeHomeChefs();

// user_id: DataTypes.INTEGER,
// image: DataTypes.TEXT,
// name: DataTypes.STRING,
// description: DataTypes.TEXT,
// street_address: DataTypes.STRING,
// city: DataTypes.STRING,
// zip: DataTypes.STRING,
// phone: DataTypes.STRING,
