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

const logTaggunRes = async (body) => {
//res format --->
//res.text.amounts[{ data(price), text(line item + price)}...]
  try {
    let response = await taggun.post('/receipt/v1/verbose/url', body)
    console.log(response.data)
  }
  catch (err) {
    console.error(err)
  }
}

logTaggunRes(formData)

