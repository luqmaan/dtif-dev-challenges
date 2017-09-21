import graphene

class Query(graphene.ObjectType):
    numberRange = graphene.List(graphene.Int, end=graphene.Int())

    def resolve_numberRange(self, args, end):
        return [1, 2]

schema = graphene.Schema(query=Query)
