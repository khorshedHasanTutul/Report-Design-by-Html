export const printReport = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.barCode.header);
  printContentTopHeader(windowToPrint, data.headerInformation.headerTopInfo);
  printContentBottomHeader(
    windowToPrint,
    data.headerInformation.headerBottomInfo
  );
  printLeftBarcode(windowToPrint, data.barCode.leftSide);
  printTestItems(windowToPrint, data.testItems);
  printFooterSignature(windowToPrint, data.footerInfo);
  printFooterAddress(windowToPrint, data.footerInfo);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint) => {
  windowToPrint.document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <link rel="stylesheet" href="style.css" /> -->
      <style>
        /* CONFIG */
        :root {
          --lite-color: rgba(0, 0, 0, 0.7);
          --header-footer: #fff;
          --primary: #f08321;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          font-size: 14px;
        }
        table {
          width: 100%;
          /* padding: 2.5rem; */
        }
        .page {
          page-break-after: always;
        }
  
        @page {
          margin: 20mm;
        }
  
        @media print {
          thead {
            display: table-header-group;
          }
          tfoot {
            display: table-footer-group;
          }
  
          button {
            display: none;
          }
  
          body {
            margin: 0;
          }
        }
        .refered {
          display: flex;
        }
  
        .result--grid {
          display: grid;
          grid-template-columns: 1fr 123px 123px 1fr;
        }
        .info-admission {
          grid-column: 1/7;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        /* CONFIG ENDS*/
  
        /* HEADER SECTION STARTS */
        /* .page-header,
  .page-header-space {
    height: 320px;
    padding: 20px;
  } */
        .page-header {
          /* position: fixed; */
          top: 0mm;
          width: 100%;
          background: var(--header-footer);
          background: white;
          padding: 20px;
        }
        .title {
          display: flex;
          justify-content: end;
          align-items: end;
        }
        .title__text__phone {
          font-size: 1.5rem;
          font-weight: lighter;
        }
        .title__text__name {
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          color: var(--primary);
        }
        .title__text__licence {
          font-size: 0.6rem;
          color: var(--lite-color);
        }
        .title__logo {
          width: 140px;
        }
        .title__logo img {
          max-width: 100%;
        }
        /* HEADER SECTION ENDS */
        /* REPORT NAME AND BAR CORE STARTS*/
        .report {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 0.25rem;
          padding: 0 20px;
        }
        .report__code {
          width: 120px;
        }
        .report__code img {
          max-width: 100%;
        }
        .report__name {
          font-size: 0.65rem;
          text-align: center;
        }
        /* REPORT NAME AND BAR CORE STARTS*/
  
        /* INVOICE SECTION STARTS */
        .invoice {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto 1fr auto 1fr;
          column-gap: 0.5rem;
          padding: 0.25rem;
          border: 1px solid var(--lite-color);
          font-size: 0.825rem;
          margin-bottom: 0.25rem;
          margin: 0 20px 10px;
        }
        .invoice div:nth-child(2n) {
          font-weight: bold;
        }
        /* INVOICE SECTION ENDS */
  
        /* TEST SECTION STARTS */
        .test {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto 1fr;
          gap: 0.5rem;
          padding: 0.25rem;
          border: 1px solid var(--lite-color);
          font-size: 0.825rem;
          margin-bottom: 0.5rem;
          margin: 0 20px 10px;
        }
        /* TEST SECTION ENDS */
  
        /* RESULT STARTS*/
        .result {
          margin: 0 40px;
          font-size: 12px;
        }
        .result__header {
          text-align: center;
          border: 1px solid var(--lite-color);
          font-weight: bold;
        }
        .result__header > div {
          padding: 4px 10px;
        }
        .result__header > div:not(.result__header > div:last-child) {
          border-right: 1px solid var(--lite-color);
        }
        .result__header > div:nth-child(1) {
          text-align: left;
        }
        .result__section {
          font-weight: bold;
          margin: 2px 0;
          text-decoration: underline;
        }
        .result__row {
          border-bottom: 1px dashed var(--lite-color);
        }
        .result__row > div {
          padding: 2px 6px;
        }
        .result__row > div:first-child {
          padding-left: 25px;
        }
        .result__row > div:nth-child(3),
        .result__row > div:nth-child(2) {
          text-align: center;
        }
        .result__row > div:nth-child(2) {
          font-weight: bold;
        }
        .result__row > div:last-child {
          text-align: right;
        }
        /* RESULT ENDS*/
        .page.page-22 {
          position: relative;
        }
  
        /* POWERED STARTS */
        .power {
          position: absolute;
          transform: rotate(-90deg);
          display: flex;
          gap: 80px;
          left: -245px;
          top: 50%;
        }
        .power__bar-code {
          width: 120px;
          display: flex;
        }
        .power__bar-code img {
          max-width: 100%;
        }
        /* .report2 {
    display: flex;
    justify-content: space-between;
    transform: rotate(90deg);
    position: absolute;
    left: -206px;
  } */
        /* POWERED ENDS */
  
        /* SIGNATORY SECTION STARTS */
        .signatories {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 6rem;
          margin-bottom: 3rem;
          margin-left: 40px;
          margin-right: 40px;
        }
        .signatories > :nth-child(2) {
          text-align: center;
        }
        /* SIGNATORY SECTION ENDS */
  
        /* END OF REPORT SECTION STARTS*/
        .end-report__label {
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }
        .end-report__instructions {
          border: 2px solid black;
          margin: 10px 40px;
        }
        .end-report__instructions h4 {
          font-size: 1rem;
          margin: 0.25rem 0;
          text-align: center;
          text-decoration: underline;
        }
        .end-report__instructions p {
          padding: 0.5rem;
          text-align: justify;
          font-size: 0.8rem;
        }
        /* END OF REPORT SECTION ENDS */
        /* FOOTER STARTS */
        .page-footer,
        .page-footer-space {
          padding: 20px;
          height: 145px;
          z-index: 999;
        }
  
        .page-footer {
          text-align: center;
          position: fixed;
          bottom: 0;
          width: 100%;
          background: var(--header-footer);
        }
  
        .page-counter:after {
          counter-increment: page;
          content: counter(page);
        }
        .print-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 10px;
          font-size: 0.8rem;
          padding-left: 20px;
          padding-right: 20px;
        }
        .print-info__page__code {
          width: 55px;
          height: 55px;
          margin-bottom: 0.5rem;
        }
        .print-info__page__code img {
          max-width: 100%;
        }
        address {
          color: var(--lite-color);
          font-style: normal;
        }
        /* FOOTER ENDS */
      </style>
      <title>HAEMATOLOGY REPORT</title>
    </head>`);
};

const printContentHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`  <body>
  <div class="page-header">
    <div class="title">
      <!-- <div class="title__text">
        <p class="title__text__phone">Hotline: 911</p>
        <p class="title__text__name">Iqra Hospital Ltd, Dhaka</p>
        <p class="title__text__licence">
          Licence No: HSM45xxx6138 &nbsp; | &nbsp; Reg. Code: HSM45648xxx8
        </p>
      </div> -->
      <div class="title__logo">
        <img src="/JS/assets/img/logo.png" alt="Logo" />
      </div>
    </div>
    <div class="report">
      <div class="report__code">
        <img src=${data.invoiceBarcode} alt="Bar Code" />
      </div>
      <div class="report__name">
        <h1>HAEMATOLOGY REPORT</h1>
      </div>
      <div class="report__code">
        <img src=${data.reportBarcode} alt="Bar Code" />
      </div>
    </div>`);
};

const printContentTopHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`      <div class="invoice">
  <div>Invoice No</div>
  <div>: <span>${data.hospitalInfo.invoiceNo}</span></div>
  <div>Invoice Date</div>
  <div>: <span>${data.hospitalInfo.invoiceDate}</span></div>
  <div>Delivery Date</div>
  <div>: <span>${data.hospitalInfo.delivaryDate}</span></div>
  <div>Report No</div>
  <div>: <span>${data.hospitalInfo.reportNo}</span></div>
  <div>Patient Name</div>
  <div style="grid-column: 2 / 5; text-transform: uppercase">
    : <span>${data.ptInfo.ptName}</span>
  </div>
  <div>Age</div>
  <div>: <span>${data.ptInfo.age}</span></div>
  <div>Gender</div>
  <div>: <span>${data.ptInfo.gender}</span></div>
  <div>Address</div>
  <div style="grid-column: 2 / 7">: <span>${data.ptInfo.address}</span></div>
  <div>Contact No</div>
  <div>:${data.ptInfo.contact}</div>

  <div class="info-admission">
    <div class="refered">
      <div>Reffered By</div>
      <div>: <span>${data.doctorInfo.name}</span></div>
    </div>
    <div class="refered">
      <div>Ward</div>
      <div>: <span>${data.doctorInfo.ptBedInfo.ward}</span></div>
    </div>
    <div class="refered">
      <div>Bed</div>
      <div>: <span>${data.doctorInfo.ptBedInfo.bed}</span></div>
    </div>
  </div>
</div>`);
};

const printContentBottomHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`      <div class="test">
  <div>Sample Type</div>
  <div>: <b>${data.type}</b></div>
  <div>LAB No</div>
  <div style="grid-column: 4 / 9">: <span>${data.labNo}</span></div>
  <div>Tests</div>
  <div style="grid-column: 2 / 9">
    :
    <span>${data.testName}</span>
  </div>
  <div>Sample Collected</div>
  <div>: <span>${data.sampleCollected.date}&nbsp; ${data.sampleCollected.time}</span></div>
  <div>Sample Received</div>
  <div>
    :
    <span>${data.sampleReceived.date}&nbsp; ${data.sampleReceived.time}</span>
  </div>
  <div>Received Time</div>
  <div>: <span>${data.ReceivedTime.date}&nbsp; ${data.ReceivedTime.time} </span></div>
</div>
</div>`);
};

const printFooterAddress = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="page-footer">
  <div class="print-info">
    <div class="print-info__personal">
      Print by & Date :: <span>${data.printedInfo.printBy} on ${data.printedInfo.date} ${data.printedInfo.time}</span>
    </div>
    <!-- <div class="print-info__page">
      <div class="print-info__page__code">
        <img src="./assests/qr-code.png" alt="QR Code" />
      </div>
      <div>Page <span class="page-counter"></span> of 2</div>
    </div> -->
  </div>
  <address>
    ${data.addressDto.address} hotline:
    ${data.addressDto.hotline}, E-mail: ${data.addressDto.email}, Web: ${data.addressDto.web}
  </address>
</div>
`);
};

