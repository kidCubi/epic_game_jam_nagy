export const dialogueMilestones = [
    {
        milestone: 2000,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "Salutations, pirate de l’espace. Je vois que vous cherchez à piller cette planète... Hmm... J’ai peut-être quelque chose pour vous. Une foreuse BX7.",
        choices: [
            {content: "Buy drilling machine BX7", price: "2000"},
            {content: "No thanks", isClosing: true}
        ],
        answers: [
            {content: "Thank you !! This is an answer"},
            {content: "Thank you !! This is an answer"}
        ]
    },
    {
        milestone: 2,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "Tu veux de le beuh ?",
        choices: [
            {content: "Okay, close this box", isClosing: true}
        ]
    }
];