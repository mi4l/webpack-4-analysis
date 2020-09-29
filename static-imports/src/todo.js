export const complete = el => {
  if (el.getAttribute('disabled') != 'true') {
    el.setAttribute('disabled', true);
  }
};