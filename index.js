const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// נקודת קצה שימות המשיח יפנו אליה
app.get('/ivr', (req, res) => {
  const phone = req.query.phone || 'לא ידוע';
  const key = req.query.key || 'לא נלחץ';

  console.log(`בקשה מ- ${phone}, הקשה: ${key}`);

  // תגובת JSON לפי פורמט ימות המשיח
  res.json({
    result: [
      { type: "say", text: `שלום למספר ${phone}. לחצת על ${key}.` },
      { type: "hangup" }
    ]
  });
});

app.listen(port, () => {
  console.log(`שרת מאזין על פורט ${port}`);
});