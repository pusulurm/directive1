/**
 * Created by pusulurm on 9/24/2015.
 */
define(['./myDirective1'],function( directive1){
    angular.module('Directive1Module', []).
        directive('myDirective1', directive1)
});
