const axios = require("../axios");
const { errorHandler } = require("../helper");

module.exports = {
  createUser: async (req, res, next) => {
    const param = req.body;

    try {
      const { data } = await axios.post("users", param);

      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  getUser: async (req, res, next) => {
    const { email } = req.params;
    const { authorization } = req.headers;

    try {
      const { data } = await axios.get(`users/${email}`, {
        headers: {
          authorization,
        },
      });
      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  updateToken: async (req, res, next) => {
    const param = req.body;

    try {
      const { data } = await axios.put("users/token", param);
      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  deleteUser: async (req, res, next) => {
    const param = req.body;
    const { authorization } = req.headers;

    try {
      const { data } = await axios.delete("users", {
        headers: {
          authorization,
        },
        data: param,
      });

      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  resendPassword: async (req, res, next) => {
    const { email } = req.params;

    try {
      const { data } = await axios.post(`users/password/${email}`);

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
