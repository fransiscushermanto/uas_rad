const axios = require("../axios");
const { errorHandler } = require("../helper");

module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      const { data } = await axios.get("books");

      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  getBook: async (req, res, next) => {
    const { abbrev } = req.params;

    try {
      const { data } = await axios.get(`books/${abbrev}`);

      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },
};
