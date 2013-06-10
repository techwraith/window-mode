(function () {
  var WindowMode = function () {

    /*
     *  A place to store the modes that a user defines
     */
    this.modes = [];

    /*
     *  Some sane defaults for most responsive apps
     */
    this.init = function () {
      this.register({name: 'mobile',  width: 767, condition: "<="});
      this.register({name: 'tablet',  width: 979, condition: "<="});
      this.register({name: 'desktop', width: 1200, condition: "<"});
      this.register({name: 'big', width: 1200, condition: ">="});
      return this;
    }

    /*
     *  Register a mode with windowMode
     *
     *  ex.
     *
     *  windowMode.register({name: 'desktop', width: 980, condition: '>='});
     *
     */
    this.register = function (opts) {
      this.modes[opts.width] = {name: opts.name, condition: opts.condition};
      return this;
    };

    /*
     *  Check the current window size to see what mode we're in
     *
     *  ex.
     *
     *  // returns the name of the mode - e.g. "desktop"
     *  windowMode.check()
     *
     *  // returns true if the passed in name matches the current mode name
     *  windowMode.check('mobile')
     *
     */
    this.check = function (name) {

      for(var i in this.modes) {
        var mode = this.modes[i];
        var condition = mode.condition;
        var test;
        switch (condition) {
          case '<':
            test = (window.innerWidth < i);
            break;
          case '>':
            test = (window.innerWidth > i);
            break;
          case '<=':
            test = (window.innerWidth <= i);
            break;
          case '>=':
            test = (window.innerWidth >= i);
            break;
          case '==':
            test = (window.innerWidth == i);
            break;
          case '===':
            test = (window.innerWidth === i);
            break;
          default:
            test = (window.innerWidth >= i);
        }

        if (test) {

          // does this mode match the one we want to check for?
          if (name && (mode.name == name)) {
            return true;
          }

          if (name && (mode.name != name)) {
            return false;
          }
          // we're not checking a specific name
          // just return the mode that we found
          return mode.name;

        }

      }

      // we didn't find any matches
      return false;

    }

  };

  var wm = new WindowMode();

  // if we've got a window and we don't have a module
  // create a global;
  if ((typeof window != 'undefined') && (typeof module == 'undefined')) {
    window.windowMode = wm;
  }
  // otherwise, export it.
  else {
    module.exports = wm;
  }
})();
