const axios = require('axios')
const {convertReceiptFromURL} = require('./taggunReq')
const {sampleReceiptAmt, sampleReceiptText} = require('./exampleData')

const receiptURLs = {
  traderJoe1:
    'http://4hatsandfrugal.com/wp-content/uploads/2015/06/64-dollar-grocery-budget-trader-joes1.jpg',
  wholeFoods1:
    'https://lessisenough.files.wordpress.com/2010/01/receiptweek01_b.jpg',
  wholeFoods2: 'https://www.naturalnews.com/images/Whole-Foods-Reciept-2014-04-25-300-v2.jpg',
  fairway1: 'https://www.thebillfold.com/wp-content/uploads/2016/05/1zwdpei1DmTW0V5iyPVOB_A.png',
  traderJoe2: 'https://birdfriendsnesthomes.files.wordpress.com/2015/02/fullsizerender_12.jpg',

}


const processReceiptData = (ReceiptAmt, ReceiptText) => {
  console.log('processing receipt')
  // const storeNamePrefix = ['whole foods\'s', 'trader joe\'s, fairway']
  const storeNameMap = {whole: 'Whole Foods\'s', trader: 'Trader Joe\'s', fairway: 'Fairway'}
  // console.log('merchant name obj', receipt.merchantName)
  const textArr = ReceiptText.split('\n')
  const firstword = textArr[0].split(' ')[0].toLowerCase()
  let merchant = ''
  console.log('first word', firstword)
  if ( storeNameMap[firstword] ) {//if the firstword in the text (as opposed to first sentence) is a key
    merchant = storeNameMap[firstword]
  } else {
    merchant = 'no name found'
  }

  // const merchant = !receipt.merchantName.data
  //   ? receipt.text.text.split('\n')[0]
  //   : receipt.merchantName.data
  // console.log('merchant name', merchant)

  const itemsArr = []
  // console.log('receipt.amounts', receipt.amounts)
  for (let item of ReceiptAmt) {
    // console.log('item', item)
    let entry = {
      merchant: merchant,
      product: item.text.slice(0, -5),
      price: +item.data,
      date: /*receipt.date.data ||*/ null
    }
    // console.log('entry', entry)
    if (entry.product.length > 2) itemsArr.push(entry)
  }
  console.log('receipt processed', itemsArr)
  return itemsArr
}
console.log(processReceiptData(sampleReceiptAmt, sampleReceiptText))

// const storeReceiptDataFromURL = async (receiptURL, createBodyFunc, ocrFunc, processingFunc) => {
//   const dbReq = axios.create({
//     baseURL: 'http://localhost:8080/api/'
//   })
//   try {
//     const receipt = await createBodyFunc(receiptURL)
//     const receiptObj = await ocrFunc(receipt)
//     const receiptArr = processingFunc(receiptObj)
//     console.log('storing receipt')
//     const storedReceipt = await dbReq.post('/receipts', receiptArr)
//     console.log('receipt stored', storedReceipt.data)
//   } catch (err) {
//     console.log(err)
//   }
// }
// storeReceiptDataFromURL(receiptURLs.wholeFoods1,  convertReceiptFromURL, processReceiptData)

const runapp = async urlArr => {
  for (let receiptURL of Object.keys(urlArr)) {
    await storeReceiptDataFromURL(urlArr[receiptURL], convertReceiptFromURL, processReceiptData)
  }
  console.log('batch receipt storage complete')
}

// runapp(receiptURLs)
