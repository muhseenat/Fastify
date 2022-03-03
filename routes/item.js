
const {getItem,getItems} =require('../controllers/items')


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


function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts);

  //GET SINGLE ITEM
  fastify.get("/item/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
