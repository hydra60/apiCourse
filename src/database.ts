import mongoose, { ConnectionOptions }  from 'mongoose';
import config from './config/config';

export async function startConnection(){
    await mongoose.connect(config.DB.LOCAL_URL_DB,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true

    });
    console.log('[*] Data base conectada con exito a moongose...');
}

