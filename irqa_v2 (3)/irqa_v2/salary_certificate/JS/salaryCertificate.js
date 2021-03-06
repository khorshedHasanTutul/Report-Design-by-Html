export const printHandler = (data) => {
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printContentHeader(windowToPrint, data.AddressDTO);
  printContentText(windowToPrint, data.employeeInfo);
  printSalarySection(windowToPrint, data.employeeSalaryStructure);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint) => {
  windowToPrint.document.write(`
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selary Certificate</title>
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
              .selari-container {
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
  
  .selari_main_inner_content {
    padding: 20px 30px;
  }
  .selari_header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .selary-heading-main > h2 {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    color: #000;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .selary-heading-main > span {
    text-align: center;
    display: block;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    color: #0C7BB0;
  }
  
  .selary-heading-main > p {
    color: #0C7BB0;
    font-weight: 400;
    display: block;
    margin-bottom: 25px;
  }
  
  .selary-body-area > h2 {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    padding-bottom: 25px;
  }
  
  .selary-body-area > p {
    display: block;
    text-align: justify;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #000;
  }
  
  .selary-repeat-itam {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selary-content > h6 {
    font-weight: 400;
    font-size: 13px;
    color: #000;
    line-height: 1.7;
  }
  .selary-amount > h6 {
    font-weight: 400;
    font-size: 13px;
    color: #000;
    line-height: 1.7;
  }
  
  .sub-total-item.sub_item_one {
    margin-top: 40px;
  }
  .sub-total-item .selary-repeat-itam {
    width: 80%;
    margin: 0 0 0 auto;
    background: #244062;
    padding: 2px 3px;
  }
  
  .sub-total-item .selary-amount > h6,
  .sub-total-item .selary-content > h6{
    color: #fff;
  }
  
  .salary-signature {
    padding-top: 50px;
    padding-bottom: 55px;
  }
  .salary-signature > span {
    font-weight: 400;
    font-size: 14px;
    color: #000;
  }
  
  .footer-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-items-single {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  .footer-items-single::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 47px;
    background: #000;
    left: -11px;
    top: -12px;
  }
  .footer-address .footer-items-single:first-child::after{
    display: none;
  }
  
  .footer-items-single > span {
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
  
  .footer-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 2px solid #000;
  }
  
  .footer-items-single > a {
    font-size: 14px;
    font-weight: 400;
    color: #000;
    text-decoration: none;
  }
  
  #selari_main{
    margin: 20px 0px;
  }
  
  .jobCri22_header-content {
    position: relative;
    text-align: center;
  }
  
  .jobCri22_header-content::after {
    position: absolute;
    content: "";
    width: 119%;
    height: 1px;
    background: #000;
    left: -60px;
    bottom: 0;
  }
  
  .jobCri22_logo > img {
    width: 230px;
    height: auto;
    margin-top: -14px;
  }
  
  .jobCri22_content {
    text-align: center;
  }
  
  .jobCri22_content > h1 {
    color: #F7941D;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
  }
  .jobCri22_content > h4 {
    color: #17218B;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  
  .jobCri22_content > p {
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
  
     </style>
  </head>`);
};

const printContentHeader = (windowToPrint, data) => {
  windowToPrint.document.write(`<body>
	<div class="selari_main" id="selari_main">
		<div class="selari-container">
			<div class="selari_main_inner_content">
				<!-- header area -->
					<div class="jobCri22_header-content">
						<div class="jobCri22_logo">
							<img src="/JS/assets/img/logo.png" alt="job-logo">
						</div>
						<div class="jobCri22_content">
							<p>${data.address}, Phone:${data.phone}, Hotline:${data.hotline}</p>
						</div>
					</div>
					<!-- header area -->
				<!-- selaey heading	 -->`);
};

const printContentText = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="selary-heading-main">
  <h2>SALARY CERTIFICATE</h2>
  <p>Date:${data.todayDate}</p>
</div>
<!-- selaey heading	 -->
<!-- selary body -->
<div class="selary-body-area">
  <h2>To whom it may concern</h2>
  <p>This is to certify that Mr. /Miss/Ms. ${data.name} employee ID ${data.id} is working with our reputed company as an ${data.designation}. He/she has been working with us since ${data.startingDate} and proved to be a very dedicated resource who has been very loyal to the company.</p>

  <p>We are issuing this letter on the request of our employee and do not hold any liability on behalf of this letter or part of this letter on our company.</p>

  <p>His salary particulars are given below:</p>
</div>
<!-- selary body -->
`);
};

const printSalarySection = (windowToPrint, data) => {
  windowToPrint.document.write(`<div class="selary-sheet-main">
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Basic</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.basic}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>House Rent Allowance</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.houseRent}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Conveyance</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.conveyance}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Dearness Allowance</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.dearness}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Overtime</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.overtime}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Other</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.other}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="sub-total-item sub_item_one">
    <div class="selary-repeat-itam">
      <div class="selary-content">
        <h6>SUBTOTAL</h6>
      </div>
      <div class="selary-amount">
        <h6>&#2547; ${data.subTotal}</h6>
      </div>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Employee State Insurance</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.insurance}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Provident Fund</h6>
    </div>
    <div class="selary-amount">
      <h6>&#2547; ${data.providentFund}</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="selary-repeat-itam">
    <div class="selary-content">
      <h6>Professional Tax</h6>
    </div>
    <div class="selary-amount">
      <h6>${data.tax}%</h6>
    </div>
  </div>
  <!-- single item -->
  <div class="sub-total-item">
    <div class="selary-repeat-itam">
      <div class="selary-content">
        <h6>Net Salary</h6>
      </div>
      <div class="selary-amount">
        <h6>&#2547;${data.netSalary}</h6>
      </div>
    </div>
  </div>
</div>
<!-- selary sheet -->

<!-- salary footer -->
<div class="salary-footer-main">
  <div class="salary-signature">
    <span>Manager     </span>
  </div>
</div>
<!-- salary footer -->
</div>
</div>
</div>`);
};
