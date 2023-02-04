//1 
function func(val, ...otherVal) {
    return { first: val,
             other: otherVal };
}


let getFunc = func('a','b','c','d');
console.log(getFunc);

// 2
function getInfo({ 
    name = 'Unknown',
    info: { employees: [],
            partners: [parthner1, parthner2]
        }}) {
    console.log(`Name: ${name}      Partners: ${parthner1} ${parthner2}`);
}

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], 
            partners: ['Microsoft', 'Facebook', 'Xing'] 
    }
};
    
getInfo(organisation); // Name: Google   Partners: Microsoft Facebook

// 3
let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
        "aliquip",
        "anim",
        "exercitation",
        "non",
    ],
    "friends": [
        {
          "id": 0,
          "name": "Barber Hicks"
        },
        {
          "id": 1,
          "name": "Santana Cruz"
        },
        {
          "id": 2,
          "name": "Leola Cabrera"
        }
    ],
};

const { balance = 0, name: userName = 'Unknown', email = 'user has no email', tags: [first, , , four] = ['no', , , 'tags'], friends: [{ name: friendName }] = [{}] } = user;
console.log(balance, userName, email, first, four, friendName);

//4
const newTagsAndFriends = [ ...user.tags, ...user.friends ];
console.log(newTagsAndFriends);