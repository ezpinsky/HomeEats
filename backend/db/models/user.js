'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		toSafeObject() {
			const { id, last_name, first_name, email, zip } = this; // context will be the User instance
			return { id, first_name, last_name, email, zip };
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
		static async signup({ first_name, last_name, email, zip, password }) {
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
			User.belongsTo(models.Home_Chef, { foreignkey: 'user_id' });
			User.hasMany(models.Order, { foreignKey: 'user_id' });
		}
	}
	User.init(
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2, 50],
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
					len: [2, 50],
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
			zip: {
				type: DataTypes.STRING(5),
				allowNull: false,
				validate: { notEmpty: true, len: [5, 5] },
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
					exclude: ['hashed_pass', 'email', 'zip', 'createdAt', 'updatedAt'],
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
