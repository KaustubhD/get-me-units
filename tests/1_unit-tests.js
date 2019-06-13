var chai = require('chai')
var assert = chai.assert
var ConvertHandler = require('../controllers/convertHandler.js')

var convertHandler = new ConvertHandler()

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32l'
      assert.equal(convertHandler.getNum(input),32)
      done()
    })
    
    test('Decimal Input', function(done) {
      var input = '32.5534mi'
      assert.equal(convertHandler.getNum(input),32.5534)
      done()
    })
    
    test('Fractional Input', function(done) {
      var input = '4/7gal'
      assert.equal(convertHandler.getNum(input),0.5714285714285714)
      done()
    })
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '32.5534/7mi'
      assert.equal(convertHandler.getNum(input),Number(32.5534/7))
      done()
    })
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '32.5534/7/4/3kg'
      assert.equal(convertHandler.getNum(input), 'Invalid number')
      done()
    })
    
    test('No Numerical Input', function(done) {
      var input = '32.5534/7'
      assert.equal(convertHandler.getNum('kg'), 1)
      done()
    })
    
  })
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele)
      })
      done()
    })
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('124kabayachi'),'Invalid unit')
      assert.equal(convertHandler.getUnit('934fu'),'Invalid unit')
      done()
    })
    
  })
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg']
      var expect = ['l','gal','km','mi','kg','lbs']
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
    
  })
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let inps = ['gal','l','mi','km','lbs','kg']
      let exp = ['gallon', 'litre', 'mile', 'kilometer', 'pound', 'kilogram']
      inps.forEach((inp, i) => {
        assert.equal(convertHandler.spellUnit(inp), exp[i])
      })
      done()
    })
    
  })
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal']
      var expected = 18.9271
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
    test('L to Gal', function(done) {
      var input = [25, 'l']
      var expected = 6.6
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
    test('Mi to Km', function(done) {
      var input = [11, 'mi']
      var expected = 17.70728
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
    test('Km to Mi', function(done) {
      var input = [90, 'km']
      var expected = 55.92341
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
    test('Lbs to Kg', function(done) {
      var input = [9, 'lbs']
      var expected = 4.082
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
    test('Kg to Lbs', function(done) {
      var input = [30, 'kg']
      var expected = 66.138
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1)
      done()
    })
    
  })
})