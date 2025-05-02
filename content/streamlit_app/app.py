import streamlit as st
import pandas as pd
import numpy as np

st.title('데이터 분석 도구')

# 데이터 업로드
uploaded_file = st.file_uploader("CSV 파일을 업로드하세요", type=['csv'])

if uploaded_file is not None:
    # 데이터 로드
    df = pd.read_csv(uploaded_file)
    
    # 기본 통계 정보 표시
    st.subheader('데이터 미리보기')
    st.write(df.head())
    
    # 데이터 요약
    st.subheader('기본 통계')
    st.write(df.describe())
    
    # 간단한 시각화
    st.subheader('기본 시각화')
    st.line_chart(df.select_dtypes(include=[np.number])) 