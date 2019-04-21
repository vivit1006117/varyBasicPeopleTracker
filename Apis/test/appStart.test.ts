import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

    it('should have a message prop', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.body.message).to.eql('Hello World!');
            });
    });
});
