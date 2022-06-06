const salaryCertificateData = {
  AddressDTO: {
    address: "21 Shymoli Mirpur Road , Dhaka 1207 Bangladesh",
    phone: "09666700100",
    hotline: "10633",
  },
  employeeInfo: {
    name: "Mr X",
    id: "5678",
    designation: "Executive",
    startingDate: "24/07/21",
    todayDate: "26/07/20",
  },
  employeeSalaryStructure: {
    basic: "1400",
    houseRent: "150",
    conveyance: "500",
    dearness: "500",
    overtime: "1000",
    other: "500",
    subTotal: "1500",
    insurance: "500",
    providentFund: "100",
    tax: "10",
    netSalary: "10000",
  },
};

export const getModelData = () => {
  return salaryCertificateData;
};
