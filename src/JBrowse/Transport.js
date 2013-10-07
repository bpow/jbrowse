define([
           'dojo/_base/declare',

           'JBrowse/Component'
       ],
       function(
           declare,

           Component
       ) {

return declare( Component, {

  configSchema: {
      slots: [
          { name: 'name', type: 'string',
            description: 'unique name of this transport method.  should be human-readable.',
            required: true
          },
          { name: 'sendFileControlClass', type: 'string', defaultValue: 'JBrowse/View/SendTo/Default' }
      ]
  },

  constructor: function( args ) {

      this.transportManager = args.transportManager;
      if( ! this.transportManager )
          throw new Error("transportManager object required");

      this.authManager = args.authManager;
      if( ! this.authManager )
          throw new Error("authManager object required");
  },

  /**
   * Overwrite the resource with the data that comes from the given
   * DeferredGenerator.  Returns a Deferred that resolves when the
   * write is finished and successful.
   */
  // sendFile: function( dataGenerator, destinationResourceDefinition, sendOpts ) {
  // },

  /**
   * Return true if this transport driver knows how to communicate
   * with the given resource.  Override this in subclasses.
   * @returns boolean
   */
  canHandle: function( resourceDefinition ) {
      return false;
  },

  /**
   * Handle fetch errors.
   * @returns {Boolean} true if the request should be retried
   */
  handleError: function( errorObject ) {
      return false;
  }

});
});
