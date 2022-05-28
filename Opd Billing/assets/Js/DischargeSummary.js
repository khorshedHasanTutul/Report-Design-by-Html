const OpdBillingPrinter = {};

(function () {
  var service = {};
  function printHTMLHeader(mywindow, model) {
    mywindow.document.write(`<head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Discharge Summary</title>
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>`);
  }

  function printBody(mywindow, model) {
    mywindow.document.write("<body>");
    service.Header.Set(mywindow, model);
  }
  (function () {
    function setBarcode(mywindow, model) {
      mywindow.document
        .write(`<div class="header__headline d-flex j-c-sb a-i-c">
        <div class="barcode">
          <img src="assets/img/barcode.png" alt="" srcset="" />
        </div>
        <div class="header-text">
          <h3>Discharge Summary</h3>
        </div>
        <div class="barcode">
          <img src="assets/img/barcode.png" alt="" srcset="" />
        </div>
      </div>`);
    }
    function getPatientInfo(mywindow, model) {
      return `<div class="patient-details">
        <ul>
          <li>
            <strong>HN</strong>
            <p>:H12345677</p>
          </li>
          <li>
            <strong>Patient Name</strong>
            <p>:Baby of Urmi</p>
          </li>
          <li>
            <strong>Age/Gender</strong>
            <p>:14D/Male</p>
          </li>
          <li>
            <strong>Phone</strong>
            <p>:01704247162</p>
          </li>
          <li>
            <strong>Address</strong>
            <p>:Deodoba, Aditmari , Lalmonirhat</p>
          </li>
          <li>
            <strong>Primary Consultant</strong>
            <p>:Prof. Dr. Shiren Afroz</p>
          </li>
        </ul>
      </div>`;
    }
    function getPt2() {
      return `<div class="patient-details">
<ul>
  <li>
    <strong>HN</strong>
    <p>:H12345677</p>
  </li>
  <li>
    <strong>Patient Name</strong>
    <p>:Baby of Urmi</p>
  </li>
  <li>
    <strong>Age/Gender</strong>
    <p>:14D/Male</p>
  </li>
  <li>
    <strong>Phone</strong>
    <p>:01704247162</p>
  </li>
  <li>
    <strong>Address</strong>
    <p>:Deodoba, Aditmari , Lalmonirhat</p>
  </li>
  <li>
    <strong>Primary Consultant</strong>
    <p>:Prof. Dr. Shiren Afroz</p>
  </li>
</ul>
</div>`;
    }
    this.Set = (mywindow, model) => {
      mywindow.document.write(`<header>
        <div class="header-container">
          <div class="header__logo d-flex j-c-e a-i-c">
            <img src="assets/img/logo.png" alt="logo" srcset="" />
          </div>`);
      setBarcode(mywindow, model);

      mywindow.document.write(
        `<div class="header-patient-container d-flex j-c-sb a-i-c">` +
          getPatientInfo(mywindow, model) +
          getPt2() +
          `</div>
        </div>
      </header>`
      );
    };
  }.call((service.Header = {})));

  this.Print = function (model) {
    console.log(model);
    var mywindow = window.open("", "PRINT", "height=800,width=1200");
    mywindow.document.write("<!DOCTYPE html>");
    printHTMLHeader(mywindow, model);
    printBody(mywindow, model);
    mywindow.document.write(`</body></html>`);

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus();
  };
}.call(OpdBillingPrinter));
export { OpdBillingPrinter };
