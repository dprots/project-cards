import {searchVisit, axiosRequest, appendCard} from './index.js';

export async function showCards() {
  if (document.cookie.includes('authorized=true')) {
    document.getElementById('btn-login').classList.remove('active');
    document.getElementById('btn-create').classList.add('active');
    searchVisit();
    const dataVisit = await axiosRequest('GET', 'cards');
    if (dataVisit) {
      dataVisit.forEach(item => {
        appendCard(item)
      })
    }
  }
}