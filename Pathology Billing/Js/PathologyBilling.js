export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeaderHandler(windowToPrint, data.AddressDTO);
  printHospitalInfoHandler(windowToPrint, data.HospitalInfo);
  printPtInfoHandler(windowToPrint, data.patientInfo);
  printDocInfoHandler(windowToPrint, data.doctorInfo);
  printTestInfoHandler(windowToPrint, data.testInfo);
  printPaymentHandler(windowToPrint, data.delivaryDetails);
  printFooterHandler(windowToPrint, data.delivaryDetails.prepared);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeaderHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pathology Billing</title>
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
    * {
      margin: 0;
      padding: 0;
      line-height: 1.3;
      list-style: none;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    h3 {
      font-size: 0.9rem;
    }
    strong {
      font-weight: 500;
      font-size: 0.8rem;
    }
    body {
      font-size: 0.7rem;
      box-sizing: border-box;
      text-transform: capitalize;
      padding: 0 40px;
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
    .billing__info-hnNo {
      display: grid;
      grid-template-columns: 55px 1fr;
      font-weight: 600;
    }
    .billing__info-bill-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
    .bold p:first-child {
      font-weight: 500;
    }
    .billing__info-dateNo {
      gap: 0.5rem;
    }
    .billing__info-billNo {
      display: grid;
      grid-template-columns: 56px 1fr;
    }
    tbody tr > th {
      font-weight: 600;
    }
    .bottomSection-doc-info {
      display: grid;
      grid-template-columns: 56px 1fr;
    }
    .bottomSection-information {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .info__name {
      display: grid;
      grid-template-columns: 56px 1fr;
    }
    .bottomSection-bio-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .bottomSection-bio-info > div {
      display: grid;
      grid-template-columns: 56px 1fr;
    }
    .contact.bold {
      display: grid;
      grid-template-columns: 80px 1fr;
    }
    .header__logo img {
      width: 200px;
      object-fit: cover;
    }
    .billing__info-barCode img {
      width: 100px;
      height: 28px;
    }
    .billing__info-barCode {
      display: grid;
      justify-content: end;
    }
    table {
      width: 100%;
      border-bottom: 1px solid black;
      border-collapse: collapse;
      text-align: justify;
    }
    th {
      border-bottom: 1px solid black;
    }
    
    td,
    th {
      padding: 3px 0;
    }
    tr th:first-child,
    th:last-child {
      width: 16%;
    }
    tbody > tr > td:last-child {
      text-align: end;
    }
    .summary__item-total {
      border-bottom: 1px dashed black;
      padding: 8px;
    }
    .table__bottom-container-summary {
      width: 32%;
    }
    .collect-money-info {
      margin-top: 30px;
    }
    .header__address p {
      font-size: 0.6rem;
    }
    .header_customer-copy {
      padding: 5px;
      border: 1px solid black;
      border-radius: 10px;
      margin-top: 5px;
      text-align: center;
      font-weight: 500;
    }
    /* .header__details-date {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      align-items: center;
    } */
    .header__details-date {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header__serial {
      font-weight: 500;
    }
    .summary__item-total {
      border-bottom: 1px dashed black;
      padding: 3px 0;
    }
    .bottom-container-timing__status p {
      padding: 3px 1px;
      border: 1px solid black;
      font-size: 1.25rem;
      font-weight: 600;
      border-radius: 6px;
      display: inline-block;
    }
    
    .bottom-container-timing__status {
      display: flex;
      align-items: end;
      justify-content: end;
      margin: 3px 0;
    }
    .bottom-container-timing {
      gap: 0.3rem;
    }
  </style>
  </head>
  <body>
    <header>
      <div class="header-container">
        <div class="header-container__topSection">
          <div class="header__logo d-flex j-c-c a-i-c">
            <img src="/Js/assets/img/logo.png" alt="img" srcset="" />
          </div>
          <div class="header__address d-flex j-c-c a-i-c">
            <p>
              ${data.address}&nbsp;Phone: ${data.phone}&nbsp; Hotline : ${data.hotline} 
            </p>
          </div>`);
};
const printHospitalInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="header__details-date">
    <div class="header__serial">365</div>
    <div class="header_customer-copy">customer copy</div>
    <div class="header__date-time">
      <p>${data.date}</p>
      <!-- <p>13.07.53</p> -->
    </div>
  </div>
  <div class="header__details-billing__info d-flex j-c-sb flex-d-c">
    <div class="billing__info-hnNo bold">
      <p>HN No.</p>
      <span>:${data.hnNo}</span>
    </div>
    <div class="billing__info-bill-container">
      <div class="billing__info-billNo bold">
        <p>Bill No.</p>
        <span>:${data.billNo}</span>
      </div>
      <div class="billing__info-dateNo d-flex bold">
        <p>Date: ${data.date}</p>
        <p style="font-weight: bold">${data.time}</p>
      </div>
      <div class="billing__info-barCode">
        <img src=${data.barCode} alt="img" srcset="" />
      </div>
    </div>
  </div>
</div>`);
};

const printPtInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="header-container__bottomSection">
    <div class="bottomSection-information">
      <div class="info__name bold">
        <p>Name</p>
        <p>:${data.name}</p>
      </div>
      <div class="info__copy billing__info-barCode bold">
        <p>${data.text}</p>
      </div>
    </div>
    <div class="bottomSection-bio-info">
      <div class="age bold">
        <p>Age</p>
        <p>:${data.age}</p>
      </div>
      <div class="gender bold">
        <p>Gender</p>
        <p>:${data.gender}</p>
      </div>
      <div class="contact bold">
        <p>Contact No</p>
        <p>:${data.contact}</p>
      </div>
    </div>`);
};

const printDocInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="bottomSection-doc-info bold">
    <p>Ref. By</p>
    <p>${data.referedBy}</p>
  </div>
</div>
</div>
</header>`);
};

const printTestInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(` <main>
    <table>
      <tr>
        <th>Code</th>
        <th>test Name</th>
        <th>S.Room</th>
        <th style="text-align: end">Price(Tk.)</th>
      </tr>
      ${data.map(
        (item) =>
          `<tr>
            <td>${item.code}</td>
            <td>${item.testName}</td>
            <td>${item.storeRoom}</td>
            <td>${item.ammount}</td>
          </tr>`
      )}
      
    </table>`);
};

const printPaymentHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="table__bottom-info">
    <div class="table__bottom-remarks">
      <p>Remarks:</p>
    </div>
    <div class="table__bottom-container d-flex j-c-sb">
      <div class="table__bottom-container-timing">
        <div class="bottom-container-timing d-flex j-c-sb bold">
          <p>Delivary Date:</p>
          <p>${data.delivaryInfo.date}</p>
          <p>${data.delivaryInfo.time}</p>
        </div>
        <div class="bottom-container-timing__status">
          <p>Paid</p>
        </div>
        <div class="bottom-container-timimg__text">
          <p>In Word: <strong>${data.TotalAmmountInfo.inWord}</strong></p>
        </div>
      </div>
      <div class="table__bottom-container-summary">
        <div class="summary__item-total d-flex j-c-sb">
          <p>Item total Tk</p>
          <p>${data.TotalAmmountInfo.subTotal}</p>
        </div>
        <div class="summary__item-total d-flex j-c-sb">
          <p>Net Paybale Tk</p>
          <p>${data.TotalAmmountInfo.netPaybale}</p>
        </div>
        <div class="summary__item-total d-flex j-c-sb">
          <p>Advance Tk</p>
          <p>${data.TotalAmmountInfo.advancePay}</p>
        </div>
        <div class="summary__item-total d-flex j-c-sb">
          <p>Due Tk</p>
          <p>${data.TotalAmmountInfo.due}</p>
        </div>
      </div>
    </div>
  </div>`);
};

const printFooterHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`</main>
    <footer>
      <div class="footer__container">
        <div class="preapared__by">
          <p>Prepared By:: <span>${data.name + data.id}</span></p>
        </div>
        <div class="collect-money-info d-flex j-c-c a-i-c">
          <p>
            please Collect your reports within 15 Days from the data of report
            delivary
          </p>
        </div>
      </div>
    </footer>`);
};
