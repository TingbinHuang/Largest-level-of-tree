var BinarySearchTree = function (value) {
	var newTree = {};
	newTree.value = value;
	newTree.left = null;
	newTree.right = null;
	_.extend(newTree, methods);
	return newTree;
};

var methods = {};

methods.insert = function (value) {
	function addNode(value, root) {
		if (root === null) {
			return BinarySearchTree(value);
		}
		else if (root.value > value) {
			root.left = addNode(value, root.left);
		}
		else {
			root.right = addNode(value, root.right);
		}
		return root;
	}
	addNode(value, this);
}

methods.contains = function (value) {
	var list = [-1];
	function search(value, root) {
		if (root.value === value) {
			list[0] = value;
			return;
		}
		if (root.left === null && root.right === null) {
			return;
		}
		else if (root.value > value) {
			search(value, root.left);
		}
		else {
			search(value, root.right);
		}
	}
	search(value, this);      // call 'search()' function
	return list[0] === value;
}

methods.depthFirstLog = function (func) {
	var list = [];
	list.push(this.value);
	func(this.value);

	function dfs(func, root) {
		if (root === null) {
			return;
		}
		dfs(func, root.left);
		if (!list.includes(root.value)) {
			func(root.value);
			list.push(root.value);
		}
		dfs(func, root.right);
	}
	dfs(func, this);
}

//Add a function to printout node in postoder
methods.inOrderTraversal = function (func) {
	var list = [];
	list.push(this.value);
	func(this.value);

	function dfs(func, root) {
		if (root === null) {
			return;
		}
		dfs(func, root.left);

		dfs(func, root.right);
		if (!list.includes(root.value)) {
			func(root.value);
			list.push(root.value);
		}
	}
	dfs(func, this);
}
