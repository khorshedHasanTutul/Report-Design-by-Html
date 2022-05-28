const cardioLogyData = {
  headerInformation: {
    hospitalInfo: {
      invoiceNo: "V123456789",
      invoiceDate: "26/08/21",
      delivaryDate: "27/08/21",
      reportNo: "123456789",
    },
    ptInfo: {
      ptName: "Baby of Urmi",
      age: "12D",
      gender: "M",
    },
    doctorInfo: {
      name: "Prof Dr. Ishrat Jahan Lucky MBBS",
    },
    testInfo: {
      testName: "Echo Cardiography",
      admissionNo: "A2103698745",
      bedNo: "Cabin",
    },
  },
  barCode: {
    header: {
      invoiceBarcode: "assets/img/barCode.png",
      reportBarcode: "assets/img/barCode.png",
    },
    leftSide: {
      hnBarCode: "assets/img/barCode.png",
      anBarCode: "assets/img/barCode.png",
    },
  },
  Measurement: {
    title: "Measurement 2D",
    data: {
      AO: "mm",
      LVIDD: "19mm",
      "TV-aanuals": "mm",
      Pwd: "03mm",
      RVSP: "mm Hg",
      AOp: "mm",
      LVIDDp: "19mm",
      "TV-aanualsp": "mm",
      Pwdp: "03mm",
      RVSPy: "mm Hg",
      AOy: "mm",
      LVIDDy: "19mm",
      "TV-aanualsy": "mm",
      Pwdy: "03mm",
      RVSPe: "mm Hg",
      LVIDDe: "19mm",
    },
  },
  testItems: [
    {
      title: "Impression",
      data: {
        "Abdominal Situs": "Solitus",
        "Cardiac Position": "Levocardia",
      },
    },
    {
      title: "Atria",
      data: {
        "Left Atrium": "Mildly dilated",
      },
    },
  ],
  finalDiagnosis: [
    "Small Low Mid muscular",
    "Mildly Dilated",
    "Good ventricular",
  ],
  footerInfo: {
    prepared: {
      id: 987,
      name: "Parvej",
    },
    observedDoc: {
      name: "Dr. Rezoana Rima",
      specialist: ["MBBS", "FCPS", "MD"],
      department: "Pediatrics Cardiology",
      from: "Dhaka Hospital",
    },
    addressDto: {
      text: "Platinum Hospital Ltd",
      address: "21 Shamoly Mirpur Road Dhaka 1207 Bangladesh",
      email: "hello@gmail.com",
      hotline: "12365",
      web: "www.hello.com",
    },
  },
};

export const getModelData = () => {
  return cardioLogyData;
};
