import { useEffect, useState } from "react";
import "./Loading.scss";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const [progressVal, setProgressVal] = useState(10);
  const progressStep = 5;
  const { t } = useTranslation();

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
      <h1>{t("loading")}...</h1>
      <progress value={progressVal} max={100}></progress>
      <h4>{progressVal}%</h4>
    </section>
  );
}
