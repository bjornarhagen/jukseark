(function() {
	var checkReadyState = setInterval(function() {
		if (document.readyState === 'complete') {
			clearInterval(checkReadyState);
			run();
		}
	}, 50);

	function run() {
		var allKatexElements = document.querySelectorAll('.katex');

		for (var i = allKatexElements.length - 1; i >= 0; i--) {
			window.katex.render(allKatexElements[i].innerHTML, allKatexElements[i]);
		}
	}
})();