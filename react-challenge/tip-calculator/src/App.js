import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [total, setTotal] = useState([]);
  return (
    <>
      <Bill bill={bill} setBill={setBill}>
        How much was the bill?
      </Bill>
      <Service setTotal={setTotal} total={total} keys={0}>
        How did you like the service?
      </Service>
      <Service setTotal={setTotal} total={total} keys={1}>
        How did your friend like the service?
      </Service>
      <Total bill={bill} total={total}></Total>
      <Reset bill={bill} setBill={setBill}>
        Reset
      </Reset>
    </>
  );
}
function Bill({ children, bill, setBill }) {
  return (
    <div>
      {children}
      <input
        type="number"
        placeholder={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
function Service({ children, setTotal, total, keys }) {
  function sett(index, value) {
    let newArr = [...total];
    newArr[index] = value;
    setTotal(newArr);
  }
  // const newArray = [...total];
  // console.log(keys);
  return (
    <div>
      {children}
      <select
        onChange={
          (e) =>
            total.length < 2
              ? setTotal([...total, Number(e.target.value)])
              : sett(keys, Number(e.target.value)) //:setTotal(total)
          // total.map((x, i) =>i === Number(keys)?(newArray[Number(keys)] = Number(e.target.value)):
          // total.length < 2
          //   ? setTotal([...total, Number(e.target.value)])
          //   : setTotal(
          //       total.map((x, i) =>
          //         i === Number(keys)
          //           ?&&newArray
          //           : setTotal(total)
          //       )
          //     )
        }
      >
        <option value="5">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Total({ bill, total }) {
  const tip =
    total.length === 0
      ? 0
      : (bill * total.reduce((acc, curr) => acc + curr, 0)) /
        total.length /
        100;
  const totalBill = tip + Number(bill);
  return bill === 0 ? (
    <></>
  ) : (
    <h3>
      You pay ${totalBill} ( $ {bill} + $ {tip})
    </h3>
  );
}
function Reset({ bill, children, setBill }) {
  return bill === 0 ? <></> : <button onClick={()=>setBill(0)}>{children}</button>;
}
