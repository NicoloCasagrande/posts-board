import logo from './logo.svg';
import './App.css';
import Postslist from './components/PostsList/PostsList.js';
import InputPost from './components/InputPost/InputPost.js';

function App() {
  return (
    <div className="App">
      <main className="App-body bg-purple-900">
        <h1 className='text-6xl font-mono mt-10 tracking-wide text-purple-300'>POST BOARD</h1>
        <p className="text-xl mt-3 font-medium tracking-wider font-mono text-fuchsia-300">Write your personal memory and hang them here !</p>
        <InputPost />
        <section class="flex p-10 pt-0">
          <Postslist/>
        </section>
      </main>
    </div>
  );
}

export default App;
