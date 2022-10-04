import { Router } from 'express';
// import joiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import * as ProductService from '../services/product/index.js';
// import productSchema from "../helpers/schemas/product.schema.js";
import passport from 'passport';
const router = Router();

router.get('/', ProductService.getProducts);
router.get('/:id', ProductService.getProductId);
//  router.post("/", joiMiddleware(productSchema), ProductService.addProduct);
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	ProductService.addProduct,
);

export default router;
