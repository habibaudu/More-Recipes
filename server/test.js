import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import server from './app';

const should = chai.should();

chai.use(chaiHttp);

describe('Recipes', () => {
  it('it should GET all the Recipes', (done) => {
    chai.request(server)
      .get('/api/recipes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.recipe[0].recipe).to.equal('Fried Rice');
        done();
      });
  });
  it('it should POST a recipe', (done) => {
    chai.request(server)
      .post('/api/recipes')
      .send({

        id: 5,
        recipe: 'Corn flakes',
        Ingredient: 'milk,sugar',
        Description: 'Boil water',
        user: 'Charity',
        reviews: [],
        upvotes: 17
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Created successfully');
        done();
      });
  });

  it('should edit an item on put', (done) => {
    chai.request(server)
      .put('/api/recipes/3')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('updated sucessfully');
        done();
      });
  });
  it('should delete an item on delete', (done) => {
    chai.request(server)
      .delete('/api/recipes/1')
      .end((err, res) => {
        should.equal(err, null);
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('deleted successfully');
        done();
      });
  });

  it('should create a review for a recipe', (done) => {
    chai.request(server)
      .post('/api/recipes/2/reviews')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Reviews Created sucessfully');
        done();
      });
  });
});
