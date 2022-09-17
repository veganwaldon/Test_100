const customObjectsArray = [{

id: 'a28a27b4-1237-11ed-861d-0242ac120002',

arrayValue: 'one',

}, {

id: 'a28a296c-1237-11ed-861d-0242ac120002',

arrayValue: 'four',

}, {

id: 'a28a2a52-1237-11ed-861d-0242ac120002',

arrayValue: 'three',

}, {

id: 'a28a2b2e-1237-11ed-861d-0242ac120002',

arrayValue: 'three',

}, {

id: 'a28a2dae-1237-11ed-861d-0242ac120002',

arrayValue: 'three',

}, {

id: 'a28a3132-1237-11ed-861d-0242ac120002',

arrayValue: 'two',

}, {

id: 'a28a320e-1237-11ed-861d-0242ac120002',

arrayValue: 'two',

}

]; 

const dictionary = {
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4
}
    
customObjectsArray.sort((a, b) => {
	return dictionary[a.arrayValue] - dictionary[b.arrayValue]
});
    
for (let obj of customObjectsArray) {
	console.log(obj.id)
}
