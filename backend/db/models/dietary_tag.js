'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Dietary_Tag extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Dietary_Tag.hasMany(models.Menu_Item_Dietary_Tag, { foreignKey: 'dietary_tag_id' });
		}
	}
	Dietary_Tag.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Dietary_Tag',
		}
	);
	return Dietary_Tag;
};
