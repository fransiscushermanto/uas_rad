require("express");
const router = require("express-promise-router")();
const {
  BookController,
  VersionController,
  VerseController,
  UserController,
} = require("../controller");

/* Books */
router.route("/books").get(BookController.getAllBooks);
router.route("/books/:abbrev").get(BookController.getBook);

/* Versions */
router.route("/versions").get(VersionController.versions);

/* Verses */
router
  .route("/verses/:version/:abbrev/:chapter")
  .get(VerseController.getChapter);
router
  .route("/verses/:version/:abbrev/:chapter/:verse")
  .get(VerseController.getVerse);
router.route("/random/verses/:version").get(VerseController.getRandomVerse);
router
  .route("/random/verses/:version/:abbrev")
  .get(VerseController.getRandomBookVerse);
router.route("/verses/search").post(VerseController.searchWord);

/* Users */
router.route("/users").post(UserController.createUser);
router.route("/users").delete(UserController.deleteUser);
router.route("/users/:email").get(UserController.getUser);
router.route("/token").put(UserController.updateToken);
router.route("/users/password/:email").post(UserController.resendPassword);

module.exports = router;
