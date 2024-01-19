import logo from './logo.svg';
import './App.css';
import Postslist from './components/PostsList/PostsList.js';
import InputPost from './components/InputPost/InputPost.js';

function App() {
  return (
    <div className="App">
      <main className="App-body bg-purple-900">
        <InputPost />
        <section className="flex p-10 pt-4">
          <Postslist/>
        </section>
      </main>
    </div>
  );
}

export default App;
