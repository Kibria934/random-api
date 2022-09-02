const users = require("../public/users.json");

// ====================  GET ALL USERS =================

module.exports.get_all_user = (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    res.send(users.slice(0, Number(limit)));
  } else {
    res.send(users);
  }
};

// ====================  GET THE RANDOM USER =================

module.exports.get_random_user = (req, res) => {
  const count = Math.ceil(Math.random() * users.length);
  const user = users.find((user) => Number(user._id) === count);
  res.send(user);
};

// ====================  SAVE A NEW USER SENDED FROM BODY =================

module.exports.save_a_user = (req, res) => {
  const new_data = req.body;
  if (new_data) {
    users.push(new_data);
    res.status(200).send({
      success: true,
      message: "successfully saved the data",
      data: users,
    });
  } else {
    res.status(400).send({ success: false, message: "Invalid data" });
  }
};

// ====================  DELETE A USER BY ID SENDED FROM BODY =================

module.exports.delete_user = (req, res) => {
  const { id } = req.body;

  if (typeof id === "number" && id <= users.length) {
    const after_delete = users.filter((user) => Number(user._id) !== id);
    res.status(200).send({
      success: true,
      message: "Successfully deleted data",
      data: after_delete,
    });
  } else if (typeof id !== "number") {
    res.status(404).send({
      success: false,
      error: `Your entered id type is ${typeof id}. Please enter a number.`,
    });
  } else {
    res.status(404).send({
      success: false,
      error: "User did not found",
    });
  }
};
