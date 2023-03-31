import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://8000-psoper1-djangopractice-qid21b643sn.ws-us93.gitpod.io/api/heroes/';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('null')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
      console.log('In Axios Call')
      // console.log(result)
    };

    fetchData();
  }, []);

  // if (data.length === 0) return null

  return (
    <>
      <HomePage data={data} view={view} setView={setView}/>
    </>
  );
}

export default App;