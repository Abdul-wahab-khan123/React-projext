import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const[data ,setData] = useState([]);

  const dataGet = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }

  return (
    <div>
      <button onClick={dataGet}>Data Get</button>
      {data.map(function(elem, idx){
        return <h1>Data{idx}</h1>
      })}
    </div>
  )
};

export default App;