const sampleReceiptText = 'WHOLE\nFOODS\nAmerica\'s Healthlest Grocery Store"\nUFM CLEMENTINE BAG\nSYDLC CNUT COFE CR\nCROFT STRAUBRY SPR\n6.99 F\n3.49 F\n4.99 F\n1,19 LB 2.49 b\nUT\nTARE01\nBEANS GREEN\n2.96 F\nITEM 4066\nVIRGL CREAM SODA\nIMA TOMATO BASIL S\nBULK ALMOND BUTTER\nHTICA PARM REG GRA\nBC NF VAN GRK YGRT\nBC NF VANGRK YGRT\n365 LT CHNK TUNA\nBC NF VAN GRK YGRT\nBC NF VAN GRK YGRT\nANCH 0G CINN HOT D\nBLACKBERRIES\nBRM THCK RLD DATS\n4.99 B\n3,99 F\n5.77 F\n4.23 F\n1.39F\n1.39 F\n2.59 F\n1 39 F\n1,39 F\n6.99 F\n3.99 F\n4.99 F\nARE01\n2.33 LB 99 Ib\nBANANA 06\nUT\n2.31 F\nITEM 94237\nMP\nBAG REFUND\n10\nITEM 486408\n46-F\n35\nCPITEM 20% OFF Bananas!\nTax 7.00%\nTAX\n35 BAL 63.63\n'

const sampleReceiptText2 = '^Foodtown\nA division of General Distributors Ltd\nWELCOME TO\nFOODTOWIN\nAUCKLAND AIRPORT\nJOHN GOULTER DRIVE\nPhone 09-256-2128 GST No. 44-833-938\nTax Invoice\nGST Inclusive\n5 BROS P/SCE GAR/ON\nARATAKI MANUKA HNY\nCHARLIES JUICE 1L\nCRAIGS MX BEAN SALD\nDMN HOT ENG MUSTARD\nGREGGS 40G GRD CURRY\nGREGGS HERB PKT 15G\nGREGGS WHITE PEPPER\nOAK PEAS MINTED 420G\n$4.70\n$3.40\n$3.53\n$2.99\n$3.38\n$3.29\n2$1.69\nR/HARRIS COFF PLNGR\nR/SEAL SALT 450G\nRIZZOLI OIL 500ML\nRIZZOLI OIL 500M\nSANREMO VEGERONI375\nSR 4.5MTR FOIL RFL\nSR PENNE GRANDI 500\nSR TRAD SAUCE 500GM\nSTAGG CHILLI 4250G\n46\n$2.15\n$%1.79\n$1.79\n$3.65\n$7.20\n$5.15\n$3.93\n$4.72\n$13.99\n$10.99\n$21.49\n$6.48\n2$3.60\nSUNRICE POUR/STORE\nKLIPIT RECT 1 LT\nKLIPIT ROUND 1 LTR\nMILL ROAD MER/CAB\nTIMARA OA MERLOT\nS/LGR BT 12PK\nTARAKIHI SKIN/BONED\nAVOCADO HASS\n3$1.75\n1.085 Kg $2.47/ Kg\n0.060 Kg $16.97/ Kg\n0.350 Kg $%3.97/ K9\n$5.25\nBANANAS\n$%2.68\nCUCUMBER TELE\nGARLIC\n$1.02\nORGANIC ONIONS\nPEARS BEURRE BOSC\nTOMATO 6 PACK\nANCHOR THE MILK 1L\nBIO EGGS ORGANIC 6PK\nPHILADELPHIA SPREAD\nPUHOI EURO YOGHURT\n$1.39\n$5.98\n$1.99\n$5.81\n$3.32\n2$3.49\n$6.98\nASST BREAD ROLLS EA\n$2.00\n$3.40\n$5.99\n4 $0.50\nSPEC BREAD\nSUSHI 5PCE\n46 BAL DUE\n$179.52\nROUNDING\nCASH\n-$0.02\n$190.00\nCHANGE\n$10.50\nYOUR SAVINGS TODAY!\nSUPER SAVERS\nCASHIER NAME: SANJEETA N\nC0029 #0685 12:55:21\n15OCT2006\nS0036\nROU6\nThank you for choosing to shop\nFoodtown Auckland Airport\nStore Trading Hours\nMonday - Sunday 24hrs\n'

const sampleReceiptText3 = 'roge\nRight Store. Right Price.\n6652 Youree Dr\n(318) 795-9944\nYOUR CASHIER WAS AMY\nFRI GNGR ORG\nROMAINE ORG\nKRO BNS\nMISF TORTLLA\nMNMU PORTABL\n2.49 B\n1.99 B\n1.19 B\n2.59 B\nPC 3.00 B\nSC 3695 KROGER SAVINGS\n0.99\nMNMU PORTABL\nPC 3.00 B\nSC 3695 KROGER SAVINGS\n0.99\nKRO OLV OIL\nMISF TORTLLA\nKRO BNS\nKRO CHLI PWD\nP S CORIANDR\n2.59 B\n2.59 B\n1.19 B\n2.19 B\n2.29 B\n1.33 lb 1.39 /lb\n3 0.89\nONIONS ORG\n1.85 B\nHAAS AVOCADO\nPPR BELL RED\nPPR YLW ORG\nLETTUCE LEAF\n2.67 B\n1.99 B\n2.29 B\n0.88 B\nPC\n0.71\nSC 3175 KROGER SAVINGS\n0.69 lb e 3.99 /1b\nWT\nTOMATO ORG\nCILANTRO ORG\nPS ORG BAY L\n275 B\n0.99 B\n3.99 B\n2933\n1.96\nKROGER PLUS CUSTOMER\nTAX\nBALANCE\n44.48\nitt111\n'

