import './App.css';
import { IplInput } from './Components/Ipl_Input';
import Footer from './Components/Footer';
import BasicExample from './Components/Nav';
function App() {
  return (
    <>
      
      <div className="App">
            <div style={{height:"92vh"}} className="content-wrap">
              <BasicExample/>
              <IplInput/>
            </div>
            <Footer/>
        </div>
    </>
  );
}

export default App;
