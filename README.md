Polymarket Arb Dashboard

Cara pakai (singkat):
1. File HTML ada di pipeline/dashboard/index.html
2. Dashboard membaca CSV dari pipeline/sample_output/:
   - arb_sim_top.csv
   - arb_paper_sim_detail.csv
   - arb_sim_results.csv

3. Untuk membuka dashboard secara lokal:
   - Opsi A (direkomendasikan): jalankan simple HTTP server dari workspace root dan buka di browser
     - python3 -m http.server 8000
     - buka http://localhost:8000/pipeline/dashboard/index.html
   - Opsi B: buka file langsung di browser (file://...), tapi beberapa browser blokir fetch local CSV karena CORS. Jika tidak muncul, pakai Opsi A.

4. Konten dashboard:
   - Tabel top candidates
   - Quick metrics (sim totals)
   - Histogram distribusi net PnL
   - Recent sim detail table

5. Jika ingin integrasi Metabase/Grafana: import CSV ke data source atau sambungkan SQLite (sample_schema.sql disediakan).

Jika butuh, aku bisa jalankan http.server di host dan kirim link local (jika diijinkan).