export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.hospitalInfo);
  printBabyInfo(windowToPrint, data.babyInfo);
  printMotherInfo(windowToPrint, data.guarDianInfo.motherInfo);
  printFatherInfo(windowToPrint, data.guarDianInfo.fatherInfo);
  printSignatureIssue(windowToPrint, data.hospitalInfo.issueDate);
  printFooterAddress(windowToPrint, data.AddressDTO);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint) => {
  windowToPrint.document.write(`
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Birth Certificate</title>
    <!-- google fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
      }
      .birth-container {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        padding: 20px 30px 30px 30px;
      }
      table {
        width: 100%;
        margin-bottom: 10px;
        max-width: 100%;
        background-color: transparent;
        border-collapse: collapse;
        border-spacing: 0;
      }
      .birthCri_main_inner_content {
        border: 5px solid #ee6e24;
        padding: 10px;
      }
      .birthCri_main_items_middle {
        border: 3px solid #cac3b9;
        padding: 20px;
        padding-top: 5px;
      }
      .birthCri_header-content {
        text-align: center;
        padding-bottom: 50px;
      }
      .birthCri-logo > img {
        width: 194px;
        height: auto;
      }

      .birthCri-header-heading > h2 {
        font-size: 30px;
        display: inline-block;
        border: 1px solid #ee6e24;
        padding: 2px 35px;
        border-radius: 50px;
        font-weight: 600;
        font-family: "Caveat", cursive;
        line-height: 1.1;
        color: #000 !important;
      }
      .birthCri_half {
        width: 50%;
        position: relative;
        z-index: 1;
        padding: 8px 0px;
        float: left;
        overflow: hidden;
      }
      .birthCri_full {
        width: 100%;
        position: relative;
        z-index: 1;
        padding: 8px 0px;
      }
      .birthCri_half::after {
        position: absolute;
        width: 99%;
        height: 100%;
        background: transparent;
        top: -16px;
        left: 0;
        content: "";
        border-bottom: 1px dotted #000;
        z-index: -1;
      }
      .birthCri_full::after {
        position: absolute;
        width: 99%;
        height: 100%;
        background: transparent;
        top: -16px;
        left: 0;
        content: "";
        border-bottom: 1px dotted #000;
        z-index: -1;
      }
      .birthCri_full > span {
        background: #fff;
        display: inline-block;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 16px;
      }
      .birthCri_half > span {
        background: #fff;
        display: inline-block;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 15px;
      }

      .birthCri_height {
        height: 40px;
      }

      .birthCri_half.birthCri_signature {
        text-align: center;
        width: 40%;
      }

      .birthCri_half.birthCri_signature::after {
        top: -35px;
      }

      .birthCri_new_row.signature_row {
        display: flex;
        justify-content: space-between;
      }

      .birthCri-table-footer {
        padding-top: 50px;
      }

      .birthCri-table-footer > h3 {
        text-align: center;
        color: #ee6e23;
        font-size: 20px;
        font-weight: 600;
      }
      .birthCri-table-footer > p {
        font-size: 14px;
        text-align: center;
        display: block;
        color: #000;
        font-weight: 400;
        width: 80%;
        margin: 0 auto;
      }

      .birthCri-table-footer > p > a {
        text-decoration: none;
        color: #000;
      }

      #birthCri_main {
        margin: 20px 0px;
      }
    </style>
  </head>`);
};

const printContentHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`<body>
  <div class="birthCri_main" id="birthCri_main">
    <div class="birth-container">
      <div class="birthCri_main_inner_content">
        <div class="birthCri_main_items_middle">
          <!-- header area -->
          <div class="birthCri_header-content">
            <div class="birthCri-logo">
              <img src="/JS/assets/img/logo.png" alt="logo" />
            </div>
            <div class="birthCri-header-heading">
              <h2>Birth Certificate</h2>
            </div>
          </div>
          <!-- header area -->

          <!-- table area -->
          <div class="birthCri_table">
            <table class="birthCri_main_table">
              <thead></thead>
              <tbody>
                <!-- single item -->
                <tr class="birthCri_new_row birthCri_one1">
                  <td class="birthCri_half">
                    <span>Newborn ID No.: ${data.bornIdNO} </span>
                  </td>
                  <td class="birthCri_half">
                    <span>SL No.: ${data.slNo}</span>
                  </td>
                </tr>`);
};
const printBabyInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <!-- single item -->
  <tr class="birthCri_height"></tr>
  <!-- single item -->
  <tr class="birthCri_new_row">
    <td class="birthCri_half">
      <span>Name: ${data.name} </span>
    </td>
    <td class="birthCri_half">
      <span>Sex: ${data.gender}</span>
    </td>
  </tr>
  <!-- single item -->
  <!-- single item -->
  <tr class="birthCri_new_row">
    <td class="birthCri_half">
      <span>Date & Time of Birth: ${data.birthInfo.date} &nbsp; ${data.birthInfo.time} </span>
    </td>`);
};

const printMotherInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <td class="birthCri_half">
  <span>Mothers ID No: ${data.motherIdNo}</span>
</td>
</tr>
<!-- single item -->
<!-- single item -->
<tr class="birthCri_new_row">
<td class="birthCri_full">
  <span>Mother's Name: ${data.motherName}</span>
</td>
</tr>
<!-- single item -->
<!-- single item -->
<tr class="birthCri_new_row">
<td class="birthCri_half">
  <span>Nationality: ${data.nationality} </span>
</td>
<td class="birthCri_half">
  <span>Religion:${data.religion}</span>
</td>
</tr>
<!-- single item -->`);
};

const printFatherInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <!-- single item -->
                  <tr class="birthCri_new_row">
                    <td class="birthCri_full">
                      <span>Father's Name:${data.fatherName}</span>
                    </td>
                  </tr>
                  <!-- single item -->
                  <!-- single item -->
                  <tr class="birthCri_new_row">
                    <td class="birthCri_half">
                      <span>Nationality:${data.nationality} </span>
                    </td>
                    <td class="birthCri_half">
                      <span>Religion: ${data.religion}</span>
                    </td>
                  </tr>
                  <!-- single item -->
                  <!-- single item -->
                  <tr class="birthCri_new_row">
                    <td class="birthCri_full">
                      <span>Present Address:${data.presentAddress}</span>
                    </td>
                  </tr>
                  <tr class="birthCri_new_row">
                    <td class="birthCri_full">
                      <span></span>
                    </td>
                  </tr>
                  <!-- single item -->
                  <!-- single item -->
                  <tr class="birthCri_new_row">
                    <td class="birthCri_full">
                      <span>Permanent Address:${data.permanentAddress}</span>
                    </td>
                  </tr>
                  <tr class="birthCri_new_row">
                    <td class="birthCri_full">
                      <span></span>
                    </td>
                  </tr>`);
};

const printSignatureIssue = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <!-- single item -->
  <tr class="birthCri_height"></tr>
  <!-- single item -->
  <tr class="birthCri_new_row signature_row">
    <td class="birthCri_half birthCri_signature">
      <span>Certificate Issued By </span>
    </td>
    <td class="birthCri_half birthCri_signature">
      <span>Signature of the Authority:</span>
    </td>
  </tr>
  <!-- single item -->

  <!-- single item -->
  <tr class="birthCri_new_row">
    <td class="birthCri_half">
      <span>Date of Issue:${data.date}</span>
    </td>
  </tr>
  <!-- single item -->
</tbody>
</table>
</div>`);
};

const printFooterAddress = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <!-- table area -->
  <div class="birthCri-table-footer">
    <h3>Platinum Hospital Limited</h3>
    <p>
     ${data.address},
      Phone:${data.phone}, Hotline:${data.hotline}
    </p>
  </div>
</div>
</div>
</div>
</div>
  `);
};
