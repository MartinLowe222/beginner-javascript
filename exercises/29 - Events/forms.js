const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

// loads a prompt on users page

const signupForm = document.querySelector('[name="signup"]');

// you use a submit button instead of click when using form 

// this prevents chad from submitting the it.
// we have name value on it
//.includes is not case sensitstive 
signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
      alert('Sorry bro');
      event.preventDefault();
    }
  });