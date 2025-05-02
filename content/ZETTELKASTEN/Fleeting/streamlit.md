---
title: streamlit
description: 
date:
  - - 2025-05-01
tags: 
publish: false
URL: https://streamlit.io/
---

Python BackEnd + Streamlit frontEnd + 웹앱 배포

---
### 0. Summary
-  **데이터 대시보드,  인터랙티브 웹앱 ,  웹 기반 데이터 분석 툴, Streamlit 데이터 서비스 또는 내부 툴**
- ==실행 가능한 것은 `.py` 파일 하나== 임
- Streamlit에 배포하거나 로컬에서 실행할 때 지정할 수 있는 건 **하나의 메인 파이썬 파일**
- `st.write()` 등 Streamlit 함수를 포함하고 있어야 하고,
- 다른 모듈(`utils.py`, `data.py` 등)을 import해서 쓸 수는 있지만,
- 실행 시 기준이 되는 파일은 **하나의 `.py` 파일**입니다.
### 1. 사용방법

##### 0. 준비
- [[Anaconda]] 설치
- 아나콘다 프롬프트에서 : `conda create -n streamlit-app python=3.8`
	- >> `conda activate streamlit-app` 입력 base에서 (streamlit-app) 으로 바뀜
- 라이브러리 설치 : 
```Anaconda
pip install streamlit pandas numpy seaborn matplotlib finance-datareader
```
- finance-datareader 는 금융데이터 라이브러리
- 실행 : `streamlit run 00-text.py`  00-text.py 파일을 실행

	![[Pasted image 20250502004349.png]]
	![[Pasted image 20250502004542.png|600]]

- 단점 : 색상이 다양하지 않음
##### 01.data.py
dataframe
```python
import streamlit as st
import pandas as pd
import numpy as np

st.title('데이터프레임 튜토리얼')
# DataFrame 생성
dataframe = pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40],
})
# DataFrame
# use_container_width 기능은 데이터프레임을 컨테이너 크기에 확장할 때 사용합니다. (True/False)
st.dataframe(dataframe, use_container_width=False)    # Ture는 무조건 넓게 화면에 채워서

# 테이블(static)
# DataFrame과는 다르게 interactive 한 UI 를 제공하지 않습니다.
st.table(dataframe)


# # 메트릭
st.metric(label="온도", value="10°C", delta="1.2°C")
st.metric(label="삼성전자", value="61,000 원", delta="-1,200 원")

# 컬럼으로 영역을 나누어 표기한 경우
col1, col2, col3 = st.columns(3)
col1.metric(label="달러USD", value="1,228 원", delta="-12.00 원")
col2.metric(label="일본JPY(100엔)", value="958.63 원", delta="-7.44 원")
col3.metric(label="유럽연합EUR", value="1,335.82 원", delta="11.44 원")
```

- table로 만들면 정적. dataframe은 오름/내림등 정렬이 가능
- metric : 라벨은 이름 value는 값 

![[Pasted image 20250502005101.png|100]]

- col1.metric 칼럼(열)로 나눠서 들어감

	![[Pasted image 20250502005215.png|400]]

##### 02-basic-ui.py
- UI요소들

