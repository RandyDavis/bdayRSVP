'use strict';

// Controllers

angular.module('rsvpApp.controllers', [])
  .controller('LandingPageController', ['$scope', function ($scope) {

  }])

  .controller('ChampController', ['$scope', function ($scope) {
    $scope.name = "Champ";
    $scope.favoriteTurtle = "Leonardo";
    $scope.ageTurning = 4;
    $scope.hobbies = [
      "running",
      "riding my bike",
      "jumping on the trampoline",
      "playing with my 'Buddy', aka Atlas",
      "sleeping pallets with mommy and daddy",
      "wrestling with daddy"
    ];

    $scope.clothing = {
      shirtSize: "4T",
      pantsSize: "4T",
      shortsSize: "4T",
      shoeSize: "9C"
    };
    
    $scope.giftIdeas = [
      "toys",
      "books",
      "anything Ninja Turtle related",
      "swimming pool toys"
    ];
  }])

  .controller('AtlasController', ['$scope', function ($scope) {
    $scope.name = "Atlas";
    $scope.favoriteTurtle = "Raphael";
    $scope.ageTurning = 2;
    $scope.hobbies = [
      "running",
      "riding his scuttlebug",
      "jumping on the trampoline",
      "hitting Champ when nobody is looking",
      "sleeping pallets with mommy and daddy",
      "randomly letting out high pitched screams"
    ];

    $scope.clothing = {
      shirtSize: "2T",
      pantsSize: "2T",
      shortsSize: "2T",
      shoeSize: "7C"
    };
    
    $scope.giftIdeas = [
      "toys",
      "books",
      "puzzles",
      "bathtub toys"
    ];
  }])

  .controller('RsvpController', ['$scope', function ($scope) {
    $scope.guestList = [];


  // Total Guests on list
  $scope.getTotalGuests = function() {
    return $scope.guestList.length;
  };


//   // Add Guest to list
//   $scope.addGuest = function() {
//     $scope.guestList.push()

//     // var guest = {

//     // }
//   };





// }]);

// rsvpApp.service('guestService', function () {
//   this.name = 
// })
  }]);