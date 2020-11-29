'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Menu extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Menu.belongsTo(models.Home_Chef, { foreignKey: 'home_chef_id' });
			Menu.hasMany(models.Menu_Item, { foreignKey: 'menu_id' });
		}
	}
	Menu.init(
		{
			home_chef_id: DataTypes.INTEGER,
			name: DataTypes.STRING,
			eat_options: DataTypes.ARRAY(DataTypes.TEXT),
		},
		{
			sequelize,
			modelName: 'Menu',
		}
	);
	return Menu;
};
