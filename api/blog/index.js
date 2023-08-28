const { randomUUID } = require('crypto')
const express = require('express')
const app = express()
const port = 6579
const path = require('path')
const basePath = path.join(__dirname, 'templates')



app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
})


// cadastrar pessoas

const pessoas = [];

app.post('/cadastrar', (req, res)=>{
    const {nome, email, genero , senha} = req.body

    const usuario = {
        id: randomUUID(),
        nome,
        email,
        genero,
        senha
    }

pessoas.push(usuario);
return res.json(usuario);

})

app.get('/deletar',(req ,res)=>{
    return res.json(pessoas)
    })
    
    
    app.delete('/usuario/:id',(req,res)=>{
    const { id } = req.params
    
    const usuario = pessoas.findIndex((pessoas) => usuario.id === id)
    
    pessoas.splice(posts, 1);
    
    return res.json({"message":"deletado com sucesso"})
    
    })
    
    app.put('/usuario/:id',(req,res)=>{
    const { id } = req.params
    const {nome, email, genero , senha} = req.body
    const usuarioIndex = pessoas.findIndex((pessoas) => pessoas.id === id);
    
    if(usuarioIndex === -1 ){
        return res.status({"message":"postagem não encontrada"})
    }
    
    const postAtualizado ={
        id,
        nome,
        email,
        genero,
        senha
    }
    
    pessoas[usuarioIndex] = usuarioAtualizado;
    return res.json(usuarioAtualizado)
    
    })


// cadastrar postagens ;)

const postagens = [];

app.post('/posts',(req, res)=>{
    const {legenda} = req.body

    const posts = {
        id:randomUUID(),
        legenda
    }

    postagens.push(posts);
    return res.json(posts);

    
    
})

app.get('/postsDelete',(req,res)=>{
return res.json(postagens)
})


app.delete('/posts/:id',(req,res)=>{
const { id } = req.params

const posts = postagens.findIndex((postagens) => posts.id === id)

postagens.splice(posts, 1);

return res.json({"message":"deletado com sucesso"})

})

app.put('/posts/:id',(req,res)=>{
const { id } = req.params
const {legenda} = req.body
const postIndex = postagens.findIndex((postagens) => postagens.id === id);

if(postIndex === -1 ){
    return res.status({"message":"postagem não encontrada"})
}

const postAtualizado ={
    id,
    legenda
}

postagens[postIndex] = postAtualizado;
return res.json(postAtualizado)

})







app.post('/cadastar', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
})

app.get('/postagens',(req,res)=>{
    res.sendFile(`${basePath}/posts.html`)
})








app.listen(port, (req,res)=>{
    console.log('servidor rodando ')
})