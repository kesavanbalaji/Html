''''index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'upper']'''

# a= 'This is python'
# print(a.index('i',3))

# a= 'This34ispython'
# print(a.isalnum())

# a= '7thIs is python'
# print(a.capitalize())

# a= 'This is pyThon'
# print(a.casefold())

# a= 'This is python'
# print(a.count('i',3))

# a= 'This is python'
# print(a.endswith('o',0,-1))

# a= 'This is python'
# print(a.find('z',3,7))

# a= {
#     "name": 'keshav',
#     'age':21,
#     'List': ['hi','hello'],
#     'dic': {
#         'bello': 'kjhsf'
#     }
# }

# print(a['dic']['bello'])



# print(dir(dict))
'''['clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']'''

d = {
    'name': 'keshav',
    'age': 21
} 
# c= {}
# c = d.copy()
# print(c)

# print(d.get('name'))
# print(d.keys())
# print(d.values())
# print(d.pop('name'))
# print(d)
# print(d.popitem())
# print(d.popitem())


print(d.setdefault('hi','hello'))
print(d)
print(d.update(hi='hii'))
print(d.pop('hi'))
print(d)