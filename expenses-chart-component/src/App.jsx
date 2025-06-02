import Balance from "./components/Balance";
import Card from "./components/Card";

function App() {
  return (
    <div className="max-w-[600px]  p-4 flex flex-col gap-4 m-auto mt-16 ">
      <Balance />
      <Card/>
    </div>
  );
}

export default App
