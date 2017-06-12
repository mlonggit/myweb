
app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
// app.controller('MainController', ['$scope', function($scope){
    $scope.timestamp = Date();

    $scope.smallnumber = 0;
    $scope.theMessage = "";
    $scope.checkNumber = function()
    {
            //alert('checknumber');
        if( isNaN($scope.smallnumber) || $scope.smallnumber < 1 || $scope.smallnumber > 10  )
        {
            $scope.theMessage = "Number was expected to be between 1 and 10";
        }
        else
        {
            $scope.theMessage = "Number is Good";
        }
    } 

//   $scope.Articles = [
// 	{"Title":"Amazing Museums","Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our musuems are the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Musuem and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</p>","Image":"http://lorempixel.com/200/100/city/1"},
// 	{"Title":"SplashAnyone Waterpark","Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our musuems are the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Musuem and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</ p > ","Image":"http://lorempixel.com/200/100/city/2"},
// 	{"Title":"Best Zoo in Town","Body":"<p>Our waterpark is the biggest and best park in the Western World. Just south of interstate 2015, you'll find a sweet mix of Super Slides and lazy rivers.</p><p>If that wasn't enough, we have 376 of the best food trucks in the state serving everything from fried gummy bears to lemonade and pizza. Don't forget if you buy our collectors edition souvenir water park keepsake, you get free refills all year.</p><p>And we wouldn't be SplashAnyone without the rules about splashing ... wait there are no rules.</p>","Image":"http://lorempixel.com/200/100/city/3"}
// 	];

// $scope.Articles = [
// 	{"Title":"Amazing Museums",
//     "Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our musuems are the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Musuem and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</p>",
//     "Image":"images/city1.jpeg"},
	
//     {"Title":"SplashAnyone Waterpark",
//     "Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our musuems are the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Musuem and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</ p > ",
//     "Image":"images/city2.jpeg"},
	
//     {"Title":"Best Zoo in Town",
//     "Body":"<p>Our waterpark is the biggest and best park in the Western World. Just south of interstate 2015, you'll find a sweet mix of Super Slides and lazy rivers.</p><p>If that wasn't enough, we have 376 of the best food trucks in the state serving everything from fried gummy bears to lemonade and pizza. Don't forget if you buy our collectors edition souvenir water park keepsake, you get free refills all year.</p><p>And we wouldn't be SplashAnyone without the rules about splashing ... wait there are no rules.</p>",
//     "Image":"images/city3.jpeg"}
// 	];

$scope.Articles = [];
	$http({method: 'POST', url: 'http://choosetocodeapi.azurewebsites.net/api/articles', data: {
		ClassName: 'YourClassName',  //modify this for your class
		Count: 3	
	}}).then(function(result){
		$scope.Articles = result.data;
	});




// ----------------------
    var _first = "Your";
    var _last = "Name";
    $scope.User = {
        firstName: function(first){return arguments.length ? (_first=first) : _first }, 
        lastName: function(last){return arguments.length ? (_last=last) : _last }, 
        fullName : function(){return _first + ' ' + _last; } 
    }

}]);