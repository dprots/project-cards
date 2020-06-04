import {Form, Input, Modal, Select, TextArea} from '../classes';
import {render, axiosRequest, appendCard} from '../functions';

export function createVisit() {
  const modalCreateVisit = new Modal('modal');
  render(modalCreateVisit, document.getElementById('root'));
  modalCreateVisit.elem.insertAdjacentHTML('beforeend', '<h3>Create a Visit</h3>');
  const selectElem = new Select('', 'select-list-doctor', 'select-item', 'select-item',
      ['Cardiologist', 'Dentist', 'Therapist']);
  render(selectElem, modalCreateVisit.elem);

  selectElem.elem.addEventListener('change', function (e) {
    const formElem =  modalCreateVisit.elem.querySelector('#form-create-visit');
    if (formElem) {
      formElem.remove();
    }
    const selectedDoctor = e.target.value;
    const formCreateVisit = new Form('', 'form-create-visit', 'form', {submit: 'Create', reset: 'Close'});
    render(formCreateVisit, modalCreateVisit.elem);

    const inputName = new Input('text', 'name', '', 'Name', 'required');
    const inputSurname = new Input('text', 'surname', '', 'Surname','required');
    const inputPurposeVisit = new Input('text', 'purposeVisit', '', 'Purpose of Visit', 'required');
    const selectUrgency = new Select('Urgency: ','select-urgency', 'select-select-urgency', 'select-item', ['High', 'Normal', 'Low']);
    const textComments = new TextArea('create-comments', '50', '3', 'Comments');
    const fieldContainer = formCreateVisit.elem.querySelector('.form-fieldset');

    render(inputName, fieldContainer);
    render(inputSurname, fieldContainer);
    render(inputPurposeVisit, fieldContainer);
    render(selectUrgency, fieldContainer);
    render(textComments, fieldContainer);

    if (selectedDoctor === 'Cardiologist') {
      const inputPressure = new Input('text', 'pressure', '','Pressure', 'require');
      const inputMassIndex = new Input('text', 'massIndex', '','Mass Index', 'require');
      const inputDiseases = new Input('text', 'diseases', '','Previous Diseases', 'require');
      const inputAge = new Input('text', 'age', '','Age', 'require');

      render(inputPressure, fieldContainer);
      render(inputMassIndex, fieldContainer);
      render(inputDiseases, fieldContainer);
      render(inputAge, fieldContainer);
    }

    if (selectedDoctor === 'Dentist') {
      const datePastVisit = new Input('date', 'pastVisit', '','', 'require');
      render(datePastVisit, fieldContainer);
    }

    if (selectedDoctor === 'Therapist') {
      const inputAge = new Input('text', 'age', '','Age', 'require');
      render(inputAge, fieldContainer);
    }

    formCreateVisit.elem.addEventListener('submit', async function(e) {
      e.preventDefault();
      const bodyAdd = formCreateVisit.serialize();
      const dataPost = await axiosRequest('POST','cards', bodyAdd);
      if (dataPost.id) {
        alert('Visit successful added');
        modalCreateVisit.elem.remove();
        appendCard(dataPost);
      } else {
        alert('Error, try again');
      }
    })
  })
}