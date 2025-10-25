import { useState } from "react";

interface CardPropsType {
  title1: "do you accept all major credit cards?";
}

function Card({ title1 }: CardPropsType) {
  const [open, setopen] = useState("+");
  return (
    <div>
      <div>
        <span>sss</span>
        <button>s</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
        illo dolores quia nemo doloribus quaerat, magni numquam repellat
        reprehenderit.
      </p>
    </div>
  );
}

export default Card;
