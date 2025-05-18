const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '56677',
    database: 'food',
  },
});
app.use(cors())
app.use(bodyParser.json())
app.post('/post', (req, res) => {
knex('users').insert({ name: req.body.Name ,
   email: req.body.Email  ,
   password: req.body.Password  ,
   phone: req.body.Phone ,
   address: req.body.Address }
).then(res.json('Hello'));
})
app.post('/login',(req,res)=>{
  knex.select('password','user_id').from('users').where({email:req.body.Email}).then(data=>res.json(data));
  
})
app.post('/food',(req,res)=>{
  knex('fooddonations').insert({ user_id: req.body.Userid ,
    food_des: req.body.Fddes  ,
    quantity: req.body.Fdqn  ,
    expiry_date: req.body.Fddate ,
    location: req.body.Fdloc }
 ).then(res.json('ok'));
}) 
app.get('/data',(req,res)=>{
  knex('users')
  .join('fooddonations', 'users.user_id', '=', 'fooddonations.user_id')
  .select('*').then(data=>res.json(data));
})
app.post('/request',(req,res)=>{
  knex('requestfood').insert({
    donarename:req.body.donarenm,
    donarenumber: req.body.donarenum,
    foodaddress: req.body.food_location,
    fooddescription: req.body.reqfddes,
    fooddate:req.body.date,
    user_id:req.body.Userid,
  }).then(res.json('success'));
})
app.delete('/del/:id',(req,res)=>{
  knex('fooddonations').where('donation_id', req.params.id).del().then(res.json('succ'));
})
app.get('/food',(req,res)=>{
  knex('users')
  .join('requestfood', 'users.user_id', '=', 'requestfood.user_id')
  .select('*').then(data=>res.json(data));
})
app.delete('/delreq/:key',(req,res)=>{
  knex('requestfood').where('requestfoodid',req.params.key).del().then(res.json('ok'));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
