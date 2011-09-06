(function() {
  window.SupportBee || (window.SupportBee = {});
  SupportBee.Form = {
    initialize: function(options) {
      var divToAppend, form;
      divToAppend = options.div;
      form = this.renderForm();
      return $("#" + divToAppend).append(form);
    },
    renderForm: function() {
      return '<form>\n  <fieldset>\n    <label for="name">Your Name</label>\n    <input class="name" maxlength="255" name="name" type="text">\n\n    <label for="email">Your Email</label>\n    <input class="email" maxlength="255" name="email" type="text">\n    \n    <label for="message">Your Message</label>\n    <input class="message" name="message" type="textarea">\n\n    <input type="submit" value="Post Message">\n  </fieldset>\n</form>';
    }
  };
}).call(this);
