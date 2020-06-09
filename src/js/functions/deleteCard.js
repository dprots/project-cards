import {axiosRequest} from "./axiosRequest.js";

export async function deleteCard (elem) {
  const pass = prompt('Enter password for removing card:');

  if (pass === '123') {
    const {data} = await axiosRequest('DELETE', `cards/${elem.dataset.id}`);

    if (data.status === 'Success') {
      elem.remove()
    } else {
    alert('Error, try again');
    }
  } else {
    alert ('Password incorrect!')
  }
}