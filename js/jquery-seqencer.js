! function (t) {
	t.fn.sequencer = function (e, n) {
		var s, r, o, h, i, u = this,
			c = [],
			a = 0;
		"/" === e.path.substr(-1) && (e.path = e.path.substr(0, e.path.length - 1));
		for (var p = 0; p <= e.count; p++) c.push(e.path + "/" + p + "." + e.ext);
		t(c).each, 
		t(window).scroll(function () {
			s = t(u).width(), r = t(this).width(), o = t(this).scrollLeft(), h = 100 * o / (s - r), i = Math.round(h / 100 * e.count), i < e.count && t("img.sequencer").attr("src", c[i])
		}), this
	}
}(jQuery);