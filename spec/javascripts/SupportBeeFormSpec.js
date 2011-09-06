(function() {
  describe("SupportBee.Form", function() {
    beforeEach(function() {
      return $('body').append("<div id='ticket_form'></div>");
    });
    return describe("Form Rendering", function() {
      beforeEach(function() {
        return SupportBee.Form.initialize({
          div: 'ticket_form'
        });
      });
      return it("should render an email field", function() {
        console.log($('#ticket_form form'));
        return expect($('#ticket_form')).toContain('form input.email');
      });
    });
  });
}).call(this);
