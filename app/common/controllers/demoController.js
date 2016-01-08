(function () {
    'use strict';
    angular.
        module("biologyDemo").
        controller("demoController", demoController);

    demoController.$inject = ['$scope', 'fastaParserService'];

    function demoController($scope, parser) {
        var vm = this;

        function init() {
            vm.fastaFileContent = '';

            $scope.$watch(function () {
                return vm.fastaFileContent;
            }, function(changed) {
                if (!changed) {
                    return;
                }

                $scope.$broadcast('data:ready', parser.readSequence(vm.fastaFileContent));
            });
        }

        init();
    }
}());