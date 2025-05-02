import streamlit as st
import pandas as pd
import numpy as np

# Quartz 스타일 적용
st.set_page_config(
    page_title="로또 생성기",
    page_icon="🎲",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# CSS 커스터마이징
st.markdown("""
<style>
    /* Quartz 스타일 적용 */
    .stApp {
        background-color: #f8f9fa;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    
    .stButton>button {
        background-color: #4a90e2;
        color: white;
        border-radius: 4px;
        border: none;
        padding: 8px 16px;
        font-weight: 500;
    }
    
    .stButton>button:hover {
        background-color: #357abd;
    }
    
    h1 {
        color: #2c3e50;
        font-weight: 600;
    }
    
    .stDataFrame {
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
</style>
""", unsafe_allow_html=True)

st.title('🎲 로또 번호 생성기')

# 로또 번호 생성 함수
def generate_lotto_numbers():
    numbers = np.random.choice(range(1, 46), 6, replace=False)
    return sorted(numbers)

# 메인 컨테이너
col1, col2 = st.columns([1, 2])

with col1:
    st.subheader("로또 번호 생성")
    if st.button("새 번호 생성"):
        numbers = generate_lotto_numbers()
        st.markdown(f"""
        <div style='background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);'>
            <h3 style='color: #2c3e50;'>생성된 번호</h3>
            <div style='display: flex; gap: 10px; margin-top: 10px;'>
                {''.join([f"<div style='background-color: #4a90e2; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;'>{num}</div>" for num in numbers])}
            </div>
        </div>
        """, unsafe_allow_html=True)

with col2:
    st.subheader("최근 생성 기록")
    if 'history' not in st.session_state:
        st.session_state.history = []
    
    if st.button("기록 초기화"):
        st.session_state.history = []
    
    if len(st.session_state.history) > 0:
        for i, numbers in enumerate(st.session_state.history[-5:], 1):
            st.markdown(f"""
            <div style='background-color: #fff; padding: 15px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);'>
                <div style='display: flex; gap: 8px;'>
                    {''.join([f"<div style='background-color: #4a90e2; color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;'>{num}</div>" for num in numbers])}
                </div>
            </div>
            """, unsafe_allow_html=True)
    else:
        st.info("아직 생성된 번호가 없습니다.") 