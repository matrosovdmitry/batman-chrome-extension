class Batbelt.Sidebar
  init: ->
    chrome.devtools.panels.elements.createSidebarPane 'Batman', (sidebar) =>
      @update(sidebar)
      chrome.devtools.panels.elements.onSelectionChanged.addListener =>
        @update(sidebar)

  update: (sidebar) ->
    fnDef = @info.toString()
    sidebar.setExpression '(' + fnDef + ')()'

  info: ->
    try
      context = Batman._data($0).bindings[0].renderContext
    catch e
