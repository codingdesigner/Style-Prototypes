(function (angular) {
  'use strict';

  var spTemplates = angular.module('spTemplates', [

  ]);

  spTemplates.factory('templates', function (){
    return {
      all: function () {
        return '<div ng-repeat="(StylePrototypeSection, StylePrototypeItem) in StylePrototypeComponents"><h1 data-sp-class="section--header"><a href="#/{{StylePrototypeSection}}">{{StylePrototypeSection}}</a></h1><ul><li ng-repeat="StylePrototypeCmpt in StylePrototypeItem  | filter:StylePrototypeSearch.term | orderBy:\'id\'" data-sp-class="section--group"><h2 id="{{StylePrototypeCmpt.id}}" data-sp-class=\"section--header\"><a href="#/?id={{StylePrototypeCmpt.id}}">{{StylePrototypeCmpt.name}}</a></h2><span ng-include="cmpt.path"></span></li></ul></div>';
      },
      components: function () {
        return '<ul><li ng-repeat="StylePrototypeCmpt in StylePrototypeComponents | filter:StylePrototypeSearch.term | orderBy:\'id\'" data-sp-class="section--group"><h2 id="{{StylePrototypeCmpt.id}}" data-sp-class=\"section--header\"><a id="{{StylePrototypeCmpt.id}}" href="#/?id={{StylePrototypeCmpt.id}}" ng-click="updateId($event)">{{StylePrototypeCmpt.name}}</a></h2><span ng-include="StylePrototypeCmpt.path"></span></li></ul>';
      },
      ish: function () {
        return '<div data-sp-id="viewport"><div data-sp-id="viewport--cover"></div><div data-sp-id="viewport--container"><iframe data-sp-id="viewport--window" src="{{url}}"></iframe><div data-sp-id="viewport--resize"><div data-sp-id="viewport--resize-handle"></div></div></div></div>';
      },
      styletile: function () {
        return '<div data-sp-class=\"__style-tile\"><article data-sp-class=\"__style-tile--content\" class=\"{{base.class}}\"><h1>The Farnsworth Parabox</h1><p>Whoa a real live robot; or is that some kind of <a href=\"#\">cheesy New Year\'s costume</a>? Why would a robot need to drink? Hey, tell me something. You\'ve got all this money. How come you always dress like you\'re doing your laundry? Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Large bet on myself in round one.</p><h2>A Taste of Freedom</h2><p>When I was first asked to make a film about my nephew, Hubert Farnsworth, I thought \"Why should I?\" Then later, Leela made the film. But if I did make it, you can bet there would have been more topless women on motorcycles. Roll film! Bender, hurry! This fuel\'s expensive! Also, we\'re dying! Well, thanks to the Internet, I\'m now bored with sex. Is there a place on the web that panders to my lust for violence? But existing is basically all I do! What\'s with you kids? Every other day it\'s food, food, food. Alright, I\'ll get you some stupid food. Why, those are the Grunka-Lunkas! They work here in the Slurm factory.</p><ul><li>There\'s one way and only one way to determine if an animal is intelligent. Dissect its brain!</li><li>What\'s with you kids? Every other day it\'s food, food, food. Alright, I\'ll get you some stupid food.</li><li>Bender, I didn\'t know you liked cooking. That\'s so cute.</li></ul><h3>When Aliens Attack</h3><p>There\'s one way and only one way to determine if an animal is intelligent. Dissect its brain! I never loved you. Yeah. Give a little credit to our public schools.</p><h4>Bendin\' in the Wind</h4><p>Tell them I hate them. In our darkest hour, we can stand erect, with proud upthrust bosoms. When the lights go out, it\'s nobody\'s business what goes on between two consenting adults. Well, let\'s just dump it in the sewer and say we delivered it. I don\'t \'need\' to drink. I can quit anytime I want! Oh yeah, good luck with that.</p><ol><li>And until then, I can never die?</li><li>What\'s with you kids? Every other day it\'s food, food, food. Alright, I\'ll get you some stupid food.</li><li>And until then, I can never die?</li><li>Shinier than yours, meatbag.</li></ol><h5>The Mutants Are Revolting</h5><p>No, just a regular mistake. Fry, we have a crate to deliver. And until then, I can never die? And why did \'I\' have to take a cab? Oh, I always feared he might run off like this. Why, why, why didn\'t I break his legs?</p></article><aside ng-if="StylePrototypeStyleTile.colors" data-sp-class=\"__style-tile--abstracts\"><h2 data-sp-class=\"section--header\">Possible Colors</h2><ul data-sp-class=\"style-tile--COLORS\"><li data-sp-class=\"style-tile--item-{{$index}}\" ng-repeat=\"n in [] | range:StylePrototypeStyleTile.colors\"></li></ul></aside><aside ng-if="StylePrototypeStyleTile.images" data-sp-class=\"__style-tile--abstracts\"><h2 data-sp-class=\"section--header\">Possible Patterns</h2><ul data-sp-class=\"style-tile--IMAGES\"><li data-sp-class=\"style-tile--item-{{$index}}\" ng-repeat=\"StylePrototypeImage in StylePrototypeStyleTile.images\"><img src=\"{{StylePrototypeSRC}}\" alt=\"{{StylePrototypeALT}}\" ng-repeat=\"(StylePrototypeSRC, StylePrototypeALT) in StylePrototypeImage\"></li></ul></aside><aside ng-if="StylePrototypeStyleTile.descriptors" data-sp-class=\"__style-tile--abstracts\"><ul data-sp-class=\"style-tile--DESCRIPTORS\"><li data-sp-class=\"style-tile--item-{{$index}}\" ng-repeat=\"descriptor in StylePrototypeStyleTile.descriptors\">{{descriptor}}</li></ul></aside></div>';
      }
    };
  });
})(window.angular);