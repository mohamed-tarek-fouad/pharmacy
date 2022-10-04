//import Product from "../../helpers/db/product.db.js";
// import Cat from '../../helpers/db/cat.db.js';
import { prisma } from '../../index.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export async function getProducts(req, res, next) {
	try {
		const products = await prisma.products.findMany({
			include: {
				category: true,
			},
		});
		return okResponse(res, 'Product fetched succesfully', products);
	} catch (err) {
		next(err);
	}
}
