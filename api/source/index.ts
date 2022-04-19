import AttractionController from './resources/attraction/attractionController';
import FileController from './resources/file/fileController';
import GroupController from './resources/group/groupController';
import UserController from './resources/user/userController';
import Server from './server';
import config from './config/config';
import AuthController from './resources/auth/authController';
import ConfigController from './resources/config/configController';

const server = new Server(
  [
    new AuthController(),
    new UserController(),
    new GroupController(),
    new FileController(),
    new AttractionController(),
    new ConfigController()
  ],
  Number(config.server.port)
);

server.listen();
