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
    { value: 'indebted', count: 33 },
    { value: 'inspiration', count: 18 },
    { value: 'blessing', count: 20 },
    { value: 'great', count: 18 },
    { value: 'sincere', count: 15 },
    { value: 'happy', count: 12 },
    { value: 'generous', count: 10 },
    { value: 'support', count: 10 },
    { value: 'wonderful', count: 8 },
    { value: 'grateful', count: 4 },
    { value: 'best', count: 6 },
    { value: 'friend', count: 2 },
  ]

  const SimpleCloud = () => (
    <TagCloud
    minSize={30}
    maxSize={95}
    tags={data}
    className="simple-cloud"
    style={{ width: 800, textAlign: 'center' }}
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