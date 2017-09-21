import graphene

class Query(graphene.ObjectType):
    numberRange = graphene.List(graphene.Int, start=graphene.Int(default_value=0), end=graphene.Int())

    def resolve_numberRange(self, args, start, end):
        return range(start, end)

schema = graphene.Schema(query=Query)
