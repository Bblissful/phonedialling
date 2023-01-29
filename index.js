class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    AddPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    RemovePhoneNumber(phoneNumber) {
      this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
    }
  
    DialPhoneNumber(phoneNumber) {
      if (!this.phoneNumbers.includes(phoneNumber)) {
        return;
      }
  
      this.notifyObservers(phoneNumber);
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.onDial(phoneNumber));
    }
  }
  
  class Observer {
    constructor() { }
    onDial(phoneNumber) {
      console.log("Now Dialling " + phoneNumber);
    }
  }
  class Observer2 {
    constructor() { }
    onDial(phoneNumber) {
      console.log("Dialling " + phoneNumber);
    }
  }
  
  const telephone = new Telephone();
  const observer = new Observer();
  const observer2 = new Observer2();
  telephone.addObserver(observer);
  telephone.addObserver(observer2);
  telephone.AddPhoneNumber("+2349130860444");
  telephone.DialPhoneNumber("+2349130860444");