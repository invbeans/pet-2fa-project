//пока единый контроллер
//если будет слишком большим поделю его
const knex = require('../knexfile');
const bcrypt = require('bcrypt');

class mainController {
    async registration(req, res) {
        try {
            const { username, email, password } = req.body;
            const currentUsers = await knex.select('*')
                .where('username', '=', username)
                .orWhere('email', '=', email)
                .from('user');
            if (currentUsers.length > 0) {
                res.json('Пользователь с таким именем или почтой уже существует');
                return;
            }
            let hashedPassword = await bcrypt.hash(password, 3);
            const userData = await knex('user')
                .returning(['id', 'username', 'email'])
                .insert({ username, email, password: hashedPassword });
            res.json(userData);
        } catch (error) {
            res.json(error.message);
        }
    }

    async checkUserExistsAndPassword(req, res) {
        try {
            const email = req.query.email;
            const username = req.query.username;
            const password = req.query.password;
            let queryBuilder = knex.select('*');
            if (email !== undefined) {
                queryBuilder.where('email', '=', email);
            } else {
                queryBuilder.where('username', '=', username);
            }
            queryBuilder.from('user');

            //массив
            let userArray = await queryBuilder;
            console.log(userArray);
            if (userArray.length == 0) {
                res.json('Пользователя с таким именем или почтой не существует');
                return;
            }
            const user = userArray[0];
            const isCorrectPassword = await bcrypt.compare(password, user.password);
            if (!isCorrectPassword) {
                res.json('Неверный пароль');
                return;
            }
            const { hashedPassword, ...userData } = user;
            res.json(userData);
        } catch (error) {
            res.json(error.message);
        }
    }

    //мб логин и логаут не нужны тк next-auth
    async login(req, res) {
        //TODO
    }

    async logout(req, res) {
        //TODO
    }

    async addNewService(req, res) {
        //TODO
    }

    async addNewSecretKey(req, res) {
        //TODO
    }

    async getNewTOTP(req, res) {
        //TODO
    }
}

module.exports = new mainController();