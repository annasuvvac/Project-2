module.exports = function(sequelize, DataTypes) {
  var flights = sequelize.define('flights', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Airline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  flights.associate = function(models) {
    flights.hasMany(models.Post, {
      onDelete: 'cascade'
    });
  };
  return flights;
};