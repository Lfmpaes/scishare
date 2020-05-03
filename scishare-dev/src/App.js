import React from "react";
import "./App.css";

import Navbar from "./components/navbar";
import FeedPost from "./components/feedpost";
import RegisterForm from "./components/registerform";

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="register-form">
      <RegisterForm />
      </div>

      <div className="feedcards">
        <FeedPost authorName="Luiz Fernando Paes" text="Hello, world!" />
        <FeedPost authorName="Julia" text="Bom dia" />
        <FeedPost
          authorName="Lorem Ipsum"
          text="Lorem reprehenderit magna sint aute officia mollit reprehenderit. Aute velit ut consequat laborum mollit duis commodo fugiat esse. Reprehenderit pariatur ea cupidatat minim laboris."
        />
        <FeedPost authorName="Kassadin" text="Kai'Sa" />
        <FeedPost authorName="Gangplank" text="Sarah Fortune" />
        <FeedPost authorName="Alune" text="Aphelios" />
      </div>
    </div>
  );
}

export default App;
