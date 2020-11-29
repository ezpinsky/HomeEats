'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Home_Chef_Cuisine extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Home_Chef_Cuisine.belongsTo(models.Home_Chef, { foreignKey: 'home_chef_id' });
			Home_Chef_Cuisine.belongsTo(models.Cuisine, { foreignKey: 'cuisine_id' });
		}
	}
	Home_Chef_Cuisine.init(
		{
			cuisine_id: DataTypes.INTEGER,
			home_chef_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Home_Chef_Cuisine',
		}
	);
	return Home_Chef_Cuisine;
};
