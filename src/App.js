import './App.css';
import Header from './header/Header';
import Body from './body/Body'

function App() {

  let persona = {
    name: "Carlos",
    age: 23
  }
  let Mascota = "india";

  let videoclub = [

    {
      pelicula:"El resplandor",
      edad: "+18",
      genero: "terror"
    },
    
    {
      pelicula:"El rey león",
      edad: "todos los públicos",
      genero: "animación"
    },
    
    {
      pelicula:"Harry potter",
      edad: "+12",
      genero: "fantasía"
    },

    {
      pelicula:"El Club de la lucha",
      edad: "+18",
      genero: "acción"
    },



  ]

  return (
    <div className="App">

      <Header />
      <Body persona ={persona} mascota ={Mascota} videoclub = {videoclub} />
      
    </div>
  );
}

export default App;
