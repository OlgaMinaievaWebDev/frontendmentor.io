import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import data from '../data.json'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const chartData = {
    labels: data.map((item) => item.day), //display days of the week
    datasets: [
      {
        data: data.map((item) => item.amount), //amount as data
        backgroundColor: data.map((item) =>
          item.day === "wed" ? "hsl(186, 34%, 65%)" : "hsl(10, 79%, 65%)"
        ),
        borderRadius: 5, // Rounded corners for bars
        borderSkipped: false, // Ensure bars have rounded corners
        barPercentage: 0.8, // Smaller = thinner bars
        categoryPercentage: 0.6, // Smaller = more spacing between groups
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toFixed(2)}`,
        },
        padding: 10,
        cornerRadius: 5,
        titleColor: "white",
        bodyColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false, // ✅ remove axis line
        },
        border: {
          display: false, // ✅ for Chart.js v4
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  };
  

  return (
    <div className="border-b border-gray-200 pb-6">
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default BarChart;
