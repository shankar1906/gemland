export const openMobilemenu = () => {
  document
    .getElementsByClassName("offcanvas__info")[0]
    .classList.add("info-open");
  document
    .getElementsByClassName("offcanvas__overlay")[0]
    .classList.add("overlay-open");
};
export const closeMobilemenu = () => {
  document
    .getElementsByClassName("offcanvas__info")[0]
    .classList.remove("info-open");
  document
    .getElementsByClassName("offcanvas__overlay")[0]
    .classList.remove("overlay-open");
};
