
const {getItem,getItems,addItem,deleteItem} =require('../controllers/items')


const Item = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
};

//what should be want as a response,Schema validation for response
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const addItemOpts = {
  schema: {
    //REQ BODY VALIDATION FOR NOT EMPTY AND TYPE
    body:{
       type:'object',
       required:['name'],
       properties:{
         name:{type:"string"},
       },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};


const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type:'object',
        properties:{
          message:{type:'string'}
        },
      },
    },
  },
  handler: deleteItem,
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts);

  //GET SINGLE ITEM
  fastify.get("/item/:id", getItemOpts);

  //ADD A NEW ITEM
  fastify.post('/additem',addItemOpts);

  //DELETE A ITEM
  fastify.delete('/delete/item/:id',deleteItemOpts);

  done();
}

module.exports = itemRoutes;
