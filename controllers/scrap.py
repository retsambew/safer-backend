from bs4 import BeautifulSoup
import urllib.request
import sys


def getScrape():
    doc = urllib.request.urlopen(sys.argv[1]).read()
    soup = BeautifulSoup(doc, 'html.parser')
    print(soup)
    sys.stdout.flush()
    # return (soup.get_text())


getScrape()
