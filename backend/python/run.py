import graphene
from schema import Query

schema = graphene.Schema(query=Query)
result = schema.execute('{ hello }')
print(result.data)
