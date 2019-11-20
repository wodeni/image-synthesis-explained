import arxiv

# Keyword queries
# arxiv.query(query="GAN", max_results=100)
# Multi-field queries
# arxiv.query(query="au:balents_leon AND cat:cond-mat.str-el")
# Get single record by ID
# arxiv.query(id_list=["1707.08567"])
# Get multiple records by ID
# arxiv.query(id_list=["1707.08567", "1707.08567"])

# Get interator over query results
result = arxiv.query(query="GAN", max_chunk_results=10, iterative=True)
for paper in result():
    # filter by category first
    if 'cs' in paper.arxiv_primary_category['term']:
        # Paper title
        # Paper authors
        # Paper published time
        # Category: map to expanded string
        # (optional) citation data
        print(paper.title)
        # Append to a CSV file
