import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [openCards, setOpenCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  // const handleGroupOpenCard = () => {
  //   if (openCards.card1) {
  //     setOpenCards((prev) => {
  //       return {
  //         ...prev,
  //         card2: false,
  //         card3: false,
  //       };
  //     });
  //   } else if (openCards.card2) {
  //     setOpenCards((prev) => {
  //       return {
  //         ...prev,
  //         card1: false,
  //         card3: false,
  //       };
  //     });
  //   } else {
  //     setOpenCards((prev) => {
  //       return {
  //         ...prev,
  //         card1: false,
  //         card2: false,
  //       };
  //     });
  //   }
  // };

  // useEffect(() => {
  //   handleGroupOpenCard();
  // }, []);

  return (
    <div className=" flex flex-col justify-center items-center h-full gap-8">
      <span id="title" className="text-[#c59d5f] text-4xl">
        general questions
      </span>
      <div className="flex flex-col gap-7">
        <Card
          type="card1"
          open={openCards.card1}
          setOpen={setOpenCards}
          title="do you accept all major credit cards?"
        ></Card>
        <Card
          type="card2"
          open={openCards.card2}
          setOpen={setOpenCards}
          title="do you suppport local farmers?"
        ></Card>
        <Card
          type="card3"
          open={openCards.card3}
          setOpen={setOpenCards}
          title="ddo you use organic ingredients?"
        ></Card>
      </div>
    </div>
  );
}

export default App;
