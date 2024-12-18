# TikTok analysis pipeline

This repository contains analytic code for extracting links from a TikTok profile, downloading the videos and metadata, transcribing the videos and doing some initial topic modeling on the transcripts.

## Data

The data used in this analysis:
- `data/sites/Jools Lebron (@joolieannie) _ TikTok.html`: this page was downloaded on Chrome from [TikTok](https://www.tiktok.com/@joolieannie) by repeatedly scrolling to the bottom of the page in order to load as many videos as possible. When the page stopped loading more videos, it was saved on a local drive (File > Save Page As > Webpage, Complete).


- `data/stopwords.txt`: this text file contains stop words. A lot of languages contain 'stop words', words that are used very frequently and may not be useful when we're evaluating how often certain words may be used. Common stop words in English include "be","I" and "the". These stopwords were sourced [here](https://gist.github.com/sebleier/554280).

## Methodology

The notebook [`notebooks/00-scraper-tiktok-links-extraction.ipynb`](notebooks/00-scraper-tiktok-links-extraction.ipynb) scrapes links from the downloaded HTML page of the TikTok account of @joolieannie and exports a csv to [`output/@joolieannietiktoks.csv`](output/@joolieannietiktoks.csv).

The notebook [`notebooks/00-scraper-yt-dlp-tiktok-downloader.ipynb`](notebooks/00-scraper-yt-dlp-tiktok-downloader.ipynb) downloads metadata and mp4 files 10 videos listed in the [`output/@joolieannietiktoks.csv`](output/@joolieannietiktoks.csv) spreadsheet. This script can be easily customized to download all videos listed in the spreadsheet. 

The notebook [`notebooks/01-autotranscribe-whisper-solution.ipynb`](notebooks/01-autotranscribe-whisper-solution.ipynb) transcribes the videos in the folder  [`output/demure/`](output/demure/). 

The notebook [`notebooks/02-topics-clustering-gensim-solution.ipynb`](nnotebooks/02-topics-clustering-gensim-solution.ipynb) does topic modeling with the transcripts of the @joolieannie videos and exports a visualization of the topic model. It also produces a word list. 



## Outputs

The notebooks output the following files:
- [`output/@joolieannietiktoks.csv`](output/@joolieannietiktoks.csv): this file contains links for each TikTok video listed on the TikTok profile of the downloaded HTML page.
- [`output/tiktok_videos_metadata.csv`](output/tiktok_videos_metadata.csv): this file contains metadata for @joolieannie videos 
- [`output/demure/`](output/demure/): this folder contains videos downloaded from the @joolieannie account
- [`output/transcripts.csv`](output/transcripts.csv): this file contains the transcripts for all videos that were downloaded
- [`output/topics_modeling_demure.html`](output/transcripts.csv): this file is a visual representation of the topic modeling performed in the notebook [`notebooks/02-topics-clustering-gensim-solution.ipynb`](nnotebooks/02-topics-clustering-gensim-solution.ipynb) and can be opened in a browser. 
- [`output/word_tally_demure.csv`](output/word_tally_demure.csv): this file contains a list of words used in the @joolieannie videos alongside a tally of how often they occurred. 



## Running the analysis yourself

You can run the analysis yourself. To do so, you'll need the following installed on your computer:

- Python 3
- The Python libraries specified in [`requirements.txt`](requirements.txt)

## Licensing

All code in this repository is available under the [MIT License](https://opensource.org/licenses/MIT). The data file in the output/ directory is available under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0) license. All files in the data/ directory are released into the public domain.

## Feedback / Questions?

Contact Lam Thuy Vo at lam.vo@documentedny.com.
