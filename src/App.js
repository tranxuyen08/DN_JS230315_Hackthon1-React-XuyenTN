import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import ListStudents from './components/ListStudents';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [studentData, setStudentData] = useState([]);
  const [sum, setSum] = useState(0);
  const addStudent = (student) => {
    setStudentData(prevData => [...prevData, student]);
  };

  const handleDelete = (index) => {
    const updatedPlayers = [...studentData];
    updatedPlayers.splice(index, 1);
    setStudentData(updatedPlayers);
  };

  const handlePlus = (index) => {
    const updatedPlayers = [...studentData];
    updatedPlayers[index].point += 1;
    setStudentData(updatedPlayers);
  };

  const handleMinus = (index) => {
    const updatedPlayers = [...studentData];
    if (updatedPlayers[index].point > 0) {
      updatedPlayers[index].point -= 1;
      setStudentData(updatedPlayers);
    }
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
      <Header studentData={studentData} sum={sum} />
        <ListStudents
          data={studentData}
          onDelete={handleDelete}
          onPlus={handlePlus}
          onMinus={handleMinus}
        />
        <Footer onAdd={addStudent} />
      </section>
    </div>
  );
}

export default App;
