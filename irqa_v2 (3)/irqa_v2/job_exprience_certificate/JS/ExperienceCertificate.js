export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.AddressDTO, data.hospitalInfo);
  printContentEmployee(windowToPrint, data.employeeInfo);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint) => {
  windowToPrint.document.write(`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Certificate</title>
    <!-- google fonts -->
     <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,900&display=swap" rel="stylesheet" />
     <style>
       *{
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
              address,
              h6 {
                  margin: 0;
                  padding: 0;
              }
              .jobCri-container {
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
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
  
  .jobCri_main_inner_content {
    padding: 20px 30px;
  }
  .jobCri_header-content {
    position: relative;
    text-align: center;
  }
  .jobCri_header-content::after {
    position: absolute;
    content: "";
    width: 119%;
    height: 1px;
    background: #000;
    left: -60px;
    bottom: 0;
  }
  .jobCri_logo > img {
    width: 230px;
    height: auto;
    margin-top: -14px;
  }
  
  .jobCri_content {
    text-align: center;
  }
  
  .jobCri_content > h1 {
    color: #F7941D;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
  }
  .jobCri_content > h4 {
    color: #17218B;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  
  .jobCri_content > p {
    color: #000;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 1.1;
    padding-bottom: 11px;
    width: 80%;
    margin: 0 auto;
    margin-top: -8px;
  }
  
  .jobCri_content > p span{
    font-weight: 500;
  }
  .jobCri_content > small {
    color: #000;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 1.1;
  }
  
  .jobCri_logo {
    flex: 0 0 25%;
  }
  
  .job_bodycontent {
    padding: 0px 20px;
  }
  
  .date-time-main {
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
  }
  .date-left > h4 {
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }
  
  .job-exprince-main-flex > h2 {
    text-align: center;
    font-weight: 500;
    font-style: italic;
    font-size: 25px;
    text-decoration: underline;
    display: block;
    padding-top: 20px;
    padding-bottom: 50px;
  }
  
  .job-dtls > p {
    font-weight: 400;
    text-align: justify;
    font-size: 15px;
    line-height: 1.8;
    color: #000;
    margin-bottom: 25px;
  }
  .signature-area {
    margin-top: 90px;
    margin-bottom: 40px;
  }
  
  .signature-bdr {
    width: 170px;
    height: 1px;
    background: #000;
  }
  .signature-area > small {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .signature-area > p {
    font-size: 15px;
    color: #000;
    font-weight: 400;
  }
  .job-dtls > p > span {
    font-weight: 600;
  }
  #jobCri_main{
    margin: 20px 0px;
  }
  
     </style>
  </head>`);
};

const printContentHeader = (windowToPrint, dataAddress, dataHospitalInfo) => {
  windowToPrint.document.write(`<body>
	<div class="jobCri_main" id="jobCri_main">
		<div class="jobCri-container">
			<div class="jobCri_main_inner_content">
					<!-- header area -->
					<div class="jobCri_header-content">
						<div class="jobCri_logo">
							<img src="/JS/assets/img/logo.png" alt="job-logo">
						</div>
						<div class="jobCri_content">
							<p>${dataAddress.address}, Phone:${dataAddress.phone}, Hotline:${dataAddress.hotline}</p>
						</div>
					</div>
					<!-- header area -->
					<div class="job_bodycontent">
					<!-- date time area -->
					<div class="date-time-main">
						<div class="date-left">
							<h4>Ref:${dataHospitalInfo.ref}</h4>
						</div>
						<div class="date-left date-right">
							<h4>Date: ${dataHospitalInfo.issueInfo.date}</h4>
						</div>
					</div>`);
};

const printContentEmployee = (windowToPrint, data) => {
  windowToPrint.document.write(`	<div class="job-exprince-main-flex">
  <h2>Job Exprience Certificae</h2>
  <div class="job-dtls">
    <p>This is certifying that that <span>'${data.name} '</span>, 'ID - <span>${data.id}</span>', S/O: ${data.fatherName} & ${data.motherName} is served under this company as <span>'${data.designation}' from</span> ${data.startingDate} to ${data.endingDate}. During the job we found him very hardworking, honest and punctual, reliable and his job as well as up to our expectation. We are sure about his capability that he would fully be able to do justify to his profession with bless of Almighty Allah. We certify that them is no liability during the job on him. 
                  <p>Wish him best of luck for betterment of his future and success in his coming life for endeavors. </p>
                  </p>
  </div>
</div>
<!-- job exprince area -->

<!-- signature area -->
<div class="signature-area">
  <div class="signature-bdr"></div>
  <p>General Manager</p>
  <p>HR, Admin & Compliance</p>
  <small>Masco Group</small>
</div>
<!-- signature area -->
</div>
</div>
</div>
</div>`);
};
