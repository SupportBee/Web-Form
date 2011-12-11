window.SupportBee ||= {}

SupportBee.Form = {

  initialize: (options) ->
    @options = options

    throw "You must provideo the company" unless @options.company?
    @options.base_domain ||= 'supportbee.com'
    @options.width  ||= '100%'
    @options.height ||= '800px'
    @options.name ||= ''
    @options.email ||= ''
    @options.subject ||= ''

    form = @renderForm()

    #$("##{@options.div}").html form
    document.getElementById(@options.div).innerHTML = form

    return this

  iframeURL: ->
    console.log 'options ', @options
    "http://#{@options.company}.#{@options.base_domain}/web_tickets/new?embed=true&#{@prefillForm()}"

  prefillForm: ->
    """
      ticket[requester_name]=#{@options.name}&ticket[requester_email]=#{@options.email}&ticket[subject]=#{@options.subject}
    """

  renderForm: (options)->
    """
      <iframe src="#{@iframeURL()}" height="#{@options.height}" width="#{@options.width}"></iframe>
    """




}
