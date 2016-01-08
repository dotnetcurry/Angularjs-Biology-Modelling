(function () {
    'use strict';
    angular.
        module("biologyDemo").
        directive("fileReader", fileReader);

    fileReader.$inject = ['fileReaderService'];

    function fileReader(reader) {
        function link(scope, element) {
            element.bind("change", function (evt) {
                var file = evt.target.files[0];

                if (file && file.name.indexOf('.fasta') > 0) {
                    reader.readFile(file).then(function (data) {
                        scope.fastaContent = data;
                    });
                } else {
                    alert('Please insert a fasta format file!');
                }
            });
        }

        return {
            scope: {
                fastaContent: "="
            },
            restrict: 'A',
            link: link
        };
    }
}());