class Holiday {
    constructor({ id, date, name, location }) {
      this.id = id;
      this.date = date;
      this.name = name;
      this.location = location; // optional: holiday specific to a country/region
    }
  
    toJSON() {
      return { ...this };
    }
  }
  
  export default Holiday;
  