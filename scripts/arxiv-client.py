import numpy as np
import arxiv
import json
from time import sleep
from scholarly import scholarly
import csv


def srape_arxiv():
    # Get interator over query results
    query_result = arxiv.query(
        query="ti: GAN", max_chunk_results=10, iterative=True)
    full_data = []
    trimmed_data = []
    for paper in query_result():
        # filter by category first
        if 'cs' in paper.arxiv_primary_category['term']:
            data = {
                'title': paper.title,
                'authors': paper.authors,
                'published': paper.published,
                'published_parsed': paper.published_parsed,
                'category': paper.arxiv_primary_category
            }
            full_data.append(paper)
            trimmed_data.append(data)

            # Make Google scholar query
            search_query = scholarly.search_pubs_query(paper.title)
            print(next(search_query))

    with open('arxiv-data-cleaned.json', 'w') as outfile:
        json.dump(trimmed_data, outfile)
    with open('arxiv-data.json', 'w') as outfile:
        json.dump(full_data, outfile)


def try_until(func, max_tries, sleep_time):
    for _ in range(0, max_tries):
        try:
            return func()
        except:
            print("Retrying query...")
            delays = [70, 40, 60, 20, 100, 190]
            delay = np.random.choice(delays)
            sleep(delay)
    raise WellNamedException()


# proxies = {'http': 'socks5://127.0.0.1:9050',
#            'https': 'socks5://127.0.0.1:9050'}
# scholarly.use_proxy(**proxies)

_CITATIONAUTH = '/citations?user={0}&hl=en'
# _CITATIONPUB = '/citations?hl=en&view_op=view_citation&citation_for_view={0}'
_KEYWORDSEARCH = '/citations?view_op=search_authors&hl=en&mauthors=label:{0}'
_PUBSEARCH = '/scholar?hl=en&q={0}'
_SCHOLARPUB = '/scholar?oi = bibs & hl = en & cites = {0}'
# _HEADERS_ = {
#     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
#     'referrer': 'https://google.com',
#     'accept-encoding': 'gzip, deflate, br',
#     'accept-language': 'en-US,en;q=0.8',
#     'upgrade-insecure-requests': '1',
#     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
# }


def get_random_ua():
    random_ua = ''
    ua_file = 'ua_file.txt'
    try:
        with open(ua_file) as f:
            lines = f.readlines()
        if len(lines) > 0:
            prng = np.random.RandomState()
            index = prng.permutation(len(lines) - 1)
            idx = np.asarray(index, dtype=np.integer)[0]
            random_proxy = lines[int(idx)]
    except Exception as ex:
        print('Exception in random_ua')
        print(str(ex))
    finally:
        return random_ua


with open("gans.tsv") as fd:
    reader = csv.DictReader(fd, dialect='excel-tab')
    res = []
    for paper in reader:
        # Get arxiv id
        arxiv_id = paper['Arxiv'].rsplit('/', 1)[-1]
        arxiv_papers = arxiv.query(id_list=[arxiv_id])
        if len(arxiv_papers) == 0:
            print("Arxiv link invalid: " + paper['Arxiv'])
            continue
        arxiv_paper = arxiv_papers[0]

        # Make Google scholar query
        search_query = scholarly.search_pubs_query(paper['Title'])
        scholar_res = try_until(lambda: next(search_query), 100, 3)
        scholar_paper = json.loads(json.dumps(scholar_res.__dict__))
        try:
            scholar_paper = json.loads(json.dumps(scholar_res.__dict__))
            # scholar_paper = next(search_query)
        except StopIteration:
            print("Skipping paper: " + paper['Title'])
            continue
        if 'citedby' in scholar_paper:
            citations = scholar_paper['citedby']
        else:
            print("[No citation info]")
            citations = 0

        data = {
            'title': paper['Title'],
            'authors': arxiv_paper.authors,
            'year': paper['Year'],
            'month': paper['Month'],
            'day': str(arxiv_paper.published_parsed[2]),
            'citations': citations,
            'category': arxiv_paper.arxiv_primary_category,
            'arxiv': paper['Arxiv']
        }
        res.append(data)
        print(data)
with open('gans.json', 'w') as outfile:
    json.dump(res, outfile)
