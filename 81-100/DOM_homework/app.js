const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

/* UI */
const tableHeader = ['#','Name','Email','Balance'];
const container = document.querySelector(".container");
const table = document.createElement("table");


/* Functions */
// get searched user data
function getUserData(obj) {
  const usersData = Object.assign(obj);
  let data = [];
  
  for (let j = 0; j < usersData.length; j++) {
    let {id = j + 1, balance, name, email} = usersData[j];
    let user = {
      "userId": id,
      "userName": name,
      "userEmail": email,
      "userBalance": balance
    }
    data.push(user);
  }
  
  console.log(data);
  return data;
}

// row template
function createRow(arr, el) {
  let fragment = document.createDocumentFragment();

  for ( const data of arr ) {
    const elem = document.createElement(el);
    elem.textContent = data;
    fragment.append(elem);
  }

  return fragment;
}

// Table section tempalte
function createTableSection(arr, child, parent) {
  const tr = document.createElement("tr");
  const parentElement = document.createElement(parent);
  tr.append(createRow(arr, child));
  parentElement.append(tr);

  return parentElement;
}

// create footer table tempalate
function createTableFooter(child, parent, data) {
  const tr = document.createElement("tr");
  const parentElement = document.createElement(parent);

  for ( let j = 0; j < 2; j++) { 
    const childElem = document.createElement(child);
    if(j === 0) {
      childElem.setAttribute("colspan", "3");
      tr.append(childElem)
    }
    else {
      childElem.textContent = data;
      tr.append(childElem);
    }
  }

  parentElement.append(tr);
  return parentElement;
}

// get sum of balance




// create table
function createTable(obj) {
  table.append(createTableSection(tableHeader, "th", "thead"));

  const users = Object.assign(obj);
  for ( const user of users) {
    table.append(createTableSection(Object.values(user), "td", "tbody"));

    console.log(Object.values(user));
  }

  table.append(createTableFooter("td", "tfoot", "Total balance: 7141.53"));
}

createTable(getUserData(users));

container.insertAdjacentElement("beforeend", table);



