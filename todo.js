/**
 * 1. We have added a directive with the name 'avatar' and handler of
 * avatarDirective to our angular app module
 */
angular.module('app', [])
  .controller('mainCtrl', mainCtrl)


function mainCtrl ($scope) {

  $scope.itemList = [];

  $scope.addNew = function (item) {
    $scope.itemList.push({ 
      todo: item.todo,
      
      dates:item.dates
    }); 
    
    item.todo = ''; 
    
    item.dates='';
  };
  
 $scope.removeElement = function(index)
  {
     $scope.itemList.splice(index, 1)

  };
  
}
