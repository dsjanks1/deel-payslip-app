import { Payslip } from "../models/Payslip";
// baseUrl will only work when running on your local
const baseUrl = "http://localhost:3000/"
export const mockPayslips: Payslip[] = [
  {
    id: "1",
    fromDate: "2023-11-01",
    toDate: "2023-11-31",
    file: baseUrl + "assets/payslip1.pdf",
  },
  {
    id: "2",
    fromDate: "2023-12-01",
    toDate: "2023-12-30",
    file: baseUrl + "/assets/payslip1.pdf",
  },
  {
    id: "3",
    fromDate: "2024-01-01",
    toDate: "2024-01-30",
    file: baseUrl + "/assets/payslip1.pdf",
  },
  {
    id: "4",
    fromDate: "2024-02-01",
    toDate: "2023-02-29",
    file: baseUrl + "/assets/payslip1.pdf",
  },
];
