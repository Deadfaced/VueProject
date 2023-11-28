import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Product from 'App/Models/Product';



export default class ProductsController {
  /**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */

  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.all()

      response.status(200).json(products)
    } catch (error) {
      response.status(500).json(error)
    }
  }
  public async show({ params, response }: HttpContextContract) {
    try {
      const product = await Product.find(params.id);

      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }

      return response.json(product);
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

