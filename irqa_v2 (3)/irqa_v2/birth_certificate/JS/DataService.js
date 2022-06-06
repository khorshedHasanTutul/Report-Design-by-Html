const birthCertificateData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  hospitalInfo: {
    bornIdNO: 1,
    slNo: 55,
    issueDate: {
      date: "24/07/22",
    },
  },
  babyInfo: {
    name: "Ehlan",
    gender: "male",
    birthInfo: {
      date: "24/07/22",
      time: "12.08PM",
    },
  },
  guarDianInfo: {
    motherInfo: {
      motherIdNo: "25",
      motherName: "Ayesha Rahman",
      nationality: "Bangladeshi",
      religion: "Islam",
    },
    fatherInfo: {
      fatherName: "Joy Rahman",
      nationality: "Bangladeshi",
      religion: "Bangladeshi",
      presentAddress: "Bagha Rajshaji Pabna",
      permanentAddress: "Dhaaka Pabna",
    },
  },
};

export const getModelData = () => {
  return birthCertificateData;
};
