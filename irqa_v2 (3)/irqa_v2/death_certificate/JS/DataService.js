const deathCertificateData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  hospitalInfo: {
    slNo: 21,
    issueInfo: {
      date: "24/07/22",
    },
  },
  patientInfo: {
    patientModel: {
      patientId: "25",
      name: "Hello Man",
      gender: "male",
      age: "100",
      nationality: "Bangladeshi",
      religion: "islam",
      dateOfAdmt: "26/08/11",
      timeOfAdmt: "12.08PM",
      room: "712A",
      bed: "72",
      addmittedBy: "Dr Name",
    },
    guarDianModel: {
      guardianName: "Hello Mr",
      address: "Rajshahi",
      tel: "+445545",
      mobile: "01xxxxxxxxx",
      officeMobile: "017xxxxxxxx",
    },
  },
  causesOfDeath: {
    diseaseCondition: [
      {
        text: "This patient died by this reason",
        admitDate: "12/04/21",
        detathDate: "16/04/21",
      },
      {
        text: "This patient died by this reason",
        admitDate: "12/04/21",
        detathDate: "16/04/21",
      },
    ],
    antecedentCauses: [
      {
        text: "This patient died by this reason",
        admitDate: "12/04/21",
        detathDate: "16/04/21",
      },
      {
        text: "This patient died by this reason",
        admitDate: "12/04/21",
        detathDate: "16/04/21",
      },
    ],
    otherRelatedCauses: {
      text: "This does not mean the mode of dying",
    },
    havingSayAnyting: {
      text: "This does not mean the mode of dying",
    },
    deathRelatedInfo: {
      dateOfDeath: "27/04/21",
      timeOfDeath: "12.04 PM",
      doctorRegister: "123456789",
    },
  },
  bodyHandoverInformation: {
    deadBodyTakenName: "Hi Hello",
    date: "27/04/21",
    time: "12.05 PM",
    relationWithPt: "daugter",
    witnessName: "Hoo Hoo",
    signatureDate: "24/04/21",
  },
  codeSeal: {
    chapterNo: "123A",
    blockNo: "11 B",
    threeDigitCode: {
      code: "112121",
      name: "Hu ha",
    },
    fourDigitCode: {
      code: "132132",
      name: "ha ha ha",
    },
    nameOfDoctor: "Dr HEllo Mia",
  },
};

export const getModelData = () => {
  return deathCertificateData;
};
