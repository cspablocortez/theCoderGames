import re

str = 'mouseratmouse'

def solution(s):
    mouse_pattern = re.compile('mouse', re.IGNORECASE)
    rat_pattern = re.compile('rat', re.IGNORECASE)
    
    mouse_matches = mouse_pattern.findall(s)
    rat_matches = rat_pattern.findall(s)
    
    print(mouse_matches)
    print(rat_matches)
    
    print(len(mouse_matches) == len(rat_matches))


solution(str)
