'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		toSafeObject() {
			const { id, last_name, first_name, email } = this; // context will be the User instance
			return { id, first_name, last_name, email };
		}
		validatePassword(password) {
			return bcrypt.compareSync(password, this.hashed_pass.toString());
		}
		static getCurrentUserById(id) {
			return User.scope('currentUser').findByPk(id);
		}
		static async login({ credential, password }) {
			const { Op } = require('sequelize');
			const user = await User.scope('loginUser').findOne({
				where: {
					[Op.or]: {
						email: credential,
					},
				},
			});
			if (user && user.validatePassword(password)) {
				return await User.scope('currentUser').findByPk(user.id);
			}
		}
		static async signup({ first_name, last_name, email, password, zip }) {
			const hashed_pass = bcrypt.hashSync(password);
			const user = await User.create({
				first_name,
				last_name,
				email,
				zip,
				hashed_pass,
			});
			return await User.scope('currentUser').findByPk(user.id);
		}
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [0, 30],
					isNotEmail(value) {
						if (Validator.isEmail(value)) {
							throw new Error('Cannot be an email.');
						}
					},
				},
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [0, 30],
					isNotEmail(value) {
						if (Validator.isEmail(value)) {
							throw new Error('Cannot be an email.');
						}
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 256],
				},
			},
			hashed_pass: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: [60, 60],
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
			defaultScope: {
				attributes: {
					exclude: ['hashed_pass', 'email', 'createdAt', 'updatedAt'],
				},
			},
			scopes: {
				currentUser: {
					attributes: { exclude: ['hashed_pass'] },
				},
				loginUser: {
					attributes: {},
				},
			},
		}
	);
	return User;
};
