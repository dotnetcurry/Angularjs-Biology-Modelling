(function () {
    'use strict';
    angular.
        module("biologyDemo").
        directive("ngPlasmid", ngPlasmidDirective);

    ngPlasmidDirective.$inject = ['$compile', 'bioService'];

    function ngPlasmidDirective($compile, bio) {
        function link(scope, element) {
            scope.$on('data:ready', init);

            function init(e, data) {
                draw(data);
            }

            function draw(data) {
                element.append(createPlasmid(data));
                $compile(element.contents())(scope);
            }

            function createPlasmid(data) {
                var path = document.createElement('plasmid');
                path.id = 'p1';
                path.setAttribute('sequencelength', data.sequence.length);
                path.setAttribute('sequence', data.sequence);
                path.setAttribute('plasmidheight', 400);
                path.setAttribute('plasmidwidth', 400);
                path.appendChild(createPlasmidTrack('t1', data));
                return path;
            }

            function addTrackLabel(path, data) {
                var elm = document.createElement('tracklabel');
                elm.setAttribute('text', data.name);
                elm.setAttribute('labelclass', 'tracklabel');
                elm.setAttribute('vadjust', '-12');
                path.appendChild(elm);
            }

            function addTrackScales(path) {
                var elm = document.createElement('trackscale');
                elm.setAttribute('interval', '150');
                elm.setAttribute('ticksize', 'stroke:#000000;stroke-width:1px;');
                elm.setAttribute('style', '100');
                elm.setAttribute('vadjust', '10');
                elm.setAttribute('showlabels', '1');
                elm.setAttribute('direction', 'out');
                elm.setAttribute('labelclass', 'trackscale-label');
                path.appendChild(elm);
            }

            function createPlasmidTrack(id, data) {
                var elm = document.createElement('plasmidtrack');
                elm.setAttribute('id', id);
                elm.setAttribute('radius', '133');
                elm.setAttribute('width', '3');
                elm.setAttribute('fill', '#d5d6db');

                addTrackLabel(elm, data);
                addTrackScales(elm);
                createTrackMarkers(elm, data);

                return elm;
            }

            function createTrackMarkers(elm, data) {
                var pattern = 'CTGCAG',
                    matches = bio.findMatches(data.sequence, pattern),
                    i = 0,
                    marker,
                    markerLabel;

                for (; i < matches.length; i++ ) {
                    marker = document.createElement('trackmarker');
                    marker.setAttribute('start', matches[i].start);
                    marker.setAttribute('end', matches[i].end);
                    marker.setAttribute('class', 'track-marker');
                    marker.setAttribute('wadjust', '10');
                    marker.setAttribute('vadjust', '-4');
                    marker.setAttribute('markerstyle', 'stroke: yellow;fill: blue;');

                    markerLabel = document.createElement('markerlabel');
                    markerLabel.setAttribute('class', 'markerlabel-inside');
                    markerLabel.setAttribute('text', pattern);
                    markerLabel.setAttribute('type', 'path');
                    markerLabel.setAttribute('vadjust', '15');
                    marker.appendChild(markerLabel);

                    elm.appendChild(marker);
                }
            }
        }

       return {
           restrict: 'E',
           replace: true,
           scope: {
           },
           link: link
       };
    }
}());