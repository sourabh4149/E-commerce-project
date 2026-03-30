import express from 'express'
import {listProduct, addProduct, removeProduct, singleProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const ProductRouter = express.Router();

ProductRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
ProductRouter.post('/remove',adminAuth,removeProduct);
ProductRouter.post('/single',singleProduct);
ProductRouter.get('/list',listProduct);

export default ProductRouter;
