import React from 'react';
import styles from './Box.module.css';

const BoxDisplay = (props) => {

    const {colorList} = props;

    return(
        <div className={styles.boxContainer}>
            
            {
            colorList.map((item, i) =>(
                <div className={styles.box} style={{background:item}}></div>  
                )
            )
        }
            
        </div>
    );
}

export default BoxDisplay;