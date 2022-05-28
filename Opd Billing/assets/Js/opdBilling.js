export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeaderHandler(windowToPrint, data.AddressDTO);
  printHospitalInfoHandler(windowToPrint, data.HospitalInfo);
  printPtInfoHandler(windowToPrint, data.patientInfo);
  printDocInfoHandler(windowToPrint, data.doctorInfo);
  printTakenServicesHandler(windowToPrint, data.testInfo);
  printPaymentHistoryHandler(windowToPrint, data.paymentDetails);
  printFooterHandler(windowToPrint);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeaderHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>OPD Bealing</title>
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
      * {
        margin: 0;
        padding: 0;
        line-height: 1.2;
        list-style: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
      }
      h3 {
        font-size: 1rem;
      }
      strong {
        font-weight: 500;
      }
      body {
        font-size: 0.8rem;
        box-sizing: border-box;
        text-transform: capitalize;
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
      .impression-section ul > li {
        padding: 1px;
      }
      .impression-item {
        display: grid;
        grid-template-columns: 100px 1fr;
      }
      .grid-row-department {
        display:grid;
        grid-template-columns: 1fr 2fr;
      }
      .grid-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      
      .header-container__logo img {
        width: 200px;
      }
      .barcode img {
        width: 200px;
        height: 28px;
        object-fit: fill;
      }
      .impression-section {
        /* margin-top: 10px;
        padding: 6px; */
      }
      .impression-item p:first-child,
      .impression-item-address p:first-child {
        font-weight: bold;
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
      tr > th {
        font-weight: 600;
        font-size: 0.8rem;
      }
      .table__bottom-container-summary > div:last-child p:first-child {
        font-weight: bold;
      }
      .HnSection {
        font-weight: bold;
        font-size: 1rem;
      }
      
      td,
      th {
        padding: 5px;
      }
      tr th:first-child,
      th:last-child {
        width: 92%;
      }
      
      .summary__item-total {
        border-bottom: 1px dashed black;
        padding: 3px;
      }
      .table__bottom-container-summary {
        width: 40%;
      }
      .collect-money-info {
        margin-top: 30px;
      }
      .bottom-container-timing__status p {
        padding: 2px;
        border: 1px solid black;
        font-size: 1.5rem;
        font-weight: 600;
        border-radius: 6px;
        display: inline-block;
      }
      .bottom-container-timing__status {
        display: flex;
        align-items: end;
        justify-content: end;
        margin: 8px 0;
      }
      .billing-officer {
        padding: 5px;
        margin-top: 25px;
      }
      .billing-officer h3 {
        font-size: 1rem;
        font-weight: 500;
      }
      .table__bottom-container-summary .summary__item-total {
        margin-right: 48px;
      }
      .impression-item-address {
        display: grid;
        grid-template-columns: 100px 1fr;
      }
      .grid-row-address {
        display: grid;
        grid-template-columns: 1fr;
      }
      
      </style>
    </head>
    <body>
      <header>
        <div class="header-container d-flex j-c-c flex-d-c a-i-c">
          <div class="header-container__logo">
            <img src="assets/img/logo.png" alt="img" srcset="" />
          </div>
          <div class="header-container__address d-flex">
            <p>${data.address}</p>
            &nbsp;
            <p>Phone: ${data.phone}</p>
            &nbsp;
            <p>Hotline: ${data.hotline}</p>
          </div>
        </div>
      </header>`);
};

const printHospitalInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`    <main>
    <div class="content-container">
      <div class="content-container__topsection d-flex j-c-sb a-i-c">
        <div class="barcode">
          <img src=${data.conBarCode} alt="" srcset="" />
        </div>
        <div class="HnSection">
          <strong>HN</strong>
          <strong>:${data.hnNo}</strong>
        </div>
        <div class="barcode">
          <img src=${data.appbarCode} alt="" srcset="" />
        </div>
      </div>
      <div class="impression-section">
        <ul>
          <li>
            <ul class="grid-row">
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>Con. No.</p>
                    <span>:${data.conNo}</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>App. No.</p>
                    <span>:${data.appNo}</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>App. Sl.</p>
                    <span>:${data.appSl}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul class="grid-row">
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>Bill. No.</p>
                    <span>:${data.billNo}</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>Date</p>
                    <span>:${data.date} <span>${data.time}</span></span>
                  </div>
                </div>
              </li>
              <li>
                <div class="impression-container">
                  <div class="impression-item">
                    <p>${data.text}</p>
                    <p></p>
                  </div>
                </div>
              </li>
            </ul>
          </li>`);
};

const printPtInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`
    <li>
    <ul class="grid-row-address">
      <li>
        <div class="impression-container">
          <div class="impression-item-address">
            <p>Name</p>
            <span>:${data.name}</span>
          </div>
        </div>
      </li>
    </ul>
  </li>
  <li>
    <ul class="grid-row">
      <li>
        <div class="impression-container">
          <div class="impression-item">
            <p>Age</p>
            <span>:${data.age}</span>
          </div>
        </div>
      </li>
      <li>
        <div class="impression-container">
          <div class="impression-item">
            <p>Gender</p>
            <span>:${data.gender}</span>
          </div>
        </div>
      </li>
      <li>
        <div class="impression-container">
          <div class="impression-item">
            <p>Contact</p>
            <span>:${data.contact}</span>
          </div>
        </div>
      </li>
    </ul>
  </li>
  <li>
    <ul class="grid-row-address">
      <li>
        <div class="impression-container">
          <div class="impression-item-address">
            <p>Address</p>
            <span>:${data.address}</span>
          </div>
        </div>
      </li>
    </ul>
  </li>
    `);
};

const printDocInfoHandler = (windowToPrint, data) => {
  windowToPrint.document.write(
    `<li>
        <ul class="grid-row-department">
          <li>
            <div class="impression-container">
              <div class="impression-item">
                <p>Con. Type.</p>
                <span>:${data.conType}</span>
              </div>
            </div>
          </li>
          <li>
            <div class="impression-container">
              <div class="impression-item">
                <p>Department</p>
                <span>:${data.department}</span>
              </div>
            </div>
          </li>
          <li>
            <div class="impression-container">
              <div class="impression-item">
                <!-- <p>App. Sl.</p>
                  <span>:21</span> -->
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <ul class="grid-row-address">
          <li>
            <div class="impression-container">
              <div class="impression-item-address">
                <p>Consultant</p>
                <span>:${data.consultant}</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>`
  );
};

const printTakenServicesHandler = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <div class="service-taken">
        <table>
          <tbody>
            <tr>
              <th>Service Name</th>
              <th>Ammount</th>
            </tr>
            ${data.map(
              (item) =>
                `<tr>
                <td>${item.testName}</td>
                <td>${item.ammount}</td>
              </tr>`
            )}
          </tbody>
        </table>`);
};

