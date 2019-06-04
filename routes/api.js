'use strict';

var expect = require('chai').expect
var ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler()

  app.route('/api/convert')
    .post(function (req, res){
      var input = req.body.input
    
      var initNum = convertHandler.getNum(input)
      var initUnit = convertHandler.getUnit(input)
    
      const isNumInvalid  = typeof initNum !== 'number'
      const isUnitInvalid = initUnit.match(/Invalid/)
      
      if(isNumInvalid && isUnitInvalid)
        res.status(400).json({err: 'Invalid number and unit'})
      else if(isNumInvalid)
        res.status(400).json({err: initNum})
      else if(isUnitInvalid)
        res.status(400).json({err: initUnit})
    
    
      var returnNum = convertHandler.convert(initNum, initUnit)
      var returnUnit = convertHandler.getReturnUnit(initUnit)
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      
      res.json({initNum, initUnit, returnNum, returnUnit, toString})
    })
}
