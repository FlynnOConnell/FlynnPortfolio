
"""
Adaptation of https://nickwu241.medium.com/embed-a-gist-statically-in-vue-4df59b56b29 to 
embed github gists in vue components.

In your terminal, run:

python <(curl https://raw.githubusercontent.com/NeuroPyPy/FlynnPortfolio/master/public/to_gist.py) <USERNAME>/<GIST_ID COMPONENT_NAME>
"""
import argparse
from bs4 import BeautifulSoup as bs

try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen
import json

gist_url = f"https://gist.github.com/{sys.argv[1]}.json"

gist = json.loads(urlopen(gist_url).read())
html = bs(gist['div'], 'html.parser').prettify()

stylesheeturl = urlopen("https://raw.githubusercontent.com/NeuroPyPy/FlynnPortfolio/master/public/cobalt_gist.css").read()
stylesheet = bs(stylesheeturl, 'html.parser').prettify()

template = bs(f"<template>{html}</template>", 'html.parser').prettify()

with open(f"{filename}.vue", "w") as f:
    f.write(template)
    f.write(f"<script>export default {{ name: '{filename}' }}</script>")
    f.write(f"<style>{stylesheet}</style>")
