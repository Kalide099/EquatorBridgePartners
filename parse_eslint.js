const r = require('./eslint-report.json');
r.forEach(f => {
  if (f.errorCount > 0 || f.warningCount > 0) {
    f.messages.forEach(m => console.log(`${f.filePath}:${m.line} - ${m.message} (${m.ruleId})`));
  }
});
