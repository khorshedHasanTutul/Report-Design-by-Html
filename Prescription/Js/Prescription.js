export const printPrescription = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printDoctorInfo(windowToPrint, data.doctorInfo);
  printBarcode(windowToPrint, data.barCode);
  printPatientInfo(windowToPrint, data.patientInfo);
  printDiagnosisInfo(windowToPrint, data.diagnosis);
  printPrescribedMedicine(windowToPrint, data.prescribedMedicine);
  printFooter(windowToPrint, data.footerInformation);
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
          <title>Prescription</title>
          <!-- <link rel="stylesheet" href="assets/css/style.css" /> -->
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            h3 {
              font-size: 1rem;
            }
            body {
              font-size: 1rem;
              font-family: "Poppins", sans-serif;
              margin: 0 auto;
              line-height: 1.4;
              padding: 10px 0;
            }
            ul > li {
              /* margin-left: 20px; */
              font-size: 0.8rem;
              list-style: disc;
            }
            .my-list > li ul > li {
              margin-left: 28px;
            }
            .my-list ul h4 {
                margin-left: 6px;
            }
            .prescription__right-side {
              margin-left: 20px;
            }
            .information-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
            }
            .bottom-info ul > li {
              display: grid;
              grid-template-columns: 60px 1fr;
            }
            .prescription-img img {
                width: 5%;
                position: relative;
                bottom: 26px;
                right: 14px;
            }
            .pres-items {
                margin-top: 12px;
            }
            .bottom-signature-container {
              display: flex;
              justify-content: space-between;
              align-items: end;
              border-bottom: 2px solid black;
            }
            .bottom-signature-container {
              display: flex;
              justify-content: space-between;
              align-items: end;
              border-bottom: 2px solid black;
              font-weight: 600;
            }
            .prescription-img {
              position: absolute;
            }
            .information-container .doctor-profile ul > li {
              font-weight: 500;
              padding: 2px 0;
              list-style: none;
              margin: 0;
            }
            .information-container .hospital-logo img {
              width: 100%;
              max-width: 220px;
            }
            .barcode {
              display: flex;
              justify-content: space-between;
              align-items: center;
              line-height: 0;
            }
      
            .barcode .barcode-img img {
              width: 180px;
              max-height: 24px;
              object-fit: fill;
            }
            .bottom-info-container {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              border-bottom: 2px solid black;
            }
            .bottom-info-container .bottom-info ul > li {
              padding: 1px 0px;
              font-weight: 600;
              list-style: none;
              margin: 0;
            }
            .footer-info ul > li {
              list-style: none;
              margin: 0;
            }
            /* .prescription__left-side ul {
        list-style: none;
      } */
            .bottom-info-container .bottom-info .bottom-info__text {
              font-weight: 400;
              margin-left: 5px;
            }
            .bottom-left-info-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              gap: 8rem;
            }
            .bottom-info-right-side ul > li p:first-child {
              font-weight: 600;
            }
            .age-info {
              display: grid;
              grid-template-columns: 60px 1fr;
            }
            .bottom-info-right-side ul > li {
              display: grid;
              grid-template-columns: 80px 1fr;
            }
      
            .prescription-body-container {
              margin-top: 45px;
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .footer-container {
              position: fixed;
              bottom: 0;
              width: 100%;
            }
            .border-span {
              border-left: 2px solid black;
              min-height: 570px;
              max-height: 620px;
            }
            .right-pres-container {
              /* position: relative; */
              display: flex;
            }
      
            .signature-container {
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: end;
              /* border-bottom: 2px solid black; */
              margin-top: 30px;
            }
            ul.my-list > li {
              list-style: none;
            }
            .medicine-routine {
              display: flex;
              gap: 0.5rem;
            }
      
            .footer-area {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
            }
            .footer-info ul > li {
              list-style: none;
              font-weight: 600;
            }
            .bottom-info__text {
              font-weight: 400;
            }
            .prescribed-medicine .medicine-name {
              font-weight: 600;
            }
            .footer-area-address {
              display: flex;
              gap: 0.3rem;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              font-weight: 600;
            }
          </style>
        </head>`);
};

const printDoctorInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<body>
    <table>
      <thead>
        <header>
          <div class="information-container">
            <div class="doctor-profile">
              <h3>${data.name}</h3>
              <ul>
                <li>${data.degree.map((item) => item)}</li>
                <li>${data.specialist}</li>
                <li>${data.department}</li>
                <li>${data.xtraInfo.map((item) => item)}</li>
                <li>BMDC Reg.No : ${data.reg}</li>
              </ul>
            </div>
            <div class="hospital-logo">
              <img src="/Js/assets/img/logo.png" alt="img" />
            </div>
          </div>`);
};

