app.service("isLoggedService", function($rootScope, $cookies, $location) {
    this.listCookies = function() {

        var theCookies = $cookies.getAll();

        // return aString;

        console.log("all in" + JSON.stringify(theCookies));

        // console.log("all in" + theCookies);
        // if(aString){
        //     console.log("real");
        //     $location.path('/home');
        // }
        // else{
        //     console.log("no cookie");
        // }
    }
});