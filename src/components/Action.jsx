const Action = ({ action, onClick }) => {
	return (
		<div className="action" onClick={onClick}>
			<div className="action__icon">
				<img src={action.icon} alt={action.name} />
			</div>
			<div className="action__name">{action.name}</div>
		</div>
	);
};

export default Action;
