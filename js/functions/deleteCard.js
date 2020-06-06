import {axiosRequest} from "./axiosRequest.js";

export function deleteCard (elem) {
  const pass = prompt('Enter password:');
  if (pass === '123') axiosRequest('DELETE', `cards/${elem.dataset.id}`);
  elem.remove();
}