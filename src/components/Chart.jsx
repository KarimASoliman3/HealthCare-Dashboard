import { Line } from "react-chartjs-2";
import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

import { PatientsContext } from "../context/PatientContext";

export default function Chart() {
  const { patients, loading } = useContext(PatientsContext);

  if (loading) return null;

  const patient = patients[3];

  const last6Months = patient.diagnosis_history.slice(0, 6).reverse();

  const labels = last6Months.map(
    (item) => `${item.month.slice(0, 3)} ${item.year}`
  );

  const systolic = last6Months.map(
    (item) => item.blood_pressure.systolic.value
  );

  const diastolic = last6Months.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        data: systolic,
        borderColor: "#7E6CAB",
        backgroundColor: "rgba(126,108,171,0.15)",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointHoverRadius: 8,
      },
      {
        data: diastolic,
        borderColor: "#C26EB4",
        backgroundColor: "rgba(194,110,180,0.15)",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        pointHoverRadius: 8,
      },
    ],
  };

 const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 60,
      max: 180,
      ticks: {
        stepSize: 10,
      },
      grid: {
        drawTicks: true, // keeps small tick marks if needed
        color: "#e0e0e0", // optional: very light horizontal lines
      },
    },
    x: {
      grid: {
        display: false, // ❌ removes vertical lines
      },
    },
  },
};


  return (
    <>
      {" "}
      <div className="w-full">
        <Line data={data} options={options} />
      </div>
    </>
  );
}
