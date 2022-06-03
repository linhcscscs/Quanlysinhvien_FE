export function loginInfo() {
  var objdata = {
    useridlogin: localStorage.getItem("token"),
  };
  return objdata;
}

export function role() {
  return localStorage.getItem("role");
}
