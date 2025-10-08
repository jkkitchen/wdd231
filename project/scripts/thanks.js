//Parse information received from URL when form was submitted
const getString = window.location.search;
console.log(getString);

const formInfo = new URLSearchParams(getString);
console.log(formInfo);

console.log(formInfo.get('first'));
console.log(formInfo.get('last'));
console.log(formInfo.get('email'));
console.log(formInfo.get('phone'));
console.log(formInfo.get('timestamp'));

//Constant for checkbox values to be used in message
const selectedOptions = formInfo.getAll('information').join(', ');

//Message on thanks.html
document.querySelector('#confirmation').innerHTML = `
<p>Thank you ${formInfo.get('first')} ${formInfo.get('last')} for signing up for our monthly newsletter!</p>
<p>You will recieve information about the following: ${selectedOptions}.
<p>Phone: ${formInfo.get('phone')}<p>
<p>E-mail: ${formInfo.get('email')}<p>
<p>${formInfo.get('timestamp')}</p>`;

