describe "SupportBee.Form", ->

  beforeEach ->
    $('body').append("<div id='ticket_form'></div>")

  describe "Form Rendering", ->

    beforeEach ->
      SupportBee.Form.initialize(div: 'ticket_form')

    it "should render an email field", ->
      console.log $('#ticket_form form')
      expect($('#ticket_form form')).toContain('input.email')
