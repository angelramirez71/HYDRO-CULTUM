
const express= require('express');
const app = express();
const cultivo= require('./routes/cultivo');
const planta= require('./routes/planta');
const planta= require('./routes/propietarios');
const planta= require('./routes/sensor');

//ajustes
app.set('port',3000)


// Middleware
app.use(express.json());


// ajustess
app.use('/api/cultivo',cultivo);
app.use('/api/planta',planta);
app.use('/api/propietarios',propietarios);
app.use('/api/sensor',sensor);

app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 