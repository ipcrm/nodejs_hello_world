exports.run = function() {

  F.assert('Test Index URL, RESP 200', '/', ['get'], function(error, data, code, headers, cookies, name) {
    assert.ok(code === 200, name);
  });

  F.assert('Test Index URL, Data Contains default message', '/', ['get'], function(error, data, code, headers, cookies, name) {
    assert.ok(data.includes("The shortest path to better"), name);
    assert.ok(data.includes("software"), name);
  });

  F.assert('Test Index URL, Data Contains custom message', '/testing', ['get'], function(error, data, code, headers, cookies, name) {
    assert.ok(data.includes("The shortest path to better"), name);
    assert.ok(data.includes("testing"), name);
  });

  F.assert('Test Fake URL, RESP 404', '/notreal/notreal', ['get'], function(error, data, code, headers, cookies, name) {
    assert.ok(code === 404, name);
  });


};
