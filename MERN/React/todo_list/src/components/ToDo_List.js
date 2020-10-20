import React, { useState } from 'react';
import styles from './ToDo.module.css';


const ToDo_List = (props) => {

    const [notesList, setNotesList] = useState([]);
    const [note, setNote] = useState({text: "", checked: false});

    const submitText = (e) => {
        e.preventDefault();
        setNotesList([...notesList, note]);
        setNote({text:""});
    };

    const deleteNote = (value) => {
        setNotesList(notesList.filter(function(item){return item !== value}))
    };

    const isChecked = (index) => {
        let items = [...notesList];
        let item = {...items[index], checked: true};
        items[index] = item;
        setNotesList(items);
    }

    return(
        <div>
        <form className={styles.form} onSubmit = {submitText}>
            <input className={styles.input} type="text" onChange = { (e) => setNote({text: e.target.value, checked: false})} value={note.text}></input>
            <div>
            <button className={styles.button}>Add</button>
            </div>
        </form>
        <div className={styles.displayList}>

        </div>
            {
                notesList.map((item, i) => (
                    <div className={styles.noteRow}>
                        <span className={item.checked ? styles.slashedText : styles.text}>{item.text}</span>
                        <input type="checkbox" className={styles.checkbox} checked={item.checked} onChange={() => isChecked(i)}></input>
                        <button className={styles.deleteButton} onClick={() => deleteNote(item)}>Delete</button>
                    </div>
                ))
            }
        </div>

    );
}

export default ToDo_List;