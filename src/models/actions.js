class Action {
	constructor({ id, name, value, category, effects }) {
		this.id = id;
		this.name = name;
		this.value = value || 0;
		this.category = category || "Uncategorized";
		this.effects = effects || [];
	}
}

export default Action;
