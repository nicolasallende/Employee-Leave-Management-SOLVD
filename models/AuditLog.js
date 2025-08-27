class AuditLog {
    constructor({ id, action, entity, entityId, userId, timestamp = new Date() }) {
      this.id = id;
      this.action = action;     // CREATE, UPDATE, DELETE
      this.entity = entity;     // e.g. "LeaveRequest"
      this.entityId = entityId; // id of the affected record
      this.userId = userId;     // who performed the action
      this.timestamp = timestamp;
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default AuditLog;
  