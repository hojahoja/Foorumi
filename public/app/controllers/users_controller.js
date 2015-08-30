FoorumApp.controller('UsersController', function($scope, $location, Api){

    $scope.login = function () {
        Api.login($scope.user)
            .success(function () {
                $location.path('/');
            }).error(function () {
                $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
            });
    };

    $scope.register = function () {
        if ($scope.newUser.password === $scope.confirmPassword) {
            Api.register($scope.newUser)
                .success(function () {
                    $location.path('/');
                }).error(function (message) {
                    $scope.errorMessage = message.error;
                });
        } else {
            $scope.errorMessage = 'Salasanat eivät täsmää';
        }

    };
});
