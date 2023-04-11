# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'DTI Project'
copyright = '2023, Aditya & Aakash'
author = 'Aditya & Aakash'
release = '0.0.0'

extensions = ["sphinxcontrib.redoc", "sphinx_rtd_theme"]

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']

redoc = [
    {
        "name": "MockS API",
        "page": "api-doc",
        "spec": "schema.yml",
        "embed": True,
        "opts": {"suppress-warnings": True, "hide-hostname": True},
    }
]
redoc_uri = "https://unpkg.com/redoc@2.0.0-rc.66/bundles/redoc.standalone.js"
