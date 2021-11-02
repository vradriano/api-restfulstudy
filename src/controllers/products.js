const ProductsModels = require('../models/products')


async function get(req, res){
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const products = await ProductsModels.find(obj)

  res.send(products)
}

async function post(req, res){
  const{
    name,
    brand,
    price,
  } = req.body

  const register = new ProductsModels({
    name,
    brand,
    price,
  })

  register.save()

  res.send()
}

async function put(req, res){
  const { id } = req.params

  const product = await ProductsModels.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: 'success',
    product
  })

  /* MÉTODO PUT QUE NÃO RETORNA O PRODUTO ATUALIZADO.
  const product = await ProductsModels.findOne({ _id: id })

  await product.updateOne(req.body)

  res.send({
    message: 'success',
    product,
  })
  */
}

module.exports = {
  get,
  post,
  put,
}
