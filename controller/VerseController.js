const axios = require("../axios");
const { errorHandler } = require("../helper");

module.exports = {
  getChapter: async (req, res, next) => {
    const { version, abbrev, chapter } = req.params;
    
    try {
      const {
        data: {
          chapter: { number, ...resChapter },
          verses,
          ...resData
        },
      } = await axios.get(`verses/${version}/${abbrev}/${chapter}`);

      res.status(200).send({
        ...resData,
        chapter: {
          chapter: number,
          ...resChapter,
        },
        verses: verses.map(({ number, ...resVerse }) => ({
          verse: number,
          ...resVerse,
        })),
      });
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  getVerse: async (req, res, next) => {
    const { version, abbrev, chapter, verse } = req.params;

    try {
      const {
        data: { number, ...resData },
      } = await axios.get(`verses/${version}/${abbrev}/${chapter}/${verse}`);

      res.status(200).send({
        ...resData,
        verse: number,
      });
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  getRandomVerse: async (req, res, next) => {
    const { version } = req.params;

    try {
      const {
        data: { number, ...resData },
      } = await axios.get(`verses/${version}/random`);

      res.status(200).send({
        ...resData,
        verse: number,
      });
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  getRandomBookVerse: async (req, res, next) => {
    const { version, abbrev } = req.params;

    try {
      const { data } = await axios.get(`verses/${version}/${abbrev}/random`);

      res.status(200).send(data);
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },

  searchWord: async (req, res, next) => {
    const param = req.body;

    try {
      const {
        data: { verses, ...resData },
      } = await axios.post(`verses/search`, param);

      res.status(200).send({
        ...resData,
        verses: verses.map(({ number, ...resVerse }) => ({
          ...resVerse,
          verse: number,
        })),
      });
    } catch (error) {
      const { message, statusCode } = errorHandler(error);
      res.status(statusCode).send({
        statusCode,
        message,
      });
    }
  },
};
