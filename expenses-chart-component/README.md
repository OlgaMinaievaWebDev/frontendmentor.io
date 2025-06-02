# Expenses Chart Component

A responsive data visualization component built with React and Chart.js that displays weekly spending patterns with interactive features.

## LiveDemo
https://frontendmentor-io-xwht.vercel.app/
## Features

- **Interactive Bar Chart**: Hover over bars to view exact amounts
- **Day Highlighting**: Highlights day's spending
- **Responsive Design**: Adapts to all screen sizes
- **Data-Driven**: Uses JSON data to dynamically generate the chart
- **Accessible**: Proper ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white" alt="Chart.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E" alt="Vite">
</div>

## Project Structure 
src/
├── components/
│   ├── Balance.jsx        # Balance display component
│   ├── Chart.jsx          # Main chart visualization
│   └── SpendingCard.jsx   # Wrapper component
├── data/
│   └── spendingData.json  # Weekly spending data
├── assets/
│   └── logo.svg           # Brand logo
└── App.jsx                # Main application entry

## 📜 License
MIT License 