var chaiHttp = require('chai-http')
var chai = require('chai')
var assert = chai.assert
var server = require('../server')

chai.use(chaiHttp)

suite('Functional Tests', function() {

  suite('Routing Tests', function() {
    
    suite('GET /api/convert => conversion object', function() {
      
      test('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .post('/api/convert')
        .type('form')
        .send({input: '10L'})
        .end(function(err, res){
          assert.equal(res.status, 200)
          assert.equal(res.body.initNum, 10)
          assert.equal(res.body.initUnit, 'L')
          assert.approximately(res.body.returnNum, 2.64172, 0.1)
          assert.equal(res.body.returnUnit, 'gal')
          done()
        })
      })
      
      test('Convert 32g (invalid input unit)', function(done) {
        chai.request(server)
        .post('/api/convert')
        .type('form')
        .send({input: '32g'})
        .end(function(err, res){
          assert.equal(res.status, 400)
          assert.equal(res.body.err, 'Invalid unit')
          done();
        })
      })
      
      test('Convert 3/7.2/4kg (invalid number)', function(done) {
        chai.request(server)
        .post('/api/convert')
        .type('form')
        .send({input: '3/7.2/4kg'})
        .end(function(err, res){
          assert.equal(res.status, 400)
          assert.equal(res.body.err, 'Invalid number')
          done();
        })
        
      });  
      
      test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done){
        chai.request(server)
        .post('/api/convert')
        .type('form')
        .send({input: '3/7.2/4kilomegagram'})
        .end(function(err, res){
          assert.equal(res.status, 400)
          assert.equal(res.body.err, 'Invalid number and unit')
          done()
        })
      });
      
      test('Convert kg (no number)', function(done){
        chai.request(server)
        .post('/api/convert')
        .type('form')
        .send({input: 'kg'})
        .end(function(err, res){
          assert.equal(res.status, 200)
          assert.equal(res.body.initNum, 1)
          assert.equal(res.body.initUnit, 'kg')
          assert.approximately(res.body.returnNum, 2.20462, 0.1)
          assert.equal(res.body.returnUnit, 'lbs')
          done()
        })
      })
      
    })
  })
})
