//will check whether the fields are empty or not
export const checkEmpty = (data, unCheck) => {
  // console.log('unCheck: ', unCheck);
  // console.log("data : ", data);
  const emptyArr = [];
  for (let key in data) {
    // console.log('key: ', key);
    //
    if (
      typeof data[key] === "boolean" ||
      typeof data[key] === "number" ||
      unCheck?.includes(key)
    )
      continue;
    if (data[key] == undefined || data[key].trim() == "") {
      //
      emptyArr.push(key);
    }
  }
  // console.log('emptyArr: ', emptyArr);
  return emptyArr;
};


export const checkEmail = (emailID) => {
  //
  const pattern = /^([a-zA-z0-9\.-]+)@([a-zA-z]+)\.([a-z]{2,6})(.[a-z]{2,6})?$/;
  const isVerified = pattern.test(emailID);
  if (isVerified) {
    return true;
  }
  return false;
};

