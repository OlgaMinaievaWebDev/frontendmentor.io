import Balance from "./components/Balance";
import Card from "./components/Card";

function App() {
  return (
    <div className="max-w-[600px] mx-auto p-4 flex flex-col gap-4 md:max-w-[800px] lg:max-w-[1000px]">
      <Balance />
      <Card/>
    </div>
  );
}

export default App
