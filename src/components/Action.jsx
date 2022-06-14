import styles from "./components.module.scss";

const Action = ({ action, onClick }) => {
	return (
		<div className={styles.action} onClick={() => onClick(action.effects)}>
			<button className="action__name">{action.name}</button>
		</div>
	);
};

export default Action;
