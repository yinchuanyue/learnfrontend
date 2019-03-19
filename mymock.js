// Mock响应模板
Mock.mock('http://test.com', {
    "users|10-15": [{   // 随机生成10到15个数组元素
        'title': '@cword(1,5)',  // 中文名称
        'id|+1': 1,    // 属性值自动加 1，初始值为1
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'name': '@cname',
        'paragraph':   '@cparagraph(1, 3)',
        
        

      
    }]
});

angular.module('app', [])

.service('userService', ['$http', function ($http) {
    return {
        doRequest:function(){
            return $http({
                url:'http://test.com',
                method:'post'
            });
        }
    };
}])
.controller('ctrl', ['$scope', 'userService', function ($scope, userService) {
    userService.doRequest().then(function success(response){
        console.log(response);
        $scope.users = response.data.users;
    }, function error(){
        console.error('error...');
    })
}]);


