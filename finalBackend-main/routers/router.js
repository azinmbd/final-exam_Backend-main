const router = require('express').Router();
const {BookRoutes} = require('../routers/book/book');

// router.get("/", )
router.use("/", BookRoutes);


module.exports = {
    AllRoutes: router
}