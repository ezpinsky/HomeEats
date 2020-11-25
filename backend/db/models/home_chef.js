'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home_Chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Home_Chef.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Home_Chef',
  });
  return Home_Chef;
};