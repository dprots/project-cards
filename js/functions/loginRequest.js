export async function loginRequest(email, pass) {
  debugger
  localStorage.clear();
  const {data} = await axios.post('http://cards.danit.com.ua/login', {
    email: email,
    password: pass
  });
  if (data.status == 200) {
    return data
  } else {
    alert(data.error)}
}