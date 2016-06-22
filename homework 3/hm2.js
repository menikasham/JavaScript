/**
 * Created by Menika on 22.06.2016.
 */
var i = 0;
while ((i + 1) <= 100) {
    x = ((i % 5 == 0) && (i % 3 == 0)) ? 'FizzBuzz' : (i % 3 == 0) ? 'Fizz' : (i % 5 == 0) ? 'Buzz' : i;
    console.log(x);
    i++;
}
