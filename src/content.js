Array.prototype.forEach.call (
	document.querySelectorAll ('tr'),
	function (node) {
		if(node.innerHTML.indexOf('(Inherited from') != -1){
			node.style.display = node.style.display === 'none' ? '' : 'none';
		}
	}
)
