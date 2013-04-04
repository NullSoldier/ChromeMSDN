Array.prototype.forEach.call (
	document.querySelectorAll ('tr[data*=inherited]'),
	function (node) {
		node.style.display = node.style.display === 'none' ? '' : 'none';
	}
)