```python
import streamlit as st
import pandas as pd
from datetime import datetime as dt
import datetime

# 버튼 클릭
button = st.button('버튼을 눌러보세요')
if button:
    st.write(':blue[버튼]이 눌렸습니다 :sparkles:')

# 파일 다운로드 버튼
# 샘플 데이터 생성
dataframe = pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40],
})

# 다운로드 버튼 연결
st.download_button(
    label='CSV로 다운로드',
    data=dataframe.to_csv(),    ##data는 위의  샘플데이터 
    file_name='sample.csv',
    mime='text/csv'
)

# 체크 박스
agree = st.checkbox('동의 하십니까?')
if agree:
    st.write('동의 해주셔서 감사합니다 :100:')

# 라디오 선택 버튼
mbti = st.radio(
    '당신의 MBTI는 무엇입니까?',
    ('ISTJ', 'ENFP', '선택지 없음'))
if mbti == 'ISTJ':
    st.write('당신은 :blue[현실주의자] 이시네요')
elif mbti == 'ENFP':
    st.write('당신은 :green[활동가] 이시네요')
else:
    st.write("당신에 대해 :red[알고 싶어요]:grey_exclamation:")

# 선택 박스
mbti = st.selectbox(
    '당신의 MBTI는 무엇입니까?',
    ('ISTJ', 'ENFP', '선택지 없음'),    ## 튜플형식으로 
    index=2
)

if mbti == 'ISTJ':
    st.write('당신은 :blue[현실주의자] 이시네요')
elif mbti == 'ENFP':
    st.write('당신은 :green[활동가] 이시네요')
else:
    st.write("당신에 대해 :red[알고 싶어요]:grey_exclamation:")

  

# 다중 선택 박스
options = st.multiselect(
    '당신이 좋아하는 과일은 뭔가요?',
    ['망고', '오렌지', '사과', '바나나'],
    ['망고', '오렌지'])
st.write(f'당신의 선택은: :red[{options}] 입니다.')

# 슬라이더1
values = st.slider(
    '범위의 값을 다음과 같이 지정할 수 있어요:sparkles:',
    0.0, 100.0, (25.0, 75.0))    ## 기간 선택도 가능
st.write('선택 범위:', values)

# 슬라이더2 
start_time = st.slider(
    "언제 약속을 잡는 것이 좋을까요?",
    min_value=dt(2020, 1, 1, 0, 0),
    max_value=dt(2020, 1, 7, 23, 0),
    value=dt(2020, 1, 3, 12, 0),
    step=datetime.timedelta(hours=1),    ## day로 하면 하루씩
    format="MM/DD/YY - HH:mm")
st.write("선택한 약속 시간:", start_time)

# 텍스트 입력
title = st.text_input(
    label='가고 싶은 여행지가 있나요?',
    placeholder='여행지를 입력해 주세요'
)
st.write(f'당신이 선택한 여행지: :violet[{title}]')

# 숫자 입력
number = st.number_input(
    label='나이를 입력해 주세요.',
    min_value=10,
    max_value=100,
    value=30,
    step=5    ## 5단위로 바뀜
)
st.write('당신이 입력하신 나이는:  ', number)
```

##### 03-lotto.py
```python
import streamlit as st
import random
import datetime

st.title(':sparkles:로또 생성기:sparkles:')

def generate_lotto():
    lotto = set()    ## 중복이 없이 하기 위해
    while len(lotto) < 6:
        number = random.randint(1, 46)
        lotto.add(number)
    lotto = list(lotto)     # list로 바꿈 sort 하기 위해서 set은 sort 안됨.
    lotto.sort()
    return lotto

# st.subheader(f'행운의 번호: :green[{generate_lotto()}]')
# st.write(f"생성된 시각: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}")

button = st.button('로또를 생성해 주세요!')
if button:
    for i in range(1, 6):    ## 5번 반복 5개의 세트트
        st.subheader(f'{i}. 행운의 번호: :green[{generate_lotto()}]')
    st.write(f"생성된 시각: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}")
```


