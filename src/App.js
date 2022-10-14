
import './App.css';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { Sidebar } from './components/Sidebar';
import {ProductProvider} from './ProductContext'


function App() {
  return (
    <ProductProvider>
        <div className="App">
          <Navbar/>
          <Body/>
          <Sidebar/>
       </div>
    </ProductProvider>
  );
}

export default App;
