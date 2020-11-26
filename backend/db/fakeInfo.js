const faker = require('faker');
const fetch = require('node-fetch');

//makes all users
// const generateFakeUsers = () => {
// 	let fakes = [];
// 	let fake;
// 	for (let i = 0; i < 30; i++) {
// 		const email = faker.internet.email();
// 		const first_name = faker.name.firstName();
// 		const last_name = faker.name.lastName();
// 		const hashed_pass = `bcrypt.hashSync('${faker.internet.password()}')`;
// 		const zip = faker.address.zipCode().slice(0, 5);

// 		fake = { email, first_name, last_name, hashed_pass, zip };
// 		fakes.push(fake);
// 	}

// 	console.log(fakes);
// };

generateFakeUsers();

//made all home_chefs
// const restaurantNames = [
// 	'Island Grill',
// 	'Flavoroso',
// 	'Green Curry',
// 	'El Pirata Porch',
// 	'Sweet Escape',
// 	'Salty Squid',
// 	'Bangalore Spices',
// 	'Pancake World',
// 	'Veganic Corner',
// 	'Masala',
// 	'Grassfed Grill',
// 	'Greenanic Smoothies',
// 	'Freddy’s Stove',
// 	'Grandma’s Sweets',
// 	'Spicella Spanish Kitchen',
// 	'Xin Chao Vietnamese Restaurant',
// 	'Paterro’s Kitchen',
// 	'Mediterra Seafood',
// 	'Street Deli',
// 	'Whispering Bamboo',
// ];

// const generateFakeHomeChefs = () => {
// 	let fakes = [];
// 	let fake;
// 	for (let i = 0; i < 20; i++) {
// 		const user_id = i + 3;
// 		const name = restaurantNames[i];
// 		const street_address = faker.address.streetAddress();
// 		const city = faker.address.city();
// 		const zip = faker.address.zipCode().slice(0, 5);
// 		const phone = faker.phone.phoneNumberFormat();
// 		fake = { user_id, name, street_address, city, zip, phone };
// 		fakes.push(fake);
// 	}
// 	console.log(fakes);
// };

// generateFakeHomeChefs();

//gets fake food image url
// let url;
// async function getImgUrl() {
// 	let res = await fetch('https://loremflickr.com/320/240/recipe');
// 	console.log(res.url);
// }
// console.log(getImgUrl());
