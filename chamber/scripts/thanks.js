//Parse information received from URL when form was submitted
const getString = window.location.search;
console.log(getString);

const formInfo = new URLSearchParams(getString);
console.log(formInfo);

console.log(formInfo.get('first'));
console.log(formInfo.get('last'));
console.log(formInfo.get('title'));
console.log(formInfo.get('email'));
console.log(formInfo.get('phone'));
console.log(formInfo.get('business-name'));
console.log(formInfo.get('description'));
console.log(formInfo.get('membership'));
console.log(formInfo.get('timestamp'));

//Message on thanks.html
document.querySelector('#confirmation').innerHTML = `
<p>Thank you for joining the Greenville Chamber of Commerce.</p>
<p>You are now a ${formInfo.get('membership')} Level Member.</p>
<p>${formInfo.get('timestamp')}</p>`;

