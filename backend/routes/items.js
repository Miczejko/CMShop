const express = require("express");
const router = express.Router();
const Item = require("../models/item");


// get all items
router.get("/", async (req, res) => {
    const items = await Item.find({});
    res.json(items);
})



router.post("/new", async (req, res) => {
  console.log(req.body)
    const newItem = new Item(
            req.body
    );
    const savedItem = await newItem.save();
    res.json(savedItem);
});

// getter by id ._.
router.get("/get/:id", async (req, res) => {
    const i = await Item.findById({ _id : req.params.id });
    res.json(i);
});

// delete by id O.o
router.delete("/delete/:id", async (req, res) => {
    const itemToDelete = await Item.findById({ _id : req.params.id });
    if(itemToDelete !== null){
      const iDelete = await Item.findByIdAndDelete({ _id : req.params.id });
      res.json(iDelete);
    }
    else{
      res.json({
        error: 'no item'
      })
    }

});


// update Item
router.put('/update/:id', async (req, res) => {
    const filter = { _id: req.params.id }; // filter for finding what to update
    const update =  req.body;  // everything to change in json
    
    let iUpdated = await Item.findOneAndUpdate(filter, update, {  //updating
      returnOriginal: false
    });
    res.json(iUpdated);
  })




module.exports = router;