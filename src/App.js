import React from "react";
import logo from "./logo.svg";
import Card from "./Card1";


function App() {
  const title = ["Card title", "Special title treatment"];
  const text = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "With supporting text below as a natural lead-in to additional content.",
  ];
  const link = [
    "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card1.png",
    "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card2.png",
  ];
  const img = { logo };

  return (
    <div>
      <Card
        title={"Card title"}
        all=
        {
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        href=
        {
          "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card1.png"
        }
        >
        <img src={logo} className="card-img-top" />
      </Card>

      <Card
        title={"Special titsle treatment"}
        all=
        {
          "With supporting text below as a natural lead-in to additional content."
        }
        href=
        {
          "https://github.com/netology-code/ra16-homeworks/blob/master/composition/cards/assets/card2.png"
        }
        >
      </Card>
    </div>
  );
}

export default App;
