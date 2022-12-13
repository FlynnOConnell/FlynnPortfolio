
"""
Adaptation of https://nickwu241.medium.com/embed-a-gist-statically-in-vue-4df59b56b29 to 
embed github gists in vue components.

In your terminal, run:

python <(curl https://raw.githubusercontent.com/NeuroPyPy/FlynnPortfolio/master/public/to_gist.py) <USERNAME>/<GIST_ID/(optional)FILENAME>
"""
import argparse
from bs4 import BeautifulSoup as bs

try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen
import json

parser = argparse.ArgumentParser()
parser.parse_args()

parser.add_argument("username", type=str, help="Place your github username here.")
parser.add_argument("gistnumber", type=str, help="The ID of the gist youd like to embed. "
                                             "Find this by visiting the browser page "
                                             "containing your gist: "
                                             "<https://gist.github.com/GithubUsernameHere/[Long string of numbers and letters]>"
                                             "Here you want the [Long string] without "
                                             "the brackets or < >.")

parser.add_argument("--filename", type=str, help="(Optional) What to name the file. "
                                                 "Default is: Gist")

args = parser.parse_args()

username = args.username
gistnumber = args.gistnumber

if args.filename:
    filename = args.filename
else:
    filename = "Gist"

gist_url = f"https://gist.github.com/{username}/{gistnumber}.json"
gist = json.loads(urlopen(gist_url).read())
html = bs(gist['div'], 'html.parser').prettify()

stylesheeturl = urlopen("https://raw.githubusercontent.com/NeuroPyPy/FlynnPortfolio"
                      "/master/public/cobalt_gist.css").read()
stylesheet = bs(stylesheeturl, 'html.parser').prettify()

template = bs(f"<template>{html}</template>", 'html.parser').prettify()

with open(f"{filename}.vue", "w") as f:
    f.write(template)
    f.write(f"<script>export default {{ name: '{filename}' }}</script>")
    f.write(f"<style>{stylesheet}</style>")
