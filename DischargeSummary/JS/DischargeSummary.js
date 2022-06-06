export const printReport = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.barCode);
  printHeaderInformation(windowToPrint, data.headerInfo);
  printbodyContent(windowToPrint, data.historyOverAll);
  printFooterSignature(windowToPrint, data.footerInfo.signature);
  printRestOfFooterSection(windowToPrint, data.footerInfo);
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
      <title>Discharge Summary</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
        * {
          margin: 0;
          padding: 0;
          line-height: 1.5;
          list-style: none;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }
        h3 {
          font-size: 0.9rem;
        }
        strong {
          font-weight: 500;
        }
        body {
          font-size: 0.9rem;
          box-sizing: border-box;
          text-transform: capitalize;
          padding: 25px 20px;
        }
  
        .d-flex {
          display: flex;
        }
        .flex-d-c {
          flex-direction: column;
        }
        .j-c-e {
          justify-content: end;
        }
        .j-c-c {
          justify-content: center;
        }
        .j-c-sa {
          justify-content: space-around;
        }
        .j-c-sb {
          justify-content: space-between;
        }
        .a-i-c {
          align-items: center;
        }
        .barcode img {
          width: 200px;
          height: 28px;
          object-fit: fill;
        }
        .header__logo img {
          width: 200px;
        }
        .header-text {
          border: 1px solid black;
          padding: 5px;
          width: 40%;
          text-align: center;
        }
        .header-text h3 {
          font-weight: 600;
          font-size: 1.25rem;
        }
        .patient-details ul > li {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
        }
        .header-patient-container {
          border-bottom: 1px solid black;
          padding: 6px 0;
        }
  
        ul > li > h3 {
          border-bottom: 1px dashed black;
          font-weight: bold;
          font-size: 1rem;
          margin-top: 15px;
        }
        .Weight-container .container-itemm-list {
          display: grid;
          grid-template-columns: 200px auto;
        }
        .history-examination li:first-child ul > li {
          margin-left: 25px;
          list-style: disc;
        }
        .container-itemm-list p:first-child {
          margin-top: 4px;
        }
        .prescription-img img {
          width: 25px;
        }
        .medicin-list > li {
          margin-left: 16px;
          list-style: decimal;
          margin-bottom: 5px;
        }
        .medicine-routine {
          gap: 1rem;
        }
        .advice > li {
          margin-left: 15px;
          list-style: disc;
        }
        .signature-section-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          overflow-wrap: anywhere;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 50px;
        }
        .signature-item .dashed {
          border-bottom: 1px dashed black;
        }
        .footer-address-section {
          margin-top: 20px;
          border-top: 1px solid black;
        }
        .footer-address-info h3 {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .address-info__all {
          gap: 0.2rem;
          font-size:0.7rem;
        }
  
        @media print {
          #header {
            display: table-header-group;
          }
        
          #main {
            display: table-row-group;
          }
        
          #footer {
            display: table-footer-group;
          }
        }
        
      </style>
    </head>`);
};

const printContentHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`  <body>
  <table>
    <thead>
      <header id="header">
        <div class="header-container">
          <div class="header__logo d-flex j-c-e a-i-c">
            <img src="assets/img/logo.png" alt="logo" srcset="" />
          </div>
          <div class="header__headline d-flex j-c-sb a-i-c">
            <div class="barcode">
              <img src=${data.invoiceBarcode} alt="" srcset="" />
            </div>
            <div class="header-text">
              <h3>Discharge Summary</h3>
            </div>
            <div class="barcode">
              <img src=${data.reportBarcode} alt="" srcset="" />
            </div>
          </div>`);
};

const printHeaderInformation = (windowToPrint, data) => {
  windowToPrint.document
    .write(`<div class="header-patient-container d-flex j-c-sb a-i-c">
  <div class="patient-details">
    <ul>
      <li>
        <strong>HN</strong>
        <p>:${data.ptInfo.hnId}</p>
      </li>
      <li>
        <strong>Patient Name</strong>
        <p>:${data.ptInfo.ptName}</p>
      </li>
      <li>
        <strong>Age/Gender</strong>
        <p>:${data.ptInfo.age}/${data.ptInfo.gender}</p>
      </li>
      <li>
        <strong>Phone</strong>
        <p>:${data.ptInfo.contact}</p>
      </li>
      <li>
        <strong>Address</strong>
        <p>:${data.ptInfo.address}</p>
      </li>
      <li>
        <strong>Primary Consultant</strong>
        <p>:${data.ptInfo.consultant}</p>
      </li>
    </ul>
  </div>
  <div class="patient-details">
    <ul>
      <li>
        <strong>Admission ID</strong>
        <p>:${data.hospitalInfo.admissionId}</p>
      </li>
      <li>
        <strong>Admission Date</strong>
        <p>:${data.hospitalInfo.admissionDate} &nbsp; ${data.hospitalInfo.admissionTime}</p>
      </li>
      <li>
        <strong>Bed Number</strong>
        <p>:${data.hospitalInfo.bedNumber}</p>
      </li>
      <li>
        <strong>Department</strong>
        <p>:${data.hospitalInfo.department}</p>
      </li>
      <li>
        <strong>Discharge Type</strong>
        <p>:${data.hospitalInfo.dischargeType}</p>
      </li>
      <li>
        <strong>Discharge Date</strong>
        <p>:${data.hospitalInfo.dischargeDate}</p>
      </li>
    </ul>
  </div>
