const heamatologyData = {
  headerInformation: {
    headerTopInfo: {
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
    },
    headerBottomInfo: {
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
    },
  },
  barCode: {
    header: {
      invoiceBarcode: "/JS/assets/img/barCode.png",
      reportBarcode: "/JS/assets/img/barCode.png",
    },
    leftSide: {
      hnBarCode: "assets/img/barCode.png",
      anBarCode: "assets/img/barCode.png",
    },
  },
  testItems: [
    {
      itemName: "Red Blood Cells",
      itemCollection: [
        {
          itemSubName: "Haemoglobin",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "Total RBC",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "ESR",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
      ],
    },
    {
      itemName: "White Blood Cells",
      itemCollection: [
        {
          itemSubName: "Haemoglobin",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "Total RBC",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "ESR",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
      ],
    },
    {
      itemName: "Platelets",
      itemCollection: [
        {
          itemSubName: "Haemoglobin",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "Total RBC",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
        {
          itemSubName: "ESR",
          result: "16.2",
          unit: "g/dl",
          referenceValue: {
            feMale: "F 11.5 - 15.0",
            male: "M 13.0 - 17.0",
          },
        },
      ],
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
      phone: "0125255",
      web: "hello.com",
    },
    printedInfo: {
      printBy: "Namim",
      date: "17/04/2022",
      time: "10:49:56 PM",
    },
  },
};

export const getModelData = () => {
  return heamatologyData;
};
