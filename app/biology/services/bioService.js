(function () {
    'use strict';

    angular.
        module("biologyDemo").
        factory("bioService", bioService);

    function bioService() {
        function findMatches(sequence, pattern) {
            var result = [];

            var indexFound = sequence.indexOf(pattern);
            while (indexFound > -1) {
                result.push({
                    start: indexFound,
                    end: indexFound + pattern.length
                });
                indexFound = sequence.indexOf(pattern, indexFound + 1);
            }

            return result;
        }


        return {
            findMatches: findMatches
        };
    }
}());