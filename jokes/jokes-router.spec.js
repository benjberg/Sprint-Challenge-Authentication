const request = require('supertest');
const server = require('../api/server.js');

describe('GET - Jokes API', () => {
    it('should return not authorized', () => {
      return request(server)
        .get('/api/jokes')
        .then(res => {
          expect(res.body.message).toBe('Unauthorized Access.');
        });
    });
   
        it('should return a JSON Object', async () => {
            const response = await request(server).get('/api/jokes')
                expect(response.type).toEqual('application/json')
        })
      
        });

