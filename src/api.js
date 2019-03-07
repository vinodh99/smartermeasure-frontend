// const PORT = process.env.PORT || 8085;
// const baseUrl = `http://localhost:${PORT}`;

// const api = {
//   baseUrl,
//   regsiter: `${baseUrl}/api/auth/register`,
//   login: `${baseUrl}/api/auth/login`
// };

// export default api;
class GetResults {
  results = (page = 1) => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:3010/results?page=${page}`).then(res => {
        resolve(res.json());
      });
    });
    return promise;
  };
  userData = id => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:3010/users?id=${id}`).then(res => {
        resolve(res.json());
      });
    });
    return promise;
  };
}

export default GetResults; //ES6 format of module.export
