const uuid = require('uuid/v4');
'use strict';
module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: () => uuid()
		},
		name: DataTypes.STRING,
		surname: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		indexes: [
			{
				unique: true,
				fields: ['email']
			}
		]
	});
    
	return User;
};