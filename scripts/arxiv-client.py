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
            sleep(sleep_time)
    raise WellNamedException()


proxies = {'http': 'socks5://127.0.0.1:9050',
           'https': 'socks5://127.0.0.1:9050'}
scholarly.use_proxy(**proxies)

_CITATIONAUTH = '/citations?user={0}&hl=en'
_CITATIONPUB = '/citations?hl=en&view_op=view_citation&citation_for_view={0}'
_KEYWORDSEARCH = '/citations?view_op=search_authors&hl=en&mauthors=label:{0}'
_PUBSEARCH = '/scholar?hl=en&q={0}'
_SCHOLARPUB = '/scholar?oi = bibs & hl = en & cites = {0}'

with open("gans.tsv") as fd:
    reader = csv.DictReader(fd, dialect='excel-tab')
    res = []
    for paper in reader:
        # Get arxiv id
        arxiv_id = paper['Arxiv'].rsplit('/', 1)[-1]
        arxiv_paper = arxiv.query(id_list=[arxiv_id])[0]

        # Make Google scholar query
        # search_query = scholarly.search_pubs_query(paper['Title'])
        # scholar_res = try_until(lambda: next(search_query), 100, 3)
        # scholar_paper = json.loads(json.dumps(scholar_res.__dict__))
        # try:
        #     scholar_paper = json.loads(json.dumps(scholar_res.__dict__))
        #     # scholar_paper = next(search_query)
        # except StopIteration:
        #     print("Skipping paper: " + paper['Title'])
        #     continue
        # if 'citedby' in scholar_paper:
        #     citations = scholar_paper['citedby']
        # else:
        #     print("[No citation info]")
        #     citations = 0
        data = {
            'title': paper['Title'],
            'authors': arxiv_paper.authors,
            'year': paper['Year'],
            'month': paper['Month'],
            # 'citations': citations,
            'category': arxiv_paper.arxiv_primary_category
        }
        res.append(data)
        print(data)
    with open('gans.json', 'w') as outfile:
        json.dump(res, outfile)
