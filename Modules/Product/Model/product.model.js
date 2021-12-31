const { DataTypes } = require("sequelize");
const { sequelizeInstance } = require("../../../MySqlConfig/mysqlConfig");
const Category = require("../../Category/Model/category.Model");
const User = require("../../Users/Model/user.model");

const Product =sequelizeInstance.define('product',
    {
        prodId:{type:DataTypes.INTEGER , autoIncrement:true, primaryKey:true},
        pordName:{type:DataTypes.STRING,allowNull:false },
        prodTitle:{type:DataTypes.STRING,allowNull:false},
        prodDescribtion:{type:DataTypes.STRING,allowNull:false},
        prodPrice:{type:DataTypes.INTEGER}
    }   
)

User.hasMany(Product ,{as:"createdBy"});
Product.belongsTo(Category,{as:"category"});
module.exports= Product;