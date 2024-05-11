import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(description){
    setSelectedTopic(description);
    console.log(selectedTopic);
  }

  return (
    <div className="App">
      <header className="App-header">
      <section id="menu">
        <TabButton isSelected={selectedTopic === "students"} onSelect={() => handleSelect("students")}> Students </TabButton>
        <TabButton isSelected={selectedTopic === "teachers"} onSelect={() => handleSelect("teachers")}> Teachers </TabButton>
        <TabButton isSelected={selectedTopic === "groups"} onSelect={() => handleSelect("groups")}> Groups </TabButton>
      </section>
        
      </header>
      
      

    </div>
  );
}

export default App;
