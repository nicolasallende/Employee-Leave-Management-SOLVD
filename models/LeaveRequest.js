class LeaveRequest {
    constructor({
      id,
      employeeId,
      leaveTypeId,
      startDate,
      endDate,
      status = "PENDING", // PENDING | APPROVED | REJECTED
      reason,
    }) {
      this.id = id;
      this.employeeId = employeeId;
      this.leaveTypeId = leaveTypeId;
      this.startDate = startDate;
      this.endDate = endDate;
      this.status = status;
      this.reason = reason;
    }
  
    approve() {
      this.status = "APPROVED";
    }
  
    reject() {
      this.status = "REJECTED";
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default LeaveRequest;
  