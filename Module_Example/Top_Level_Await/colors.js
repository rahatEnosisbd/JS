import fetch from "node-fetch";
// const fetch = require("node-fetch")
const colors = fetch('https://mdn.github.io/js-examples/modules/top-level-await/data/colors.json')
	.then(response => response.json());

export default await colors;