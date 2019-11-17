const axios = require('axios').default;

const getCows = cb => {
  axios.get('/api/cows')
  .then(res => {
    if (cb) {
      cb(res);
    }
  })
    .catch(err => {
    console.log(error);
  });
}

export default getCows;