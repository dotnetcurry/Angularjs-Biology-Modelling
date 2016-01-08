(function () {
    'use strict';

    angular.
        module("biologyDemo").
        factory("fastaParserService", fastaParserService);

    function fastaParserService() {
        function readSequence(fastaText) {
            var splittedStrings  = fastaText.split('\n'),
                result = {},
                i = 1;

            result.name = splittedStrings[0].substr(1, splittedStrings[0].length - 1);
            result.sequence = '';
            for (; i < splittedStrings.length; i++) {
                result.sequence += splittedStrings[i];
            }
            return result;
        }

        return {
            readSequence: readSequence
        };
    }
}());