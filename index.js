const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://yohan:asd030709!!@alpaca.hsndp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect...'))
 .catch(err =>console.log(err))




app.get('/',(req, res) => res.send('Hello Word!'))

app.post('/register', (req, res)=>{

    //회원 가입 할때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.


    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))