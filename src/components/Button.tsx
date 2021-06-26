import { useState } from "react";

type ButtonProps = {
   children?: string;
   text?: string;
}

export function Button(props: ButtonProps) {
   //let counter = 0;
   const [counter, setCounter] = useState(0);

   function increment() {
      //counter += 1;
      setCounter(counter + 1);
      console.log(counter);
   }


   return (
      <button onClick={increment}>
         {counter}
      </button>
   )
}

//export default Button;