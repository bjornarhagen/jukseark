(function() {
	var renderMathInElement = require('../../node_modules/katex/dist/contrib/auto-render.min.js');

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

		renderMathInElement(document.body);
	}
})();
