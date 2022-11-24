let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8082';
describe('Insertar un ingrediente: ',()=>{
    it('deberia insertar in ingrediente', (done) => {          
        chai.request(url)
            .post('/ingrediente')
            .send({ Nombre : "Manzana", Existencias: "30", Existencias_Minimas:"25"})
            .end( function(err,res){
                expect(res).to.have.status(404);
                expect(res.text).to.be.a('string');
            done();
        });
    });
});