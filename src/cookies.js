//Cookie Helper Functions

//Function: Creates a cookie
const createCookie = (name, value, path = "") => {
  //Sets cookie expiration date to 2 weeks after the moment of its creation
  let creationDate = new Date();
  creationDate.setTime(creationDate.getTime() + (1000 * 60 * 60 * 24 * 14));
  let cookieExpiration = "expires=" + creationDate .toUTCString();

  document.cookie = name + "=" + value + ";" + cookieExpiration + ";path=/" + path + ";";
};

const deleteCookie = (name, path = "") => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" + path + ";";
}

const getAllCookies = () => {
  let cookies = document.cookie;
  return cookies;
}

const getCookie = (cookieName) => {
  let name = cookieName + "=";
  let cookies = decodeURIComponent(document.cookie).split(";");

  for (let i = 0; i < cookies.length; i++) {
    let currentCookie = cookies[i];
    while (currentCookie.charAt(0) === " ") {
      currentCookie = currentCookie.substring(1);
    }

    if (currentCookie.indexOf(name) === 0) {
      return currentCookie.substring(name.length, currentCookie.length);
    }
  }
  return "";
}

export {createCookie, getAllCookies, deleteCookie, getCookie};