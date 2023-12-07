const express =require("express");
const userRouter=express();
const userController=require("../controller/userController")


userRouter.set('view engine', 'ejs')
userRouter.set('views', './views/users');

const auth=require("../middleware/auth");

userRouter.get('/',userController.landing)
userRouter.get('/landing',userController.landing)



userRouter.get('/login',auth.isLogout,userController.login)





module.exports=userRouter;