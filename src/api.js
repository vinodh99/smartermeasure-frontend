const PORT = process.env.PORT || 8085;
const baseUrl = `http://localhost:${PORT}`;

const api = {
  baseUrl,
  regsiter: `${baseUrl}/api/auth/register`,
  login: `${baseUrl}/api/auth/login`
};

export default api;
