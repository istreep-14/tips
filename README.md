Tip Pool Splitter — Google Apps Script Web App
================================================

Mobile-friendly web app to split a cash tip pool proportionally by hours worked, with a printable receipt. Implemented as a Google Apps Script (HTML Service) app.

Features
--------
- Enter quantities for cash denominations (bills and coins)
- Add any number of people with name + start/end times (supports overnight)
- Compute total hours, tips/hour, per-person payout (rounded down to whole dollars)
- Show a receipt with per-person breakdown and remainder caused by rounding
- Print-friendly layout

Files
-----
- `Code.gs` — serves the HTML web app via `doGet()`
- `index.html` — UI, styling, and client-side logic
- `appsscript.json` — Apps Script manifest (V8 runtime, UTC timezone)

Quick Start: Deploy as Web App
------------------------------
1. Go to `https://script.google.com`
2. Click “New project”
3. In the left sidebar, add files matching this repo:
   - Create a script file named `Code.gs` and paste the contents from this repo
   - Create an HTML file named `index.html` and paste the contents
   - Create the manifest `appsscript.json` (File > Project properties > Script properties > then add a file via the editor’s left pane menu), paste the contents
4. File > Save (name it: Tip Pool Splitter)
5. Deploy > New deployment
   - Select “Web app”
   - Description: Tip Pool Splitter
   - Execute as: Me
   - Who has access: Anyone with the link (or your team)
   - Click “Deploy” and authorize
6. Copy the Web App URL and open it on your phone. Add it to Home Screen for a native-like feel.

Usage Notes
-----------
- Overnight shifts: If end time is earlier than start time, it’s treated as next day.
- Rounding: Each person’s payout is floored to the nearest dollar. The remainder (if any) is shown at the bottom of the receipt.
- Tips/hour display uses cents precision, but payouts are rounded down to whole dollars per person.

Printing a Receipt
------------------
Click “Print receipt”. On iOS/Android, you can save as PDF or send to a printer.

Customization
-------------
- Denominations: Edit the `DENOMS` array in `index.html` to change currencies/values.
- Styling: Adjust CSS variables in `index.html` for colors and spacing.

Local Development with clasp (optional)
--------------------------------------
If you prefer using the CLI:

1. Install clasp: `npm i -g @google/clasp`
2. `clasp login`
3. In an empty folder, run `clasp create --type webapp --title "Tip Pool Splitter"`
4. Copy files from this repo into the generated project
5. `clasp push`
6. `clasp deploy` (or set a version in the Apps Script UI and “Deploy > Manage deployments”)

License
-------
MIT

