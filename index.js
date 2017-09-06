/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

var i = 0;



const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.34c7bd0b-16fb-4b85-b3a6-fa953e92d735";  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Place-Holder',
            ],
            SKILL_NAME: 'Birthday Wishes',
            GET_FACT_MESSAGE: "Here's a birthday wish: ",
            HELP_MESSAGE: 'You can get a birthday wish by saying, birthday wish.  To exit, just say stop.',
            HELP_REPROMPT: 'Would you like another birthday wish?',
            STOP_MESSAGE: 'Have a great one!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Happy birthday! Here’s to a bright, healthy and exciting future!',
                'Happy birthday to my best friend, the one I care about the most!',
                'Here’s to the sweetest and loveliest person I know. Happy birthday!',
                'You know all about me, I know all about you. We’re best friends, yada yada yada. Since we can read each other’s minds I don’t need a creative message.',
                'Have a wonderful birthday. I wish your every day to be filled with lots of love, laughter, happiness and the warmth of sunshine.',
                'May this birthday be filled with lots of happy hours and also your life with many happy birthdays, that are yet to come. Happy birthday.',
                'Let’s light the candles and celebrate this special day of your life. Happy birthday.',
                'You are my true friend. You were always with me, you supported me, you boosted me up when I was down. Thanks for being such a friend of mine. Happy birthday.',
                'Let your all the dreams to be on fire and light your birthday candles with that. Have a gorgeous birthday.',
                'It’s your birthday. Now you’ve more grown up. Every year you’re becoming more perfect.',
                'You are a person who always deserves the best and obviously nothing less. Wish your birthday celebration will be as fantastic as you are. Happy birthday.',
                'I want your birthday to be celebrated as a national holiday because then I’ll get a day off. Happy birthday.',
                'I always wished to be a great friend like you. But there is no way to be a better friend than you in the world. Happy birthday.',
                'Happy birthday. May all the best things of the world happen in your life because you are definitely one of the best people too.',
                'Another birthday, so you are growing older gradually. But I find no change in you. You look perfect like before. Happy birthday.',
                'It’s a wonderful day and I’ve brought a beautiful and delicious cake for you. Now it’s time to celebrate and make this special day more colorful. Happy birthday.',
                'Wishing happy birthday to the best person I’ve ever met in this world.',
                'Thank you for all the memories we have. Without you the world would have been colorless to me.',
                'You are the only one who helped me a lot, guided me a lot and never given up when even I was not confident. Thanks for being all the way with me. Happy birthday.',
                'Celebrate your birthday today. Celebrate being Happy every day.',
                'So many candles for such a small cake? Happy Birthday.',
                'Wishing you a day that is as special in every way as you are. Happy Birthday.',
                'You have to get older, but you dont have to grow up.',
                'Thinking of you on your birthday, and wishing you all the best! I hope it is as fantastic as you are, you deserve the best and nothing less.',
                'They say you lose your memory as you grow older. I say forget about the past and live life to the fullest today. Start with ice cream. Happy Birthday.',
                'I wish that I could be the greatest friend in the world, but there is no way to be a better friend than you are. Happy Birthday.',
            ],
            SKILL_NAME: 'Birthday Wishes',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
            ],
            SKILL_NAME: 'British Space Facts',
        },
    },
    'de': {
        translation: {
            FACTS: [
                'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data

        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const shouldEndSession = false;




        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact, shouldEndSession);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
