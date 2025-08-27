class Employee {
  constructor({
    id,
    name,
    email,
    startDate,
    employmentType,
    fte = 1,
    location,
    salaryAnnual,
    hourlyRate,
    timezone = "UTC",
    active = true,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.startDate = startDate;
    this.employmentType = employmentType;
    this.fte = fte;
    this.location = location;
    this.salaryAnnual = salaryAnnual;
    this.hourlyRate = hourlyRate;
    this.timezone = timezone;
    this.active = active;
  }

  toJSON() {
    return { ...this };
  }
}

export default Employee;
