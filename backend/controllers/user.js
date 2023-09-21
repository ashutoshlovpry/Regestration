
const User = require("../models/users");

const saveUserDetails=(req,res)=>{










}
const fetchUserDetails=(req,res)=>{


User.aggregate([
  {
    $lookup: {
      from: "countries", // The name of the "countries" collection
      localField: "country", // The field in the "users" collection
      foreignField: "_id", // The field in the "countries" collection
      as: "countryInfo", // The name of the field to store the joined data
    },
  },
  {
    $lookup: {
      from: "cities", // The name of the "cities" collection
      localField: "city", // The field in the "users" collection
      foreignField: "_id", // The field in the "cities" collection
      as: "cityInfo", // The name of the field to store the joined data
    },
  },
  {
    $unwind: "$countryInfo", // Unwind the "countryInfo" array
  },
  {
    $unwind: "$cityInfo", // Unwind the "cityInfo" array
  },
  {
    $project: {
      username: 1,
      email: 1,
      "countryInfo.name": 1, // Include the country name
      "cityInfo.name": 1, // Include the city name
    },
  },
]);




}

module.exports