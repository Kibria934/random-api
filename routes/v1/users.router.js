const express = require("express");
const {
  update_multiple_user,
} = require("../../controllers/update_multiple_user.patch.contollers");
const {
  update_a_user,
} = require("../../controllers/update_user.patch.controllers");
const router = express.Router();
const users = require("../../controllers/users.controllers");

router.route("/random").get(users.get_random_user);
router.route("/all").get(users.get_all_user);
router.route("/save").post(users.save_a_user);
router.route("/update/:id").patch(update_a_user);
router.route("/bulk-update").patch(update_multiple_user);
router.route("/delete").patch(users.delete_user);

module.exports = router;
