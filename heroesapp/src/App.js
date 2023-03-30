import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './HomePage';

function App() {
  const [data, setData] = useState({ data: [] });
//   const [view, setView] = useState('Initial');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://8000-psoper1-djangopractice-qid21b643sn.ws-us93.gitpod.io/api/heroes/',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export default App;