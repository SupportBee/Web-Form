window.SupportBee ||= {}

SupportBee.Form = {


  initialize: (options) ->
    divToAppend = options.div
    form = @renderForm()
    $("##{divToAppend}").append form


  renderForm: ->
    '''
      <form>
        <fieldset>
          <label for="name">Your Name</label>
          <input class="name" maxlength="255" name="name" type="text">

          <label for="email">Your Email</label>
          <input class="email" maxlength="255" name="email" type="text">
          
          <label for="message">Your Message</label>
          <input class="message" name="message" type="textarea">

          <input type="submit" value="Post Message">
        </fieldset>
      </form>
    '''




}
