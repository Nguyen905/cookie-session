const express = require('express');
const app = express();
const session = require('express-session');

const PORT = 8000;
app.use(session({
    secret: 'secret',
    cookie:{
        maxAge: 5*60*1000,
    }
}))

app.get('/', (req, res)=>{
    res.send("Hello");
})

app.get('/get-session', (req, res)=>{
    console.log(req.session);
    res.send(req.session.user);
})

app.get('/set-session', (req, res)=>{
    req.session.user = {
        name:'Nguyen',
        age:'22'
    }
    res.send('Set session success');
})

app.get('/session-destroy', (req, res)=>{
    req.session.destroy((err)=>{
        return res.send('Destroy sesstion success')
    })
})

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`);
})