const printLeftBarcode = (windowToPrint, data) => {
  windowToPrint.document.write(` <table class="">
  <thead>
    <tr>
      <td>
        <!--place holder for the fixed-position header-->
        <div class="page-header-space"></div>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <!--*** CONTENT GOES HERE ***-->
        <div class="page page-22">
          <div class="power">
            <div class="power__bar-code">
              HN:
              <div><img src=${data.hnBarCode} alt="" /></div>
            </div>
            <div>Powered by: iqrasys.com</div>
            <div class="power__bar-code">
              HN:
              <div><img src=${data.anBarCode} alt="" /></div>
            </div>
          </div>`);
};

const printTestItems = (windowToPrint, data) => {
  windowToPrint.document.write(`  <div class="result">
  <div class="result__header result--grid">
    <div>Test</div>
    <div>Result</div>
    <div>Unit</div>
    <div>Reference Value</div>
  </div>
  ${data
    .map(
      (item) =>
        ` <div class="result__section">${item.itemName}</div>
      ${item.itemCollection
        .map(
          (item2) =>
            `<div class="result__row result--grid">
    <div>${item2.itemSubName}</div>
    <div>${item2.result}</div>
    <div>${item2.unit}</div>
    <div>${item2.referenceValue.feMale},  ${item2.referenceValue.male}</div>
  </div>`
        )
        .join("")}
  `
    )
    .join("")}
  
  </div>`);
};

