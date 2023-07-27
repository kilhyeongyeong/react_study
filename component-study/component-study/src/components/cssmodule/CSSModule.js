import React from "react";
import styles from './CSSModule.module.css';
import styles2 from '../hooks/Average.module.css'
import styles3 from '../hooks/Average.css'

const CSSModule = () => {
    console.log(styles);
    console.log(styles2);
    console.log(styles3);

    return (
        <div className={styles.wrapper}>
            안녕하세요, 저는 <span className="something">CSSModule!</span>
        </div>
    )
}

export default CSSModule;