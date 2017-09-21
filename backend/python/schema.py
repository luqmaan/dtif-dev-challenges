import graphene

class Query(graphene.ObjectType):
    numberRange = graphene.List(graphene.Int, start=graphene.Int(default_value=0), end=graphene.Int())
    evenNumbers = graphene.List(graphene.Int, start=graphene.Int(default_value=0), end=graphene.Int())
    primeNumbers = graphene.List(graphene.Int, start=graphene.Int(default_value=0), end=graphene.Int())
    numberRangeAsWords = graphene.List(graphene.String, start=graphene.Int(default_value=0), end=graphene.Int())
    somethingFun = graphene.String()

    def resolve_numberRange(self, args, start, end):
        return range(start, end)

    def resolve_evenNumbers(self, args, start, end):
        return range(start, end, 2)

    def resolve_primeNumbers(self, args, start, end):
        # TODO: Implement This
        return [2, 3, 5, 7]

    def resolve_numberRangeAsWords(self, args, start, end):
        # TODO: Implement This
        return ["one", "two", "three"]

    def resolve_somethingFun(self, args):
        # TODO: Implement This
        return "Have a blast!"

schema = graphene.Schema(query=Query)
