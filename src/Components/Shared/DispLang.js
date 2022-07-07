const DispLang =
  localStorage.getItem("language") && localStorage.getItem("language") === "ar"
    ? true
    : false;
export default DispLang;
