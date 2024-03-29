import './App.css';
// import MainApp from './components';
import MainApp from './components/MainApp';
import { Route, Routes } from 'react-router-dom';
import FormSection from "./components/FormSection";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp/>} />
      <Route path='/buy' element={<FormSection/>} />
    </Routes>
  );
}
<div className="form">
<FormSection />
</div>
export default App;
