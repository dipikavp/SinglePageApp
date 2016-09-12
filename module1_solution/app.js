(function(){
   'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckController);

   LunchCheckController.$inject=['$scope'];
   function LunchCheckController($scope){
    $scope.lunch="";
    $scope.output="";
    $scope.checkLunch=function(){

        var output =calculateState($scope.lunch);
        $scope.output=output;
    };

    $scope.getStyle=function(){
       var output=$scope.output;
       if(output=="Enjoy!" || output=="Too much!")
       return {'color':'green'};
       if(output=="Please enter data first")
       return {'color':'red'};
    };
    $scope.textBoxStyle=function(){
      var output=$scope.output;
      if(output=="Enjoy!" || output=="Too much!")
      return {'border':'solid','border-color':'green'};
      if(output=="Please enter data first")
      return {'border':'solid','border-color':'red'};
    };

    function calculateState(string){
      var state=0;
      var output="";
      var filtered_array=[];
      var output_array=[];
      if(string=="")
      { output="Please enter data first";}
      else{
        var array=string.split(',');
        for(var i=0; i<array.length;i++){
          if(!array[i].match(/^([\s\t\r\n]*)$/))
             state+=1;
        }

        if (state<=3) {
          output="Enjoy!";
        }
        else{
          output="Too much!";
        }
        }
      return output;
    }

  }
})();
