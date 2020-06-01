export async function loginUser(email, pass) {
  const {data} = await axios.post('http://cards.danit.com.ua/login', {
            email: email,
            password: pass
        });
  localStorage.setItem('token', data.token);
}