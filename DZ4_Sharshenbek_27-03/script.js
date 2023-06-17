function findAverage(array) {
    var amountOfNumbers = array.length;
    var sum = 0
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    var divisionOfNumbers = sum / amountOfNumbers;
    console.log(divisionOfNumbers);
}
findAverage([5,6,7,7,8,9]);

function dataType(variable) {
    var examination = typeof(variable);
    console.log(examination);
}
dataType(true); // я пытался выполнить это задание без typeoff но не смог, из за этого не отправил в срок