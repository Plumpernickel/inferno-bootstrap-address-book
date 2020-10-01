import { action, makeObservable, observable } from 'mobx';

class ContactsStore {
  contacts;

  constructor() {
      makeObservable(this, {
          contacts: observable,
          setContacts: action,
      });

      this.contacts = [];
  };

  setContacts(value) {
    this.contacts = value;
  };
}

const store = new ContactsStore();

export default store;
