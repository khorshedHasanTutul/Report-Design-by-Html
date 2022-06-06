export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.AddressDTO);
  printHospitalInfo(windowToPrint, data.hospitalInfo);
  printPatientInfo(windowToPrint, data.patientInfo.patientModel);
  printGuardianInfo(windowToPrint, data.patientInfo.guarDianModel);
  printCausesOfDeath(windowToPrint, data.causesOfDeath);
  printDeathInfo(windowToPrint, data.causesOfDeath.deathRelatedInfo);
  printDeadBodyTaken(windowToPrint, data.bodyHandoverInformation);
  printCodeSeal(windowToPrint, data.codeSeal);
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
      <title>Death Certificate</title>
      <!-- google fonts -->
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,900&display=swap"
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
        .deathCri-container {
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
          // padding: 20px 30px 30px 30px;
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
          padding: 20px 30px;
        }
  
        .deathCri-header-heading {
          text-align: center;
          // margin-bottom: 40px;
          margin-top: 5px;
        }
  
        .deathCri-header-heading > h2 {
          display: inline-block;
          text-align: center;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 16px;
          background: #ee6f24;
          color: #fff;
          padding: 2px 10px;
        }
  
        .issue-date-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
  
        .issue-date-left span {
          background: #fff;
          display: inline-block;
          font-weight: 600;
          text-transform: capitalize;
          font-size: 12px;
        }
  
        .issue-date-left {
          width: 40%;
          position: relative;
          z-index: 1;
        }
        .issue-date-right {
          width: 28% !important;
        }
  
        .issue-date-left::after {
          position: absolute;
          width: 99%;
          height: 100%;
          background: transparent;
          top: -8px;
          left: 0;
          content: "";
          border-bottom: 1px dotted #000;
          z-index: -1;
        }
  
        table,
        table td {
          padding: 0;
          border: none;
          border-collapse: collapse;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
  
        .table-bordered > tbody > tr > td,
        .table-bordered > tbody > tr > th,
        .table-bordered > tfoot > tr > td,
        .table-bordered > tfoot > tr > th,
        .table-bordered > thead > tr > td,
        .table-bordered > thead > tr > th {
          border: 1px solid #000;
        }
  
        .patient_id_row > th,
        td {
          font-size: 12px;
          text-align: left;
          padding: 4px 8px;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
        }
  
        .patient_id_row .patient_id_wi {
          width: 40%;
        }
        .table > tbody > tr > td,
        .table > tbody > tr > th,
        .table > tfoot > tr > td,
        .table > tfoot > tr > th,
        .table > thead > tr > td,
        .table > thead > tr > th {
          padding: 5px;
          line-height: 1.2;
          vertical-align: middle;
        }
  
        .deathCri_new_row.deathCri_new_Address {
          height: 50px;
        }
  
        .deathCri_half.deathCri_half_add {
          vertical-align: top;
        }
  
        .patient_id_wi_cause {
          width: 67%;
        }
  
        .patient_id_row.patient_id_row_case > th {
          font-weight: 600;
          text-align: center;
        }
  
        .patient_id_row.patient_id_row_case th.patient_id_name {
          text-align: left;
        }
  
        .deathCri_half.deathCri_half_condition {
          width: 205px;
        }
  
        .deathCri_new_row.deathCri_new_row_con22
          .deathCri_half.dottet_show_span
          small {
          display: block;
        }
  
        .deathCri_new_row.deathCri_new_row_con22 .deathCri_half.dottet_show_span {
          position: relative;
          z-index: 1;
        }
  
        .deathCri_new_row.deathCri_new_row_con22
          .deathCri_half.dottet_show_span::after {
          position: absolute;
          width: 92%;
          height: 100%;
          background: transparent;
          top: -30px;
          left: 9px;
          content: "";
          border-bottom: 1px dotted #000;
          z-index: -1;
        }
  
        .deathCri_new_row.deathCri_new_row_con22
          .deathCri_half.dottet_show_span
          > span {
          background: #fff;
          display: inline-block;
        }
  
        .inner-case-22 {
          position: relative;
          z-index: 1;
        }
  
        .inner-case-22::after {
          position: absolute;
          width: 92%;
          height: 100%;
          background: transparent;
          top: -22px;
          left: 16px;
          content: "";
          border-bottom: 1px dotted #000;
          z-index: -1;
        }
  
        .deathCri_half.dottet_show_span.dottet_show_span22 .inner-case-22 > h6 {
          opacity: 0;
        }
  
        .deathCri_half.dottet_show_span.dottet_show_span22 .inner-case-22 > h5 {
          opacity: 0;
        }
        .deathCri_half.dottet_show_span.dotted_after_hide::after {
          display: none;
        }
  
        .deathCri_half.dottet_show_span.dottet_show_span_last22 > span {
          opacity: 1;
        }
  
        .deathCri_half.dottet_show_span.dottet_show_span_last22 > small {
          opacity: 0;
        }
  
        .deathCri-header-heading.deathCri-header-bottom22 {
          margin-bottom: 10px;
        }
  
        .birthCri_half.birthCri_half_dead22 > small {
          display: block;
        }
        .deat-sig-ldet > span {
          font-size: 12px;
          text-align: left;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          background: #fff;
        }
  
        .death-footer-main {
          display: flex;
          justify-content: space-between;
        }
        .deat-sig-ldet {
          width: 40%;
          position: relative;
          z-index: 1;
        }
  
        .deat-sig-ldet::after {
          position: absolute;
          width: 65%;
          height: 100%;
          background: transparent;
          top: -8px;
          left: 85px;
          content: "";
          border-bottom: 1px solid #000;
          z-index: -1;
        }
        .death-footer {
          padding: 0px 20px;
        }
  
        .death-footer > span {
          font-size: 12px;
          text-align: left;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          background: #fff;
          margin-top: 12px;
          display: block;
        }
        #birthCri_main {
          margin: 20px 0px;
        }
  
        .jobCri21_header-content {
          position: relative;
          text-align: center;
        }
  
        .jobCri21_header-content::after {
          position: absolute;
          content: "";
          width: 107%;
          height: 1px;
          background: #000;
          left: -24px;
          bottom: 0;
        }
  
        .jobCri21_logo > img {
          width: 173px;
          height: auto;
          margin-top: -21px;
        }
  
        .jobCri21_content {
          text-align: center;
        }
  
        .jobCri21_content > h1 {
          color: #f7941d;
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }
        .jobCri21_content > h4 {
          color: #17218b;
          font-weight: 600;
          font-size: 20px;
          line-height: 1.1;
          margin-bottom: 6px;
        }
  
        .jobCri21_content > p {
          color: #000;
          font-weight: 400;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          line-height: 1.1;
          padding-bottom: 5px;
          width: 80%;
          margin: 0 auto;
          margin-top: -8px;
        }
      </style>
    </head>`);
};

const printContentHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`
  <body>
  <div class="deathCri_main" id="birthCri_main">
    <div class="deathCri-container">
      <div class="birthCri_main_inner_content">
        <!-- header area -->
        <div class="jobCri21_header-content">
          <div class="jobCri21_logo">
            <img src="/JS/assets/img/logo.png" alt="job-logo" />
          </div>
          <div class="jobCri21_content">
            <p>
              ${data.address}
              Phone:${data.phone}, Hotline:${data.hotline}
            </p>
          </div>
        </div>`);
};

const printHospitalInfo = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="birthCri_header-content">
  <div class="deathCri-header-heading">
    <h2>Medical Certification of death</h2>
  </div>
</div>
<!-- header area -->
<!-- issue date -->
<div class="issue-date-flex">
  <div class="issue-date-left">
    <span>Date Of Issue:${data.issueInfo.date}</span>
  </div>
  <div class="issue-date-left issue-date-right">
    <span>SL No:${data.slNo}</span>
  </div>
</div>
<!-- issue date -->`);
};

const printPatientInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="deathCri_table">
  <table class="deathCri_main_table table-bordered table">
    <thead>
      <tr class="patient_id_row">
        <th colspan="4" class="patient_id_wi">Patient ID:${data.patientId}</th>
        <th colspan="4" class="patient_id_name">Name:${data.name}</th>
      </tr>
    </thead>
    <tbody>
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="2" class="deathCri_half">
          <span>Sex:${data.gender} </span>
        </td>
        <td colspan="2" class="deathCri_half">
          <span>Age:${data.age}</span>
        </td>
        <td colspan="2" class="deathCri_half">
          <span>Nationality:${data.nationality} </span>
        </td>
        <td colspan="2" class="deathCri_half">
          <span>Religion: ${data.religion}</span>
        </td>
      </tr>
      <!-- single item -->
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="4" class="deathCri_half">
          <span>Date/Time of Admission: ${data.dateOfAdmt}&nbsp; ${data.timeOfAdmt} </span>
        </td>
        <td colspan="2" class="deathCri_half">
          <span>Ward/Cabin/Unit: ${data.room}</span>
        </td>
        <td colspan="2" class="deathCri_half">
          <span>Bed: ${data.bed}</span>
        </td>
      </tr>
      <!-- single item -->
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="8" class="deathCri_half">
          <span>Admitted Under: (Dr.) ${data.addmittedBy} </span>
        </td>
      </tr>
      <!-- single item -->
    </tbody>
  </table>
