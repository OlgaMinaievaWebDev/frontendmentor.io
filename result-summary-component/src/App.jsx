import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row md:rounded-3xl shadow-xl bg-white w-full  max-w-3xl">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
