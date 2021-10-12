const apiUrl = process.env.REACT_APP_API_URL;

const wordCloudAPI = (words) => {
  return fetch(`https://quickchart.io/wordcloud?text=${words}`, {});
};

const wordList = async () => {
  try {
    return await fetch(`${apiUrl}/word_count/`).then((response) =>
      response.json()
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { wordCloudAPI, wordList };
