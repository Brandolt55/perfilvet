import './App.css';
import VetProfile from  '../src/components/perfil_vet/VetProfile.jsx'
import VetProfileForm from './components/infos/infos_vet.jsx';
import Formulario from './components/infos2/info_profissional.jsx';
function App() {
  return (
    <div>
      <VetProfileForm/>
      <Formulario/>
      <VetProfile/>
    </div>
  );
}

export default App;
