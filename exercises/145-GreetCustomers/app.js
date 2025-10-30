let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = "";

  // Si el cliente no está en la lista
  if (!customerData[firstName]) {
    greeting = "Welcome! Is this your first time?";
  } 
  // Si el cliente sí existe
  else {
    let visits = customerData[firstName].visits;

    if (visits === 1) {
      greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
    } 
    else if (visits > 1) {
      greeting = "Welcome back, " + firstName + "! So glad to see you again!";
    }
  }

  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
