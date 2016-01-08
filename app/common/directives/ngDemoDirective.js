(function () {
    'use strict';
    angular.
        module("biologyDemo").
        directive("ngBiologyDemo", ngBiologyDemo);

    ngBiologyDemo.$inject = [];

    function ngBiologyDemo() {
        return {
            restrict: 'E',
            templateUrl: 'app/common/templates/demoTemplate.html',
            controller: 'demoController',
            controllerAs: 'vm'
        };
    }
}());