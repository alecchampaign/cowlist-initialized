const axios = require('axios').default;

const addCow = (name, description, cb) => {
    console.log('NAME: ', name);
    console.log('DESC: ', description);
  axios.post('/api/cows', {
    name: name,
    description: description
  })
    .then(data => {
      cb(data.data);
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
}

export default addCow;