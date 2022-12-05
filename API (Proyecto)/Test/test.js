let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);
ID = 1;

const url= 'http://localhost:8082';

//describe('GET /herbolaria/', () => {
//    it('Deberia regresar una lista de todas las hierbas', (done) => {
//      chai.request(url)
//        .get('/herbolaria/')
//        .end((err, res) => {
//          chai.expect(res).to.have.status(200);
//          chai.expect(res.body).to.be.an('array');
//          chai.expect(res.body[0]).to.have.property('ID');
//          chai.expect(res.body[0]).to.have.property('Nombre_comun');
//          chai.expect(res.body[0]).to.have.property('Nombre_cientifico');
//          chai.expect(res.body[0]).to.have.property('Ubicación');
//          chai.expect(res.body[0]).to.have.property('Propagación');
//          chai.expect(res.body[0]).to.have.property('Mantenimiento');
//          chai.expect(res.body[0]).to.have.property('Plagas');
//          chai.expect(res.body[0]).to.have.property('Cosecha');
//          done();
//        });
//    });
//});
//
//describe('GET /herbolaria/:ID', () => {
//    it('Se espera la información de una hierba especifica', (done) => {
//      chai.request(url)
//        .get(`/herbolaria/${ID}`)
//        .end((err, res) => {
//          chai.expect(res).to.have.status(200);
//          chai.expect(res.body).to.be.an('array');
//          chai.expect(res.body[0]).to.have.property('ID');
//          chai.expect(res.body[0]).to.have.property('Nombre_comun');
//          chai.expect(res.body[0]).to.have.property('Nombre_cientifico');
//          chai.expect(res.body[0]).to.have.property('Ubicación');
//          chai.expect(res.body[0]).to.have.property('Propagación');
//          chai.expect(res.body[0]).to.have.property('Mantenimiento');
//          chai.expect(res.body[0]).to.have.property('Plagas');
//          chai.expect(res.body[0]).to.have.property('Cosecha');
//          done();
//        });
//    });
//});
//
//describe('POST /herbolaria/hierba', () => {
//    it('Se agrega una nueva hierba a la base de datos', (done) => {
//    chai
//        .request(url)
//        .post('/herbolaria/hierba')
//        .send({
//        Nombre_comun: 'Rue',
//        Nombre_cientifico: 'OA',
//        Ubicación: 'Jardin',
//        Propagación: 'Semillas',
//        Mantenimiento: 'Agua diaria',
//        Plagas: 'Ninguna relevante',
//        Cosecha: 'Otoño'
//        })
//        .end((err, res) => {
//        expect(res).to.have.status(200);
//        expect(res.text).to.deep.include('Hierba añadida con exito');
//        done();
//        });
//    });
//});
//
//describe('PUT /herbolaria/:ID', () => {
//    it('Se espera que se actualice la hierba en la base de datos y se devuelva un mensaje confirmando la actualización', (done) => {
//    chai
//        .request(url)
//        .put(`/herbolaria/${ID}`)
//        .send({
//        Nombre_comun: 'Rue',
//        })
//        .end((err, res) => {
//        expect(res).to.have.status(200);
//        expect(res.text).to.deep.include(`Se ha modificado el ingrediente`);
//        done();
//        });
//    });
//});

describe('DELETE /herbolaria/:ID', () => {
    it('Elimina una hierba de la base de datos según su ID', (done) => {
    chai
        .request(url)
        .delete(`/herbolaria/${ID}`)
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.deep.include(`Se ha eliminado el ingrediente`);
        done();
        });
    });
});