</div>
</div>
</header>
</thead>`);
};

const printbodyContent = (windowToPrint, data) => {
  windowToPrint.document.write(`<tbody>
  <main id="main">
    <ul>
    ${data
      .map(function (item) {
        if (item.type.type === "key&value") {
          return `<li>
            <h3>${item.historyHeader}</h3>
            <ul class="Weight-container">
              <li>
                <div class="container-itemm-list">
                  ${printObjectKey(item.type.items)}
                </div>
              </li>
            </ul>
          </li>`;
        }
        if (item.type.type === "withoutDotValue") {
          return `<li>
            <h3>${item.historyHeader}</h3>
            <ul>
              <li>
                ${item.type.items
                  .map(
                    (item2) =>
                      `<div class="container-itemm-list">
                  <p>
                   ${item2}
                  </p>
                </div>`
                  )
                  .join("")}
              </li>
            </ul>
          </li>`;
        }
        if (item.type.type === "history&Examination") {
          return `<li>
            <h3>${item.historyHeader}</h3>
            <ul class="history-examination">
              <li>
                <p>${item.type.text}</p>
                <ul>
                  ${item.type.items
                    .map((item2) => `<li>${item2}</li>`)
                    .join("")}
                </ul>
              </li>
              ${item.type.textOfListGroup
                .map(
                  (item2) =>
                    `<li>
                  <div class="container-itemm-list">
                    <p>
                      <strong>
                        ${item2}
                      </strong>
                    </p>
                  </div>
                </li>`
                )
                .join("")}
             
            </ul>
          </li>`;
        }
        if (item.type.type === "only text") {
          return `<li>
            <h3>Hospital Course Management</h3>
            <ul>
              <li>
                <div class="container-itemm-list">
                  <p>
                    ${item.type.text}
                  </p>
                </div>
              </li>
            </ul>
          </li>`;
        }
        if (item.type.type === "prescribed medicine") {
          return `<li>
            <h3>${item.historyHeader}</h3>
            <div class="right-pres-container">
              <div class="border-span"></div>
              <div class="prescription__right-side">
                <div class="prescription-img">
                  <img src="/JS/assets/img/prescription.png" alt="img" srcset="" />
                </div>
                <ul class="medicin-list">
                ${item.type.medicines
                  .map(
                    (item2) =>
                      `<li>
                    <div class="prescribed-medicine">
                      <div class="medicine-name">
                        <p>
                          <strong> ${item2.name}</strong>
                          <span class="bottom-info__text">
                            (${item2.genericName})
                          </span>
                        </p>
                      </div>
                      <div class="medicine-routine d-flex">
                        <p>${item2.routine}</p>
                        <p>${item2.type}</p>
                        <p>${item2.quantity}</p>
                      </div>
                    </div>
                  </li>`
                  )
                  .join("")}
                  

                </ul>
              </div>
            </div>
          </li>`;
        }
        if (item.type.type === "dotValue") {
          return `<li>
            <h3>Advice</h3>
            <ul class="advice">
              ${item.type.items.map((item2) => `<li>${item2}</li>`).join("")}
            </ul>
          </li>`;
        }
      })
      .join("")}

    </ul>`);
};

const printObjectKey = (data) => {
  let html = "";
  for (const [key, value] of Object.entries(data)) {
    html += `<p>${key}</p>
    <p>:${value}</p>`;
  }
  return html;
};

const printFooterSignature = (windowToPrint, data) => {
  windowToPrint.document
    .write(`          <div class="signature-section-container">
    ${data.map(
      (item) =>
        `<div class="signature-item">
        <p class="dashed">${item.text}&nbsp;(electronic Signature)</p>
        <div class="doctor-identity">
          <p>${item.name}</p>
          <p>${item.specialist.map((item2) => item2)}</p>
        </div>
      </div>`
    ).join('')}

</div>
</main>
</tbody>`);
};

const printRestOfFooterSection = (windowToPrint, data) => {
  windowToPrint.document.write(`<tfoot>
  <footer id="footer">
    <div class="footer">
      <div class="footer-address-section">
        <div class="printing-container d-flex j-c-sb a-i-c">
          <div class="printing-time d-flex">
            <p>Printing date & Time</p>
            <p>${data.printingInfo.date}</p>
            <p>${data.printingInfo.time}</p>
          </div>
          <div class="software-devloped-by d-flex">
            <p>SoftwareBy::</p>
            <p>Iqrasys Solutions Ltd</p>
          </div>
        </div>
        <div class="footer-address-info d-flex j-c-c a-i-c flex-d-c">
          <h3>Platinum Hospital Ltd</h3>
          <div class="address-info__all d-flex j-c-c a-i-c">
            <p>${data.addressDto.address}</p>
            <p>Hotline:${data.addressDto.hotline}</p>
            <p>Email:${data.addressDto.email}</p>
            <p>Web: ${data.addressDto.web}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</tfoot>
</table>`);
};
