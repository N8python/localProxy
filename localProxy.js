const localProxy = new Proxy(localStorage, {
  get(_, prop) {
    return JSON.parse(localStorage.prop);
  },
  set(_, prop, val) {
    localStorage.prop = JSON.stringify(val);
  },
  deleteProperty(_, prop) {
    delete localStorage.prop;
  }
});
