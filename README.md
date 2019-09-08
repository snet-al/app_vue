This is a multipage front end app build with vuejs in typescript.
It uses the multi module per page paradigm, where every module is
an independent vue instance which communicate with other modules through 
an eventBus and store. The routing will be independent for each
page also.