</div>`);
};

const printGuardianInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="deathCri_table">
  <table class="deathCri_main_table table-bordered table">
    <thead></thead>
    <tbody>
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="8" class="birthCri_half">
          <span>Father/ Spouse / Guardian (Please Tick): ${data.guardianName}</span>
        </td>
      </tr>
      <!-- single item -->
      <!-- single item -->
      <tr class="deathCri_new_row deathCri_new_Address">
        <td colspan="8" class="deathCri_half deathCri_half_add">
          <span>Address: ${data.address}</span>
        </td>
      </tr>
      <!-- single item -->
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="3" class="deathCri_half">
          <span>Tel(Res): ${data?.tel}</span>
        </td>
        <td colspan="3" class="deathCri_half">
          <span>(Office): ${data?.officeMobile} </span>
        </td>
        <td colspan="3" class="deathCri_half">
          <span>Mobile: ${data.mobile}</span>
        </td>
      </tr>
      <!-- single item -->
    </tbody>
  </table>
</div>`);
};

const printCausesOfDeath = (windowToPrint, data) => {
  windowToPrint.document.write(`          <div class="deathCri_table">
  <table class="deathCri_main_table table-bordered table">
    <thead>
      <tr class="patient_id_row patient_id_row_case">
        <th colspan="4" class="patient_id_wi_cause">
          Cause Of Death
        </th>
        <th colspan="4" class="patient_id_name">
          Approx,interval between onset and death
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- single item -->
      <tr class="deathCri_new_row deathCri_new_row_con22">
        <td colspan="2" class="deathCri_half deathCri_half_condition">
          <span
            >1: Disease or conditions directly leading to death*
          </span>
        </td>
        <td colspan="2" class="deathCri_half dottet_show_span">
          <!-- <span>(a)</span> -->
          ${data.diseaseCondition
            .map(
              (item) =>
                `<div>
                <span>${item.text}</span>
                <small>Due to or as a consequence of</small>
              </div>`
            )
            .join("")}
          
        </td>
        <td colspan="2" class="deathCri_half dottet_show_span">
          ${data.diseaseCondition.map(
            (item) => `<span>${item.admitDate} - ${item.detathDate}</span>`
          )}
        </td>
      </tr>
      <!-- single item -->

      <!-- single item -->
      <tr class="deathCri_new_row deathCri_new_row_con22">
        <td colspan="2" class="deathCri_half deathCri_half_condition">
          <span
            >Antecedent causes Mote! condthons. it any. giving rise to
            toe atove Cannes slating the underlying concinton last
          </span>
        </td>
        <td
          colspan="2"
          class="deathCri_half dottet_show_span dotted_after_hide"
        >
        ${data.antecedentCauses
          .map(
            (item) =>
              `<div class="inner-case-22">
            <span>${item.text}</span>
            <small>Due to or as a consequence of</small>
          </div>`
          )
          .join("")}
        
        </td>
        <td colspan="2" class="deathCri_half dottet_show_span">
          ${data.antecedentCauses.map(
            (item) => `<span>${item.admitDate} - ${item.detathDate}</span>`
          )}
      </tr>
      <!-- single item -->

      <!-- single item -->
      <tr class="deathCri_new_row deathCri_new_row_con22">
        <td colspan="2" class="deathCri_half deathCri_half_condition">
          <span
            >2: Other signifcant conditions contrbuting to death, but
            not related to diseases of conditions causing it.</span
          >
        </td>
        <td
          colspan="2"
          class="deathCri_half dottet_show_span dottet_show_span_last22"
        >
          <span>${data.otherRelatedCauses.text}</span>
          <small>Due to or as a consequence of</small>
        </td>
        <td colspan="2">
          <span></span>
        </td>
      </tr>
      <!-- single item -->

      <!-- single item -->
      <tr class="patient_id_row patient_id_row_case">
        <td colspan="4" class="patient_id_wi_cause">
          'This does not mean the mode of dying. E.g. heart failure.
          respiratory failure, injury or complications that caused
          death
        </td>
        <td colspan="4" class="patient_id_name">${
          data.havingSayAnyting.text
        }</td>
      </tr>
      <!-- single item -->
    </tbody>
  </table>
</div>`);
};

