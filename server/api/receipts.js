const router = require('express').Router()
const { Receipt } = require('../db/models')
const asyncHandler = require('express-async-handler')

module.exports = router

//retrieve all items ever scanned
router.get('/', asyncHandler(async (req, res, next) => {
  const everyItemEverPurchased = await Receipt.findAll()
  res.json(everyItemEverPurchased)
}))

//create bulk entry for receipt
router.post('/', asyncHandler(async (req, res, next) => {
  // console.log(req.body)
  const receipt = await Receipt.bulkCreate(req.body, {returning: true})
  // const receipt = await Receipt.findAll()
  if (receipt.length === 0) {
    return res.send('no entries returned').status(500)
  }
  res.status(201).json(receipt)
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
  await Receipt.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
}))