const printFooterSignature = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="signatories">
  <div>
    <p><b>${data.prepared.name}</b></p>
    <p>${data.prepared.designation}</p>
    <p>${data.prepared.from}</p>
  </div>
  <div>
    <p><b>${data.observedDoc.name}</b></p>
    <p>${data.observedDoc.specialist.map((item) => item)}</p>
    <p>${data.observedDoc.department}</p>
    <p>${data.observedDoc.from}</p>
  </div>
</div>

<!-- <div class="end-report">
  <div class="end-report__label">
    -------------------------------------------------- End of
    Report --------------------------------------------------
  </div>
  <div class="end-report__instructions">
    <h4>IMPORTANT INSTRUCTIONS</h4>
    <p>
      *The test results should only be interpreted by qualified
      and registered medical practitioners.*The laboratory test
      results should be clinically correlated by the referring
      physician *The reported results depend on the quality of the
      samples and sensitivity/specificity of the test methods.*1n
      case of grossly abnormal test results, the lab may perform
      repeat test from the same/fresh sample at its own or on the
      basis of clinicians/Clients request within 2 days post
      reporting.*Inter-laboratory variations may be found in test
      results, and Iqra Hospital Limited (Diagnostics) shall not
      incur any liability due to such variance.*This test report
      is not valid for medico-legal purpose.*Iqra Hospital Limited
      (Diagnostics)and its staff will not take any responsibility
      or liability for any loss or injury resulting from
      incomplete or erroneous interpretation of the test results
      contained herein *Due to unexpected circumstances. the
      report delivery may rarely be delayed.*Partial reproduction
      of this test report is not allowed.
    </p>
  </div>
</div> -->
</div>
</td>
</tr>
</tbody>

<tfoot>
<tr>
<td>
<!--place holder for the fixed-position footer-->
<div class="page-footer-space"></div>
</td>
</tr>
</tfoot>
</table>`);
};
