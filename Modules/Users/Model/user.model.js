const { DataTypes } = require("sequelize");
const { sequelizeInstance } = require("../../../MySqlConfig/mysqlConfig");

const User=sequelizeInstance.define("user" ,{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    fname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

module.exports= User;