import scrollama from "scrollama";
const scroller = scrollama();

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
}

document.addEventListener('DOMContentLoaded', init);
init();