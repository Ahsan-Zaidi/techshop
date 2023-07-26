import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true, 
    },
    {
        name: 'Satoru Gojo',
        email: 'gojo@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false, 
    },
    {
        name: 'Yuji Itadori',
        email: 'yuji@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false, 
    },
];

export default users;