const deepFilter = (obj, filter) => {
	// Write your solution here
	return
}

const obj = {
	a: 1,
	b: {
		c: "Hello World",
		d: 2,
		e: {
			f: {
				g: -4,
			},
		},
		h: "Good Night Moon",
	},
};

console.log(`Result: ${deepFilter(obj, (s) => typeof s === "string")}`)
