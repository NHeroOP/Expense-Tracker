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
        income += expenseItem.price;
      } else {
        expense += expenseItem.price;
      }
    }
    monthlyData.datasets[0].data.push(income);
    monthlyData.datasets[1].data.push(expense);
  }

  return monthlyData;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Profit',
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Loss',
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function ExpenseStats() {
  const expenseData = useSelector((state) => state.expData);
  const expensesByMonth = groupExpensesByMonth(expenseData);
  const monthlyData = calculateMonthlyData(expensesByMonth);

  return <Bar options={options} data={monthlyData} />;
}