import { useState } from 'react'
import Form from "./components/Form";
import Card from './components/Card';
import './App.css'

function App() {
  const [personaje, setPersonaje] = useState({
    name: "",
    hero: "",
    submited: false
  });

  const handleHeroOnChange = (event) => {
    const property = event.target.id;

    if(property === "name") {
      setPersonaje({
        ...personaje,
        name: event.target.value
      });
    }
    else {
      setPersonaje({
        ...personaje,
        hero: event.target.value
      });
    }
  }

  const handleHeroOnSubmit = (event) => {
    event.preventDefault();
    console.log(personaje);
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    const validate = regex.test(personaje.name) && regex.test(personaje.hero);
    if(!validate) alert("Revisa por favor los datos, solo se permiten carateres y espacios");
    else {
      setPersonaje({
        ...personaje,
        submited: true
      });
    }
  }

  return (
    <main>
      <div>
        <h1>Hola :D</h1>
        <h2>Cual es tu personaje favorito de Marvel?</h2>
        <h3>Podrias ponerme el nombre y su nombre de heroe</h3>
        <p>Por ejemplo, Tony Stark --- Iron Man</p>
        <Form
          handleHeroOnSubmit={handleHeroOnSubmit}
          personaje={personaje}
          handleHeroOnChange={handleHeroOnChange}
        ></Form>
        <hr />
        {personaje.submited && <Card
          personaje={personaje}
        />}
      </div>
    </main>
  )
}

export default App
