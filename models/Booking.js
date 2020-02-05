Module.exports=function(sequelize,DataTypes){

    var Booking=sequelize.define('Booking',{

Country:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        len:[1]
    }
    },
City:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        len:[1]
    }
},
stars:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        len:[1]
    }
},
Price:{
   type:DataTypes.INTEGER,
   allowNull:false,
   validate:{
       len:[1]}
   }
   });
   
   Booking.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Booking.belongsTo(models.flights, {
      foreignKey: {
          name:myForeignKey,
        allowNull: false,
      }
    });
    
  return Booking;
   }
    };
