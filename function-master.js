//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in object. 
O: Function returns an array. 
C: N/A
E: N/A
*/
function objectValues(object) {
    // Return an array of values passed in the object
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an object. 
O: Function should return a string with keys of the object. 
C: N/A
E: N/A
*/
function keysToString(object) {
    // Return the array keys sepeerated with a space
    // Use the Oject.keys() method
    // Use the .join() method
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an object. 
O: Function returns an array the values in the object. 
C: N/A
E: N/A
*/
function valuesToString(object) {
    // Return all of objects values
    return Object.values(object)
    .filter(value => typeof value === 'string') // Use the .filter() method for non string valiues
    .join(' '); // Use the .join() method to join the string with spaces
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a single argument collection. 
O: Function should reeturn array if the input is an array otherwise return an object. 
C: N/A
E: N/A
*/
function arrayOrObject(collection) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        // Return array if true
        return "array";
        // Check if the collection is an objectand not null because typeof null also returns object
    } else if (typeof collection === "object" && collection !== null) {
        // Return object if true
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a string of one word.  
O: Function returns the string with a capitalized first letter. 
C: N/A
E: N/A
*/
function capitalizeWord(string) {
    // Convert the strings first character to uppercase and return it
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a string of multiple words.  
O: Function returns the string with each word that has a capitalized first letter. 
C: N/A
E: N/A
*/
function capitalizeAllWords(string) {
    // Return the string and use the .split() method to split into array of words using the space ' '
    return string.split(' ')
    // Map through each word in the array, capitalize the first letter of each word and slice so the rest of the word is unchanged
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    // Join array back into a string
    .join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an object with a given name property. 
O: Function returns a wlecome messsage as a string with the first letter of the given name is capitalized. 
C: N/A
E: N/A
*/
function welcomeMessage(object) {
    // Capitalize the objects name first letter and create message
    const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    // Return the propperly formatted welcom message using template literals
    return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes an object (with a name and a species properties)
O: Function returns a string with capitalized name and species. 
C: N/A
E: N/A
*/
function profileInfo(object) {
    // Capitalize the first letter of both of th objects properties
    const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    const species = object.species.charAt(0).toUpperCase() + object.species.slice(1);

    // Return the formatted message with template literal
    return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an object which could have an array of noises properties. 
O: Function returns a spaced string if the property exists, otherwise it will return 'there are no noises'. 
C: N/A
E: N/A
*/
function maybeNoises(object) {
    // Check for an array of noises that has at least one element
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(' '); // Join element of array into a spaced string
    } else {
        return "there are no noises"; // returs if noises propertiies do not exist
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a string of words and a single word. 
O: Function returns true if word is in array, false if it is not in the string. 
C: N/A
E: N/A
*/
function hasWord(string, word) {
    // Split string into array of words and check if word is included
    return string.split(' ').includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a name and an object. 
O: Function should return the object and name to the friends array. 
C: N/A
E: N/A
*/
function addFriend (name, object) {
    // Add the friends name to the array of friends with the .push() method
    object.friends.push(name);
    // Return updated object with updated array of names
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a name and and object. 
O: Function should return true if tha name is in the friends array, return false otherwise. 
C: N/A
E: N/A
*/
function isFriend(name, object) {
    // Check if the name is included in the array of friends and return true if yes and false otherwise 
    return Array.isArray(object.friends) && object.friends.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in a name and an array. 
O: Function should return a list of the input names non friends. 
C: N/A
E: N/A
*/
function nonFriends(name, array) {
    // Return the array by filtering the array for non friends
    return array
    .filter(person => person.name !== name && !person.friends.includes(name))
    // Use the .map() method to remove only non friend names
    .map(person => person.name);
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
O: Function takes in an object a key and a value. 
O: Function shouold return the updated object. 
C: N/A
E: N/A
*/
function updateObject(object, key, value) {
    // Update key if it exists, if not create it
    object[key] = value;
    // Return objected updated
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an object and an array. 
O: Function should return updated object with removed properties. 
C: N/A
E: N/A
*/
function removeProperties(object, array) {
    // Loop through each key in the array using forEach
    array.forEach(key => {
        // Delete the key from the object if exists
        delete object[key];
    });
    // Return object updated
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Function takes in an array. 
O: Function shouold return an array with duplicates removed. 
C: N/A
E: N/A
*/
function dedup(array) {
    // Return the deduplicated array by creating a new set from array and ise yhe spread operator to convert back to an array 
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}