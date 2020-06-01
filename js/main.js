function getRequest() {

  axios
      .post('http://cards.danit.com.ua/login',
          {
            email: 'a@a.com',
            password: '12345'
          },
          // {
          //   headers: {
          //     'Authorization':'270b3dee7c06'
          //   }
      )
      .then(response => {
        // debugger
        // const token = response.data.token;
        // axios
        //     .post('http://cards.danit.com.ua/cards',
        //         {
        //           title: "Визит к кардиологу",
        //           description: 'Плановый визит',
        //           doctor: "Cardiologist",
        //           bp: "24",
        //           age: 23,
        //           weight: 70
        //         },
        //         {
        //           headers: {
        //             'Authorization': token
        //           }
        //         })
        //     .then(response =>
        console.log(response.data);
        // );
      });
}

class Modal {
  constructor (id, classList, modalContent) {
    this._id = id;
    this._classList = classList;
    this.elem = null;
  }

  // createElem(tagName, tagClass = "", tagText = "", tagId = "") {
  //   debugger
  //   const tag = document.createElement(tagName);
  //   tag.className = tagClass;
  //   tag.innerHTML = tagText;
  //   if(tagId) {
  //     tag.id = tagId;
  //   }
  //   return tag;
  // }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList = this._classList;
    this.elem.id = this._id;
    return this.elem;
    // const modalContent = this.createElem("div", 'modal-content');
    // const closeCross = this.createElem('span', "close", "&times;");
    // closeCross.addEventListener("click", this.closeModal.bind(this));
    // modalContent.append(closeCross);
    // this.elem.append(modalContent);
  }

  openModal() {
    this.elem.classList.add("active");
  }

  closeModal() {
    this.elem.classList.remove("active");
  }

}

class Form {
  constructor(actionForm = '', idForm, classesForm, inputList){
    this._action = actionForm;
    this._idForm = idForm;
    this._classesForm = classesForm;
    this._inputList = inputList;
    this.elem = null;
  }

  render () {
    this.elem = document.createElement('form');
    this.elem.classList = this._classesForm;
    this.elem.id = this._idForm;
    this.elem.action = this._action;
    this.elem.insertAdjacentHTML('beforeEnd', this._inputList);
    return this.elem;
  }

  handleSubmit() {

  }

  serializeJSON() {

  }
}


// class EnterForm extends Form {
//   constructor(...args) {
//     super(...args);
//   }
//
// }


class Input {
  constructor(type, name, placeholder, req = true) {
    this._type = type;
    this._name = name;
    this._placeholder = placeholder;
    this._reg = (req) ? 'required' : '';
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `<input type=${this._type} name=${this._name} placeholder=${this._placeholder} ${this._reg}>`;
    return this.elem;
  }
}

class Select {
  constructor() {
  }
}

class Textarea {
  constructor() {
  }
}

class Visit {
  constructor(purpose, comments, urgency, name, surname) {
  }
}

class VisitCardiologist extends Visit{
  constructor(pressure, massIndex, pastIllness, age, ...args) {
    super(...args);
  }
}

class VisitDentist extends Visit {
  constructor(dataLastVisit, ...args) {
    super(...args);
  }
}

class VisitTherapist extends Visit{
  constructor(age, ...args) {
    super(...args);
  }
}

class Card {
  constructor() {
  }
}


const buttonOpenLogin = document.getElementById('enter-btn');
const modalEnter = new Modal('enter-modal', 'modal');
render(modalEnter, document.getElementById('root'));
const enterForm = new Form ('', 'enter-form', 'enter-form',
      `<input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <input type="submit" value="Enter">
                <input type="reset" value="Cancel">`);
render(enterForm, document.getElementById('enter-modal'));
buttonOpenLogin.addEventListener("click",   modalEnter.openModal.bind(modalEnter));

