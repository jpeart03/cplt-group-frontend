const apiUrl = process.env.REACT_APP_API_URL;

const wordCloudAPI = (words) => {
  return fetch(`https://quickchart.io/wordcloud?text=${words}`, {});
};

const wordList = () => {
  return fetch(`${apiUrl}/word_count/`).then((response) => response.json());
};

export { wordCloudAPI, wordList };
