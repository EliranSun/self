class Action {
	constructor({ id, name, value, category, effects }) {
		this.id = id;
		this.name = name;
		this.value = value || 0;
		this.category = category || "Uncategorized";
		this.effects = effects || [];
	}
}

const Impact = {
	VeryPositive: 2,
	Positive: 1,
	SlightlyPositive: 0.5,
	SlightlyNegative: -0.5,
	Negative: -1,
	VeryNegative: -2,
};

const Effects = {
	HUNGER: "HUNGER",
	TIREDNESS: "TIREDNESS",
	MENTAL_ENERGY: "MENTAL_ENERGY",
	PHYSICAL_ENERGY: "PHYSICAL_ENERGY",
	SOCIAL: "SOCIAL",
	FUN: "FUN",
	HAPPINESS: "HAPPINESS",
	SHARPNESS: "SHARPNESS",
	TEMPERATURE: "TEMPERATURE",
	PASSION: "PASSION",
	CREATIVITY: "CREATIVITY",
	RESPONSIBILITY: "RESPONSIBILITY",
};

const Actions = [
	{
		name: "Eating Healthy",
		effects: {
			[Effects.HUNGER]: Impact.VeryPositive,
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.PHYSICAL_ENERGY]: Impact.Positive,
			[Effects.SHARPNESS]: Impact.SlightlyNegative,
			[Effects.TEMPERATURE]: Impact.SlightlyPositive,
		},
	},
	{
		name: "Eating Unhealthy",
		effects: {
			[Effects.HUNGER]: Impact.Positive,
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.SHARPNESS]: Impact.VeryNegative,
			[Effects.TEMPERATURE]: Impact.VeryNegative,
		},
	},
	{
		name: "Not Eating",
		effects: {
			[Effects.TEMPERATURE]: Impact.SlightlyNegative,
			[Effects.SHARPNESS]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.SOCIAL]: Impact.SlightlyNegative,
		},
	},
	{
		name: "Sleep Well",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryPositive,
			[Effects.TIREDNESS]: Impact.VeryNegative,
			[Effects.HAPPINESS]: Impact.Positive,
		},
	},
	{
		name: "Not Enough Sleep",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.Positive,
			[Effects.TIREDNESS]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.SlightlyNegative,
		},
	},
	{
		name: "Deprived Sleep",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.SlightlyPositive,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyPositive,
			[Effects.TIREDNESS]: Impact.SlightlyNegative,
			[Effects.HAPPINESS]: Impact.Negative,
		},
	},
	{
		name: "Sex",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.PASSION]: Impact.SlightlyNegative,
		},
	},
	{
		name: "Masturbating",
		effects: {
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.PHYSICAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.HAPPINESS]: Impact.Negative,
			[Effects.PASSION]: Impact.Negative,
		},
	},
	{
		name: "Not on work schedule",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.Negative,
		},
	},
	{
		name: "Tennis",
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.MENTAL_ENERGY]: Impact.Negative,
		},
	},
	{
		name: "Designing Apps",
		effects: {
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
			[Effects.HAPPINESS]: Impact.VeryPositive,
			[Effects.FUN]: Impact.VeryPositive,
			[Effects.CREATIVITY]: Impact.VeryPositive,
			[Effects.PASSION]: Impact.Positive,
		},
	},
	{
		name: "Visiting Facebook",
		effects: {
			[Effects.HAPPINESS]: Impact.Negative,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
		},
	},
	{
		name: "visiting mom",
		effects: {
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.RESPONSIBILITY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
		},
	},
	{
		name: "visiting dad",
		effects: {
			[Effects.HAPPINESS]: Impact.VeryPositive,
			[Effects.RESPONSIBILITY]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.Negative,
		},
	},
	{
		name: "visiting grandparents",
		effects: {
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.RESPONSIBILITY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
		},
	},
	{
		name: "Taking care of Ella",
		effects: { [Effects.RESPONSIBILITY]: Impact.VeryPositive },
	},
];
