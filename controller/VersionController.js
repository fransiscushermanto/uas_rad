const axios = require("../axios");
const { errorHandler } = require("../helper");

module.exports = {
  versions: async (req, res, next) => {
    try {
      const { data } = await axios.get("versions");

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
