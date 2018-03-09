const axios = require('axios')
require('./secrets')

let taggunKey = process.env.TAGGUN_KEY;

const receiptURLs = {
  traderJoe1: 'http://4hatsandfrugal.com/wp-content/uploads/2015/06/64-dollar-grocery-budget-trader-joes1.jpg',

}

const formData = {
  url: receiptURLs.traderJoe1,
  headers: {
    'x-custom-key': 'string'
  },
  refresh: false,
  incognito: false,
  ipAddress: '32.4.2.223',
  language: 'en'
}

const taggun = axios.create({
  baseURL: 'https://api.taggun.io/api/',
  headers: { apikey: taggunKey },
})

// let dbEntry = {
//   merchant: '',
//   product: '',
//   price: 0,
//   date: ''
// }

const logTaggunRes = async (body) => {
//res format --->
//res.text.amounts[{ data(price), text(line item + price)}...]
  const dbReq = axios.create({
    baseURL: 'http://localhost:8080/api/',
  })
  try {
    let res = await taggun.post('/receipt/v1/verbose/url', body)
    res = res.data;
    // console.log('res', res)

    // console.log('merchant name obj', res.merchantName)
    const merchant = !res.merchantName.data
      ? res.text.text.split('\n')[0]
      : res.merchantName.data
    // console.log('merchant name', merchant)

    const itemsArr = []
    // console.log('res.amounts', res.amounts)
    for (let item of res.amounts) {
      // console.log('item', item)
      let entry = {
        merchant: merchant,
        product: item.text.slice(0, -5),
        price: +item.data,
        date: res.date.data || Date.now()
      }
      // console.log('entry', entry)
      if (entry.product.length > 2) itemsArr.push(entry)
    }
    
    dbReq.post('/receipts', itemsArr)
  }
  catch (err) {
    console.error(err)
  }
}

// const dbReq = axios.create({
//   baseURL: 'http://localhost:8080/api/',
// })

// dbReq.post('http://localhost:8080/api/receipts', [{
//   merchant: 'merchant',
//   product: 'product',
//   price: 3.99,
// }])
// .catch(console.error)
logTaggunRes(formData)
