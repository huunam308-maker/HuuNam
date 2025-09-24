let isFail = false;
const promise = {
  then(onF, onR) {
    onF(
      new Promise((onF) => {
        setTimeout(onF, 2000);
        console.log("Tải thành công");
      })
    );
    onR(
      new Promise((onR) => {
        if (isFail == true) {
          setTimeout(onR, 2000);
          console.log("Tải thất bại");
        }
      })
    );
  },
};

Promise.resolve(promise);
