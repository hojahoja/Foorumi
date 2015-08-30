var Sequelize = require('sequelize');
    var sequelize = new Sequelize('postgres://nyuposvqgrvysv:bZWr81DuntArzqz6nvZZ0Gzw7U@ec2-54-83-58-191.compute-1.amazonaws.com:5432/daqh95csbvsvap', {
      dialect: 'postgres',
      protocol: 'postgres'
    });

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
