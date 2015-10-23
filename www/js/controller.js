(function(){

	var MainController = function ($scope, $cordovaMedia, $ionicLoading) {

		

		$scope.play = function(src) {
		
			if(ionic.Platform.isAndroid()) {
				src = '/android_asset/www/' + src;
			};
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

	angular.module('soundApp').controller('MainController', MainController);

})();