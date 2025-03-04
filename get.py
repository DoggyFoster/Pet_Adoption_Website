from urllib import parse

import requests
from bs4 import BeautifulSoup

url = "https://thepetnest.com/adopt-a-pet"

htmlText = requests.get(url, timeout=10).text
soup = BeautifulSoup(htmlText, "lxml")

pics = soup.find_all("img")
h2 = soup.find("h2")
if h2:
    print(h2.text)


for index, img in enumerate(pics):
    imgUrl = img.get("src")
    if imgUrl:
        if not imgUrl.startswith(("https", "http")):
            imgUrl = parse.urljoin(url, imgUrl)
        print(imgUrl)
