/**
 * Created by Menika on 25.06.2016.
 */
function countChar(c, n) {
    var count = 0;
    for (var i = 0; i <= c.length; i++) {
        if (c.charAt(i) == 'n') {
            count++;
        }
    }return count;
}
console.log(countChar("abracadabra", "a"))