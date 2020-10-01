const CONTACTS_URL = 'https://randomuser.me/api/?inc=cell,email,picture,name,phone&nat=us,ca,gb&seed=nuvalence&results=20';

export const fetchContacts = (requestOptions = {}) =>
  fetch(CONTACTS_URL, requestOptions)
      .then(response => response.json())
      .then(({ results = [] }) => results)
      .catch(error => error);
