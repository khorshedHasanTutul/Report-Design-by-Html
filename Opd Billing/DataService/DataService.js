const opdData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  HospitalInfo: {
    conBarCode: "assets/img/barcode.png",
    hnNo: "H123456789",
    appbarCode: "assets/img/barcode.png",
    //??
    conNo: "C1208586224",
    //Appoinment No
    appNo: "12108643654",
    //Application Serial
    appSl: "21",
    //Bill number
    billNo: "O13213578653",
    //Get printed time
    date: new Date().getDate(),
    time: "12.08 PM",
    //Paid options
    text: "original copy",
    //?Text have possibility Duplicate copy also
  },
  patientInfo: {
    name: "baby of Urmi",
    age: "10D",
    gender: "Male",
    contact: "01704247162",
    address: "Deodoba Aditmari Lalmonirhat",
  },
  doctorInfo: {
    //??
    conType: "Follow Up",
    department: "Pediatrics & Neonatology",
    consultant: "Prof. Dr. Ishrat Jahan Lucky , MBBS, FCPS, MD",
  },
  testInfo: [
    { testName: "OPD Consultation Fee", ammount: "800.00" },
    { testName: "OPD Consultation Fee", ammount: "800.00" },
    { testName: "OPD Consultation Fee", ammount: "800.00" },
  ],
  paymentDetails :{
    TotalAmmountInfo: {
      subTotal: "800.00",
      inWord: "Eight Hundred",
    },
    prepared: {
      id: 987,
      name: "Parvej",
    },
  }
};

export const getModelData = () => {
  return opdData;
};
