const timeConsumer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Work finished");
    }, 2000);
  });
};

// timeConsumer().then((response)=> console.log(response))
const caller = async () => {
  let result = await timeConsumer();
  console.log(result);
};

console.log(caller());
