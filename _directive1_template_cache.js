angular.module('directive1.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../templates/directive1.html",
    "<hr><h2>Hello from Directive 1</h2>{{message1}}<hr>");
}]);
