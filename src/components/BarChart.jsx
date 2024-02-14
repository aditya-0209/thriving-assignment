import { Bar } from "react-chartjs-2";
import { Data } from "../utils/data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const BarChart = () => {
  const chartData = {
    labels: Data.map((data) => data.name),
    datasets: [
      {
        label: "completionPercentage",
        data: Data.map((data) => data.completionPercentage),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 0.5,
        barThickness: 20,
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false, // Set to false to allow custom height
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Set the desired maximum value for the y-axis
      },
    },
  };
  const ctx = document.getElementById("myChart");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  }
  return (
    <div className="chart-container h-[70%] mt-[50px]">
      {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
