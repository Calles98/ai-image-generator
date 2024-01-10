const OpenAI = require("openai");

const openai = new OpenAI({
  organization: process.env.OPEN_AI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
