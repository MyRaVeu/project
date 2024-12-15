import express from 'express'
const router =express.Router()
router.post('/register',(req, res) =>{
    const {username, email, password,repeat_password} = req.body;
    console.log(username)

})
export default router;