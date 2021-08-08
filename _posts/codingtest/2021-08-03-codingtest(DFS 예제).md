---
title : "[이것이 코딩테스트다 with  Python]03.DFS 예제"
excerpt: "이것이 코딩테스트다 with  Python"
tags : 
    - codingtest
categories : 
    - codingtest
---
DFS는 깊이 우선 탐색으로 코딩테스트의 단골 문제로 출제됩니다.    
따라서 잘 대비해야하고 혼자서 직접 구현할 정도로 반복 연습해야할 것 같습니다.   
일반적으로 원리는 간단합니다. 그래프의 노드를 수직으로 하나 하나씩 방문하지 않은 노드들을   
조금씩 순회하면서 탐색하는 알고리즘으로 스택 구조의 형태를 띄고 있습니다. 그럼 바로 구현해보도록 하겠습니다.  

```python
def dfs(graph, visited, v):
    visited[v] = True
    print(v, end=' ')
    for i in graph[v]:
        if not visted[i]:
            dfs(graph, visited, v)

```