const printDeathInfo = (windowToPrint, data) => {
  windowToPrint.document.write(` <div class="deathCri_table">
  <table class="deathCri_main_table table-bordered table">
    <thead>
      <tr class="patient_id_row">
        <th colspan="4" class="patient_id_wi_dath">Date of Death: ${data.dateOfDeath}</th>
        <th colspan="4" class="patient_id_name">Time of Death: ${data.timeOfDeath}</th>
      </tr>
    </thead>
    <tbody>
      <!-- single item -->
      <tr class="deathCri_new_row">
        <td colspan="4" class="birthCri_half">
          <span>certifying Doctor / Register:${data.doctorRegister} </span>
        </td>
        <td colspan="4" class="birthCri_half">
          <span>Signature: </span>
        </td>
      </tr>
      <!-- single item -->
    </tbody>
  </table>
</div>`);
};

const printDeadBodyTaken = (windowToPrint, data) => {
  windowToPrint.document.write(`          <!-- header area -->
  <div class="birthCri_header-content">
    <div class="deathCri-header-heading deathCri-header-bottom22">
      <h2>Dead Body Handover Information</h2>
    </div>
  </div>
  <!-- header area -->
  <!-- table area -->
  <div class="deathCri_table">
    <table class="deathCri_main_table table-bordered table">
      <thead>
        <tr class="patient_id_row">
          <th colspan="4" class="patient_id_wi_dath">
            Dead Body Taken by: ${data.deadBodyTakenName}
          </th>
          <th colspan="4" class="patient_id_name">Signature:</th>
        </tr>
      </thead>
      <tbody>
        <!-- single item -->
        <tr class="deathCri_new_row">
          <td colspan="4" class="birthCri_half">
            <span>Date & Time: ${data.date}&nbsp; ${data.time} </span>
          </td>
          <td colspan="4" class="birthCri_half">
            <span>Relation With Patient:${data.relationWithPt} </span>
          </td>
        </tr>
        <!-- single item -->
        <!-- single item -->
        <tr class="deathCri_new_row">
          <td colspan="4" class="birthCri_half">
            <span>Name of Witness: ${data.witnessName}</span>
          </td>
          <td colspan="4" class="birthCri_half birthCri_half_dead22">
            <span>Signature: </span>
            <small>Date: ${data.signatureDate}</small>
          </td>
        </tr>
        <!-- single item -->
      </tbody>
    </table>
  </div>`);
};

const printCodeSeal = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="birthCri_header-content">
  <div class="deathCri-header-heading deathCri-header-bottom22">
    <h2>Code Seal</h2>
  </div>
</div>
<!-- header area -->

<!-- footer area -->
<div class="death-footer">
  <!-- single item -->
  <div class="death-footer-main">
    <div class="deat-sig-ldet">
      <span>Capter No. ${data.chapterNo}</span>
    </div>
    <div class="deat-sig-ldet deat-sig-ldet2">
      <span>4-digit Code. ${data.fourDigitCode.code}</span>
    </div>
  </div>
  <!-- single item -->
  <div class="death-footer-main">
    <div class="deat-sig-ldet">
      <span>Block No: ${data.blockNo}</span>
    </div>
    <div class="deat-sig-ldet deat-sig-ldet2">
      <span>(Name) ${data.fourDigitCode.name}</span>
    </div>
  </div>
  <!-- single item -->
  <div class="death-footer-main">
    <div class="deat-sig-ldet">
      <span>3-digit Code: ${data.threeDigitCode.code}</span>
    </div>
    <div class="deat-sig-ldet deat-sig-ldet2">
      <span>Name of the doctor ${data.nameOfDoctor}</span>
    </div>
  </div>
  <!-- single item -->
  <div class="death-footer-main">
    <div class="deat-sig-ldet">
      <span>(Name) ${data.threeDigitCode.name}</span>
    </div>
  </div>
  <!-- single item -->
  <span>UHL-167</span>
</div>
<!-- footer area -->
</div>
</div>
</div>`);
};
