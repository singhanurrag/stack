import './App.css';
import './css/style.css';
import Rest from './components/Rest.js';
import Top from './components/Top';
import Cards from './components/Cards.js';

function App() {
  return (
    <>
      <div class="body ">
          <Top/>
          <Cards/>
          <Rest/>
      </div>
    </>
  );
}

export default App;
