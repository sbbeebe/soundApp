(function(){

	var MainController = function ($scope, $cordovaMedia, $ionicLoading) {

		if($ionicPlatform.is('android')) {
			src = '/android_asset/www/' + src;
		};

		$scope.play = function(src) {
			var media = new Media(src, null, null, mediaStatusCallback);
			media.play(media);
		} 

		var mediaStatusCallback = function(status) {

			if(status == 1) {
				$ionicLoading.show({template: 'Loading...'});
			} else {
				$ionicLoading.hide();
			}

		};

	};

	angular.module("soundApp").controller("MainController", MainController);

})();