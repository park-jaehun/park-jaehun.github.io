---
title : 이것이 코딩테스트다 with python
permalink : /categories/
tags : Python

---
* 문제
    - 8 x 8  좌표 평면에서 나이트는 다음과 같은 2가지 경우로 이동할 수 있다.
    - 수평으로 두 칸 이동한 뒤에 수직으로 한 이동하기
    - 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기

나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오 <br>
이 때 왕실의 정원에서 행 위치를 표현할 때는 1부터 8로 표현하면, 열 위치를 표현할 때는 a부터 h까지 표현한다. <br>
<b> 입력 예시 </b> <br>
a1 <br>
<b> 출력 예시 </b> <br>
2

구현에 앞서 값들을 받아오는 작업을 수행해야합니다. <br>


```python
column = a[1]
row = int(ord(a[0])) - int(ord(a)) + 1
```