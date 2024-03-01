import "./App.css";
import Postslist from "./components/PostsList/PostsList.js";
import MainHeader from "./components/MainHeader/MainHeader.js";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  function hideModalHendler(event) {
    setModalIsVisible(false);
  }

  return (
    <>
      <div className="App" class="bg-purple-900">
        <MainHeader onCreatePost={showModalHandler} />
        <main className="App-body bg-purple-900">
          <section>
            <Postslist
              isPosting={modalIsVisible}
              onStopPosting={hideModalHendler}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
