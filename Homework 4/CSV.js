/**
 * Created by Menika on 25.06.2016.
 */
var users = [
    {
        firstName: 'Dmitry',
        lastName: 'Bondarchuk',
        birthDay: '16.07.1990',
        phones: [
            '89001234567',
            '83431234567'
        ]
    },
    {
        firstName: 'Ivan',
        lastName: 'Petrov',
        birthDay: '08.06.1956',
        phones: [
            '89001234567',
            '83431234567'
        ]
    }
];
user = {};
user.firstName = prompt ('Input your name:', 'Shamil');
user.lastName = prompt('Input your lastname','Burkhanov');
user.birthDay = prompt('Input ypur birthdate','27.06.1984');
user.phones = [];
    for (var j = 0; j < 2; j++) {
        user.phones.push (user.phone = prompt('Input your phone number', '123456789'))
    }
users.push(user);

for (var i = 0; i < users.length; i++) {
    console.log(users[i].firstName + ';' + users[i].lastName + ';' + users[i].birthDay + ';' + users[i].phones);
}