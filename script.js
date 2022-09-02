// Genrates random integer

function generateRandomNumber (num) {
    let random = Math.floor(Math.random()*num);
    return random;
}

// Arrays section

const subjects = ['A Science fiction writer','A secret admirer','Something you lost',
'Someone from your past','Every Man',' A Doctor','The distance between two individuals',
'Your grandfather','Fortune-telling'];

const sentences = ['is not a fortune-teller.','is a timeless fortune.','will soon send you a sign of affection.',
'will make you a love declaration.','will do something unexpected.','will betray you.','wants to talk to you.'];


//subjects and sentences generators

const randomSubject = (subjects) =>{
    let index = generateRandomNumber(9);
    for (let i = 0; i < subjects.length; i ++) {
        return subjects[index];
    }
}

const randomSentences = (sentences) =>{
    let index = generateRandomNumber(7);
    for(let j = 0; j < sentences.length; j ++) {
        return sentences[index];
    }
}

//Print fortune tell

console.log(randomSubject(subjects),randomSentences(sentences));