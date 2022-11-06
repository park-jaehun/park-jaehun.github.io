var store = [{
        "title": "[이것이 코딩테스트다 with  Python]01.왕실의 나이트",
        "excerpt":"문제 - 8 x 8 좌표 평면에서 나이트는 다음과 같은 2가지 경우로 이동할 수 있다. - 수평으로 두 칸 이동한 뒤에 수직으로 한 이동하기 - 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오 이 때 왕실의...","categories": ["codingtest"],
        "tags": ["python"],
        "url": "/codingtest/codingtest(%EC%99%95%EC%8B%A4%EC%9D%98-%EB%82%98%EC%9D%B4%ED%8A%B8)/",
        "teaser": null
      },{
        "title": "[SQL 정복하기]테이블에서 데이터 검색",
        "excerpt":"코딩 테스트를 준비하면서 생각보다 SQL 문제가 많이 출제 되어서 기본적인 문법을 바탕을 정리하고 문제들을 풀어보는 방식으로 진행하겠습니다. 실제로 SQL은 조회부분이 가장 많이 쓰이고, 중요합니다. 이 부분을 중점으로 공부하도록 하겠습니다. 그럼 바로 시작하겠습니다. 1. SELECT * FROM 테이블명 SELECT와 그리고 FROM 사이에는 스페이스를 넣어서 구분합니다. 입력이 끝나면 명령의 마지막을 나타내는 세미콜론(;)을...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/SQL(2)/",
        "teaser": null
      },{
        "title": "[이것이 코딩테스트다 with  Python]02.게임 개발",
        "excerpt":"문제 게임의 맵은 N x M 형태의 직사각형이고 맵의 각 칸은 (A, B)로 나타낼 수 있고 A는 북쪽으로부터 떨어진 칸의 개수, B는 서쪽으로부터 떨어진 칸의 개수이다. 캐릭터는 상하좌우로 움직일 수 있고, 바다로 되어 있는 공간에는 갈 수 없다. 캐릭터의 움직임을 설정하기 위해 정해놓은 메뉴얼은 이렇다. 현재 위치에서 현재 방향을 기준으로...","categories": ["codingtest"],
        "tags": ["codingtest"],
        "url": "/codingtest/codingtest(%EA%B2%8C%EC%9E%84%EA%B0%9C%EB%B0%9C)/",
        "teaser": null
      },{
        "title": "[이것이 코딩테스트다 with  Python]03.DFS 예제",
        "excerpt":"DFS는 깊이 우선 탐색으로 코딩테스트의 단골 문제로 출제됩니다. 따라서 잘 대비해야하고 혼자서 직접 구현할 정도로 반복 연습해야할 것 같습니다. 일반적으로 원리는 간단합니다. 그래프의 노드를 수직으로 하나 하나씩 방문하지 않은 노드들을 조금씩 순회하면서 탐색하는 알고리즘으로 스택 구조의 형태를 띄고 있습니다. 그럼 바로 구현해보도록 하겠습니다. def dfs(graph, visited, v): visited[v] = True...","categories": ["codingtest"],
        "tags": ["codingtest"],
        "url": "/codingtest/codingtest(DFS-%EC%98%88%EC%A0%9C)/",
        "teaser": null
      },{
        "title": "[이것이 코딩테스트다 with  Python]04.BFS 예제",
        "excerpt":"저번 chapter에 이이서 이번에는 BFS를 구현해보도록 하겠습니다. 너비 우선 탐색 알고리즘은 큐 자료구조에 기초한다는 점과 탐색을 수행함에 있어 O(N)의 시간이 소요된다. 일반적인 경우 실제 DFS보다 수행하는 시간이 효율적임을 알 수 있다. from collection import deque def BFS(graph, visited, start): queue = deque([start]) visited[start] = True while queue: v = queue.popleft()...","categories": ["codingtest"],
        "tags": ["codingtest"],
        "url": "/codingtest/codingtest(BFS-%EC%98%88%EC%A0%9C)/",
        "teaser": null
      },{
        "title": "[SAS 정복하기]DATA SET 활용",
        "excerpt":"안녕하세요 포뇨입니다. 이번에는 SAS에 대해서 갼략하게 설명 후 바로 문법적으로 설명드리도록 하겠습니다. SAS는 기본적으로 SQL 문법과 매우 흡사하고 특히 금융권 취업을 희망하면 기본적으로 알아야하는 툴입니다. 그러면 첫 단원으로 DATA SET을 활용하여 문법을 익혀보도록 하겠습니다. 1. DATA SET 생성(1/3) 기존 DATA문 DATA AAA; 2. DATA SET 생성(2/3) data stockprice1; input name$price...","categories": ["SAS"],
        "tags": ["SAS"],
        "url": "/sas/SAS(1)/",
        "teaser": null
      },{
        "title": "[SQL 정복하기]데이터 변환함수 및 헷갈리는 표현",
        "excerpt":"입사 후 교육을 듣는데 헷갈리는 표현들이 몇 가지 존재했습니다. 이 부분을 정확히 숙지하고 업무에 투입되면 좋을 것 같아 포스팅을 진행해보도도록 하겠습니다. 1. TO_CHAR TO_CHAR는 숫자 또는 날짜를 문자타입으로 변환시켜주는 함수입니다. SELECT 기준일자 ,TO_CHAR(영업일수) ,TO_CHAR(기준일자, 'YYYYMMDD') FROM 기준일자정보 2. WITH vs INLINE VIEW 업무를 하면서 특히 두 가지 문법을 사용할 때가...","categories": ["SQL"],
        "tags": ["SQL","Oracle"],
        "url": "/sql/SQL(1)/",
        "teaser": null
      },{
        "title": "[Python - matplotlib] 01.box-plot",
        "excerpt":"박스 플롯 또는 박스-위스커 플롯 (Box - Whisker plot)은 수치 데이터를 표현하는 하나의 방식입니다. 일반적으로 박스 플롯은 전체 데이터로부터 얻어진 아래의 다섯가지 요약 수치를 사용해서 그려집니다. 최솟값 제 1사분위 수 제 3사분위 수 최댓값 사분위 수는 데이터를 4등분한 지점을 의미합니다. 예를 들어, 제 1사분위 수는 전체 데이터 중 하위 25%에...","categories": ["python"],
        "tags": ["python"],
        "url": "/python/Python(1)/",
        "teaser": null
      }]
