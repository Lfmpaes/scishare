import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FeedPost from "./components/feedpost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-sm feedpost-container">
        <FeedPost authorName="Lorem Ipsum" text="Olá!" />
        <FeedPost authorName="Ronaldo" text="Bom dia" />
        <FeedPost authorName="Kassadin" text="Kai'Sa" />
        <FeedPost authorName="Gangplank" text="Sarah Fortune" />
        <FeedPost authorName="Alune" text="Aphelios" />
      </div>
    </div>
  );
}

export default App;
