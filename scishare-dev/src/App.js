import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FeedPost from "./components/feedpost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="feedcards align-middle">
        <FeedPost authorName="Luiz Fernando Paes" text="Hello, world!" />
        <FeedPost authorName="Julia" text="Bom dia" />
        <FeedPost authorName="Kassadin" text="Kai'Sa" />
        <FeedPost authorName="Gangplank" text="Sarah Fortune" />
        <FeedPost authorName="Alune" text="Aphelios" />
      </div>
    </div>
  );
}

export default App;
