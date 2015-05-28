rsvpApp.controller('ChampController', ['$scope', function ($scope) {
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
}]);