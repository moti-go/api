const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// נקודת קצה שימות המשיח יפנו אליה
app.get('/ivr', (req, res) => {
  const phone = req.query.phone || 'לא ידוע';

  console.log(`חיבור ממספר: ${phone}`);

  // תגובת JSON שתקריא רק את מספר המתקשר
  res.json({
    result: [
      { type: "say", text: `שלום למספר ${phone}` },
      { type: "hangup" }
    ]
  });
});

app.listen(port, () => {
  console.log(`שרת מאזין על פורט ${port}`);
});
