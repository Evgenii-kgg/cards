import React from "react";
import logo from './logo.svg';
import Card from "./Card";

function App() {
  // const title = ["Card title", "Special title treatment"];
  // const text = [
  //   "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //   "With supporting text below as a natural lead-in to additional content.",
  // ];
  // const link = [
  //   "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card1.png",
  //   "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card2.png",
  // ];


  return (
    <div>
      <Card logo={logo}>
        {"Card title"}
        {"Some quick example text to build on the card title and make up the bulk of the card's content."}
        {
          "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card1.png"
        }
      </Card>

      <Card>
        {"Special titsle treatment"}
        {"With supporting text below as a natural lead-in to additional content."}
        {
          "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card2.png"
        }
        </Card>
    </div>
  );
}

export default App;
