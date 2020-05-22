import app from './app';
import { startConnection}from './database';

startConnection();
app.listen(app.get('port'));

console.log("el servidor esta ejecutando en el puerto ${app.get('port')}");