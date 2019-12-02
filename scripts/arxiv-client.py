import arxiv
import json

# Keyword queries
# arxiv.query(query="GAN", max_results=100)
# Multi-field queries
# arxiv.query(query="au:balents_leon AND cat:cond-mat.str-el")
# Get single record by ID
# arxiv.query(id_list=["1707.08567"])
# Get multiple records by ID
# arxiv.query(id_list=["1707.08567", "1707.08567"])

# Get interator over query results
query_result = arxiv.query(query="GAN", max_chunk_results=10, iterative=True)
full_data = []
trimmed_data = []
for paper in query_result():
    # filter by category first
    if 'cs' in paper.arxiv_primary_category['term']:
        # Paper title
        # Paper authors
        # Paper published time
        # Category: map to expanded string
        # (optional) citation data
        data = {
            'title': paper.title,
            'authors': paper.authors,
            'published': paper.published,
            'published_parsed': paper.published_parsed,
            'category': paper.arxiv_primary_category
        }
        full_data.append(paper)
        trimmed_data.append(data)

with open('arxiv-data-cleaned.json', 'w') as outfile:
    json.dump(trimmed_data, outfile)
with open('arxiv-data.json', 'w') as outfile:
    json.dump(full_data, outfile)
