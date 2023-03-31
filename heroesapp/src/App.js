import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './HomePage';

let url = 'https://8000-psoper1-djangopractice-qid21b643sn.ws-us93.gitpod.io/api/heroes/';
// let username = 'admin';
// let password = 'dataandyar';
// let credentials = btoa(username + ':' + password);
// let basicAuth = 'Basic ' + credentials;


function App() {
  const [data, setData] = useState( [] );

  useEffect(() => {
    const fetchData = async () => {
      // auth: {
      //   username: uname,
      //   password: pass
      // }
      // const result = await axios(url, { headers: {'Authorization': + basicAuth}});
      const result = await axios(url);
      setData(result.data);
      console.log(result.data)
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