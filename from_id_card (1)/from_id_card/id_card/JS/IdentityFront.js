export const printReport = (data) => {
  console.log(data);
  let windowToPrint = window.open("", "PRINT", "height=800,width=1200");
  windowToPrint.document.write("<!DOCTYPE html>");
  printHeader(windowToPrint);
  printHospitalInfo(windowToPrint, data.hospitalInfo);
  printPtInfo(windowToPrint, data.ptInfo);
  windowToPrint.document.write(`</body></html>`);
  windowToPrint.document.close();
  windowToPrint.focus();
};

const printHeader = (windowToPrint) => {
  windowToPrint.document.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Id Card</title>
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
                  background: #000;
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
             .id_card-container {
    max-width: 370px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    padding: 5px;
    height: 212px;
  }
  
  
  .id_card_main {
    padding: 20px 30px;
  }
  
  .id_header_area img {
    width: 150px;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .bg_ig{
    background: #27424F !important;
    display: block;
    padding: 2px;
  }
  .bg_ig h3 {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #fff;
  }
  
  .card-barcode > img {
    width: 194px;
    margin: 0 auto;
    display: block;
  }
  .card-single-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
  }
  
  .card-repat h5 {
    font-weight: 500;
    font-size: 13px;
    line-height: 1.4;
    color: #000;
    display: inline-flex;
  }
  .card-repat {
    flex: 0 0 68%;
    line-height: 1.1;
  }
  
  .card-repat h5 span {
    width: 60px;
  }
  
  .card-body {
    padding-top: 10px;
  }
  .card-barcode {
    padding-top: 10px;
    padding-bottom: 8px;
  }
  
     </style>
  </head>`);
};

const printHospitalInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<body>
	<div class="id_card_main" id="id_card_main">
		<div class="id_card-container">
			<div class="id_header_area">
				<img src="/JS/assets/img/logo.png" alt="logo">
				<div class="bg_ig">
					<h3>Patient Identification Card</h3>
				</div>
			</div>

			<div class="card-body">
				<!-- single item -->
				<div class="card-single-item">
					<div class="card-repat">
						<h5><span>HN</span>: ${data.hnNo}</h5>
					</div>
					<div class="card-repat">
						<h5>Date: ${data.issueDate}</h5>
					</div>
				</div>
`);
};

const printPtInfo = (windowToPrint,data) => {
  windowToPrint.document.write(`<div class="card-single-item">
  <div class="card-repat">
    <h5><span>Name </span>: ${data.ptName}</h5>
  </div>
</div>
<!-- single item -->
<div class="card-single-item">
  <div class="card-repat">
    <h5><span>Gender </span>: ${data.gender}</h5>
  </div>
  <div class="card-repat">
    <h5>DOB :${data.dob}</h5>
  </div>
</div>
<div class="card-barcode">
  <img src=${data.barCode} alt="img">
</div>
</div>
</div>
</div>`);
};
