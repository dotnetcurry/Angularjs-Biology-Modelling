(function () {
    'use strict';
    angular.
        module("biologyDemo").
        factory("fileReaderService", fileReaderService);

    fileReaderService.$inject = ['$q'];

    function fileReaderService($q) {
        function readFile(file) {
            var deferred = $q.defer(),
                reader = new FileReader();

            reader.onload = function (loaded) {
                deferred.resolve(loaded.target.result);
            }

            reader.readAsText(file);
            return deferred.promise;
        }

        return {
            readFile: readFile
        };
    }
}());