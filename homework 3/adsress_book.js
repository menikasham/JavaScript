/**
 * Created by Menika on 22.06.2016.
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
user.phones = prompt('Input your phone number', '123456789');
users.push(user);

for (var i = 0; i < users.length; i++) {
    console.log('Контрагент ' + (i + 1) + '\n' + 'Имя: ' + users[i].firstName + '\n' + 'Фамилия: ' + users[i].lastName + '\n' + 'Дата рождения: ' + users[i].birthDay + '\n' + 'Телефон: ' + users[i].phones);
}