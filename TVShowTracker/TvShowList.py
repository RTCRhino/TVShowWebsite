import requests
import json
import io

for counter in range(150):
    url = "http://api.tvmaze.com/shows?page=" + str(counter)
    print(url)
    r = requests.get(url)

    with io.open("tvList.txt", "w", encoding="utf-8") as f:
        f.write(r.text)
    with io.open("tvList.txt", "r", encoding="utf-8") as f:
        j = json.load(f)

    with open("D:\\Programmes\\TVShowWebsite\\TVShowTracker\\TvListing\\TvListing\\TvShowResults.json", "r") as f:
        TvShowList = json.load(f)

    for item in j:
        TvShowList[item["name"]] = item["id"]

    with open("D:\\Programmes\\TVShowWebsite\\TVShowTracker\\TvListing\\TvListing\\TvShowResults.json", "w") as outfile:
        json.dump(TvShowList, outfile)
