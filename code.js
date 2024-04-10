
function fib(n) {
    if (n == 0){
        return [0];
    }else if(n == 1){
        return [0,1];
    }
    a = 0
    indexArr = helper(n)
    recursiveArr = []
    function rest(pointA, pointB){
        recursiveArr.push(pointA, pointB)
        enter(pointA, pointB)
        function enter(pointA, pointB){
            recursiveArr.push(pointA += pointB)
            if (recursiveArr.length == indexArr.length){
                return recursiveArr;
            }
            else{
                a++
                enter(recursiveArr[a], recursiveArr[a + 1])
            }
        }
    }
    rest(indexArr[a], indexArr[a+1])
    return recursiveArr;
}

function helper(n){
    indexArr = []
    for(i = 0; i < n+1; i++){
        indexArr.push(i) 
    }       
    return indexArr
}

