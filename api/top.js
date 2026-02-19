const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const csvPath = path.join(__dirname, '..', 'pipeline', 'sample_output', 'arb_sim_top.csv');
    if (!fs.existsSync(csvPath)) return res.status(404).json({ error: 'top csv not found' });
    const txt = fs.readFileSync(csvPath, 'utf8');
    const lines = txt.split(/\r?\n/).filter(Boolean);
    const headers = lines[0].split(',').map(h => h.trim());
    const rows = lines.slice(1).map(l => {
      const cols = l.split(',');
      const obj = {};
      headers.forEach((h,i)=> obj[h]=cols[i]||'');
      return obj;
    });
    res.setHeader('Content-Type','application/json');
    res.setHeader('Cache-Control','no-cache');
    return res.json(rows);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
