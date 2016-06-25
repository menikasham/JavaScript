/**
 * Created by Menika on 25.06.2016.
 */
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    if (n % 2 == 1) {
        return false;
    }
    return isEven(n - 2);
}
console.log(isEven(n))