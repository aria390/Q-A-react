import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [open, setopen] = useState(false);

  return (
    <div className=" flex flex-col justify-center items-center h-full gap-8">
      <span id="title" className="text-[#c59d5f] text-4xl">
        general questions
      </span>
      <div className="flex flex-col gap-7">
        <Card title="do you accept all major credit cards?"></Card>
        <Card title="do you suppport local farmers?"></Card>
        <Card title="ddo you use organic ingredients?"></Card>
      </div>
    </div>
  );
}

export default App;
