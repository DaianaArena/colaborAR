'use client'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useState } from 'react';

async function getData() {
  const response = await fetch('https://sheetdb.io/api/v1/59b7tphe8m6se');
  const data = await response.json();
  return data;
}

export default function Peliculas() {
  const [plans, setPlans] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => {
    async function fetchData() {
      try {
        const plansData = await getData();
        setPlans(plansData); // Actualiza el estado con los datos recuperados
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {plans.map((plan:any) => (
          <div key={plan.id}>
            {/* Renderiza los datos de cada plan aquí */}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            {/* Agrega más elementos según tus necesidades */}
          </div>
        ))}
      </div>
    </>
  );
}