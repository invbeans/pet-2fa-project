import Credentials from "next-auth/providers/credentials"

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                username: {label: 'username', type: 'text', required: false},
                email: {label: 'email', type: 'email', required: false},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                //разделим на логин ИЛИ почту И пароль
                if (!credentials?.password || (!credentials?.email || !credentials?.username)) {
                    return null;
                }

                //получить пользователя по логину или по почте (лучше один запрос)
                //если пользователь есть и пароли совпали
                //сюда на фронт отправить БЕЗ ПАРОЛЯ

                //то есть условно GET на сервер
                //пароли сравним на сервере
                //checkUserExistsAndPasswordCorrect

                //вернуть юзера с бэка
                //options.body = {email: credentials?.email, username: credentials?.username, password: credentials?.password};
                const fetchHeaders = new Headers();
                fetchHeaders.append('Content-Type', 'application/json');
                //надо ли mode cors???
                const options = {
                    headers: fetchHeaders,
                    mode: 'cors'
                };
                //еще раз - БЕЗ ПАРОЛЯ СРАЗУ
                const user = await fetch('http://localhost:3000/check_user' + new URLSearchParams({
                    email: credentials?.email,
                    username: credentials?.username,
                    password: credentials?.password
                }), options);

                //вдруг тут улетит на json??
                if (!user.ok || user.json() === undefined) {
                    //если не вошел или ошибка
                    return null
                }
                console.log(user.json());
                return user.json();
            }
        })
    ]
}