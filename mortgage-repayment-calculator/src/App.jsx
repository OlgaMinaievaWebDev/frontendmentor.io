import { useState } from "react";
import Form from "./components/Form";
import ResultSection from "./components/ResultSection";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4 py-8">
      <div className="w-full md:w-1/2">
        <Form setResult={setResult} />
      </div>
      <div className="w-full md:w-1/2">
        <ResultSection result={result} />
      </div>
    </div>
  );
}

export default App;
