const users = require("../public/users.json");

module.exports.update_multiple_user = (req, res) => {
  const { ids } = req.body;
  const { contact } = req.body;
  let selected_users = [];

  if (ids.length == contact.length) {
    for (const id of ids) {
      const data = users.filter((user) => user._id === id);
      selected_users.push(...data);
    }
    for (select of selected_users) {
      select.contact = contact[selected_users.indexOf(select)];
    }

    res.status(200).send({
      success: true,
      message: `Successfully updated these ids (${ids}) contact to ${contact}`,
      data: selected_users,
    });
  } else {
    res.status(404).send({
      success: false,
      error: "You did not send the proper contact of ids.",
    });
  }
};
