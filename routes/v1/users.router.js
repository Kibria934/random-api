const express = require("express");
const {
  update_multiple_user,
} = require("../../controllers/update_multiple_user.patch.contollers");
const {
  update_a_user,
} = require("../../controllers/update_user.patch.controllers");
const router = express.Router();
const users = require("../../controllers/users.controllers");

router
  .route("/random")

  /**
   * @api {get}   Random user
   * @api_description   Get a single random api
   * @api_params {No params}
   * @api_query {No query}
   * @api_header {No header}
   * @api_permission User
   * @api_success {object[]} {status:200} {success:true}    a single user array of object;
   * @api_error {Server internal error}
   * */

  .get(users.get_random_user);

router
  .route("/all")
  /**
   * @api {get}   Get users
   * @api_description   Get all users;
   * @api_query {number{1-}}       [limit=10]      limit of per page;
   * @api_header {no header}
   * @api_permission user
   * @api_success {object[]}    {success:true, status:200, data: users array}   Array of object of users;
   * @api_error {Not found 404}   {success:false, status:404, error: User not found}  User not found
   * */
  .get(users.get_all_user);

router
  .route("/save")
  /**
   * @api {post}   save user;
   * @api_description   Post a new user;
   * @api_params {No params}
   * @api_header {object}   [{id:2, name: jon doe, contact:1222331, gender:male, address:[sreepur, gazipur,      daka],  photoUrl:'www.photo.com'}]   Send the data in body as array of object;
   * @api_permission admin;
   * @api_success {object[]}  {status:200, message:successfully saved the data, data:object[]}  A successful message and updated data;
   * @api_error {Invalid data 400} Entered invalid data;
   * */
  .post(users.save_a_user);

router
  .route("/update/:id")
  /**
   * @api {patch}   update user;
   * @api_description   Update user by params with headers information;
   * @api_params {number{1-}}      [id=1]      list of users;
   * @api_query {No query}
   * @api_header {object}   [id,name,contact,gender,address, photoUrl]    Send any data and id to update data;
   * @api_permission user
   * @api_success {object[]}    [{status:200, message: successfully updated data, data:object[]}]  successful update message and get the updated data;
   * @api_error {Not found 404} User did not found;
   * @api_error {invalid type 400}  Please inter the number as id;
   * */
  .patch(update_a_user);

router
  .route("/bulk-update")
  /**
   * @api {patch}   update multiple;
   * @api_description   Update multiple user by sending there Ids and contacts as object property;
   * @api_query {No query}
   * @api_header {object}   [{ids:[5,4,2,30], contact:["545454","4545152","001212","4545544"]}]   Send an object containing ids and contact property;
   * @api_permission admin;
   * @api_success {object[]}    [200, message, data:object[]]   Update the data using ids and contact property which get form headers body and send the updated users array of object;
   * @api_error {Not found 404} Users not found
   * */
  .patch(update_multiple_user);

router
  .route("/delete")
  /**
   * @api {delete}   Delete user;
   * @api_description   Delete the specific user by using id;
   * @api_query {No query}
   * @api_header {object}   [{id:5}]  delete the user by sending the id in headers;
   * @api_success {object[]}
   * @api_error {Not found 404} Products not found
   * */
  .delete(users.delete_user);

module.exports = router;
