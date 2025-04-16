function onFormSubmit(e) {
  // 1. 抓取 email
  const email = e.response.getRespondentEmail();
  Logger.log("📧 擷取到 email：" + email);

  // 2. 在回應中找「整體滿意度」那一題
  let satisfaction = null;
  const items = e.response.getItemResponses();
  
  for (let i = 0; i < items.length; i++) {
    const question = items[i].getItem().getTitle();
    const answer = items[i].getResponse();

    // Debug 用：把所有題目 & 回答都印出來
    Logger.log(`題目：${question} / 答案：${answer}`);

    // 確認題目標題含「整體滿意度」關鍵字即可
    if (question.includes('整體滿意度')) {
      satisfaction = answer;
      break;
    }
  }
  Logger.log("📊 收到滿意度評分：" + satisfaction);

  // 3. 根據分數，寄出不同內容
  let subject = '感謝您填寫紫微課程問卷 🙏';
  let body = '';

  switch (satisfaction) {
    case '5 分':
    case '4 分':
      body = `您好，

感謝您給予我們紫微課程這麼高的評價 🙏  
知道您喜歡我們的內容，讓整個團隊都非常振奮！

我們希望能持續陪伴您探索更深入的紫微智慧，  
未來上課過程中若有任何問題或想法，歡迎隨時提出，我們一定會全力協助。

再次感謝您的支持 💜

紫微講師團隊 敬上`;
      break;

    case '3 分':
      body = `您好，

感謝您填寫紫微課程問卷 🙏  
我們理解您目前對課程的體驗可能還在觀望當中。

紫微的學習旅程其實像是一場自我探索的啟程，  
若您對某些內容感到卡關或尚未產生共鳴，也許我們可以提供不同的切入方式，  
例如補充資料、一對一 Q&A、或是加入進階討論群。

若您願意，回信告訴我們您想進一步了解的主題，我們很樂意為您量身引導。  
一起往「4分、5分」的旅程邁進 🌱

紫微講師團隊 敬上`;
      break;

    case '2 分':
    case '1 分':
      body = `您好，

感謝您願意填寫這份問卷，也讓我們有機會聽見您的聲音。

看到您對課程的評價較低，我們深感重視並真誠想了解是哪個環節讓您感到不適。  
若您願意，我們非常希望安排一位講師與您對談，  
直接了解您的需求與期待，並立即做出調整與改善。

請直接回信告訴我們方便聯繫的時間與方式，  
我們會盡快安排專人與您聯繫 💬

謝謝您願意給我們一次改進的機會，

紫微講師團隊 敬上`;
      break;
  }

  // 4. 驗證 email 與 body 後寄信
  if (email && body) {
    MailApp.sendEmail(email, subject, body);
    Logger.log(`✅ 已寄送感謝信給：${email}，評分：${satisfaction}`);
  } else {
    Logger.log(`⚠️ 無法寄出信件，email 或 body 為空！`);
  }
}