import { wordCloudAPI, wordList } from '../../api/wordCloudAPI'
import { useState, useEffect } from "react";
import { TagCloud } from 'react-tagcloud'


const WordCloud = () => {
  const [words, setWords] = useState([]);

  const getWords = async () => {
    let words = await wordList()
    setWords(words)
  }

  const data = [
    { value: 'thanks', count: 38 },
    { value: 'appreciate', count: 30 },
    { value: 'helpful', count: 28 },
    { value: 'love', count: 25 },
    { value: 'indebted', count: 19 },
    { value: 'inspiration', count: 33 },
    { value: 'blessing', count: 20 },
    { value: 'great', count: 18 },
    { value: 'sincere', count: 15 },
    { value: 'happy', count: 15 },
    { value: 'generous', count: 16 },
    { value: 'support', count: 10 },
    { value: 'wonderful', count: 8 },
    { value: 'grateful', count: 4 },
    { value: 'best', count: 6 },
    { value: 'friend', count: 2 },
    { value: 'delightful', count: 22 },
    { value: 'amazing', count: 12 },
  ]

  const SimpleCloud = () => (
    <TagCloud
    minSize={25}
    maxSize={100}
    tags={words}
    className="simple-cloud"
    style={{ width: 1000, textAlign: 'center' }}
  />
)

  useEffect(() => {
    getWords()
  }, []);

  return(
    <div>
      <h2> Most Used Words of Appreciation </h2>
      <SimpleCloud />
    </div>
  )
}


export default WordCloud;