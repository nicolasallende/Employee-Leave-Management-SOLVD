class LeaveBalance {
    constructor({ id, employeeId, leaveTypeId, balance }) {
      this.id = id;
      this.employeeId = employeeId;
      this.leaveTypeId = leaveTypeId;
      this.balance = balance; // remaining days/hours
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default LeaveBalance;
  