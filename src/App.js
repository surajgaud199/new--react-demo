import './App.css';
import MyProfilebutton from './componemt/Myprofilebutton';
import Myinfo from './componemt/Myinfo';




function App() {
  return (
    <div className="App">
       <h1>MyProfile</h1>
       <p>This is a littal repot Card</p>
       <div className='Profile'>
       <Myinfo/>
       <MyProfilebutton/>
       </div>
       <div className='Profile'>
       <Myinfo/>
       <MyProfilebutton/>
       </div>
       <div className='Profile'>
       <Myinfo/>
       <MyProfilebutton/>
       </div>
    </div>
    
  );
}

export default App;
