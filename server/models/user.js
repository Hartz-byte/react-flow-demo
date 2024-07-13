const db = require("../util/database");

module.exports.insert = async (userData) => {
  // console.log(userData);

  let id = 0;

  try {
    let query = "INSERT INTO `users`(`text`) VALUES (?)";

    // execute
    let result = await db.execute(query, [userData.text]);

    id = result[0].insertId;
  } catch (err) {
    console.log(err);
  }

  return id;
};

module.exports.get = async (userData) => {
  let retData = "";

  try {
    let query = "SELECT * FROM `users` WHERE id=?";

    let result = await db.execute(query, [userData.id]);

    retData = result[0][0];
  } catch (err) {
    console.log(err);
  }

  return retData;
};
