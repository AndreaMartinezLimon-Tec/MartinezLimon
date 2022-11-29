let funciones = require('../src/funciones.js');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let assert  = chai.assert;

describe('Prueba de la función potencia (should)', function() {
    it('Deberia regresar un 8', function() {
        let resultado = funciones.potencia(2,3);
        resultado.should.be.a('number');
        resultado.should.equal(8);
    })
})
describe('Prueba de la función potencia (expect)', function() {
    it('Deberia regresar un 8', function() {
        let resultado = funciones.potencia(2,3);
        expect(resultado).to.be.a('number');
        expect(resultado).equal(8);
    })
})

describe('Prueba de la función potencia (assert)', function() {
    it('Deberia regresar un 8', function() {
        let resultado = funciones.potencia(2,3);
        assert.typeOf(resultado, 'number');
        assert.equal(resultado, 8);
    })
})