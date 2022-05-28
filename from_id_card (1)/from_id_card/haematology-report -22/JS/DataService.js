const sensitivityData = {
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
      address: "pabna",
      contact: "01704247162",
    },
    doctorInfo: {
      name: "Prof Dr. Ishrat Jahan Lucky MBBS",
      ptBedInfo: {
        ward: "Cabin 719(A)",
        bed: "Cabin 719(A)",
      },
    },
    testInfo: {
      testName: "Echo Cardiography",
      labNo: "A2103698745",
      bedNo: "Cabin",
      type: "Whole Blood",
      sampleCollected: {
        date: "06/04/22",
        time: "05:09PM",
      },
      sampleReceived: {
        date: "06/04/22",
        time: "05:09PM",
      },
      ReceivedTime: {
        date: "06/04/22",
        time: "05:09PM",
      },
      organisom: {
        value: "Growth of E.coil > 1x10^5 CFU/ml",
      },
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
  testItems: [
    {
      name: "Ciprofloxacin",
      sensitivity: "S",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "I",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "I",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "S",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "S",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "I",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "S",
    },
    {
      name: "Ciprofloxacin",
      sensitivity: "S",
    },
  ],
  footerInfo: {
    prepared: {
      id: 987,
      name: "Parvej",
      designation: "Medical Technologist",
      from: "Automation Lab",
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
    printedInfo: {
      printBy: "Namim",
      date: "17/04/2022",
      time: "10:49:56 PM",
    },
  },
};

export const getModelData = () => {
  return sensitivityData;
};
