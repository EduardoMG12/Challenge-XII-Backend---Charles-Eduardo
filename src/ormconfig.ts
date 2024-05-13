// edit for some database i don't know what i use and after run application and how can i running database
import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco_de_dados',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
