const addExerciseBtn = document.getElementById('add-exercise-btn');
const searchBtn = document.getElementById('search-btn');

const exercisePlan = [];

const addExercise = () => {
    const exerciseName = document.getElementById('title').value;
    const numberOfSets = document.getElementById('sets').value
    const numberOfReps = document.getElementById('reps').value;

    if (title.trim() === '' || sets.trim() === '' || reps.trim() === ''
    ) {
        return;
    }


const newExercise = {
    info: {
    exerciseName,
    [numberOfSets]: numberOfReps
},
};

exercisePlan.push(newExercise);
addExercise();

}