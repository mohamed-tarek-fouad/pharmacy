import {
	badRequestResponse,
	createdResponse,
	unAuthorizedResponse,
} from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function addProduct(req, res, next) {
	try {
		const { name, quantity, categoriesId, price } = req.body;
		const user = req.user.role;
		if (user != 'admin') {
			return unAuthorizedResponse(res, 'user should be admin');
		}
		const categoryId = prisma.categories.findFirst({
			where: {
				id: categoriesId,
			},
		});
		if (!categoryId) {
			return badRequestResponse(res, 'there is no category with this id');
		}

		const product = await prisma.products.create({
			data: {
				name,
				quantity,
				categoriesId,
				price,
			},
		});
		return createdResponse(res, 'Product Added succesfully', product);
	} catch (err) {
		next(err);
	}
}
