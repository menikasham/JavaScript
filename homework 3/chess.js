/**
 * Created by Menika on 22.06.2016.
 */
var chess = '';
for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
        chess += (x % 2 == y % 2) ? '#' : ' ';
    }
    chess += '\n';
}
console.log(chess);