const searchText = (receipt) => {
  receipt = receipt.toLowerCase()
  let merchant = ''
  const storeNameMap = {foodtown: 'Foodtown', kroger: 'Kroger', trader: 'Trader Joe\'s', fairway: 'Fairway'}
  const textArr = receipt.split('\n')
  const firstword = textArr[0].split(' ')[0] //find the firstword in the text (as opposed to first sentence)
  console.log('first word', firstword)
  
  if (storeNameMap[firstword]) {
    merchant = storeNameMap[firstword]
  } else {
    for (let store of Object.keys(storeNameMap)) {
      console.log('includes?', store, receipt.includes(store))
      if (receipt.includes(store)) {
        merchant = store
        break;
      } else {
        merchant = 'no name found'
      }
    }
  }
  return merchant
}

const text = [sampleReceiptText, sampleReceiptText2, sampleReceiptText3]
for (let i = 1; i < 3; i++) {
  console.log(searchText(text[i]))
}


const sampleReceiptAmt =
[ { data: 6.99,
    text: 'UFM CLEMENTINE BAG 6.99 F',
    regions: [Array],
    index: 4,
    _rows: [Array],
    description: 'UFM CLEMENTINE BAG 6.99' },
  { data: 3.49,
    text: 'SYDLC CNUT COFE CR 3.49 F',
    regions: [Array],
    index: 5,
    _rows: [Array],
    description: 'SYDLC CNUT COFE CR 3.49' },
  { data: 4.99,
    text: 'CROFT STRAUBRY SPR 4.99 F',
    regions: [Array],
    index: 6,
    _rows: [Array],
    description: 'CROFT STRAUBRY SPR 4.99 1,19 LB 2.49 b TARE01' },
  { data: 2.49,
    text: '1,19 LB 2.49 b TARE01',
    regions: [Array],
    index: 7 },
  { data: 2.96,
    text: 'UT BEANS GREEN 2.96 F',
    regions: [Array],
    index: 8,
    _rows: [Array],
    description: 'UT BEANS GREEN 2.96 ITEM 4066' },
  { data: 4.99,
    text: 'VIRGL CREAM SODA 4.99 B',
    regions: [Array],
    index: 10,
    _rows: [Array],
    description: 'VIRGL CREAM SODA 4.99' },
  { data: 3.99,
    text: 'IMA TOMATO BASIL S 3,99 F',
    regions: [Array],
    index: 11,
    _rows: [Array],
    description: 'IMA TOMATO BASIL S 3,99' },
  { data: 5.77,
    text: 'BULK ALMOND BUTTER 5.77 F',
    regions: [Array],
    index: 12,
    _rows: [Array],
    description: 'BULK ALMOND BUTTER 5.77' },
  { data: 4.23,
    text: 'HTICA PARM REG GRA 4.23 F',
    regions: [Array],
    index: 13,
    _rows: [Array],
    description: 'HTICA PARM REG GRA 4.23' },
  { data: 1.39,
    text: 'BC NF VAN GRK YGRT 1.39 F',
    regions: [Array],
    index: 14,
    _rows: [Array],
    description: 'BC NF VAN GRK YGRT 1.39' },
  { data: 1.39,
    text: 'BC NF VAN GRK YGRT 1.39 F',
    regions: [Array],
    index: 15,
    _rows: [Array],
    description: 'BC NF VAN GRK YGRT 1.39' },
  { data: 2.59,
    text: '365 LT CHNK TUNA 2.59 F',
    regions: [Array],
    index: 16,
    _rows: [Array],
    description: '365 LT CHNK TUNA 2.59 BC NF VAN GRK YGRT 1 39 F' },
  { data: 1.39,
    text: 'BC NF VAN GRK YGRT 1,39 F',
    regions: [Array],
    index: 18,
    _rows: [Array],
    description: 'BC NF VAN GRK YGRT 1,39' },
  { data: 6.99,
    text: 'ANCH 0G CINN HOT D 6.99 F',
    regions: [Array],
    index: 19,
    _rows: [Array],
    description: 'ANCH 0G CINN HOT D 6.99' },
  { data: 3.99,
    text: 'BLACKBERRIES 3.99 F',
    regions: [Array],
    index: 20,
    _rows: [Array],
    description: 'BLACKBERRIES 3.99' },
  { data: 4.99,
    text: 'BRM THCK RLD DATS 4.99 F',
    regions: [Array],
    index: 21,
    _rows: [Array],
    description: 'BRM THCK RLD DATS 4.99' },
  { data: 2.33,
    text: '2.33 LB 99 Ib ARE01',
    regions: [Array],
    index: 22,
    _rows: [Array],
    description: '2.33 LB 99 Ib' },
  { data: 2.31,
    text: 'UT BANANA 06 2.31 F',
    regions: [Array],
    index: 23,
    _rows: [Array],
    description: 'UT BANANA 06 2.31 ITEM 94237' },
  { data: 7,
    text: 'Tax 7.00 %',
    regions: [Array],
    index: 29,
    classifyResult: 'primaryTax',
    confidenceLevel: 0.17857142857142858 },
  { data: 63.63,
    text: '35 BAL 63.63',
    regions: [Array],
    index: 30,
    _rows: [Array],
    description: '35 BAL' } ];

    module.exports = {sampleReceiptAmt, sampleReceiptText, sampleReceiptText2}

