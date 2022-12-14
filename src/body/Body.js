import logo from '../logo.svg';


function Body(props){

return(

<header className="App-header">        
        

        
        <div className='videoclub'>
        <div className='pelicula'>
        <h4>{props.videoclub[0].pelicula}</h4>
        <h4>{props.videoclub[0].edad}</h4>
        <h4>{props.videoclub[0].genero}</h4>
        </div>

        <div className='pelicula'>
        <h4>{props.videoclub[1].pelicula}</h4>
        <h4>{props.videoclub[1].edad}</h4>
        <h4>{props.videoclub[1].genero}</h4>
        </div>

        <div className='pelicula'>
        <h4>{props.videoclub[2].pelicula}</h4>
        <h4>{props.videoclub[2].edad}</h4>
        <h4>{props.videoclub[2].genero}</h4>
        </div>

        <div className='pelicula'>
        <h4>{props.videoclub[3].pelicula}</h4>
        <h4>{props.videoclub[3].edad}</h4>
        <h4>{props.videoclub[3].genero}</h4>
        </div>




        </div>
      
         

        </header>
    )
}

export default Body;