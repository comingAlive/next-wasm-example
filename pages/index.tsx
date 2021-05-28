import dynamic from "next/dynamic";
import { useState } from "react";
import { add_one } from "../pkg";

type Props = {
  x: number;
};

const RustComponent = dynamic({
  loader: async () => {
    // Import the wasm module
    const { add_one } = await import("../pkg");
    // Return a React component that calls the add_one method on the wasm module
    return ({ x }: Props) => <div>{add_one(x)}</div>;
  },
});

const Page = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <RustComponent x={number} />
      <div onClick={() => setNumber(number + 1)}>+</div>
    </div>
  );
};

export default Page;
