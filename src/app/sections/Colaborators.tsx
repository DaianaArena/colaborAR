'use client'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Card from '../components/Card';


async function getData() {
  //const response = await fetch('https://sheetdb.io/api/v1/59b7tphe8m6se');
  //const data = await response.json();
  const data = [
    {
      id: 1,
      name: "Daiana Arena",
      description: "Soy una Desarrolladora FrontEnd con experiencia en metodologías ágiles. Estudiante de Licenciatura en Informática (S21). Mi enfoque proactivo y mi capacidad analítica me permiten trabajar de manera efectiva en equipo y encontrar soluciones creativas a los desafíos que se presentan en el desarrollo de proyectos. Aunque me apasiona la planificación y la organización, también disfruto de agregar un toque divertido y accesible a mi trabajo.",
      position: "Frontend Developer",
      email: "arenadaianam@gmail.com",
      linkedin: "https://www.linkedin.com/in/arenadaiana/"
    },
    {
      id: 2,
      name: "Juan M. Panasiti",
      description: "Soy un desarrollador fullstack con habilidades sólidas en el backend y frontend (aunque mi fuerte es el back). Desarrollo en Linux por lo que también me siento cómodo trabajando desde la terminal en servidores Linux. Soy proactivo y siempre dispuesto a dar una mano a los compañeros",
      position: "Fullstack Developer",
      email: "juanpanasiti@gmail.com",
      linkedin: "https://www.linkedin.com/in/juanmpanasiti/"
    },
    {
      id: 3,
      name: "Ailén Barbagiovanni",
      description: "Soy Analista Programadora, tengo experiencia en metodologías ágiles y me encuentro cursando el último año de la carrera de Analista en Sistemas",
      position: "Analista Programador",
      email: "ai.barbagiovanni@gmail.com",
      linkedin: "https://www.linkedin.com/in/ailén-barbagiovanni/"
    },
    {
      id: 4,
      name: "Diego Tittarelli",
      description: "Soy contador, con maestría en tributación (tesis pendiente) y 19 años de experiencia en implementaciones de ERP, como consultor y líder de proyecto. Mi fuerte son las finanzas, pero tengo muchos conocimientos de procesos, módulos compras, ventas, logística y stock y CRM. Disfruto mucho de los proyectos desafiantes y del aprendizaje contínuo.",
      position: "Consultor / Líder de proyecto",
      email: "dtittarelli1978@gmail.com",
      linkedin: "https://www.linkedin.com/in/diego-tittarelli-939108a3"
    },
    {
      id: 5,
      name: "Ivan Serafini",
      description: "Soy Analista Funcional con experiencia de 2 años, manejo en metodologías ágiles y gestión de proyectos. Conocimientos en UML y SQL. Me enfoco a dar soluciones integradoras para los diferentes clientes.",
      position: "Analista Funcional",
      email: "ivan_sera@hotmail.com",
      linkedin: "https://www.linkedin.com/in/ivan-serafini/"
    },
    {
      id: 6,
      name: "Natalia Cybuch",
      description: "Soy Coordinadora de CX y Diseñadora UX/UI, hace más de 10 años que mi desempeño está focalizado en sectores de gestión, asesoramiento y ejecución comercial en diferentes multinacionalesme. Me siento cómoda siendo parte de equipos en búsqueda de resultados comunes y sobre todo generando espacios agradables de colaboración. Sentirse bien ayuda a hacer mejor o por lo menos con más ganas. Creo que la empatía es lo que nos va a llevar siempre a buen destino.",
      position: "Coordinadora de CX / Diseñadora UX/UI",
      email: "nataliacybuch@gmail.com",
      linkedin: "https://www.linkedin.com/in/nataliacybuch/"
    },
    {
      id: 7,
      name: "Agustina Villaflor",
      description: "Soy licenciada en sistemas con 6 años de experiencia en el ciclo de vida de procesos tecnológicos. Trabajé 3 años como analista funcional y consultora Zoho. Actualmente me desempeño como consultora de procesos de negocio.",
      position: "Analista funcional / Líder",
      email: "villafloragustina@gmail.com",
      linkedin: "https://www.linkedin.com/in/a-villaflor/"
    },
    {
      id: 8,
      name: "Silvana Enriquez",
      description: "Poseo un marcado perfil comercial. Con vocación hacia el cliente orientado a la fidelización. Planificación de estrategias comerciales. Actualmente cursando tecnicatura en Marketing.",
      position: "Comercial",
      email: "gabrielalibra@hotmail.com",
      linkedin: "https://www.linkedin.com/in/silvanaenriquez/"
    },
    {
      id: 9,
      name: "Anabella García Guerra",
      description: "Soy estudiante de ingeniería industrial en la UTN FRBA y poseo una gran experiencia en el área comercial. Mi actitud proactiva me permite poder adquirir conocimientos que permitan realizar mis funciones con un mejor rendimiento y poder contar con conocimientos que me permitan poder tener un crecimiento profesional y personal."
    },
    {
      id: 10,
      name: "Luciano Marinaro",
      description: "Soy Desarrollador PHP, Laravel, Zoho con conocimientos en SQL. Siempre con buena onda y en constante aprendizaje para dar lo mejor de mi en cualquier ámbito que me permita desarrollarme!",
      position: "PHP, Laravel Developer",
      email: "luciano-1368@hotmail.com",
      linkedin: "https://www.linkedin.com/in/luciano-marinaro-a26a42119/"
    }

  ];
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
    <section id="colaborators"  > 
      

      {colaborators && colaborators.length === 0 &&
        <Loader/>
      }

      {colaborators && colaborators.length !== 0 &&
      <div className=" w-full p-6 grid grid-cols-3 justify-items-stretch content-stretch gap-4">
        { colaborators.map((colaborator:any) => (
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
      }
        
      
      </section>
    </>
  );
}