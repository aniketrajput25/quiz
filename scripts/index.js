"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;
var op1 = "Not at all";
var op2 = "Several days";
var op3 = "More than half of the days";
var op4 = "Nearly every day";

function initApp() {
    const questions = [
        {
            title: " Little interest or pleasure in doing things ",
            options: [op1, op2, op3, op4]
        }, {
            title: " Feeling down, depressed, or hopeless",
            options: [op1, op2, op3, op4]
        }, {
            title: " Trouble falling or staying asleep, or sleeping too much",
            options: [
                op1, op2, op3, op4]
        }, {
            title: " Feeling tired or having little energy",
            options: [
                op1, op2, op3, op4
            ]
        }, {
            title: 'Poor appetite or overeating',
            options: [
                op1, op2, op3, op4
            ]
        }, {
            title: ' Feeling bad about yourself - or that you are a failure or have let yourself or your family down ?',
            options: [
                op1, op2, op3, op4
            ]
        }, {
            title: 'Trouble concentrating on things, such as reading the newspaper or watching television',
            options: [
                op1, op2, op3, op4]
        },
        {
            title: ' Moving or speaking so slowly that other people could have noticed',
            options: [
                op1, op2, op3, op4]
        },
        {
            title: 'Thoughts that you would be better off dead, or of hurting yourself',
            options: [
                op1, op2, op3, op4]
        },
        {
            title: "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?",
            options: [
                op1, op2, op3, op4]
        },
        {
            title: " Sometimes it feels like I’m moving in slow motion, yet I still can’t keep up.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I sometimes feel hopeless — like there’s nothing I can do to feel better.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I have difficulty concentrating and focusing on tasks.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I used to enjoy going to work or even doing household chores. But now it all seems pointless.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I have trouble making even simple decisions.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I used to love painting, going for long walks, or meeting up with friends for lunch. Now, I just don’t want to do anything.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I feel sad all the time — it’s a constant feeling that I just can’t shake.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I feel restless, sometimes like I can’t stop moving..",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Sometimes I just feel “bone tired” no matter how much sleep I get.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Some days it’s hard to muster up the energy or desire to do anything.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Sometimes I feel like I’m a horrible person and deserve whatever happens to me.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Some days I feel like I just can’t do anything right.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I just feel empty inside and numb.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I have trouble falling asleep at night, and when I do sleep, I wake up several times throughout the night.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Some days all I want to do is eat and I just can’t stop.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I feel like I have no choice but to give in or do what is expected of me.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " I can’t muster up any emotions no matter what happens to me — whether good or bad.",
            options: [op1, op2, op3, op4]
        },
        {
            title: " Some days I don’t want to eat — nothing sounds good. Eventually, I just go to bed without eating at all.",
            options: [op1, op2, op3, op4]
        },



    ];

    quiz = new Quiz(
        "EaseMind Quiz",
        `Sometime it's important to know about yourself and about your mental and emotion state.(Don't worry we wont save or share your data with anyone else)`,
    1800,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


