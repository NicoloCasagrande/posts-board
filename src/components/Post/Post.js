import classes from './Post.module.css';

function Post(props) {

return (
    <div className="p-7 bg-purple-400 rounded-3xl m-4 max-w-80">
      <p className="text-neutral-900 tracking-wide font-semibold uppercase text-lg text-start pb-2">{props.author}</p>
      <p className="tracking-wide text-xl text-start text-neutral-700">{props.body}</p>
    </div>
  );
}

export default Post;