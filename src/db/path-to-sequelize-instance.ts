import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('restful-express-ts', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.sync({ force: true }).then(() => {
  console.log('数据库和表已创建');
});
export { sequelize };