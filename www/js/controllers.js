angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.paths=[];
  for(var i=1; i < 127; i++){
    $scope.paths[i]="img/fotos/"+i+".jpg";
  }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,  $cordovaMedia, $ionicLoading) {
 $scope.paths =[];
    for(var i=1; i< 6; i++){
      $scope.paths[i]="music/"+i+".mp3";
    }
    $scope.play = function(src) {
      var media = new Media(src, null, null, mediaStatusCallback);
      $cordovaMedia.play(media);
    };

    var mediaStatusCallback = function(status) {
      if(status == 1) {
        $ionicLoading.show({template: 'Loading...'});
      } else {
        $ionicLoading.hide();
      }
    }


  });
