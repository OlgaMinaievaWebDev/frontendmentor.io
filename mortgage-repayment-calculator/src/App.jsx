import { useState } from "react";
import Form from "./components/Form";
import ResultSection from "./components/ResultSection";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="bg-slate-300 h-screen w-screen m-auto md:flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4 py-8 bg-white">
        <div className="w-full md:w-1/2 ">
          <Form setResult={setResult} />
        </div>
        <div className="w-full md:w-1/2 ">
          <ResultSection result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
