import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/header/header'
import { useState} from 'react';
import Bloc from '../../components/bloc/bloc'



function Home(props) {

  const [isLogged, setIsLoged] = useState(0);

  return (
    
    <div class="container-fluid" id="john">
      <div>
        <Header userLogged={isLogged}/>
      </div>
        <Bloc />
    </div>

  );
}

export default Home;