const printPaymentHistoryHandler = (windowToPrint, data) => {
  windowToPrint.document
    .write(`<div class="table__bottom-container d-flex j-c-sb">
  <div class="table__bottom-container-timing">
    <!-- <div class="bottom-container-timing d-flex j-c-sb">
      <p>Delivary Date:</p>
      <strong>24/08/21</strong>
      <strong>07.00:00 PM</strong>
    </div> -->
    <div class="bottom-container-timing__status">
      <p>Paid</p>
    </div>
    <div class="bottom-container-timimg__text">
      <p>In Word: <strong>${data.TotalAmmountInfo.inWord} Only</strong></p>
      <div class="preapared__by">
        <p>Prepared By:: <span>${
          data.prepared.name + data.prepared.id
        }</span></p>
      </div>
    </div>
  </div>
  <div class="table__bottom-container-summary">
    <div class="summary__item-total d-flex j-c-sb">
      <p>Sub total Tk</p>
      <p>${data.TotalAmmountInfo.subTotal}</p>
    </div>
    <div class="summary__item-total d-flex j-c-sb">
      <p>Net Paybale Tk</p>
      <p>${data.TotalAmmountInfo.subTotal}</p>
    </div>
    <div class="summary__item-total d-flex j-c-sb">
      <p>Advance Tk</p>
      <p>${data.TotalAmmountInfo.subTotal}</p>
    </div>
    <div class="summary__item-total d-flex j-c-sb">
      <p>Due Tk</p>
      <p>0.00</p>
    </div>
  </div>
</div>
</div>
</main>`);
};

const printFooterHandler = (windowToPrint) => {
  windowToPrint.document.write(`
  <footer>
  <div class="footer__container">
    <div class="billing-officer">
      <h3>Billing Officer</h3>
    </div>
  </div>
</footer>`);
};
