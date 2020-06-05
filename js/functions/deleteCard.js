import {axiosRequest} from "./axiosRequest";

export function deleteCard (elem) {
  if (confirm('Delete this card?')) axiosRequest('DELETE', `cards/${elem.dataset.id}`);
  elem.remove();
}