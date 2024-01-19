import classes from './InputPost.module.css';

function InputPost(){
    let enteredBody = '';

    function changeBodyHandler(event){
        enteredBody = event.target.value;
    }

    return (
        <form className={classes.form}>
            <div className="text-start mb-5">
                <label htmlFor="body" className={classes.formLabel}>Text</label>
                <textarea id ="body" required rows={2} onChange={changeBodyHandler}></textarea>
            </div>
            <div className="text-start">
                <label htmlfor="text" className={classes.formLabel}>Your Name</label>
                <input type="text" required></input>
            </div>

        </form>
    );
}

export default InputPost;