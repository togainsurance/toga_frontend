function CustomValidation(label) {
  this.invalidities = [];
  this.validityChecks = [];
  this.isValid = this.invalidities.length > 0;

  //add reference to the input node
  this.labelNode = label;
  this.inputNode = label.querySelector('input');

  //trigger method to attach the listener
  this.registerListener();
}

CustomValidation.prototype = {
  addInvalidity: function (message) {
    this.invalidities.push(message);
  },
  getInvalidities: function () {
    return this.invalidities.join('. \n');
  },
  checkValidity: function (input) {
    for (var i = 0; i < this.validityChecks.length; i++) {
      let isInvalid = this.validityChecks[i].isInvalid(input);
      if (isInvalid) {
        this.addInvalidity(this.validityChecks[i].invalidityMessage);
      }

      let requirementElement = this.validityChecks[i].element;

      if (requirementElement) {
        if (isInvalid) {
          requirementElement.classList.add('invalid');
          requirementElement.classList.remove('valid');
        } else {
          requirementElement.classList.remove('invalid');
          requirementElement.classList.add('valid');
        }
      } // end if requirementElement
    } // end for
  },
  checkInput: function () {
    // checkInput now encapsulated

    this.inputNode.CustomValidation.invalidities = [];
    this.checkValidity(this.inputNode);

    if (
      this.inputNode.CustomValidation.invalidities.length === 0 &&
      this.inputNode.value !== ''
    ) {
      this.inputNode.setCustomValidity('');
    } else {
      var message = this.inputNode.CustomValidation.getInvalidities();
      this.inputNode.setCustomValidity(message);
    }
  },
  registerListener: function () {
    //register the listener here

    var CustomValidation = this;

    this.inputNode.addEventListener('keyup', function () {
      CustomValidation.checkInput();
    });
  },
};

export const passwordValidityChecks = [
  {
    isInvalid: function (input) {
      return (input.value.length < 8) | (input.value.length > 100);
    },
    invalidityMessage: 'This input needs to be between 8 and 100 characters',
    element: this.labelNode.querySelector(
      '.input-requirements li:nth-child(1)'
    ),
  },
  {
    isInvalid: function (input) {
      return !input.value.match(/[0-9]/g);
    },
    invalidityMessage: 'At least 1 number is required',
    element: this.labelNode.querySelector(
      '.input-requirements li:nth-child(2)'
    ),
  },
  {
    isInvalid: function (input) {
      return !input.value.match(/[a-z]/g);
    },
    invalidityMessage: 'At least 1 lowercase letter is required',
    element: this.labelNode.querySelector(
      '.input-requirements li:nth-child(3)'
    ),
  },
  {
    isInvalid: function (input) {
      return !input.value.match(/[A-Z]/g);
    },
    invalidityMessage: 'At least 1 uppercase letter is required',
    element: this.labelNode.querySelector(
      '.input-requirements li:nth-child(4)'
    ),
  },
  {
    isInvalid: function (input) {
      return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
    },
    invalidityMessage: 'You need one of the required special characters',
    element: this.labelNode.querySelector(
      '.input-requirements li:nth-child(5)'
    ),
  },
];

export default CustomValidation;
