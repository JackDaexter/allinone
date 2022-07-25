import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/header/header'
import { useState} from 'react';
import Blocs from '../../components/bloc/bloc'



function Home(props) {

  const [isLogged, setIsLoged] = useState(0);

  return (
    
    <div class="container-fluid" id="john">
      <div class="row flex-nowrap">
        <div class="col-4 col-md-3 col-xl-2">
          <Header userLogged={isLogged}/>
        </div>
        <div class="col-8">
          <Blocs />
        </div>
      </div>
    </div>

  );
}



export default Home;
