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
             .id_cards21-container {
    max-width: 370px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    padding: 5px;
    height: 212px;
  }
  
  
  .id_card_main_back {
    padding: 20px 30px;
  }
  
  .id-repart-itesms-row {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }
  
  .id-repart-itesms-row > span {
    padding: 0px 10px;
  }
  
  .id-repart-itesms-row h4 {
    width: 55%;
    font-size: 13px;
    text-align: end;
    font-weight: 600;
    color: #000;
  }
  .id-repart-itesms-row > h3 {
    width: 40%;
    font-size: 13px;
    font-weight: 400;
    font-weight: 600;
    color: #000;
  }
  .id_header_area21 {
    padding-top: 12px;
  }
  
  .card-body21 > p {
    font-size: 10px;
    line-height: 1.3;
    color: #000;
    display: block;
    padding: 5px 10px;
    font-weight: 400;
  }
  
  .card-body21 {
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  .card-footer {
    text-align: center;
  }
  
  .card-footer > h4 {
    font-size: 15px;
    color: #000;
    line-height: 1.1;
    font-weight: 600;
  }
  .card-footer > p {
    font-size: 11px;
    line-height: 1.3;
    font-weight: 400;
    color: #000;
  }
  
     </style>
  </head>`);
};

const printHospitalInfo = (windowToPrint, data) => {
  windowToPrint.document.write(`<body>
	<div class="id_card_main_back" id="id_card_main">
		<div class="id_cards21-container">
			<div class="id_header_area21">
				<!-- single item -->
				<div class="id-repart-itesms-row">
					<h4>HOTLINE</h4>
					<span>:</span>
					<h3>${data.hotline}</h3>
				</div>
				<!-- single item -->
				<div class="id-repart-itesms-row">
					<h4>Phone No</h4>
					<span>:</span>
					<h3>${data.phoneNo}</h3>
				</div>
				<!-- single item -->
				<div class="id-repart-itesms-row">
					<h4>Customer Care (Information)</h4>
					<span>:</span>
					<h3>${data.customerCare}</h3>
				</div>
				<!-- single item -->
				<div class="id-repart-itesms-row">
					<h4>24 hrs Emergency</h4>
					<span>:</span>
					<h3>${data.emergency}</h3>
				</div>

			</div>

			<div class="card-body21">
				<p>This is your unique identification number for Bangladesh Specialized Hospital Ltd Please bnng this card or refer the provided HN number for future correspondence with us</p>
			</div>

			<div class="card-footer">
				<h4>Platinum Hospital Limited</h4>
				<p>${data.address}</p>
				<p>Email: ${data.email}</p>
				<p>Web:${data.web}</p>
			</div>
		</div>
	</div>
</body>
</html>

`);
};
