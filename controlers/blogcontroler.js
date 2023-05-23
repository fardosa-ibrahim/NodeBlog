const Blog=require('../models/blog')

const blogIndex=(req,res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('index',{title:'all blogs',blogs:result})
    }).catch((error)=>{
        console.log(error)
    })
}

const blogDetails=(req,res)=>{
    const id=req.params.id
    Blog.findById(id)
      .then(result =>{
        res.render('details',{blog:result, title:'Blog Details'})
      }).catch(error =>{
        res.status(404).render('404',{title:'404'})
    })
}

const blogCreateGet=(req,res)=>{
    res.render('create',{title:'Create a new blog'})
}

const blogCreatePost=(req,res)=>{
    const blog=new Blog(req.body)
    blog.save().then((result)=>{
        res.redirect('/blogs')
    }).catch((error)=>{
        console.log(error)
    })
}

const blogDelete=(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports={
    blogIndex,
    blogCreateGet,
    blogCreatePost,
    blogDelete,
    blogDetails
}