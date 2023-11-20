const Router = require('express');
const router = new Router();
//другие импорты сейчас, мб улетит
const controller = require('../controllers/main.controller');

//НАСКОЛЬКО Я ПОНЯЛА: видимо сайнин/сайнаут будет полностью управляться некст-аус
//от сервера потребуется только отправить credentials
//ну и зарегать новенького

router.post('/registration', controller.registration);
router.get('/check_user', controller.checkUserExistsAndPassword);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/add_new_service', controller.addNewService);
router.post('/add_new_secret', controller.addNewSecretKey);
router.get('/get_new_totp', controller.getNewTOTP);

module.exports = router;