import Post from "../Post/Post";
import { useState } from "react";
import InputPost from "../InputPost/InputPost";
import Modal from "../Modal/Modal";

function Postslist({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHadler(event) {
    setEnteredName(event.target.value);
  }

  //   let modalContent;

  //   modalContent = (
  //     <Modal onClose={onStopPosting}>
  //       <InputPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHadler}
  //       />
  //     </Modal>
  //   );

  return (
    <>
      <div class="mt-20">
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <InputPost
              onBodyChange={bodyChangeHandler}
              onAuthorChange={authorChangeHadler}
            />
          </Modal>
        )}
        <div className="p-7 pt-0 flex flex-wrap">
          <Post author={enteredName} body={enteredBody} />
          <Post author="Marco" body="Guarda mamma come mi diverto" />
        </div>
      </div>
    </>
  );
}

export default Postslist;
