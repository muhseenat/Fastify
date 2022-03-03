
//Like requiring DB
let items = require("../Items");
const {v4:uuidv4} = require('uuid')


const getItems=(req,reply)=>{
    reply.send(items)
}



const getItem=(req,reply)=>{

        const { id } = req.params;
        const item = items.find((item) => item.id == id);
        reply.send(item);

}

const addItem=(req,reply)=>{
    const {name}= req.body
     const item = {
        id:4,
        name
    }
    items = [...items,item]

    reply.code(201).send(item)
}




module.exports={
    getItem,getItems,addItem
}