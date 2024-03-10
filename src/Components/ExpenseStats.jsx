import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';  

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Expense Stats',
      font: {
        size: 24,
        weight: 900,
      },
    },
  },
};


export default function ExpenseStats() {
  const expenseData = useSelector((state) => state.expenseData.expData);
  const expensesByMonth = groupExpensesByMonth(expenseData);
  const monthlyData = calculateMonthlyData(expensesByMonth);
  

  return <Bar options={options} data={monthlyData} className="max-w-full min-h-[320px]" />;
}


function groupExpensesByMonth(expenseData) {
  const expensesByMonth = {};
  for (const expense of expenseData) {
    const month = new Date(expense.date).getMonth();
    if (!expensesByMonth[month]) {
      expensesByMonth[month] = [];
    }
    expensesByMonth[month].push(expense);
  }
  return expensesByMonth;
}

function calculateMonthlyData(expensesByMonth) {
  const monthlyData = {
    labels: [],
    datasets: [
      { label: 'Income', data: [], backgroundColor: 'rgba(53, 162, 235, 0.5)' },
      { label: 'Expense', data: [], backgroundColor: 'rgba(255, 99, 132, 0.5)' },
    ],
  };

  for (const month in expensesByMonth) {
    monthlyData.labels.push(new Date(0, month).toLocaleDateString('en-US', { month: 'long' }));

    let income = 0;
    let expense = 0;

    for (const expenseItem of expensesByMonth[month]) {
      if (expenseItem.isIncome) {
        income += Number(expenseItem.price);
      } else {
        expense += Number(expenseItem.price);
      }
    }

    monthlyData.datasets[0].data.push(income);
    monthlyData.datasets[1].data.push(expense);
  }

  monthlyData.datasets.forEach((dataset) => {
    if (dataset.data.some(isNaN)) {
      console.error('Warning: Some data points in', dataset.label, 'are NaN');
      dataset.data = dataset.data.map(value => isNaN(value) ? 0 : value);
    }
  });

  return monthlyData;
}

