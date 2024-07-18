// Write your solution in this file!

window.customerName = 'bob';

const leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'new least favorite';
  } catch (e) {
    throw new Error('Assignment to constant variable.');
  }
}

