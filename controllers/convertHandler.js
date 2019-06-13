function ConvertHandler() {
  let possibles    = ['gal', 'l', 'kg', 'lbs', 'mi', 'km']
  let convertUnits = ['l', 'gal', 'lbs', 'kg', 'km', 'mi']
  let words        = ['gallon', 'litre', 'kilogram', 'pound', 'mile', 'kilometer']
  
  this.getNum = function(input) {
    let res
    if(!input) return 'Invalid number and unit'
    res = input.match(/^[\d./]+/g)
    if(!res) return 1
    
    let slashes = res[0].match(/\//g)
    
    if (!slashes) res = Number(res[0])
    else if (slashes.length>1) return 'Invalid number'
    else{
      res = res[0].split('/')
      res = Number(res[0])/Number(res[1])
    }
    
    return res
  }
  
  this.getUnit = function(input) {
    var res = input.match(/[A-Za-z]+$/g)
    
    if(!res || possibles.indexOf(res[0].toLowerCase()) == -1) return 'Invalid unit'
    
    return res[0]
  }
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase()
    var result
    return convertUnits[possibles.indexOf(initUnit)]
  }

  this.spellUnit = function(unit) {
    var result = words[possibles.indexOf(unit.toLowerCase())]
    return result
  }
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    var result
    
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
    }
    return +(Math.round(result + "e+"+5)  + "e-"+5)
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result
    result = `${initNum} ${this.spellUnit(initUnit)}${initNum > 1 ? 's': ''} converts to ${returnNum} ${this.spellUnit(returnUnit)}${returnNum > 1 ? 's': ''}`
    return result
  }
  
}

module.exports = ConvertHandler
