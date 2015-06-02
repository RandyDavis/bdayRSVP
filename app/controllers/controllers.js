// Controllers

// angular.module('rsvpApp', ['ngRoute', 'ngAnimate'])
  // .controller('LandingPageController', ['$scope', function ($scope) {

  // }])
rsvpApp
  .controller('ChampController', ['$scope', function ($scope) {
    $scope.name = "Champ";
    $scope.favoriteTurtle = "Leonardo";
    $scope.ageTurning = 4;
    $scope.hobbies = [
      "Running",
      "Riding his bike",
      "Jumping on the trampoline",
      "Playing with my 'Buddy', aka Atlas",
      "Sleeping pallets with mommy and daddy",
      "Wrestling with daddy"
    ];

    $scope.clothing = [
      {
        name: "Shirt Size",
        size: "4T"
      },
      {
        name: "Pants Size",
        size: "4T"
      },
      {
        name: "Shorts Size",
        size: "4T"
      },
      {
        name: "Shoe Size",
        size: "9C"
      }
    ];
    
    $scope.giftIdeas = [
      "Toys",
      "Books",
      "Anything Ninja Turtle related",
      "Swimming pool toys"
    ];
  }])

  .controller('AtlasController', ['$scope', function ($scope) {
    $scope.name = "Atlas";
    $scope.favoriteTurtle = "Raphael";
    $scope.ageTurning = 2;
    $scope.hobbies = [
      "Running",
      "Riding his scuttlebug",
      "Jumping on the trampoline",
      "Hitting Champ when nobody is looking",
      "Sleeping pallets with mommy and daddy",
      "Randomly letting out high pitched screams"
    ];

    $scope.clothing = [
      {
        name: "Shirt Size",
        size: "2T"
      },
      {
        name: "Pants Size",
        size: "2T"
      },
      {
        name: "Shorts Size",
        size: "2T"
      },
      {
        name: "Shoe Size",
        size: "7C"
      }
    ];
    
    $scope.giftIdeas = [
      "Toys",
      "Books",
      "Puzzles",
      "Bathtub toys"
    ];
  }])




  .controller('RsvpController', ['$scope', '$timeout', '$firebaseArray', function ($scope, $timeout, $firebaseArray) {
    $scope.name = "";
    $scope.guestOf = "";
    $scope.faveTurtle = ['Leonardo', 'Raphael', 'Donatello', 'Michaelangelo'];
    // $scope.faveTurtle = [
    //   {
    //     turleID: 1,
    //     turtleName: 'Leonardo'
    //   },
    //   {
    //     turleID: 2,
    //     turtleName: 'Raphael'
    //   },
    //   {
    //     turleID: 3,
    //     turtleName: 'Donatello'
    //   },
    //   {
    //     turleID: 4,
    //     turtleName: 'Michelangelo'
    //   }
    // ];
    $scope.rsvpdGuests = {};
    // $scope.rsvpDate = (function() {
    //   new Date();
    // })();

    $scope.guestList = new Firebase("https://champandatlasrsvp.firebaseio.com/GuestList");
    // $scope.guestList = $firebaseArray(ref);

    $scope.addGuest = function() {
      $scope.guestList.push({name: $scope.name, guestOf: $scope.guestOf, faveTurtle: $scope.faveTurtle });
      $scope.name = "";
      $scope.faveTurtle = "";
      $scope.guestOf = "";
    };

    // $timeout(function() {
      $scope.guestList.on('value', function(snapshot) {
        $scope.$apply(function() {
          $scope.rsvpdGuests = snapshot.val();
        });
      });
      
    // }, 500);



    // Total Guests on list
    // $scope.getTotalGuests = function() {
    //   return $scope.guestList.length;
    // };
  }])





  .controller('TestController', ['$scope', '$timeout', '$firebaseArray', function ($scope, $timeout, $firebaseArray) {
    $scope.name = "";
    $scope.guestOf = "";
    // $scope.faveTurtle = ['Leonardo', 'Raphael', 'Donatello', 'Michaelangelo'];
    // $scope.faveTurtle = [
    //   {
    //     turleID: 1,
    //     turtleName: 'Leonardo'
    //   },
    //   {
    //     turleID: 2,
    //     turtleName: 'Raphael'
    //   },
    //   {
    //     turleID: 3,
    //     turtleName: 'Donatello'
    //   },
    //   {
    //     turleID: 4,
    //     turtleName: 'Michelangelo'
    //   }
    // ];
    $scope.rsvpdGuests = {};
    // $scope.rsvpDate = (function() {
    //   new Date();
    // })();

    $scope.guestList = new Firebase("");
    // $scope.guestList = $firebaseArray(ref);

    $scope.addGuest = function() {
      $scope.guestList.push({name: $scope.name, guestOf: $scope.guestOf, faveTurtle: $scope.faveTurtle });
      $scope.name = "";
      $scope.faveTurtle = "";
      $scope.guestOf = "";
    };


    $scope.guestList.on('value', function(snapshot) {
      $scope.$evalAsync(function() {
        $scope.rsvpdGuests = snapshot.val();
      });
    });

    // Total Guests on list
    // $scope.getTotalGuests = function() {
    //   return $scope.guestList.length;
    // };
  }]);