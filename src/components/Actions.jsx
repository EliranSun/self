import { Actions as ActionsConstant } from "../constants";
import Action from "./Action";

import styles from "./components.module.scss";

const Actions = ({ onActionClick }) => {
	return (
		<div className={styles.actions}>
			{ActionsConstant.map((action) => (
				<Action key={action.name} action={action} onClick={onActionClick} />
			))}
		</div>
	);
};

export default Actions;
