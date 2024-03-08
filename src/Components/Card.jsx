import React from 'react';
import './Card.css'; // Import custom CSS for better styling

export default function Card({ type, value, title }) {


  return (
    <div className={`card card-${type} rounded-3xl h-[180px] flex flex-1 flex-col items-center justify-center`}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}