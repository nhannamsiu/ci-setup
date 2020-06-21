const assert 	= require('assert')
const request = require('request')

const promisifiedRequest = function(options) {
  return new Promise((resolve,reject) => {
    request(options, (error, response, body) => {
      if (response) {
        return resolve(response);
      }
      if (error) {
        return reject(error);
      }
    })
  })
}

describe('mock mocha test suite', async()=>{

	it('should return test1_ok', async()=>{
    const options = {
      url: 'https://localhost:8080/test1',
      method: 'GET'
    }
    let response = await promisifiedRequest(options)
    assert.equal(response, 'test1_ok')
	})
  .timeout(10000)

  it('should return test2_ok', async()=>{
    const options = {
      url: 'https://localhost:8080/test2',
      method: 'GET'
    }
    let response = await promisifiedRequest(options)
    assert.equal(response, 'test2_ok')
	})
  .timeout(10000)

})
