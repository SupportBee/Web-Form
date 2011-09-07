describe "SupportBee.Form", ->

  beforeEach ->
    $('body').append("<div id='ticket_form'></div>")
    @form = SupportBee.Form.initialize({
      div: 'ticket_form',
      company: 'muziboo',
      width: '80%',
      height: '70%',
      name: 'Requester',
      email: 'requester@example.com',
      subject: 'hello'
    })

  afterEach ->
    $('#ticket_form').remove()

  describe "Form Rendering", ->

    it "should render an iframe", ->
      console.log $('#ticket_form')
      expect($('#ticket_form')).toContain('iframe')

    it "should point to the right url", ->
      expect($('#ticket_form iframe').attr('src')).toEqual("http://muziboo.supportbee.com/web_tickets/new?embed=true&ticket[requester_name]=Requester&ticket[requester_email]=requester@example.com&ticket[subject]=hello")
    
    it "should point to the right width", ->
      expect($('#ticket_form iframe').attr('width')).toEqual("80%")
    
    it "should point to the right height", ->
      expect($('#ticket_form iframe').attr('height')).toEqual("70%")
