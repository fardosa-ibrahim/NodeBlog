const express=require('express')
const router=express.Router();
const blogControler=require('../controlers/blogcontroler')

router.get('/blogs',blogControler.blogIndex)
router.post('/blogs',blogControler.blogCreatePost)
router.get('/blogs/create',blogControler.blogCreateGet)
router.get('/blogs/:id',blogControler.blogDetails)
router.delete('/blogs/:id',blogControler.blogDelete)


module.exports=router;