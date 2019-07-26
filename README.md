# Default Cell for Jupyter Notebooks
This Jupyter extension allows you to create a default cell and run it whenever a new notebook is generated. This is useful for constant imports you always use (like `import numpy as np` and `import pandas as pd`)

## Installation:

### Install Jupyter extensions:

run:
```
pip install jupyter_contrib_nbextensions && jupyter contrib nbextensions install
```
If you happen to get an `[Errno 13] Permission denied ...`, try adding `--user` at the end of the command.

### Install this extension:

1. First, find the extensions folder of `nbextensions`. You can do so by running: `pip show jupyter-contrib-nbextensions`. The output will contain a `Location` section (something like: `/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages`)

2. Go to `{Location}/jupyter_contrib_nbextensions/nbextensions/`, and place the `default_cell` folder in there (keeping the files in the `default_cell` directory)

3. run `jupyter contrib nbextensions install [--user]` (you'll need to add `--user` if you needed it before)

## Using the Extension:

Before the first use, activate the extension under the `NB Extensions` tab.

Two configurations are available:

* Cell Input: the text which will be executed. Use `<br>` for new-lines
* Run Automatically: whether to run the cell on startup or not

--------------
Based on the code and instructions of [this blogpost](https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c) by Will Koehrsen.
