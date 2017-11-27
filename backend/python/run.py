import graphene
from schema import Query

schema = graphene.Schema(query=Query)
result = schema.execute('''
{
  numberRange(end:10)
  evenNumbers(end:10)
  primeNumbers(end:10)
  numberRangeAsWords(end:10)
  somethingFun
}
''')

print(result.data)
