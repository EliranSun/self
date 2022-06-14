class Action {
	constructor({ id, name, value, category }) {
		this.id = id;
		this.name = name;
		this.value = value || 0;
		this.category = category || "Uncategorized";
	}
}

const Actions = [
	"Eating Healthy",
	"Eating Unhealthy",
	"Sleep Well",
	"Not Enough Sleep",
	"Sex",
	"Masturbating",
	"Designing Apps",
	"Visiting Facebook",
];
