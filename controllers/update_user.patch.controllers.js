const users = require("../public/users.json");

module.exports.update_a_user = (req, res) => {
  const id = JSON.parse(req.params.id);
  const sended_data = req.body;
  const user_props = Object.keys(users);

  if (typeof id === "number" && user_props.includes(String(id))) {
    users[id - 1] = {
      _id: users[id - 1]._id,
      name: sended_data.name || users[id - 1].name,
      gender: sended_data.gender || users[id - 1].gender,
      contact: sended_data.contact || users[id - 1].contact,
      address: sended_data.address || users[id - 1].address,
      photoUrl: sended_data.photoUrl || users[id - 1].photoUrl,
    };
    res.status(200).send({
      success: true,
      message: "Successfully updated data",
      data: users[id - 1],
    });
  } else if (typeof id !== "number") {
    res.status(404).send({
      success: false,
      error: `Your entered id type is ${typeof id}. Please enter a number`,
    });
  } else {
    res.status(404).send({
      success: false,
      error: "User did not found",
    });
  }
};
