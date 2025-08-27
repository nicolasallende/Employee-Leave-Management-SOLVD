class LeaveType {
    constructor({
      id,
      name,
      accrualRate,     // days or hours per month
      carryOverLimit,  // max unused leave carried to next year
      paid = true,
    }) {
      this.id = id;
      this.name = name;
      this.accrualRate = accrualRate;
      this.carryOverLimit = carryOverLimit;
      this.paid = paid;
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default LeaveType;
  