const printBarcode = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="barcode">
    <div class="barcode-img">
      <img src=${data.hnBarcode} alt="" />
    </div>
    <div class="barcode-img">
      <img src=${data.ptBarcode} alt="" />
    </div>
  </div>`);
};

const printPatientInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="bottom-info-container">
    <div class="bottom-info">
      <ul>
        <li>
          <p>HnId</p>
          <p class="bottom-info__text">:${data.hnId}</p>
        </li>
        <li>
          <p>Name</p>
          <p class="bottom-info__text">:${data.name}</p>
        </li>
        <li>
          <div class="bottom-left-info-container">
            <div class="age-info">
              <p>Age</p>
              <p class="bottom-info__text">:${data.age}</p>
            </div>
            <div class="age-info">
              <p>Gender</p>
              <p class="bottom-info__text">:${data.gender}</p>
            </div>
          </div>
        </li>
        <li>
          <p>Address</p>
          <p class="bottom-info__text">
            :${data.address}
          </p>
        </li>
      </ul>
    </div>
    <div class="bottom-info-right-side">
      <ul>
        <li>
          <p>Visit Id</p>
          <p class="bottom-info__text">:${data.visitId}</p>
        </li>
        <li>
          <p>Visit Date</p>
          <p class="bottom-info__text">:${data.visitDate}</p>
        </li>
        <li>
          <p>Visit Time</p>
          <p class="bottom-info__text">:${data.visitTime}</p>
        </li>
      </ul>
    </div>
  </div>
</header>
</thead>`);
};

const printDiagnosisInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<tbody>
    <main>
      <div class="prescription-body-container">
        <div class="prescription__left-side">
          <ul class="my-list">
          ${data
            .map(function (item) {
              if (item.type.type === "list") {
                return `<li>
                <ul>
                  <h3>${item.complainHeader}</h3>
                  ${item.type.items
                    .map((item2) => `<li>${item2}</li>`)
                    .join("")}
                  
                </ul>
              </li>`;
              } else if (item.type.type === "list-items") {
                return ` <li>
              <ul>
                <h3>${item.complainHeader}</h3>
                ${item.type.items
                  .map(
                    (item2) =>
                      `<ul>
                  <h4>${item2.itemComplainHeader}</h4>
                  ${printListedItems(item2.complainItems)}
                </ul>`
                  )
                  .join("")}
                
              </ul>
            </li>`;
              }
            })
            .join('')}
          </ul>
        </div>`);
};

const printListedItems = (data) => {
  let html = "";
  for (const [key, value] of Object.entries(data)) {
    html += `<li>
        <h4 style="display:inline";>${key}</h4> :
        <span> ${value} </span>
      </li>`;
  }
  return html;
};

const printPrescribedMedicine = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="right-pres-container">
    <div class="border-span"></div>
    <div class="prescription__right-side">
      <div class="prescription-img">
        <img src="/Js/assets/img/prescription2.png" alt="img" srcset="" />
      </div>
      <div class="pres-items">
        <ul>
        ${data
          .map(
            (item) =>
              `<li>
            <div class="prescribed-medicine">
              <div class="medicine-name">
                <p>
                  ${item.medicineName}
                  <span class="bottom-info__text"
                    >(${item.genericName})</span
                  >
                </p>
              </div>
              <div class="medicine-routine">
                <p>${item.routine.quantity}</p>
                <p>${item.routine.timing}</p>
                <p>${item.routine.duration}</p>
              </div>
            </div>
          </li>`
          )
          .join("")}
          
          
        </ul>
      </div>
    </div>
  </div>
</div>
</main>
</tbody>`);
};

const printFooter = (windowToPrint, data) => {
  windowToPrint.document.write(` <tfoot>
    <footer>
      <div class="footer-container">
        <div class="bottom-signature-container">
          <div class="metting-time">
            <p>
              Next Metting Date & Time :
              <span class="bottom-info__text">${data.nextMetting.date}&nbsp; ${data.nextMetting.time}</span>
            </p>
          </div>
          <div class="signature-container">
            <p class="bottom-info__text">Electronic Signature</p>
            <p style="border-top: 1px dashed black">
             ${data.drInfo.name}
            </p>
          </div>
        </div>
        <div class="footer-info">
          <ul>
            <li>
              Printing Date & Time :
              <span class="bottom-info__text">${data.printingInfo.date}&nbsp; ${data.printingInfo.time}</span>
            </li>
            <li>
              Software By :
              <span class="bottom-info__text">Iqrasys Solution Ltd.</span>
            </li>
          </ul>
        </div>
        <div class="footer-area">
          <h3>Platinum Hospital Ltd.</h3>
          <div class="footer-area-address">
            <p class="bottom-info__text">${data.AddressDTO.address}</p>
            <p>Hotline: <span class="bottom-info__text">${data.AddressDTO.hotline}</span></p>
            <p>
              Email:
              <span class="bottom-info__text">${data.AddressDTO.email}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </tfoot>
</table>`);
};
