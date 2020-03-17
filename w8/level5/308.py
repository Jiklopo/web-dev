def xor(a: bool, b: bool):
    return (a and not b) or (not a and b)

print(xor(True, True))
print(xor(False, False))
print(xor(True, False))
print(xor(False, True))