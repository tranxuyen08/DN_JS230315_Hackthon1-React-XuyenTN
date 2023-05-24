import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import ListStudents from './components/ListStudents';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [studentData, setStudentData] = useState([]);
  const [sum, setSum] = useState(0);
  const [maxPoint, setMaxPoint] = useState()

  const addStudent = (student) => {
    setStudentData(prevData => [...prevData, student]);
  };

  useEffect(() => {
    let totalPoints = 0;
    studentData.forEach((element) => {
      totalPoints += element.point;
    });
    setSum(totalPoints);
  }, [studentData]);

  

  return (
    <div className="App">
      <section className='container'>
        <Header sum={sum} studentData={studentData}/>
        <ListStudents data={studentData} />
        <Footer onAdd={addStudent} />
      </section>
    </div>
  );
}

export default App;
