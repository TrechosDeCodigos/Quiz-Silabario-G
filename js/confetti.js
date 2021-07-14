
 var confetti = {
            maxCount: 150,
            speed: 2,
            frameInterval: 15,
            alpha: 1,
            gradient: !1,
            start: null,
            stop: null,
            toggle: null,
            pause: null,
            resume: null,
            togglePause: null,
            remove: null,
            isPaused: null,
            isRunning: null
        };
        ! function () {
            confetti.start = s, confetti.stop = w, confetti.toggle = function () {
                e ? w() : s()
            }, confetti.pause = u, confetti.resume = m, confetti.togglePause = function () {
                i ? m() : u()
            }, confetti.isPaused = function () {
                return i
            }, confetti.remove = function () {
