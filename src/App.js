import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return loaded ? (
    <ol>
      {data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  ) : (
    '데이터 fetch 미완료'
  );
}

export default App;
