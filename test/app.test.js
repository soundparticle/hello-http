const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('simple http server', () => {

    it('responds with Happy Birthday Stranger', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, '<p>Happy Birthday<strong>Stranger</strong></p>');
            });
    });
    
    it('responds with Happy Birthday on Get', () => {
        return chai.request(app)
            .get('/happy-birthday/Antreo')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, '<p>Happy Birthday<strong>Antreo</strong></p>');
            });
    });
    
    it('send a http fact', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                assert.equal(res.status, 200);
                
            });
    });


});