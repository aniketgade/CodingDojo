import React, { useState } from 'react';
import styles from './Tabs.module.css'

const Tabs = (props) => {

    const itemArray = props.itemArray;

    const [content, setContent] = useState("");
    const [clickState, setClickstate] = useState(null);

    const onClickTab = (e, item, i) => {
        
        setClickstate(i);
        
        //clearOtherTabs;

        // e.target.style.backgroundColor = 'black';
        // e.target.style.color = 'white';

        setContent(item.content);

       // <DisplayContent content={item.content}/>

    }

    const clearOtherTabs = () => {
        {
           
        }
    }

    const highlightTab = (tab) => {

    }

    return(
        <div className={styles.container}>
            {
                itemArray.map((item,i) => (
                    <div className={ i === clickState ? styles.selected : styles.header } onClick={(e) => onClickTab(e,item,i)}>{item.label}</div>
                ))
                
            }
            <div className={styles.contentContainer}> 
            <p>{content} </p>
            </div>
        </div>
    );
}

export default Tabs;