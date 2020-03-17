def compare(a: int, b: int):
    if a == b:
        return 0
    return a if a > b else b


a = int(input())
b = int(input())
print(compare(a, b))
