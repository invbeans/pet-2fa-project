import Router from 'express';
const router = new Router();
//другие импорты сейчас, мб улетит
import mainController from '../controllers/main.controller';

router.post('/registration', mainController.registration);
router.post('/login', mainController.login);
router.post('/logout', mainController.logout);
router.post('/add_new_service', mainController.addNewService);
router.post('/add_new_secret', mainController.addNewSecretKey);
router.get('/get_new_totp', mainController.getNewTOTP);

export default router