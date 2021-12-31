const { DataTypes, INTEGER } = require("sequelize");
const { sequelizeInstance } = require("../../../MySqlConfig/mysqlConfig");
const Category=sequelizeInstance.define('category',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    describtion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
});


module.exports=Category;