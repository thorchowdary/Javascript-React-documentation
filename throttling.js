let count = 0;

let apiCalled = false; // Use a proper initial value
const throttle = (fn, delay) => {
  if (apiCalled) return;
  apiCalled = true;
  setTimeout(() => {
    fn(); // Call the function passed to throttle
    apiCalled = false;
  }, delay);
};

const sendEmail = () => {
  throttle(() => {
    console.log("Sending email ", count++);
  }, 2000);
};
