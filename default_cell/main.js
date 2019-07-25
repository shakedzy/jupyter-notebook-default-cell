define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {
        var params = {cell_input: '',
                      run_cell: true}
        var config = Jupyter.notebook.config;
        for (var key in params) {
            if (config.data.hasOwnProperty(key) ){
                params[key] = config.data[key];
            }
        }
        // Adds a cell above current cell (will be top if no cells)
        var add_cell = function() {
        Jupyter.notebook.
        insert_cell_above('code').
        // Define default cell here
        set_text(params.cell_input.split("<br>").join("\n"));
        Jupyter.notebook.select_prev();
        if (params.run_cell) {
          Jupyter.notebook.execute_cell_and_select_below(); 
        }
      };

      // Button to add default cell
      var defaultCellButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add default cell',
                  'icon' : 'fa-play-circle',
                  'handler': add_cell
              }, 'add-default-cell', 'Default cell')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        // Add a default cell if there are no cells
        if (Jupyter.notebook.get_cells().length===1){
            add_cell();
        }
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
