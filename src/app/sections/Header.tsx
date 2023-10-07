import React from 'react'
import Button from '../components/Button'


const Header = () => {
  return (
    <>
    <h2 className="mb-4 text-4xl font-semibold">ColaborAR</h2>
    <h4 className="mb-6 text-xl font-semibold">Una red de colaboradores de IT autogestiva. <br/>Descubre talento excepcional en Argentina y México. <br/>Explora perfiles de colaboradores calificados y haz crecer tu equipo con nosotros.</h4>
    <Button text="¡Conocenos!" link="/#colaboradores"/>
    </>
    
  )
}

export default Header