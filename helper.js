module.exports = {
  errorHandler: (error) => {
    try {
      const { request, message, response } = error;
      const {
        res: { statusCode },
      } = request;

      const { data } = response;

      return {
        statusCode,
        message: data.msg,
      };
    } catch (error) {
      return { statusCode: 500, message: "Internal Server Error" };
    }
  },
};
