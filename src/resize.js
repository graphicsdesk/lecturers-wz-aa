(function () {
    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
            widthById = {};
        elements.forEach(function (el) {
            var parent = el.parentNode,
                width = widthById[parent.id] || parent.getBoundingClientRect().width,
                minwidth = el.getAttribute("data-min-width"),
                maxwidth = el.getAttribute("data-max-width");
            widthById[parent.id] = width;

            if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        try {
            if (window.parent && window.parent.$) {
                window.parent.$("body").trigger("resizedcontent", [window]);
            }
            if (window.require) {
                require(['foundation/main'], function () {
                    require(['shared/interactive/instances/app-communicator'], function (AppCommunicator) {
                        AppCommunicator.triggerResize();
                    });
                });
            }
        } catch (e) { console.log(e); }
    }

    document.addEventListener('DOMContentLoaded', resizer);
    // feel free to replace throttle with _.throttle, if available
    window.addEventListener('resize', throttle(resizer, 200));

    function throttle(func, wait) {
        // from underscore.js
        var _now = Date.now || function () { return new Date().getTime(); },
            context, args, result, timeout = null, previous = 0;
        var later = function () {
            previous = _now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function () {
            var now = _now(), remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

})();

// Variables to control scroll speed and easing
let scrollPosition = 0;
let scrollTarget = 0;
let easeFactor = 0.2; // This controls the "smoothness" or delay

// Event listener for mouse wheel (desktop scroll)
window.addEventListener('wheel', function (event) {
    event.preventDefault(); // Prevent default scroll behavior
    scrollTarget += event.deltaY * 0.5; // Adjust this factor to change scroll speed
}, { passive: false });

// Throttle function to limit how often resizer is called
function throttle(func, limit) {
    let lastFunc, lastRan;
    return function () {
        const context = this, args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Function to update scroll position with easing and call resizer
function updateScroll() {
    scrollPosition += (scrollTarget - scrollPosition) * easeFactor;
    window.scrollTo(0, scrollPosition); // Scroll manually

    // Throttled resizer call
    throttledResizer();

    requestAnimationFrame(updateScroll); // Keep updating
}

// Resizer function for dynamic layout adjustments
function resizer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
        widthById = {};
    elements.forEach(function (el) {
        var parent = el.parentNode,
            width = widthById[parent.id] || parent.getBoundingClientRect().width,
            minwidth = el.getAttribute("data-min-width"),
            maxwidth = el.getAttribute("data-max-width");
        widthById[parent.id] = width;

        if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

// Throttled resizer for performance
const throttledResizer = throttle(resizer, 100);

// Ensure resizer is called on window resize
window.addEventListener('resize', function () {
    throttledResizer();
});

// Start the manual scroll animation
updateScroll();
