// import Product from "../../helpers/db/product.db.js";
// import Cat from "../../helpers/db/cat.db.js";
import { prisma } from '../../index.js';
import {
	badRequestResponse,
	okResponse,
} from './../../helpers/functions/ResponseHandler.js';
export async function getProductId(req, res, next) {
	try {
		const { id } = req.params;
		let product = await prisma.products.findFirst({
			where: {
				id: parseInt(id),
			},
			include: {
				category: true,
			},
		});
		if (!product) {
			return badRequestResponse(res, 'there is no product with this id');
		}
		return okResponse(res, 'product fetched succesfully', product);
	} catch (err) {
		next(err);
	}
}
