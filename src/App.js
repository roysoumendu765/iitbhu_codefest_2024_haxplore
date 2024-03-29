import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="form">
        <FormSection />
      </div>
      <div className="counter">
        <Counter />
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
