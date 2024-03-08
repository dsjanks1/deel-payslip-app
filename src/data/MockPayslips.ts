import { Payslip } from "../models/Payslip";

export const mockPayslips: Payslip[] = [
  {
    id: "1",
    fromDate: "2023-01-01",
    toDate: "2023-01-31",
    file: "/assets/payslip1.pdf",
  },
  {
    id: "2",
    fromDate: "2023-02-01",
    toDate: "2023-02-28",
    file: "/assets/payslip2.pdf",
  },
];
