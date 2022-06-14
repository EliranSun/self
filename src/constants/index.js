export const Impact = {
	VeryPositive: 2,
	Positive: 1,
	SlightlyPositive: 0.5,
	SlightlyNegative: -0.5,
	Negative: -1,
	VeryNegative: -2,
};

export const Effects = {
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
	STRESS: "STRESS",
	COMPOSURE: "COMPOSURE",
};

export const ActionNames = {
	EATING_HEALTHY: "Eating Healthy",
	EATING_UNHEALTHY: "Eating Unhealthy",
	EATING_DEPRIVED: "Not Eating",
	SLEEP_WELL: "Sleep Well",
	SLEEP_NOT_ENOUGH: "Not Enough Sleep",
	SLEEP_DEPRIVED: "Deprived Sleep",
	SEX: "Sex",
	MASTURBATION: "Masturbating",
	WORK_BEHIND_SCHEDULE: "Not on work schedule",
	TENNIS: "Tennis",
	APPS: "Designing Apps",
	FACEBOOK: "Visiting Facebook",
	MOM: "visiting mom",
	DAD: "visiting dad",
	GRANDPARENTS: "visiting grandparents",
	ELLA: "Taking care of Ella",
};

export const Actions = [
	{
		name: ActionNames.EATING_HEALTHY,
		effects: {
			[Effects.HUNGER]: Impact.VeryPositive,
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.PHYSICAL_ENERGY]: Impact.Positive,
			[Effects.SHARPNESS]: Impact.SlightlyNegative,
			[Effects.TEMPERATURE]: Impact.SlightlyPositive,
		},
	},
	{
		name: ActionNames.EATING_UNHEALTHY,
		effects: {
			[Effects.HUNGER]: Impact.Positive,
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.SHARPNESS]: Impact.VeryNegative,
			[Effects.TEMPERATURE]: Impact.VeryNegative,
		},
	},
	{
		name: ActionNames.EATING_DEPRIVED,
		effects: {
			[Effects.TEMPERATURE]: Impact.SlightlyNegative,
			[Effects.SHARPNESS]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.SOCIAL]: Impact.SlightlyNegative,
		},
	},
	{
		name: ActionNames.SLEEP_WELL,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryPositive,
			[Effects.TIREDNESS]: Impact.VeryNegative,
			[Effects.HAPPINESS]: Impact.Positive,
		},
	},
	{
		name: ActionNames.SLEEP_NOT_ENOUGH,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.Positive,
			[Effects.TIREDNESS]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.SlightlyNegative,
		},
	},
	{
		name: ActionNames.SLEEP_DEPRIVED,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.SlightlyPositive,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyPositive,
			[Effects.TIREDNESS]: Impact.SlightlyNegative,
			[Effects.HAPPINESS]: Impact.Negative,
		},
	},
	{
		name: ActionNames.SEX,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.PASSION]: Impact.SlightlyNegative,
		},
	},
	{
		name: ActionNames.MASTURBATION,
		effects: {
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.PHYSICAL_ENERGY]: Impact.SlightlyNegative,
			[Effects.HAPPINESS]: Impact.Negative,
			[Effects.PASSION]: Impact.Negative,
		},
	},
	{
		name: ActionNames.WORK_BEHIND_SCHEDULE,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.Negative,
			[Effects.HAPPINESS]: Impact.Negative,
		},
	},
	{
		name: ActionNames.TENNIS,
		effects: {
			[Effects.PHYSICAL_ENERGY]: Impact.VeryNegative,
			[Effects.MENTAL_ENERGY]: Impact.Negative,
		},
	},
	{
		name: ActionNames.APPS,
		effects: {
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
			[Effects.HAPPINESS]: Impact.VeryPositive,
			[Effects.FUN]: Impact.VeryPositive,
			[Effects.CREATIVITY]: Impact.VeryPositive,
			[Effects.PASSION]: Impact.Positive,
		},
	},
	{
		name: ActionNames.FACEBOOK,
		effects: {
			[Effects.HAPPINESS]: Impact.Negative,
			[Effects.MENTAL_ENERGY]: Impact.SlightlyNegative,
		},
	},
	{
		name: ActionNames.MOM,
		effects: {
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.RESPONSIBILITY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
		},
	},
	{
		name: ActionNames.DAD,
		effects: {
			[Effects.HAPPINESS]: Impact.VeryPositive,
			[Effects.RESPONSIBILITY]: Impact.Positive,
			[Effects.MENTAL_ENERGY]: Impact.Negative,
		},
	},
	{
		name: ActionNames.GRANDPARENTS,
		effects: {
			[Effects.HAPPINESS]: Impact.Positive,
			[Effects.RESPONSIBILITY]: Impact.VeryPositive,
			[Effects.MENTAL_ENERGY]: Impact.VeryNegative,
		},
	},
	{
		name: ActionNames.ELLA,
		effects: { [Effects.RESPONSIBILITY]: Impact.VeryPositive },
	},
];
