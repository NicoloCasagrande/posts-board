import Post from '../Post/Post';
import { useState } from 'react';
import InputPost from '../InputPost/InputPost';

function Postslist (){

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function nameChangeHadler(event){
        setEnteredName(event.target.value)
    }

    return (
        <div>
            <h1 className='text-6xl font-mono mt-10 tracking-wide text-purple-300'>POST BOARD</h1>
            <p className="text-xl mt-3 font-medium tracking-wider font-mono text-fuchsia-300">Write your personal memory and hang them here !</p>
            <InputPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHadler}/>
            <div className="p-7 pt-0 flex flex-wrap">
                <Post author={enteredName} body={enteredBody}/>
                <Post author="Marco" body="Guarda mamma come scoreggio pure io"/>
            </div>
        </div>
      );
}

export default Postslist;