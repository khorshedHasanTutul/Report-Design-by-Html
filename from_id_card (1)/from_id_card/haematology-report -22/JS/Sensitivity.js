export const printReport = (data) => {
  console.log(data);
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint, data.headerInformation, data.barCode.header);
  printAsideBarcode(windowToPrint, data.barCode.leftSide);
  printMeasurementSection(windowToPrint, data.Measurement);
  printTestItems(windowToPrint, data.testItems);
  printOtherItems(windowToPrint, data.finalDiagnosis);
  printFooter(windowToPrint, data.footerInfo);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint, data, barCode) => {
  windowToPrint.document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cardiology Report</title>
      <!-- <link rel="stylesheet" href="assets/css/style.css" /> -->
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    line-height: 1.3;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }
  h3 {
    font-size: 0.9rem;
  }
  strong {
    font-weight: 500;
  }
  body {
    font-size: 0.8rem;
    box-sizing: border-box;
    text-transform: capitalize;
    padding: 10px 30px;
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
  .footer-address-section{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .header-container__logo img {
    width: 180px;
    object-fit: fill;
  }
  .__headline-barcode img {
    width: 170px;
  }
  .__ptinfo-invoice ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
  }
  .__ptinfo-patient-details {
    gap: 5rem;
  }
  .header-container__ptInfo {
    border: 1px solid black;
    padding: 10px;
    font-weight: 500;
  }
  .header-container__testInfo {
    border: 1px solid black;
    margin-top: 5px;
    padding: 5px;
  }
  .measurement-container {
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  .measurement-item {
    gap: 5rem;
    flex: wrap;
  }
  .power {
    position: absolute;
    transform: rotate(-90deg);
    display: flex;
    left: -343px;
    gap: 80px;
  }
  .page_22 {
    position: relative;
  }
  .page_22 .power {
    top: 70%;
    bottom: inherit;
  }
  .__ptinfo-invoice ul > li p:last-child {
    font-weight: 500;
  }
  .__ptInfo-patinent > div p:last-child {
    font-weight: 500;
  }
  .__ptinfo-doctor-info p:last-child {
    font-weight: 500;
  }
  .__testInfo-addmission > div p:last-child {
    font-weight: 500;
  }
  .page_22 {
    position: relative;
  }
  .power__bar-code {
    width: 170px;
    display: flex;
  }
  .power__bar-code img{
    max-width: 100%;
  }
  .measure-container__item {
    display: grid;
    grid-template-columns: 65% 35%;
  }
  .grid-row {
    display: grid;
    grid-template-columns: 50% auto;
  }
  .impression-section ul > li h3 {
    text-decoration: underline;
    font-weight: 500;
  }
  .impression-item {
    display: grid;
    grid-template-columns: 50% auto;
  }
  .others-section ul > li h5 {
    text-decoration: underline;
    font-weight: 600;
  }
  ul.list-remover > li {
    list-style: none !important;
  }
  .others-section ul > li {
    list-style: disc;
    margin-left: 30px;
    font-weight: 500;
  }
  .footer-address-info {
    margin-top: 50px;
  }
  .measure-container__box {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    padding: 0 6px;
  }
  .address-info__all {
    font-size: 0.8rem;
  }
  .__ptinfo-invoice ul {
    display: grid;
    grid-template-columns: 200px 1fr 1fr 1fr;
  }
  .header-grid-report {
    display: grid !important;
    grid-template-columns: 73px 100px !important;
  }
  .__ptinfo-invoice ul > li {
    display: grid;
    grid-template-columns: 97px 1fr;
  }
  .__ptInfo-patinent {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .age {
    display: grid;
    grid-template-columns: 38px 1fr;
  }
  .gender {
    display: grid;
    grid-template-columns: 64px 1fr;
  }
  .__ptInfo-patient-name {
    display: grid;
    grid-template-columns: 97px 1fr;
  }
  .__ptinfo-doctor-info {
    display: grid;
    grid-template-columns: 97px 1fr;
  }
  .impression-section ul > li {
    margin-bottom: 4px;
  }
  .impression-section ul > li:first-child {
    margin-top: 3px;
  }
  .header-grid {
    display: grid !important;
    grid-template-columns: 96px 1fr !important;
  }
  .header-container {
    font-size: .7rem;
  }
      </style>
    </head>
    <body>
    <table>
    <thead>
      <header>
        <div class="header-container">
          <div class="header-container__logo d-flex j-c-e">
            <img src="assets/img/logo.png" alt="img" srcset="" />
          </div>
          <div class="header-container__headline d-flex j-c-sb a-i-c">
            <div class="__headline-barcode">
              <img src=${barCode.invoiceBarcode} alt="img" srcset="" />
            </div>
            <div class="__headline-text">
              <h2>CARDIOLOGY REPORT</h2>
            </div>
            <div class="__headline-barcode">
              <img src=${barCode.reportBarcode} alt="img" srcset="" />
            </div>
          </div>
          <div class="header-container__ptInfo d-flex flex-d-c">
            <div class="__ptinfo-invoice">
              <ul>
                <li>
                  <p>Invoice No</p>
                  <p>:${data.hospitalInfo.invoiceNo}</p>
                </li>
                <li class="header-grid">
                  <p>Invoice Date</p>
                  <p>:${data.hospitalInfo.invoiceDate}</p>
                </li>
                <li class="header-grid">
                  <p>Delivary Date</p>
                  <p>:${data.hospitalInfo.delivaryDate}</p>
                </li>
                <li class="header-grid-report">
                  <p>Report No</p>
                  <p>:${data.hospitalInfo.reportNo}</p>
                </li>
              </ul>
            </div>
            <div class="__ptInfo-patinent ">
              <div class="__ptInfo-patient-name">
                <p>Patient Name</p>
                <p>:${data.ptInfo.ptName}</p>
              </div>
              <div class="__ptinfo-patient-details d-flex j-c-sa">
                <div class="age">
                  <p>Age</p>
                  <p>:${data.ptInfo.age}</p>
                </div>
                <div class="gender">
                  <p>Gender</p>
                  <p>:${data.ptInfo.gender}</p>
                </div>
              </div>
            </div>
            <div class="__ptinfo-doctor-info">
              <p>
                Ref.Dcotor
              </p>
              <p>:${data.doctorInfo.name}</p>
            </div>
          </div>
          <div class="header-container__testInfo d-flex flex-d-c">
            <div class="test-Name __ptinfo-doctor-info">
              <p>Test Name</p>
              <p>:${data.testInfo.testName}</p>
            </div>
            <div class="__testInfo-addmission d-flex j-c-sb">
              <div class="addmission__admission-no __ptinfo-doctor-info">
                <p>Admission No</p>
                <p>:${data.testInfo.admissionNo}</p>
              </div>
              <div class="addmission__bed-no d-flex j-c-sa">
                <p>Bed No</p>
                <p>:${data.testInfo.bedNo}</p>
              </div>
            </div>
          </div>
        </div>
      </header></thead>`);
};

const printAsideBarcode = (windowToPrint, data) => {
  windowToPrint.document.write(`   <tbody> <main>
  <div class="page page_22">
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

const printMeasurementSection = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="measurement-section">
  <h4>${data.title}:</h4>
  <div class="measurement-container">
    <div class="measure-container__box">
    ${printMeasurementItems(data.data)} 
    </div>
  </div>
</div>`);
};

const printMeasurementItems = (data) => {
  let HTML = "";
  for (const [key, value] of Object.entries(data)) {
    HTML += `<div class="measure-container__item d-flex">
    <strong>${key}</strong>
    <p>${value}</p>
  </div>`;
  }
  return HTML;
};

const printTestItems = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="impression-section">
  <ul>
  ${data.map(
    (item) =>
      `<li>
    <h3>${item.title}</h3>
    <ul class="grid-row">
    ${printTestColumns(item.data)}
    </ul>
  </li>`
  )}
  </ul>
</div>`);
};

const printTestColumns = (data) => {
  let HTML = "";
  for (const [key, value] of Object.entries(data)) {
    HTML += `<li>
    <div class="impression-container">
      <div class="impression-item">
        <p>${key}</p>
        <span>:${value}</span>
      </div>
    </div>
  </li>`;
  }
  return HTML;
};

const printOtherItems = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="others-section">
  <ul class="list-remover">
      <li>
          <h5>Others</h5>
          <li>
              <h5>Final Diagnosis:</h5>
              <ul>
              ${data.map((item) => `<li>${item}</li>`)}
              </ul>
          </li>
      </li>
  </ul>
</div>
</div>
</main> </tbody>`);
};

const printFooter = (windowToPrint, data) => {
  windowToPrint.document.write(`<tfoot><footer>
  <div class="footer-signature-sections d-flex j-c-sa a-i-c">
      <div class="footer-prepared-by">
          <p>Prepared By:: <strong>${
            data.prepared.name + data.prepared.id
          }</strong></p>
      </div>
      <div class="footer-doctor-area">
          <h4><strong>${data.observedDoc.name}</strong></h4>
          <p>${data.observedDoc.specialist.map((item) => item)}</p>
          <p>${data.observedDoc.department}</p>
          <p>${data.observedDoc.from}</p>
      </div>
  </div>
  <div class="footer-address-section ">
      <div class="footer-address-info d-flex j-c-c a-i-c flex-d-c">
          <h3>${data.addressDto.text}</h3>
          <div class="address-info__all d-flex j-c-c a-i-c">
             <p>${data.addressDto.address}</p>
             <p>Email:${data.addressDto.email}</p>
              <p>Hotline:${data.addressDto.hotline}</p>
              <p>Web:${data.addressDto.web}</p>
          </div>
      </div>
  </div>
</footer></tfoot>`);
};
