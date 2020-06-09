export async function axiosRequest(method, url, body) {
  const token = localStorage.getItem('token');
  const req = axios.create({
    baseURL: 'https://cards.danit.com.ua/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (method === 'GET') {
      const {data} = await req.get(url);
      return data
  }

  if (method === 'POST') {
      const {data} = await req.post(url, body);
      return data
  }

  if (method === 'PUT') {
      const {data} = await req.put(url, body);
      return data
  }

  if (method === 'DELETE') {
      const {data} = await req.delete(url);
      return data
  }
}