import { useState, useEffect } from "react";
import styles from "./components.module.scss";

const Gauge = ({ name, value: initialValue = 0 }) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return (
		<div className={styles.gaugeWrapper}>
			<input
				type="range"
				className={styles.gauge}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				min={-10}
				max={10}
			/>
			<div>{name}</div>
		</div>
	);
};

export default Gauge;
