
import ResultsChart from "./ResultsChart/ResultsChart";
import ResultsNumber from "./ResultsNumber/ResultsNumber";
import ResultsSciens from "./ResultsSciens/ResultsSciens";
import ResultsSertificates from "./ResultsSertificates/ResultsSertificates";


function Results() {
  return (
    <>
        <main className="bg-black py-[50px]">
          <div className="container">
            <ResultsNumber />
            <ResultsChart />
            <ResultsSciens />
            <ResultsSertificates />
          </div>
        </main>
    </>
  );
}

export default Results;
