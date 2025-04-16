# GoogleFormAppsScript_Thanks-letters
# 紫微線上課程滿意度問卷自動回信系統

## 專案背景
這是一個利用 Google Apps Script 自動根據問卷評分寄出不同內容回信的系統。  
在開發過程中，我學習到如何使用 Apps Script 的 onFormSubmit 觸發器、如何用 `getRespondentEmail()` 抓取自動收集的 email，以及如何使用 `getItemResponses()` 獲取表單回應的答案內容。

## 主要功能
- 根據滿意度分數 (1分、2分、3分、4分、5分) 寄出不同語氣的感謝信
- 使用 Logger.log 做詳細的除錯記錄
- 利用 clasp 工具同步程式碼至本地並部署到 GitHub

## 開發步驟
1. 安裝 Node.js 與 clasp
2. 從 Google 表單綁定的 Apps Script 專案下載程式碼
3. 編寫並除錯 onFormSubmit() 函式
4. 利用 Git 建立版本管理並 push 至 GitHub

## 學習心得
這次專案讓我深刻體會到：
- 每個小細節（如空格、標點）的重要性
- 使用 Logger.log 除錯的重要性
- 利用 clasp 工具，使得 Apps Script 變得更容易做版本控制與多人合作

未來期望整合 Gemini AI，實現動態回應的自動信件產出！

---
