const dischargeData = {
  headerInfo: {
    hospitalInfo: {
      admissionId: "A21321321321",
      admissionDate: "24 Aug 2022",
      admissionTime: "11.08 AM",
      bedNumber: "Cabin-719 (A)",
      department: "Pediatrics & Neonatology",
      dischargeType: "Discharge On Riskbond",
      dischargeDate: "28 Aug 2021",
    },
    ptInfo: {
      hnId: "H123132135",
      ptName: "Baby of Urmi",
      age: "12D",
      gender: "M",
      address: "pabna",
      contact: "01704247162",
      consultant: "Professor Dr. Shireen Afroz",
    },
  },
  barCode: {
    invoiceBarcode: "/JS/assets/img/barCode.png",
    reportBarcode: "/JS/assets/img/barCode.png",
  },
  historyOverAll: [
    {
      historyHeader: "Weight Status",
      type: {
        type: "key&value",
        items: {
          "Discharge Wt": "2.7kg",
          "Admission Wt": "2.6 kg",
        },
      },
    },
    {
      historyHeader: "Diagnosis",
      type: {
        type: "withoutDotValue",
        items: ["Term with AGA (2.7 kg) with MISC with Covid19 disease"],
      },
    },
    {
      historyHeader: "history&Examination",
      type: {
        type: "history&Examination",
        text: "Baby of Urmi a 14 days old male baby, complains of",
        items: ["fever for 2 days", "have cough"],
        textOfListGroup: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        ],
      },
    },
    {
      historyHeader: "Hospital Course Management",
      type: {
        type: "only text",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    {
      historyHeader: "Treatment on Discharge",
      type: {
        type: "prescribed medicine",
        medicines: [
          {
            name: "P/D Napa 150 ml",
            genericName: "P/D Napa 150 ml",
            routine: "0.5ml once a day",
            type: "Oral",
            quantity: "14 days",
          },
          {
            name: "P/D Napa 150 ml",
            genericName: "P/D Napa 150 ml",
            routine: "0.5ml once a day",
            type: "Oral",
            quantity: "14 days",
          },
          {
            name: "P/D Napa 150 ml",
            genericName: "P/D Napa 150 ml",
            routine: "0.5ml once a day",
            type: "Oral",
            quantity: "14 days",
          },
        ],
      },
    },
    {
      historyHeader: "Advice",
      type: {
        type: "dotValue",
        items: [
          "Take medication as prescribed",
          "Vaccinate the baby",
          "Exclusive breast feeding",
          "Emergency arises please contact",
        ],
      },
    },
  ],
  footerInfo: {
    signature: [
      {
        text: "Prepared By",
        name: "Dr. nandola Jahan",
        specialist: ["Mbbs"],
      },
      {
        text: "Checked By",
        name: "Dr. Rawsan Ara",
        specialist: ["Mbbs", "Fcps"],
      },
      {
        text: "Consultant By",
        name: "Dr. Rawsan Ara",
        specialist: ["Mbbs", "Fcps"],
      },
    ],
    printingInfo: {
      date: "28-08-21",
      time: "11.22 PM",
    },
    addressDto: {
      address: "21 Shymoli Mirpur Road Dhaka Bangladesh",
      hotline: "10633",
      email: "hello@gmail.com",
      web: "www.bdspecialaization.com",
    },
  },
};

export const getModelData = () => {
  return dischargeData;
};
