import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <FormSection />
      <Footer/>
    </div>
  );
}

export default App;
