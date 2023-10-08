import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Home } from '../Home/Home'
import { Blog } from '../Blog/Blog'
import { Connect } from '../Connect/Connect'
import { Photography } from '../Photography/Photography'
import { TonTechnologies } from '../TonTechnologies/TonTechnologies'
import { Projects } from '../Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/tontechnologies" element={<TonTechnologies/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/photography" element={<Photography/>}/>
        <Route path="/connect" element={<Connect/>}/>
      </Routes>
    </div>
  );
}

export default App;
