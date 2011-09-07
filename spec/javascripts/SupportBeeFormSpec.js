(function() {
  describe("SupportBee.Form", function() {
    beforeEach(function() {
      $('body').append("<div id='ticket_form'></div>");
      return this.form = SupportBee.Form.initialize({
        div: 'ticket_form',
        company: 'muziboo',
        width: '80%',
        height: '70%',
        name: 'Requester',
        email: 'requester@example.com',
        subject: 'hello'
      });
    });
    afterEach(function() {
      return $('#ticket_form').remove();
    });
    return describe("Form Rendering", function() {
      it("should render an iframe", function() {
        console.log($('#ticket_form'));
        return expect($('#ticket_form')).toContain('iframe');
      });
      it("should point to the right url", function() {
        return expect($('#ticket_form iframe').attr('src')).toEqual("http://muziboo.supportbee.com/web_tickets/new?embed=true&ticket[requester_name]=Requester&ticket[requester_email]=requester@example.com&ticket[subject]=hello");
      });
      it("should point to the right width", function() {
        return expect($('#ticket_form iframe').attr('width')).toEqual("80%");
      });
      return it("should point to the right height", function() {
        return expect($('#ticket_form iframe').attr('height')).toEqual("70%");
      });
    });
  });
}).call(this);
