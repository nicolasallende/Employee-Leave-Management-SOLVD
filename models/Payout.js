class Payout {
    constructor({ id, employeeId, leaveTypeId, amount, date }) {
      this.id = id;
      this.employeeId = employeeId;
      this.leaveTypeId = leaveTypeId;
      this.amount = amount; // monetary value of unused leave
      this.date = date;
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default Payout;
  