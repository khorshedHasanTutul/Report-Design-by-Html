const prescriptionData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  doctorInfo: {
    name: "Prof. Dr. Ishrat Jahan Lucky",
    degree: ["MBBS", "FCPS", "MD"],
    specialist: "NeoNatal and Child Specialist",
    department: "Professor of Pediatrics",
    xtraInfo: ["consultant", "NICU & PICU"],
    reg: "A24140",
  },
  barCode: {
    hnBarcode: "/Js/assets/img/barcode.png",
    ptBarcode: "/Js/assets/img/barcode.png",
  },
  patientInfo: {
    hnId: "H1208321321321",
    name: "baby of Urmi",
    age: "10D",
    gender: "Male",
    address: "Narayanpur College Para, Pangsha, Rajbari",
    visitId: "C123135464635",
    visitDate: "24 Aug 2021",
    visitTime: "12.35 PM",
  },
  diagnosis: [
    {
      complainHeader: "Chief Complain",
      type: {
        type: "list",
        items: ["Fever for 2 days", "Fever for 2 days"],
      },
    },
    {
      complainHeader: "History",
      type: {
        type: "list-items",
        items: [
          {
            itemComplainHeader: "Paediatric History",
            complainItems: {
              "History of Past Illness": "Needed NICU Care due to covid",
              Weight: "2.6Kg",
              OFC: "35 CM",
            },
          },
          {
            itemComplainHeader: "System Examination",
            complainItems: {
              "History of Past Illness": "Needed NICU Care due to covid",
              Weight: "2.6Kg",
              OFC: "35 CM",
            },
          },
        ],
      },
    },
    {
      complainHeader: "Physical Examination",
      type: {
        type: "list-items",
        items: [
          {
            itemComplainHeader: "Paediatric History",
            complainItems: {
              "History of Past Illness": "Needed NICU Care due to covid",
              Weight: "2.6Kg",
              OFC: "35 CM",
            },
          },
          {
            itemComplainHeader: "Paediatric History",
            complainItems: {
              "History of Past Illness": "Needed NICU Care due to covid",
              Weight: "2.6Kg",
              OFC: "35 CM",
            },
          },
        ],
      },
    },
    {
      complainHeader: "Advice",
      type: {
        type: "list",
        items: ["Hospitalaization in Cabin"],
      },
    },
  ],
  prescribedMedicine: [
    {
      medicineName: "P/D Napa 15 MI",
      genericName: "P/D Paracetamol 80 Mg/MI",
      routine: {
        quantity: "8 drops",
        timing: "4-6 hourly",
        duration: "7 days",
      },
    },
    {
      medicineName: "P/D Vanprox 15 MI",
      genericName: "P/D Paracetamol 80 Mg/MI",
      routine: {
        quantity: "8 drops",
        timing: "4-6 hourly",
        duration: "7 days",
      },
    },
  ],
  footerInformation: {
    printingInfo: {
      date: "24/08/21",
      time: "12.52 PM",
    },
    nextMetting:{
      date:"24/08/21",
      time:"12.50 PM"
    },
    AddressDTO: {
      address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
      phone: "09666700100",
      hotline: "10633",
      email:"hello@gmail.com"
    },
    drInfo:{
      name:"Dr. Ishrat Jahan Lucky"
    }
  },
};

export const getModelData = () => {
  return prescriptionData;
};
