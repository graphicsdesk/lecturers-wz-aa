import scrollama from "scrollama";
const scroller = scrollama();
import { select, selectAll } from 'd3-selection';
const d3 = { select, selectAll };

function init() {
    scroller
        .setup({
            step: "#scrolly .scrolly-overlay .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(function ({ element, index, direction }) {
            const event = new CustomEvent('stepin', { detail: { direction: direction } })
            element.dispatchEvent(event);
        })
        .onStepExit(function ({ element, index, direction }) {
            const event = new CustomEvent('stepout', { detail: { direction: direction } })
            element.dispatchEvent(event);
        });

    window.addEventListener("resize", scroller.resize);

    /* Scrollytelling code goes under here */
    // step 0: 

    // Initially hide all numbers
    d3.select("#dis2020").classed('hidden', true);
    d3.select("#dis2021").classed('hidden', true);
    d3.select("#dis2022").classed('hidden', true);
    d3.select("#dis2023").classed('hidden', true);
    d3.select("#dis2019").classed('hidden', true);

    d3.select("#total2022").classed('hidden', true);
    d3.select("#total2023").classed('hidden', true);
    d3.select("#total2020").classed('hidden', true);
    d3.select("#total2021").classed('hidden', true);
    d3.select("#total2019").classed('hidden', true);

    d3.select("#prof2020").classed('hidden', true);
    d3.select("#prof2021").classed('hidden', true);
    d3.select("#prof2022").classed('hidden', true);
    d3.select("#prof2023").classed('hidden', true);
    d3.select("#prof2019").classed('hidden', true);

    d3.select("#lecturer2019").classed('hidden', true);
    d3.select("#lecturer2023").classed('hidden', true);
    d3.select("#lecturer2021").classed('hidden', true);
    d3.select("#dis20200").classed('hidden', true);
    d3.select("#dis20201").classed('hidden', true);

    // hide tablet numbers
    d3.select("#tdis2019").classed('hidden', true);
    d3.select("#tdis2021").classed('hidden', true);
    d3.select("#tdis2023").classed('hidden', true);
    d3.select("#tdis2020").classed('hidden', true);
    d3.select("#tdis2022").classed('hidden', true);

    d3.select("#ttotal2019").classed('hidden', true);
    d3.select("#ttotal2022").classed('hidden', true);
    d3.select("#ttotal2023").classed('hidden', true);
    d3.select("#ttotal2020").classed('hidden', true);
    d3.select("#ttotal2021").classed('hidden', true);

    d3.select("#tprof2022").classed('hidden', true);
    d3.select("#tprof2021").classed('hidden', true);
    d3.select("#tprof2020").classed('hidden', true);
    d3.select("#tprof2023").classed('hidden', true);
    d3.select("#tprof2019").classed('hidden', true);

    d3.select("#tlec2021").classed('hidden', true);
    d3.select("#tlec2019").classed('hidden', true);
    d3.select("#tlec2020").classed('hidden', true);
    d3.select("#tdis20180").classed('hidden', true);
    d3.select("#tdis20181").classed('hidden', true);

    // hide phone numbers
    d3.select("#pdis2021").classed('hidden', true);
    d3.select("#pdis2019").classed('hidden', true);
    d3.select("#pdis2023").classed('hidden', true);
    d3.select("#pdis2022").classed('hidden', true);
    d3.select("#pdis2020").classed('hidden', true);

    d3.select("#ptotal2022").classed('hidden', true);
    d3.select("#ptotal2023").classed('hidden', true);
    d3.select("#ptotal2019").classed('hidden', true);
    d3.select("#ptotal2020").classed('hidden', true);
    d3.select("#ptotal2021").classed('hidden', true);

    d3.select("#pprof2021").classed('hidden', true);
    d3.select("#pprof2023").classed('hidden', true);
    d3.select("#pprof2020").classed('hidden', true);
    d3.select("#pprof2022").classed('hidden', true);
    d3.select("#pprof2019").classed('hidden', true);

    d3.select("#plec2021").classed('hidden', true);
    d3.select("#plec2019").classed('hidden', true);
    d3.select("#plec2023").classed('hidden', true);
    d3.select("#plec2020").classed('hidden', true);
    d3.select("#plec2022").classed('hidden', true);

    // Step-in: When a section is scrolled into
    d3.select("#step-zero").on('stepin', function (e) {
        console.log("Got to step zero");
        d3.select("#dis2018").classed('hidden', true);
        d3.select("#total2018").classed('hidden', true);
        d3.select("#prof2018").classed('hidden', true);
        d3.select("#lecturer2018").classed('hidden', true);

        d3.select("#dis2019").classed('hidden', false);
        d3.select("#total2019").classed('hidden', false);
        d3.select("#prof2019").classed('hidden', false);
        d3.select("#lecturer2019").classed('hidden', false);

        d3.select("#change2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        // tablet
        d3.select("#tdis2018").classed('hidden', true);
        d3.select("#ttotal2018").classed('hidden', true);
        d3.select("#tprof2018").classed('hidden', true);
        d3.select("#tlec2018").classed('hidden', true);

        d3.select("#tdis2019").classed('hidden', false);
        d3.select("#ttotal2019").classed('hidden', false);
        d3.select("#tprof2019").classed('hidden', false);
        d3.select("#tlec2019").classed('hidden', false);

        d3.select("#ichange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        // phone
        d3.select("#pdis2018").classed('hidden', true);
        d3.select("#ptotal2018").classed('hidden', true);
        d3.select("#pprof2018").classed('hidden', true);
        d3.select("#pdis20180").classed('hidden', true);

        d3.select("#pdis2019").classed('hidden', false);
        d3.select("#ptotal2019").classed('hidden', false);
        d3.select("#pprof2019").classed('hidden', false);
        d3.select("#plec2019").classed('hidden', false);

        d3.select("#pchange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

    });

    d3.select("#step-one").on('stepin', function (e) {
        console.log("Got to step one");
        d3.select("#dis2019").classed('hidden', true);
        d3.select("#total2019").classed('hidden', true);
        d3.select("#prof2019").classed('hidden', true);
        d3.select("#lecturer2019").classed('hidden', true);

        d3.select("#total2020").classed('hidden', false);
        d3.select("#dis2020").classed('hidden', false);
        d3.select("#prof2020").classed('hidden', false);
        d3.select("#dis20200").classed('hidden', false);

        d3.select("#tdis2019").classed('hidden', true);
        d3.select("#ttotal2019").classed('hidden', true);
        d3.select("#tprof2019").classed('hidden', true);
        d3.select("#tlec2019").classed('hidden', true);

        d3.select("#tdis2020").classed('hidden', false);
        d3.select("#ttotal2020").classed('hidden', false);
        d3.select("#tprof2020").classed('hidden', false);
        d3.select("#tlec2020").classed('hidden', false);

        d3.select("#pdis2019").classed('hidden', true);
        d3.select("#ptotal2019").classed('hidden', true);
        d3.select("#pprof2019").classed('hidden', true);
        d3.select("#plec2019").classed('hidden', true);

        d3.select("#pdis2020").classed('hidden', false);
        d3.select("#ptotal2020").classed('hidden', false);
        d3.select("#pprof2020").classed('hidden', false);
        d3.select("#plec2020").classed('hidden', false);
    });

    d3.select("#step-two").on('stepin', function (e) {
        d3.select("#dis2020").classed('hidden', true);
        d3.select("#total2020").classed('hidden', true);
        d3.select("#prof2020").classed('hidden', true);
        d3.select("#dis20200").classed('hidden', true);

        d3.select("#dis2021").classed('hidden', false);
        d3.select("#total2021").classed('hidden', false);
        d3.select("#prof2021").classed('hidden', false);
        d3.select("#lecturer2021").classed('hidden', false);

        d3.select("#change2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#005f73");

        d3.select("#tdis2020").classed('hidden', true);
        d3.select("#ttotal2020").classed('hidden', true);
        d3.select("#tprof2020").classed('hidden', true);
        d3.select("#tlec2020").classed('hidden', true);

        d3.select("#tdis2021").classed('hidden', false);
        d3.select("#ttotal2021").classed('hidden', false);
        d3.select("#tprof2021").classed('hidden', false);
        d3.select("#tlec2021").classed('hidden', false);

        d3.select("#ichange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#005f73");

        d3.select("#pdis2020").classed('hidden', true);
        d3.select("#ptotal2020").classed('hidden', true);
        d3.select("#pprof2020").classed('hidden', true);
        d3.select("#plec2020").classed('hidden', true);

        d3.select("#pdis2021").classed('hidden', false);
        d3.select("#ptotal2021").classed('hidden', false);
        d3.select("#pprof2021").classed('hidden', false);
        d3.select("#plec2021").classed('hidden', false);

        d3.select("#pchange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#005f73");
    });

    d3.select("#step-three").on('stepin', function (e) {
        d3.select("#dis2021").classed('hidden', true);
        d3.select("#total2021").classed('hidden', true);
        d3.select("#prof2021").classed('hidden', true);
        d3.select("#lecturer2021").classed('hidden', true);

        d3.select("#dis2022").classed('hidden', false);
        d3.select("#total2022").classed('hidden', false);
        d3.select("#prof2022").classed('hidden', false);
        d3.select("#dis20201").classed('hidden', false);

        d3.select("#change2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#change-2022 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#tdis2021").classed('hidden', true);
        d3.select("#ttotal2021").classed('hidden', true);
        d3.select("#tprof2021").classed('hidden', true);
        d3.select("#tlec2021").classed('hidden', true);

        d3.select("#tdis2022").classed('hidden', false);
        d3.select("#ttotal2022").classed('hidden', false);
        d3.select("#tprof2022").classed('hidden', false);
        d3.select("#tdis20180").classed('hidden', false);

        d3.select("#ichange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#ichange-2022 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#pdis2021").classed('hidden', true);
        d3.select("#ptotal2021").classed('hidden', true);
        d3.select("#pprof2021").classed('hidden', true);
        d3.select("#plec2021").classed('hidden', true);

        d3.select("#pdis2022").classed('hidden', false);
        d3.select("#ptotal2022").classed('hidden', false);
        d3.select("#pprof2022").classed('hidden', false);
        d3.select("#plec2022").classed('hidden', false);

        d3.select("#pchange2019-back2021 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#pchange-2022 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

    });

    d3.select("#step-four").on('stepin', function (e) {
        d3.select("#dis2022").classed('hidden', true);
        d3.select("#total2022").classed('hidden', true);
        d3.select("#prof2022").classed('hidden', true);
        d3.select("#dis20201").classed('hidden', true);

        d3.select("#dis2023").classed('hidden', false);
        d3.select("#total2023").classed('hidden', false);
        d3.select("#prof2023").classed('hidden', false);
        d3.select("#lecturer2023").classed('hidden', false);

        d3.select("#change_2023 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#tdis2022").classed('hidden', true);
        d3.select("#ttotal2022").classed('hidden', true);
        d3.select("#tprof2022").classed('hidden', true);
        d3.select("#tdis20180").classed('hidden', true);

        d3.select("#tdis2023").classed('hidden', false);
        d3.select("#ttotal2023").classed('hidden', false);
        d3.select("#tprof2023").classed('hidden', false);
        d3.select("#tdis20181").classed('hidden', false);

        d3.select("#ichange_2023 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");

        d3.select("#pdis2022").classed('hidden', true);
        d3.select("#ptotal2022").classed('hidden', true);
        d3.select("#pprof2022").classed('hidden', true);
        d3.select("#plec2022").classed('hidden', true);

        d3.select("#pdis2023").classed('hidden', false);
        d3.select("#ptotal2023").classed('hidden', false);
        d3.select("#pprof2023").classed('hidden', false);
        d3.select("#plec2023").classed('hidden', false);

        d3.select("#pchange_2023 path")
            .classed("fade-in", true)
            .style("fill", "#f3722c");


    });

    // Step-out: When a section is scrolled out of (triggered when scrolling back up)
    d3.select("#step-zero").on('stepout', function (e) {
        if (e.detail.direction === 'up') {
            // 1200 px
            d3.select("#dis2018").classed('hidden', false);
            d3.select("#total2018").classed('hidden', false);
            d3.select("#prof2018").classed('hidden', false);
            d3.select("#lecturer2018").classed('hidden', false);

            d3.select("#dis2019").classed('hidden', true);
            d3.select("#total2019").classed('hidden', true);
            d3.select("#prof2019").classed('hidden', true);
            d3.select("#lecturer2019").classed('hidden', true);

            d3.select("#change2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            // 600 px
            d3.select("#tdis2018").classed('hidden', false);
            d3.select("#ttotal2018").classed('hidden', false);
            d3.select("#tprof2018").classed('hidden', false);
            d3.select("#tlec2018").classed('hidden', false);

            d3.select("#tdis2019").classed('hidden', true);
            d3.select("#ttotal2019").classed('hidden', true);
            d3.select("#tprof2019").classed('hidden', true);
            d3.select("#tlec2019").classed('hidden', true);

            d3.select("#ichange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            // 300 px
            d3.select("#pdis2018").classed('hidden', false);
            d3.select("#ptotal2018").classed('hidden', false);
            d3.select("#pprof2018").classed('hidden', false);
            d3.select("#pdis20180").classed('hidden', false);

            d3.select("#pdis2019").classed('hidden', true);
            d3.select("#ptotal2019").classed('hidden', true);
            d3.select("#pprof2019").classed('hidden', true);
            d3.select("#plec2019").classed('hidden', true);

            d3.select("#pchange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");
        }
    });

    d3.select("#step-one").on('stepout', function (e) {
        if (e.detail.direction === 'up') {
            d3.select("#dis2019").classed('hidden', false);
            d3.select("#total2019").classed('hidden', false);
            d3.select("#prof2019").classed('hidden', false);
            d3.select("#lecturer2019").classed('hidden', false);

            d3.select("#total2020").classed('hidden', true);
            d3.select("#dis2020").classed('hidden', true);
            d3.select("#prof2020").classed('hidden', true);
            d3.select("#dis20200").classed('hidden', true);


            d3.select("#tdis2019").classed('hidden', false);
            d3.select("#ttotal2019").classed('hidden', false);
            d3.select("#tprof2019").classed('hidden', false);
            d3.select("#tlec2019").classed('hidden', false);

            d3.select("#tdis2020").classed('hidden', true);
            d3.select("#ttotal2020").classed('hidden', true);
            d3.select("#tprof2020").classed('hidden', true);
            d3.select("#tlec2020").classed('hidden', true);

            d3.select("#pdis2019").classed('hidden', false);
            d3.select("#ptotal2019").classed('hidden', false);
            d3.select("#pprof2019").classed('hidden', false);
            d3.select("#plec2019").classed('hidden', false);

            d3.select("#pdis2020").classed('hidden', true);
            d3.select("#ptotal2020").classed('hidden', true);
            d3.select("#pprof2020").classed('hidden', true);
            d3.select("#plec2020").classed('hidden', true);

        }
    });

    d3.select("#step-two").on('stepout', function (e) {
        if (e.detail.direction === 'up') {
            d3.select("#dis2020").classed('hidden', false);
            d3.select("#total2020").classed('hidden', false);
            d3.select("#prof2020").classed('hidden', false);
            d3.select("#dis20200").classed('hidden', false);

            d3.select("#dis2021").classed('hidden', true);
            d3.select("#total2021").classed('hidden', true);
            d3.select("#prof2021").classed('hidden', true);
            d3.select("#lecturer2021").classed('hidden', true);

            d3.select("#change2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#f3722c");


            d3.select("#ichange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#pchange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#tdis2020").classed('hidden', false);
            d3.select("#ttotal2020").classed('hidden', false);
            d3.select("#tprof2020").classed('hidden', false);
            d3.select("#tlec2020").classed('hidden', false);

            d3.select("#tdis2021").classed('hidden', true);
            d3.select("#ttotal2021").classed('hidden', true);
            d3.select("#tprof2021").classed('hidden', true);
            d3.select("#tlec2021").classed('hidden', true);

            d3.select("#pdis2020").classed('hidden', false);
            d3.select("#ptotal2020").classed('hidden', false);
            d3.select("#pprof2020").classed('hidden', false);
            d3.select("#plec2020").classed('hidden', false);

            d3.select("#pdis2021").classed('hidden', true);
            d3.select("#ptotal2021").classed('hidden', true);
            d3.select("#pprof2021").classed('hidden', true);
            d3.select("#plec2021").classed('hidden', true);

        }
    });

    d3.select("#step-three").on('stepout', function (e) {
        if (e.detail.direction === 'up') {
            d3.select("#dis2021").classed('hidden', false);
            d3.select("#total2021").classed('hidden', false);
            d3.select("#prof2021").classed('hidden', false);
            d3.select("#lecturer2021").classed('hidden', false);

            d3.select("#dis2022").classed('hidden', true);
            d3.select("#total2022").classed('hidden', true);
            d3.select("#prof2022").classed('hidden', true);
            d3.select("#dis20201").classed('hidden', true);

            d3.select("#change2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            d3.select("#change-2022 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#ichange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            d3.select("#ichange-2022 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#pchange2019-back2021 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            d3.select("#pchange-2022 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");

            d3.select("#tdis2021").classed('hidden', false);
            d3.select("#ttotal2021").classed('hidden', false);
            d3.select("#tprof2021").classed('hidden', false);
            d3.select("#tlec2021").classed('hidden', false);

            d3.select("#tdis2022").classed('hidden', true);
            d3.select("#ttotal2022").classed('hidden', true);
            d3.select("#tprof2022").classed('hidden', true);
            d3.select("#tdis20180").classed('hidden', true);

            d3.select("#pdis2021").classed('hidden', false);
            d3.select("#ptotal2021").classed('hidden', false);
            d3.select("#pprof2021").classed('hidden', false);
            d3.select("#plec2021").classed('hidden', false);

            d3.select("#pdis2022").classed('hidden', true);
            d3.select("#ptotal2022").classed('hidden', true);
            d3.select("#pprof2022").classed('hidden', true);
            d3.select("#plec2022").classed('hidden', true);
        }
    });

    d3.select("#step-four").on('stepout', function (e) {
        if (e.detail.direction === 'up') {
            d3.select("#dis2022").classed('hidden', false);
            d3.select("#total2022").classed('hidden', false);
            d3.select("#prof2022").classed('hidden', false);
            d3.select("#dis20201").classed('hidden', false);

            d3.select("#dis2023").classed('hidden', true);
            d3.select("#total2023").classed('hidden', true);
            d3.select("#prof2023").classed('hidden', true);
            d3.select("#lecturer2023").classed('hidden', true);

            d3.select("#change_2023 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#ichange_2023 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#pchange_2023 path")
                .classed("fade-in", true)
                .style("fill", "#005f73");


            d3.select("#tdis2022").classed('hidden', false);
            d3.select("#ttotal2022").classed('hidden', false);
            d3.select("#tprof2022").classed('hidden', false);
            d3.select("#tdis20180").classed('hidden', false);

            d3.select("#tdis2023").classed('hidden', true);
            d3.select("#ttotal2023").classed('hidden', true);
            d3.select("#tprof2023").classed('hidden', true);
            d3.select("#tdis20181").classed('hidden', true);

            d3.select("#pdis2022").classed('hidden', false);
            d3.select("#ptotal2022").classed('hidden', false);
            d3.select("#pprof2022").classed('hidden', false);
            d3.select("#plec2022").classed('hidden', false);

            d3.select("#pdis2023").classed('hidden', true);
            d3.select("#ptotal2023").classed('hidden', true);
            d3.select("#pprof2023").classed('hidden', true);
            d3.select("#plec2023").classed('hidden', true);
        }

    });

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

    let scrollPosition = 0;
let scrollTarget = 0;
let easeFactor = 0.2; // This controls the "smoothness" or delay
let startY = 0; // For touch scrolling
let scrollSpeedDesktop = 0.5; // Scroll speed factor for desktop
let scrollSpeedMobile = 2.0; // Increased scroll speed factor for mobile

// Function to update scroll position with easing and call resizer
function updateScroll() {
    scrollPosition += (scrollTarget - scrollPosition) * easeFactor;
    window.scrollTo(0, scrollPosition); // Scroll manually

    // Throttled resizer call
    throttledResizer();

    requestAnimationFrame(updateScroll); // Keep updating
}

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

// Scroll event handling for desktop
if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
    // Event listener for mouse wheel (desktop scroll)
    window.addEventListener('wheel', function (event) {
        event.preventDefault(); // Prevent default scroll behavior on desktop
        scrollTarget += event.deltaY * scrollSpeedDesktop; // Adjust this factor to change scroll speed
    }, { passive: false });
} else {
    // Touch event handling for mobile
    window.addEventListener('touchstart', function (event) {
        startY = event.touches[0].pageY;
    });

    window.addEventListener('touchmove', function (event) {
        event.preventDefault(); // Prevent native scroll on mobile
        let touchY = event.touches[0].pageY;
        scrollTarget += (startY - touchY) * scrollSpeedMobile; // Increased scroll speed for mobile
        startY = touchY; // Update start position for next move
    }, { passive: false });
}

// Ensure resizer is called on window resize
window.addEventListener('resize', function () {
    throttledResizer();
});

// Start the manual scroll animation
updateScroll();


}

document.addEventListener('DOMContentLoaded', init);
init();