##### 04-chart.py
- 시각화 차트 기능
- 예시들 템플릿 [matplotlib bar chart](https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_stacked.html#)
```python
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# 한글 폰트 설정
#plt.rcParams['font.family'] = "AppleGothic"    ## 맥사용자
# Windows, 리눅스 사용자
plt.rcParams['font.family'] = "NanumGothic"
plt.rcParams['axes.unicode_minus'] = False
 

# DataFrame 생성
data = pd.DataFrame({
    '이름': ['영식', '철수', '영희'],
    '나이': [22, 31, 25],
    '몸무게': [75.5, 80.2, 55.1]
})

st.dataframe(data, use_container_width=True)
  
# matplotlib
fig, ax = plt.subplots()    ## 캔버스 만들고
ax.bar(data['이름'], data['나이'])    ## x:이름 y:나이
st.pyplot(fig)

# seaborn 활용
barplot = sns.barplot(x='이름', y='나이', data=data, ax=ax, palette='Set2')
fig = barplot.get_figure()

st.pyplot(fig)    # 실행.

############# matplotlib bar chart
labels = ['G1', 'G2', 'G3', 'G4', 'G5']
men_means = [20, 35, 30, 35, 27]
women_means = [25, 32, 34, 20, 25]
men_std = [2, 3, 4, 1, 2]
women_std = [3, 5, 2, 3, 3]
width = 0.35       # the width of the bars: can also be len(x) sequence

fig, ax = plt.subplots()

ax.bar(labels, men_means, width, yerr=men_std, label='Men')
ax.bar(labels, women_means, width, yerr=women_std, bottom=men_means,
       label='Women')
ax.set_ylabel('Scores')
ax.set_title('Scores by group and gender')
ax.legend()
```

##### 05-file.py
- file 업로드 컴포넌트:  https://docs.streamlit.io/develop/api-reference/widgets/st.file_uploader
- 이미지 파일도 가능
```python
import streamlit as st
import pandas as pd
import time
  
# 파일 업로드 버튼 (업로드 기능)
file = st.file_uploader("파일 선택(csv or excel)", type=['csv', 'xls', 'xlsx'])    ## 타입 확장자 지정해둠

# 파일이 정상 업로드 된 경우
# if file is not None:

#     # 파일 읽기
#     df = pd.read_csv(file)

#     # 출력
#     st.dataframe(df)

time.sleep(3)    ## 오류가 잘 나서 3초정도 대기 후 출력

# Excel or CSV 확장자를 구분하여 출력하는 경우
if file is not None:
    ext = file.name.split('.')[-1]    ## 마지막 확장자만 확인인
    if ext == 'csv':
        # 파일 읽기
        df = pd.read_csv(file)
        # 출력
        st.dataframe(df)

    elif 'xls' in ext:
        # 엑셀 로드
        df = pd.read_excel(file, engine='openpyxl')
        # 출력
        st.dataframe(df)
```
##### 06-stock-chart.py
	https://github.com/financedata-org/FinanceDataReader
```python
import streamlit as st
import FinanceDataReader as fdr
import datetime

# Finance Data Reader
# https://github.com/financedata-org/FinanceDataReader
date = st.date_input(
    "조회 시작일을 선택해 주세요",
    datetime.datetime(2022, 1, 1)    ## 날짜선택
)

code = st.text_input(
    '종목코드',
    value='',
    placeholder='종목코드를 입력해 주세요'
)

if code and date:
    df = fdr.DataReader(code, date)
    data = df.sort_index(ascending=True).loc[:, 'Close']    ## 종가
    st.line_chart(data)    ## 라인차트
```
- 국내는 숫자 / 해외는 종목코드 appl

##### 07-stock-chart-2.py
- 사이드바와 탭을 추가
```python
import streamlit as st
import FinanceDataReader as fdr
import datetime
import time

# Finance Data Reader
# https://github.com/financedata-org/FinanceDataReader

st.title('종목 차트 검색')
with st.sidebar:
    date = st.date_input(
        "조회 시작일을 선택해 주세요",
        datetime.datetime(2022, 1, 1)
    )
    code = st.text_input(
        '종목코드',
        value='',
        placeholder='종목코드를 입력해 주세요'
    )

if code and date:
    df = fdr.DataReader(code, date)
    data = df.sort_index(ascending=True).loc[:, 'Close']

    tab1, tab2 = st.tabs(['차트', '데이터'])
    with tab1:    
        st.line_chart(data)
    with tab2:
        st.dataframe(df.sort_index(ascending=False))

    with st.expander('컬럼 설명'):
        st.markdown('''
        - Open: 시가
        - High: 고가
        - Low: 저가
        - Close: 종가
        - Adj Close: 수정 종가
        - Volumn: 거래량
        ''')
```


##### 08-

##### 09-

##### 10-

##### 11-



### Resources

#####  Youtube
- [테디노트_streamlit](https://youtube.com/playlist?list=PLIMb_GuNnFweSpt4s8BhlN7EggZnWWqy6&si=KyDREwhISrMc6Q1P)
	- 자료 
	- 