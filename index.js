const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ivr', (req, res) => {
  // שינוי כאן — קחי את המספר מ־src במקום phone
  const phone = req.query.src || 'לא ידוע';

  console.log(`חיבור ממספר: ${phone}`);

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
