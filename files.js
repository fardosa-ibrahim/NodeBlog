// reading a file 
const fs=require('fs')

// fs.readFile('./blog1.txt',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data.toString())
// })

// writing a file 
// fs.writeFile('./blog1.txt','hello world',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log('file was written')
// })

// greating dir 
// if(!fs.existsSync('./test')){ 
// fs.mkdir('./test',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log('folder created')
// })
// }else{
//     fs.rmdir('./test',()=>{
//         console.log('folder deleted')
//     })
// }

// deleting file 
// if(fs.existsSync('./test/delete.txt')){
//     fs.unlink('./test/delete.txt',(error)=>{
//         if(error){
//             console.log(error)
//         }
//         console.log('file deleted')
//     })
// }

const readStrem=fs.createReadStream('./test/bank.txt')

readStrem.on('data',(chunk)=>{
    console.log('.....NEW CHUNK.....')
    console.log(chunk.toString())
})

