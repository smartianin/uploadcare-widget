{namespace} = uploadcare

namespace 'uploadcare', (ns) ->
  ns._readyCallbacks = []

  isReady = false
  ns.ready = ->
    isReady = true
    callback() for callback in ns._readyCallbacks
  ns.whenReady = (callback) ->
    if isReady
      callback()
    else
      ns._readyCallbacks.push(callback)

  ns.initialize = (options) ->
    {jQuery} = uploadcare
    extra = options.extra or ->
    run = () ->
      for e in jQuery(options.elements)
        continue if jQuery(e).data(options.class.name)?
        jQuery(e).data(options.class.name, new options.class(jQuery(e), extra(jQuery(e))))

    run()
    jQuery(document).on('ajaxSuccess htmlInserted', run)
