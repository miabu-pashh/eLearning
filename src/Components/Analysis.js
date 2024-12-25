import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Navbar from "./Navbar";

import "./Analysis.css";

// import revenueData from "/Users/maibupash/Downloads/Kishore-udemyC/src/data/revenueData.json";
// import sourceData from "/Users/maibupash/Downloads/Kishore-udemyC/src/data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const Analysis = () => {
  return (
    <>
      <Navbar/>
    <div className="App">
      {/* <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Python",
                data: revenueData.map((data) => data.course1),
                backgroundColor: "rgba(43, 63, 229, 0.8)",
                borderColor: "rgba(43, 63, 229, 0.8)",
              },
              {
                label: "Web Development",
                data: revenueData.map((data) => data.course2),
                backgroundColor: "rgba(250, 192, 19, 0.8)",
                borderColor: "rgba(250, 192, 19, 0.8)",
              },
              {
                label: "Data Sceince",
                data: revenueData.map((data) => data.course3),
                backgroundColor: "rgba(253, 135, 135, 0.8)",
                borderColor: "rgba(253, 135, 135, 0.8)",
              },
              // {
              //   label: "Aws Certifictaion",
              //   data: revenueData.map((data) => data.course4),
              //   backgroundColor: "rgba(257, 137, 131, 0.8)",
              //   borderColor: "rgba(257, 137, 131, 0.8)",
              // },
              // {
              //   label: "Design",
              //   data: revenueData.map((data) => data.course5),
              //   backgroundColor: "rgba(252, 142, 138, 0.8)",
              //   borderColor: "rgba(252, 142, 138, 0.8)",
              // },
              // {
              //   label: "Marketing",
              //   data: revenueData.map((data) => data.course6),
              //   backgroundColor: "rgba(253, 135, 135, 0.8)",
              //   borderColor: "rgba(253, 135, 135, 0.8)",
              // },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Course Analysis",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Scores",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
              
              
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Scores Earned",
              },
            },
            
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Course Completion",
              },
            },
          }}
        />
      </div> */}
    </div>
    </>
  );
};
