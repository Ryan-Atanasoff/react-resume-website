import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async() => {
      const dataFromFile = await fetchData();
      setData(dataFromFile);
    }
    getData();
  }, []);

  const fetchData = async() => {
    const res = await fetch('resumeData.json');
    const json_data = await res.json();

    return json_data;
  }

  return (
    <div className = 'container'>
      <NavBar />
      <Header header_data={data} />
      <About about_data={data} />
      <Resume resume_data={data} />
      <Contact contact_data={data} />
      <Footer footer_data={data} />
    </div>
  )
}

export default App;
