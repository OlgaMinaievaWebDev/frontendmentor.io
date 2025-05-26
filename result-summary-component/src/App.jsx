import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl max-w-3xl w-full">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
