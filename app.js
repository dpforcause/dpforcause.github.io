var app = angular.module('App', ['ngMaterial']);
app.controller('Ctrl', function($scope) {
/*
	function el(id){return document.getElementById(id);} // Get elem by ID

  var canvas  = el("canvas");
  var context = canvas.getContext("2d");

  var readImage = function () {
    if ( this.files && this.files[0] ) {
      var FR= new FileReader();
      FR.onload = function(e) {
        var img = new Image();
        img.onload = function() {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
                // After drawing.. Image... load Flag.  
                add_flag();
        		$scope.nextStep();
            };
            img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
    }
  }

  var add_flag = function() {
    var flag = new Image();
    flag.src = 'indian-flag.png';
    flag.onload = function() {
      context.save();
      context.globalAlpha = 0.4;
      context.drawImage(flag, 0, 0, canvas.width, canvas.height);
      context.restore()
    };

  }

  el("fileUpload").addEventListener("change", readImage, false);

	// --------------------------------------------------------------
  */
	$scope.siteName = 'DPs for Cause';

/*
	$scope.currentTrend = {
		title : '#TricolourForUnity',
		filename : 'dpforcause-tricolorforunity.png',
		description : '',
	}

	$scope.currentStep = {
		upload : true,
		download : false,
	}

	$scope.nextStep = function() {
		$scope.currentStep = {
			upload : false,
			download:  true,
		}
	}

	$scope.reset = function() {
		$scope.currentStep = {
			upload : true,
			download:  false,
		}
	}

 function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
 
 el("download").addEventListener('click', function() {   downloadCanvas(this, 'canvas', $scope.currentTrend.filename); }, false);

*/
});