---
title : "[이것이 코딩테스트다 with  Python]04.BFS 예제"
excerpt: "이것이 코딩테스트다 with  Python"
tags : 
    - codingtest
categories : 
    - codingtest

---
저번 chapter에 이이서 이번에는 BFS를 구현해보도록 하겠습니다. 너비 우선 탐색 알고리즘은   
큐 자료구조에 기초한다는 점과 탐색을 수행함에 있어 O(N)의 시간이 소요된다.   
일반적인 경우 실제 DFS보다 수행하는 시간이 효율적임을 알 수 있다.

```python
from collection import deque
def BFS(graph, visited, start):
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in graph:
            if not visited[v]:
                queue.append(i)
                print(i, " ")

```

