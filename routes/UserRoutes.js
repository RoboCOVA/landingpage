const router = require("express-promise-router")();

const bodyParser = require("body-parser");
const { validateBody, schemas } = require("../Validator/routeValidator");

const { registerTosubscriber } = require("../controllers/users");

//@route POST user/saveemail
//@desc get subscribers email
//access public

router
  .route("/saveemail")
  .post(
    bodyParser.json(),
    validateBody(schemas.authSchema),
    registerTosubscriber
  );

module.exports = router;
