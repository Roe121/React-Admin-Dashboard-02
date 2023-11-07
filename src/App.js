import './App.css'
import MainDash from './components/MainDash/MainDash';
import RighSide from './components/RightSide/RighSide';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <MainDash/>
          <RighSide/>
        </div>
    </div>
  );
}

export default App;
