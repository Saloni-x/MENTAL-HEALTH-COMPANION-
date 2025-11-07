// src/pages/MoodTracker.js
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Chart.js register karna zaruri hai
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MoodTracker() {
  const [moods, setMoods] = useState([]);
  const [labels, setLabels] = useState([]);
  const [count, setCount] = useState(1);

  // Mood add karne ka function
  const addMood = (mood) => {
    setMoods([...moods, mood]);
    setLabels([...labels, `Day ${count}`]);
    setCount(count + 1);
  };

  // Chart ka data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Mood Levels",
        data: moods,
        backgroundColor: moods.map((m) =>
          m === 1 ? "#f87171" : m === 2 ? "#facc15" : "#4ade80"
        ), // Red = Sad, Yellow = Stress, Green = Happy
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Mood Tracker Bar Graph" },
    },
    scales: {
      y: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: (value) => {
            if (value === 1) return "😔 Sad";
            if (value === 2) return "😣 Stress";
            if (value === 3) return "😊 Happy";
            return "";
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mood Tracker 📊 (Bar Graph)</h2>

      {/* Mood Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => addMood(3)} style={{ margin: "5px", padding: "10px" }}>
          😊 Happy
        </button>
        <button onClick={() => addMood(1)} style={{ margin: "5px", padding: "10px" }}>
          😔 Sad
        </button>
        <button onClick={() => addMood(2)} style={{ margin: "5px", padding: "10px" }}>
          😣 Stress
        </button>
      </div>

      {/* Graph */}
      {moods.length > 0 ? <Bar data={data} options={options} /> : <p>No moods added yet!</p>}
    </div>
  );
}

export default MoodTracker;