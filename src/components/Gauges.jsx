import { useEffect, useState, useMemo } from "react";
import { Effects } from "../constants";
import Gauge from "./Gauge";

import styles from "./components.module.scss";

const Gauges = ({ effects = [] }) => {
	const [gauges, setGauges] = useState({});
	const gaugesArray = useMemo(
		() => Object.entries(gauges).map(([name, value]) => ({ name, value })),
		[gauges]
	);

	useEffect(() => {
		const newGauges = { ...gauges };
		effects.forEach((effect) => {
			const traits = Object.entries(effect);
			traits.forEach(([name, value]) => {
				if (newGauges[name]) {
					newGauges[name] += value;
				} else {
					newGauges[name] = value;
				}
			});
		});

		setGauges(newGauges);
	}, [effects]);

	return (
		<div className={styles.gauges}>
			{gaugesArray.map((gauge) => (
				<Gauge key={gauge.name} {...gauge} />
			))}
		</div>
	);
};

export default Gauges;
