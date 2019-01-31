
const addDepth = function (obj, tree) {
	if (!obj[tree.depth]) {
		obj[tree.depth] = tree.tree.value;
	}
	else {
		var n = obj[tree.depth];
		obj[tree.depth] += tree.tree.value;
	}
}

const findLargestLevel = function (node) {
	// your code here

	if (node === undefined) {
		return 0;
	}
	let maximum = 0;
	let obj = { tree: node, depth: 0 };
	let queue = [obj];
	let list = {};
	let sum = node.value;

	while (queue.length !== 0) {

		let root = queue.shift();

		if (root.left !== undefined) {
			let tmp = { tree: root.left, depth: root.depth + 1 };
			addDepth(obj, tmp);
			queue.push(root.left);
		}

		if (root.right !== undefined) {
			let tmp = { tree: root.right, depth: root.depth + 1 };
			addDepth(obj, tmp);
			queue.push(root.right);
		}
	}

	for (let key in obj) {
		if (obj[key] > maximum) {
			maximum = obj[key];
		}
	}
	return maximum;

};