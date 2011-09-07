(function() {
  window.SupportBee || (window.SupportBee = {});
  SupportBee.Form = {
    initialize: function(options) {
      var form, _base, _base2, _base3;
      this.options = options;
      if (this.options.company == null) {
        throw "You must provideo the company";
      }
      (_base = this.options).base_domain || (_base.base_domain = 'supportbee.com');
      (_base2 = this.options).width || (_base2.width = '100%');
      (_base3 = this.options).height || (_base3.height = '80%');
      form = this.renderForm();
      $("#" + this.options.div).html(form);
      return this;
    },
    iframeURL: function() {
      console.log('options ', this.options);
      return "http://" + this.options.company + "." + this.options.base_domain + "/web_tickets/new?embed=true&" + (this.prefillForm());
    },
    prefillForm: function() {
      return "ticket[requester_name]=" + this.options.name + "&ticket[requester_email]=" + this.options.email + "&ticket[subject]=" + this.options.subject;
    },
    renderForm: function(options) {
      return "<iframe src=\"" + (this.iframeURL()) + "\" height=\"" + this.options.height + "\" width=\"" + this.options.width + "\"></iframe>";
    }
  };
}).call(this);
