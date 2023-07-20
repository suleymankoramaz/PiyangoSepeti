import './global.css';
import DefaultRouter from './Routers/DefaultRouter';
import NavbarComp from './Components/NavbarComp';
import PageFoot from './Components/PageFoot';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      <DefaultRouter/>
      <PageFoot/>
    </div>
  );
}

export default App;
