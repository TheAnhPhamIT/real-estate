import { useEffect, useState } from "react";
import "./Loading.scss";

export default function Loading() {
  const [progressVal, setProgressVal] = useState(10);
  const progressStep = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressVal((prev) => {
        if (prev + progressStep >= 100) {
          clearInterval(intervalId);
        }
        return prev + progressStep;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="loading">
      <h1>Loading...</h1>
      <progress value={progressVal} max={100}></progress>
      <h4>{progressVal}%</h4>
    </section>
  );
}
