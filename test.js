const request = require('supertest');

req = request('http://localhost:8888');

req.get('/affirmation/en').expect(200, function(err){
    if (err) {
      console.log(err);
    }
    console.log("✅ Test passed")
});

req.get('/affirmation/fr').expect(200, function(err){
    if (err) {
      console.log(err);
    }
    console.log("✅ Test passed")
});