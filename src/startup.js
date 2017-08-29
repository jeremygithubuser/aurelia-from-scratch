export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .plugin('aurelia-footer-component')  
      .plugin('aurelia-navigation-component');
    aurelia.start().then(() => aurelia.setRoot("app"));
  }