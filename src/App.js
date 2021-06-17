
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MainVideo from './components/MainVideo';
import Comments from './components/Comments';
import {Suggestions,Footer} from './components/Suggestions';

function App() {
  return (
    <div className="Container">
      <Navigation/>
      <div className="row">
      <div className='col-md-8'>
        <MainVideo/>
        <Comments/>
      </div>
      <div className="col-md-4">
        <Suggestions/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
