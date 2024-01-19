import Post from '../Post/Post';
import classes from './PostsList.module.css';

function Postslist (){
    return (
        <div className="p-7 flex">
            <Post author="Nicolò" body="Guarda mamma come scoreggio"/>
            <Post author="Marco" body="Guarda mamma come scoreggio pure io"/>
        </div>
      );
}

export default Postslist;