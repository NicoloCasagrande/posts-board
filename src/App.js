import logo from './logo.svg';
import './App.css';
import Postslist from './components/PostsList/PostsList.js';


function App() {
  return (
    <div className="App">
      <main className="App-body bg-purple-900">
        <section>
          <Postslist/>
        </section>
      </main>
    </div>
  );
}

export default App;
