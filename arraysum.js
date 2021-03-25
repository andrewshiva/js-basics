//third program
var array = [10, 2, 3, 40, 5, 60]

    function Array(array) {
        var s = 0, i;
    for (i = 0; i < array.length; i += 1) {
        s += array[i];
    
    }
    console.log('Sum : ' + s);
        
    }
    Array(array);