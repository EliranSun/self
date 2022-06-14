class Action {
	constructor({ id, name, value, category }) {
		this.id = id;
		this.name = name;
		this.value = value || 0;
		this.category = category || "Uncategorized";
	}
}

const Actions = [
	{ name: "Eating Healthy" },
	{ name: "Eating Unhealthy" },
	{
		name: "Not Eating",
		effects: {
			temperature: -0.5,
			sharpness: +1,
			mentalEnergy: -0.5,
			physicalEnergy: -10,
			social: -0.5,
		},
	},
	{ name: "Sleep Well" },
	{ name: "Not Enough Sleep" },
	{ name: "Sex" },
	{ name: "Masturbating" },
	{ name: "Designing Apps" },
	{ name: "Visiting Facebook" },
];
