import './App.css';
// import MainApp from './components';
import MainApp from './components/MainApp';
import { Route, Routes } from 'react-router-dom';
import FormSection from "./components/FormSection";
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path='/buy' element={<FormSection />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>


  );
}
<div className="form">
  <FormSection />
</div>
export default App;
