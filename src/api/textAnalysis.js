import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";

/**
 * @typedef Sentiment
 * @property {string} isSuccess - successfully ran?: true or false
 * @property {string} overallSentiment - positive, negative, neutral
 * @property {float} positive - positive confidence score
 * @property {float} negative - negative confidence score
 * @property {float} neutral - neutral confidence score
 */

/**
 * Function to analyze text input and return Sentiment object
 * @param {string} text
 * @returns {Sentiment} sentiment Object that contains analysis output
 */
const getSentimentAnalysis = async (text) => {
  const endpoint = process.env.REACT_APP_TEXT_ENDPOINT;
  const key = process.env.REACT_APP_TEXT_KEY;
  const trimmedText = text.trim();
  const sentimentObj = {
    isSuccess: false,
    overallSentiment: "",
    positive: 0,
    negative: 0,
    neutral: 0,
  };
  console.log("function called!", endpoint, key);

  const textAnalysisClient = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(key)
  );
  // trimming text arg and checking if text is atleast 2 chars
  if (trimmedText.length > 1) {
    try {
      const result = await textAnalysisClient.analyzeSentiment([trimmedText]);
      // Combining original sentimentObj, a few properties of the result object, and the result.confidenceScores object
      const successSentimentObj = Object.assign(
        {},
        sentimentObj,
        { isSuccess: true, overallSentiment: result[0].sentiment },
        result[0].confidenceScores
      );
      return successSentimentObj;
    } catch (error) {
      const errorSentimentObj = { ...sentimentObj };
      return errorSentimentObj;
    }
  }
};

export { getSentimentAnalysis };
