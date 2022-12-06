let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);
ID = 1;

const url= 'http://localhost:8082';

describe('GET /herbolaria/', () => {
    it('Deberia regresar una lista de todas las hierbas', (done) => {
      chai.request(url)
        .get('/herbolaria/')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.an('array');
          chai.expect(res.body[0]).to.have.property('ID');
          chai.expect(res.body[0]).to.have.property('Nombre_comun');
          chai.expect(res.body[0]).to.have.property('Nombre_cientifico');
          chai.expect(res.body[0]).to.have.property('Ubicacion');
          chai.expect(res.body[0]).to.have.property('Propagacion');
          chai.expect(res.body[0]).to.have.property('Mantenimiento');
          chai.expect(res.body[0]).to.have.property('Plagas');
          chai.expect(res.body[0]).to.have.property('Cosecha');
          done();
        });
    });
});

describe('GET /herbolaria/:ID', () => {
    it('Se espera la información de una hierba especifica', (done) => {
      chai.request(url)
        .get(`/herbolaria/${ID}`)
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.an('array');
          chai.expect(res.body[0]).to.have.property('ID');
          chai.expect(res.body[0]).to.have.property('Nombre_comun');
          chai.expect(res.body[0]).to.have.property('Nombre_cientifico');
          chai.expect(res.body[0]).to.have.property('Ubicacion');
          chai.expect(res.body[0]).to.have.property('Propagacion');
          chai.expect(res.body[0]).to.have.property('Mantenimiento');
          chai.expect(res.body[0]).to.have.property('Plagas');
          chai.expect(res.body[0]).to.have.property('Cosecha');
          done();
        });
    });
});

describe('POST /herbolaria/hierba', () => {
    it('Se agrega una nueva hierba a la base de datos', (done) => {
    chai
        .request(url)
        .post('/herbolaria/hierba')
        .send({
        Nombre_comun: 'Hinojo',
        Nombre_cientifico: 'Foeniculum vulgare',
        Ubicacion: 'Prefiere una tierra ligera bien drenada, ligeramente alcalina y sol directo',
        Propagacion: 'Cultive todas las variedades de hinojo sembrando las semillas en primavera.',
        Mantenimiento: 'Corte los tallos viejos',
        Plagas: 'Ninguna relevante',
        Cosecha: 'Cortar el follaje y las flores a medida que se requiere.'
        })
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.deep.include('Hierba añadida con exito');
        done();
        });
    });
});

describe('PUT /herbolaria/actualizar/:ID', () => {
    it('Se espera que se actualice la hierba en la base de datos y se devuelva un mensaje confirmando la actualización', (done) => {
    chai
        .request(url)
        .put(`/herbolaria/actualizar/${ID}`)
        .send({
        Nombre_comun: 'Rue',
        })
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.deep.include(`Se ha modificado la hierba`);
        done();
        });
    });
});

describe('DELETE /herbolaria/eliminar/:ID', () => {
    it('Elimina una hierba de la base de datos según su ID', (done) => {
    chai
        .request(url)
        .delete(`/herbolaria/eliminar/${ID}`)
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.deep.include(`Se ha eliminado la hierba`);
        done();
        });
    });
});