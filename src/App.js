import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <FormSection />
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
