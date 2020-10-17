import React from  'react';
import styles from './Box.module.css';


const BoxForm = (props) => {

    const {color, setColor, colorList, setColorList} = props;

    const submitColor = (e) => {
        e.preventDefault();
        setColorList([...colorList, color]);
        setColor(""); // to reset the input field
    };

    return(
        <form onSubmit = {submitColor}>
            <div className={styles.boxForm}>
                <label>Color</label>
                <input name="inputField" className={styles.input} type="text" onChange ={ (e) => setColor(e.target.value) } value={color}></input>
                <button type="submit" className={styles.btn}>Add</button>
            </div>
        </form>
    );
}

export default BoxForm;