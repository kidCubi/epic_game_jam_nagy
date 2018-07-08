export const dialogueMilestones = [
    {
        milestone: 100,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "Ahoy space pirate. I see that you’re mining our planet…Hmm…I have perhaps something for you. A magic drilling machine, made by Melon Husk.",
        choices: [
            {content: "Buy the machine", price: 100},
            {content: "No thanks", isClosing: true}
        ]
    },
    {
        milestone: 16,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "Do you like surprises ? I have one for you.  Want to know what it is ? - It’s a surprise !",
        choices: [
            {content: "I like surprises, get it for me", isClosing: true},
            {content: "I’m a sad person", isClosing: true}
        ]
    },
    {
        milestone: 20,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "Anyways, congratulations ! You can now share the game on Twitter.",
        choices: [
            {content: "I am handsome", isClosing: true, url1: "http://twitter.com/share?text=Im Sharing on Twitter&url=", url2: "&hashtags=stackoverflow,example,youssefusf"},
            {content: "I am Emo", isClosing: true}
        ]
    },
    {
        milestone: 33,
        hasBeenClosed: false,
        img: "./assets/robot.svg",
        text: "I have a special power: I can double your points. The problem is that it might not work all the time. Do you take the risk ?",
        choices: [
            {content: "I feel lucky. Give 100 points", isClosing: true},
            {content: "Nope.", isClosing: true}
        ]
    }
];