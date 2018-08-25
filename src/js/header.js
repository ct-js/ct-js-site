(function () {
    var recompute = function (e) {
        var s = document.scrollingElement || document.body,
            h = document.getElementById('theNavBar');
        if (s.scrollTop > 24) {
            h.className = 'below';
        } else {
            h.className = 'above';
        }
    };
    document.addEventListener('scroll', recompute);
    setTimeout(recompute, 1);
})();