interface CardPropsType {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<
    React.SetStateAction<{
      card1: boolean;
      card2: boolean;
      card3: boolean;
    }>
  >;
  type: "card1" | "card2" | "card3";
}

function Card({ title, open, setOpen, type }: CardPropsType) {
  return (
    <div className="w-[500px] max-w-[620px] bg-white shadow-xl rounded p-5 transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="capitalize text-slate-800 font-medium">{title}</span>
        <button
          className="hover:scale-90 cursor-pointer transition-transform text-xl pb-1 border-2 border-[#c59d5f] text-[#c59d5f] flex justify-center items-center w-7  h-7"
          onClick={() => {
            if (type === "card1") {
              setOpen((prev) => ({
                ...prev,
                card1: !prev.card1,
                card2: false,
                card3: false,
              }));
            } else if (type === "card2") {
              setOpen((prev) => ({
                ...prev,
                card2: !prev.card2,
                card1: false,
                card3: false,
              }));
            } else {
              setOpen((prev) => ({
                ...prev,
                card3: !prev.card3,
                card1: false,
                card2: false,
              }));
            }
          }}
        >
          {open === false ? "+" : "-"}
        </button>
      </div>
      <div
        className={
          open === false
            ? " hidden mt-4 flex-col gap-4"
            : "mt-4 flex flex-col gap-4"
        }
      >
        <hr className="text-gray-500" />
        <p className="text-[#617d98] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
          illo dolores quia nemo doloribus quaerat, magni numquam repellat
          reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default Card;
