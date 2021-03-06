'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Home_Chef extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Home_Chef.belongsTo(models.User, { foreignKey: 'user_id' });
			Home_Chef.hasMany(models.Menu, { foreignKey: 'home_chef_id' });
			Home_Chef.hasMany(models.Cuisine, { foreignKey: 'home_chef_id' });
		}
	}
	Home_Chef.init(
		{
			user_id: DataTypes.INTEGER,
			image: DataTypes.TEXT,
			name: DataTypes.STRING,
			description: DataTypes.TEXT,
			street_address: DataTypes.STRING,
			city: DataTypes.STRING,
			zip: DataTypes.STRING,
			phone: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Home_Chef',
		}
	);
	return Home_Chef;
};
