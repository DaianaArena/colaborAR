'use client'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Card from '../components/Card';


async function getData() {
  const response = await fetch('https://sheetdb.io/api/v1/59b7tphe8m6se');
  const data = await response.json();
  return data;
}

export default function Colaborators() {
  const [colaborators, setColaborators] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => {
    async function fetchData() {
      try {
        const colaboratorsList = await getData();
        setColaborators(colaboratorsList); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <section id="colaborators"> 
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

      {colaborators && colaborators.length === 0 &&
        <Loader/>
      }
        {colaborators && colaborators.length !== 0 && colaborators.map((colaborator:any) => (
          <Card 
            key={colaborator.id}
            name={colaborator.name}  
            description={colaborator.description} 
            resume={colaborator.resume} 
            position={colaborator.position}
            email={colaborator.email}
            linkedin={colaborator.linkedin}

          />
          
        ))}
      </div>
      </section>
    </>
  );
}