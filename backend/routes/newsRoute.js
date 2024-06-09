const express = require('express');
const NewsItemModel = require('../models/NewsItem');
const router = express.Router();

// router.use(express.json());

router.post('/addnewsitem', async function (req, res) {
    try {
        const newitem = new NewsItemModel(req.body);
        await newitem.save();
        res.send('News added successfully');
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/getallnewsitems', async function (req, res) {
    try {
        const data = await NewsItemModel.find();
        // res.status(200).json({ news });
        res.send(data)
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});


router.post('/getnewsitembyid/:newsid', async function (req, res) {
    try {
        const Newsid = req.body.newsid
        // for post request use req.body
        const data = await NewsItemModel.findOne({ _id: Newsid })
        // for get request use req.params
        // const data = await NewsItemModel.findOne({ _id: req.params.newsid })
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})



router.post('/getnewsitemsbyuserid', async function (req, res) {
    // res.send(req.body.userid);
    // res.send("Hello");
    try {
        const data = await NewsItemModel.find()
        //res.send(data)
        const userPostedNewsItems = data.filter(
            (obj) => obj.postedBy.id === req.body.userid
        )
        res.send(userPostedNewsItems)
    } catch (error) {
        res.status(400).send(error)
    }
})




router.post('/editnewsitem', async function (req, res) {
    try {
        await NewsItemModel.findOneAndUpdate({ _id: req.body.newsid }, req.body)
        res.send('News Edited Succesfully')
    } catch (error) {
        res.status(400).send(error)
    }
})




router.post('/deletenewsitem', async function (req, res) {
    const { newsid } = req.body;
    try {
        await NewsItemModel.findByIdAndDelete(newsid)
        res.send('News Deleted Succesfully');
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;