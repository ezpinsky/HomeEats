'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Menu_Item_Dietary_Tag extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Menu_Item_Dietary_Tag.hasMany(models.Dietary_Tag, { foreignKey: 'dietary_tag_id' });
			Menu_Item_Dietary_Tag.hasMany(models.Menu_Item, { foreignKey: 'menu_item_id' });
		}
	}
	Menu_Item_Dietary_Tag.init(
		{
			menu_item_id: DataTypes.INTEGER,
			dietary_tag_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Menu_Item_Dietary_Tag',
		}
	);
	return Menu_Item_Dietary_Tag;
};
