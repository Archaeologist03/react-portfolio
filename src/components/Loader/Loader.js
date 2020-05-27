import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<div style={{ border: '22px solid red' }}>
			{/* <!-- Compressing bars component --> */}
			<div className={`${styles.barsCommon} ${styles.barOne}`}></div>
			<div className={`${styles.barsCommon} ${styles.barTwo}`}></div>
			<div className={`${styles.barsCommon} ${styles.barThree}`}></div>

			{/* <!-- Rotating squares component --> */}
			<div className={`${styles.squaresCommon} ${styles.squareOne}`}></div>
			<div className={`${styles.squaresCommon} ${styles.squareTwo}`}></div>
		</div>
	);
};

export default Loader;
