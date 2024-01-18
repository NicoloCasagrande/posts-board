import classes from './Post.module.css';

function Post(props) {

return (
    <div class="p-7 bg-purple-400 rounded-3xl">
      <p class="text-neutral-900 tracking-wide font-semibold uppercase text-2xl">{props.author}</p>
      <p class="tracking-wide italic text-xl">{props.body}</p>
    </div>
  );
}

export default Post;