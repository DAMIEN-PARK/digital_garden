graph LR
    A[Obsidian] -->|노트 작성| B[Git]
    B -->|자동 동기화| C[동기화]
    C -->|빌드| D[Vercel]
    D -->|배포| E[웹사이트]
