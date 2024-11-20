let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++);
};
const doMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
};
const betterFunction = doMagic(getData, 300);
