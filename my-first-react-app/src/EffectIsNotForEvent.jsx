  import { useState } from "react";

  export default function EffectIsNotForEvent() {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
      setInput(e.target.value);
    };

    // You should avoid direct manipulation when not necessary

    // useEffect(() => {
    //   document.getElementById("name").addEventListener("change", handleInput);
    //   return () => {
    //     document.getElementById("name").removeEventListener("change", handleInput);
    //   }
    // });

    return (
      <>
        {/* <input id="name" /> */}

        <input onChange={handleInput} value={input} />
        <p>{ input }</p>
      </>
    );
  }
