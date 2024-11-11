import { DataTypes, Model } from 'sequelize';
import { sequelize } from './path-to-sequelize-instance'; // 导入 Sequelize 实例
class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false
});

// User Action
export const getUsers = () => User.findAll(); // Retrieve all users
export const createUsers = (username: string, password: string) => User.create({ username, password }); // Create a user