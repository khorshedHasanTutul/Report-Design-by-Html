const pathologyData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  HospitalInfo: {
    barCode: "/Js/assets/img/barcode.png",
    hnNo: "H123456789",
    //Appoinment No
    // billNo: "12108643654",
    //Application Serial
    billSl: "365",
    //Bill number
    billNo: "O13213578653",
    //Get printed time
    date: new Date().getDate(),
    time: "12.08 PM",
    //Paid options
    // text: "customer copy",
    // //?Text have possibility Duplicate copy also
  },
  patientInfo: {
    name: "baby of Urmi",
    age: "10D",
    gender: "Male",
    contact: "01704247162",
    text: "customer copy",
    //?Text have possibility Duplicate copy also
    // address: "Deodoba Aditmari Lalmonirhat",
  },
  doctorInfo: {
    //??
    referedBy: "Prof. Dr. Ishrat Jahan Lucky , MBBS, FCPS, MD",
  },
  testInfo: [
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
    { code: "haE06", testName: "CBC", storeRoom: "Lv1", ammount: "800.00" },
  ],
  delivaryDetails: {
    delivaryInfo: {
      date: "24/08/21",
      time: "07:00:00 PM",
    },

    TotalAmmountInfo: {
      subTotal: "800.00",
      netPaybale: "400.00",
      advancePay: "200.00",
      due: "100",
      inWord: "Eight Hundred",
    },
    prepared: {
      id: 987,
      name: "Parvej",
    },
  },
};

export const getModelData = () => {
  return pathologyData;
};
