import React from 'react';
import './ProfitLossStatement.css';
import { ExcelFile, ExcelSheet, ExcelColumn } from 'react-export-table-to-excel';


const ProfitLossStatement = () => {
  const data = [
    { description: "Other Income", notes: "26", amount: "1,69,03,532.69" },
    { description: "Total Revenue", notes: "", amount: "1,69,03,532.69" },
    { description: "Cost of material consumed", notes: "27", amount: "79,94,315.43" },
    { description: "Other expenses", notes: "33", amount: "52,17,919.55" },
    { description: "Total Expenses", notes: "", amount: "1,32,12,234.98" },
    { description: "PROFIT/(LOSS) BEFORE TAX", notes: "", amount: "36,91,297.71" },
    { description: "PROFIT AFTER TAX", notes: "", amount: "36,91,297.71" }
  ];

  return (
    <div className="statement-container">
      <header className="statement-header">
        <div>
          <p>james johny</p>
          <p>PROFIT AND LOSS STATEMENT FOR THE YEAR ENDED 31/03/2025 31-Mar-2023</p>
        </div>

        <div className="company-info">
          <p>CIN:</p>
          <p className="margin">Phone No: 98456712340</p>
        </div>
      </header>

      <div className="export-button-container">
        <ExcelFile
          filename="ProfitLossStatement"
          element={<button className="export-button">Export Table to Excel</button>}
        >
          <ExcelSheet data={data} name="Profit and Loss">
            <ExcelColumn label="Description" value="description"/>
            <ExcelColumn label="Notes" value="notes"/>
            <ExcelColumn label="Amount (INR)" value="amount"/>
          </ExcelSheet>
        </ExcelFile>
      </div>

      <section className="statement-details">
        <table>
          <tbody>
            <tr className="dates-heading">
              <td></td>
              <td></td>
              <td><u>As at</u></td>
            </tr>
            <tr className="dates-heading">
              <td></td>
              <td><u>Notes</u></td>
              <td><u>31-March-2023</u></td>
            </tr>
            <tr className="dates-heading">
              <td></td>
              <td></td>
              <td><u>INR</u></td>
            </tr>
            <tr>
              <td>Other Income</td>
              <td className="statement-bold">26</td>
              <td className="underlined">1,69,03,532.69</td>
            </tr>
            <tr className="statement-bold">
              <td>Total Revenue</td>
              <td></td>
              <td className="double-underlined">1,69,03,532.69</td>
            </tr><br /><br />
            <tr className="section-header">
              <td>Expenses:</td>
            </tr>
            <tr>
              <td>Cost of material consumed</td>
              <td className="statement-bold">27</td>
              <td>79,94,315.43</td>
            </tr>
            <tr>
              <td>Other expenses</td>
              <td className="statement-bold">33</td>
              <td className="underlined">52,17,919.55</td>
            </tr>
            <tr className="statement-bold">
              <td>Total Expenses</td>
              <td></td>
              <td className="double-underlined">1,32,12,234.98</td>
            </tr><br />
            <tr className="statement-bold">
              <td>PROFIT/(LOSS) BEFORE TAX</td>
              <td></td>
              <td>36,91,297.71</td>
            </tr><br />
            <tr className="statement-bold">
              <td>PROFIT AFTER TAX</td>
              <td></td>
              <td className="double-underlined">36,91,297.71</td>
            </tr><br /><br />
          </tbody>
        </table>

        <p>See accompanying notes to the financial statements.</p>
      </section>
      <p className="statement-rightfooter">As per our report of even date</p>
      <p>For and on behalf of the board.</p>
      <footer className="statement-footer">
        <div>
          <p className="statement-bold">DIRECTOR 1</p>
          <p className="statement-bold">DIRECTOR - DIN 23456</p>
          <p>MANAGER, KOZHIKODE, 67099</p>
        </div>
        <div className="statement-rightfooter">
          <p className="statement-bold">For Test Company pvt Ltd</p>
          <p>test 11</p>
          <p>company11</p>
        </div>
      </footer><br></br><br></br>
      <footer className="statement-footer">
        <div>
          <p className="statement-bold">DIRECTOR 3</p>
          <p>-DIN WE345</p>
        </div>
        <div className="statement-rightfooter">
          <p className="statement-bold">P K Mathew & Co.</p>
          <p>partner</p>
          <p>Membership No.22592945'''''</p>
          <p>UDIN:23225929BGFN1632</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfitLossStatement;
