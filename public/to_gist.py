# python <(curl https://raw.githubusercontent.com/NeuroPyPy/FlynnPortfolio/master/public/to_gist.py) <USERNAME>/<GIST_ID>
try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen
import json
import sys

# Modify COMPONENT_NAME to name your component differently.
COMPONENT_NAME = "Gist"

gist_url = "https://gist.github.com/{:s}.json".format(sys.argv[1])
gist = json.loads(urlopen(gist_url).read())
html = gist["div"]
stylesheet = urlopen(gist["stylesheet"]).read()

with open("{:s}.vue".format(COMPONENT_NAME), "w") as f:
    f.write("<template>{:s}</template>".format(html))
    f.write("<script>export default {{ name: '{:s}' }}</script>".format(COMPONENT_NAME))
    f.write("<style>{:s}</style>".format(stylesheet))
