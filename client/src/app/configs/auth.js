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
                if (!credentials?.password || (!credentials?.email && !credentials?.username)) {
                    console.log('падает на проверке полей')
                    return null;
                }

                //получить пользователя по логину или по почте (лучше один запрос)
                //если пользователь есть и пароли совпали
                //сюда на фронт отправить БЕЗ ПАРОЛЯ

                //то есть условно GET на сервер
                //пароли сравним на сервере
                //checkUserExistsAndPasswordCorrect

                //вернуть юзера с бэка

                /*body: JSON.stringify({
                        emaiL: credentials?.email,
                        username: credentials?.username,
                        password: credentials?.password
                    }) */

                const fetchHeaders = new Headers();
                fetchHeaders.append('Content-Type', 'application/json');
                const options = {
                    headers: fetchHeaders,
                    mode: 'cors',
                    method: 'get',
                    
                };
                const passwordParam = encodeURIComponent(credentials.password);
                const usernameParam = encodeURIComponent(credentials.username) || '';
                const emailParam = encodeURIComponent(credentials.email) || '';
                const response = (await fetch(`http://localhost:8000/check_user?username=${usernameParam}&email=${emailParam}&password=${passwordParam}`, options));
                const user = await response.json();
                if (!user.username && !user.email) {
                    //если не вошел или ошибка
                    return null;
                }
                console.log(user);
                //у объекта поле именно name
                const userProfile = {name: user.username, email: user.email};
                return userProfile;
            }
        })
    ]
}