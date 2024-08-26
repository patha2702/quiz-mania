export interface Option {
    id: number,
    option: string
}

export interface QuestionProps {
    id: number
    question: string
    options: Option[]
    selectedOptionId ?: number
    answered: boolean
}

export const aptitudeQuestions: QuestionProps[] = [
    {
      id: 1,
      question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        { id: 1, option: "120 meters" },
        { id: 2, option: "150 meters" },
        { id: 3, option: "180 meters" },
        { id: 4, option: "100 meters" }
      ],
      answered: false
    },
    {
      id: 2,
      question: "If a person can swim downstream at 6 km/hr and upstream at 2 km/hr, what is the speed of the stream?",
      options: [
        { id: 1, option: "1 km/hr" },
        { id: 2, option: "2 km/hr" },
        { id: 3, option: "3 km/hr" },
        { id: 4, option: "4 km/hr" }
      ],
      answered: false
    },
    {
      id: 3,
      question: "The ratio of ages of two friends is 3:5 and the sum of their ages is 40 years. What will be the ratio of their ages after 10 years?",
      options: [
        { id: 1, option: "2:3" },
        { id: 2, option: "3:5" },
        { id: 3, option: "4:5" },
        { id: 4, option: "5:7" }
      ],
      answered: false
    },
    {
      id: 4,
      question: "What is the simple interest on Rs. 5000 at the rate of 5% per annum for 2 years?",
      options: [
        { id: 1, option: "Rs. 500" },
        { id: 2, option: "Rs. 450" },
        { id: 3, option: "Rs. 550" },
        { id: 4, option: "Rs. 600" }
      ],
      answered: false
    },
    {
      id: 5,
      question: "A man buys a cycle for Rs. 2000 and sells it at a loss of 10%. What is the selling price of the cycle?",
      options: [
        { id: 1, option: "Rs. 1800" },
        { id: 2, option: "Rs. 1900" },
        { id: 3, option: "Rs. 1750" },
        { id: 4, option: "Rs. 1850" }
      ],
      answered: false
    },
    {
      id: 6,
      question: "A sum of Rs. 2500 amounts to Rs. 3000 in 2 years at simple interest. What is the rate of interest?",
      options: [
        { id: 1, option: "8%" },
        { id: 2, option: "10%" },
        { id: 3, option: "12%" },
        { id: 4, option: "15%" }
      ],
      answered: false
    },
    {
      id: 7,
      question: "The average of 5 consecutive odd numbers is 25. What is the largest number?",
      options: [
        { id: 1, option: "27" },
        { id: 2, option: "29" },
        { id: 3, option: "31" },
        { id: 4, option: "33" }
      ],
      answered: false
    },
    {
      id: 8,
      question: "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. How long will it take to fill the tank if both pipes are opened together?",
      options: [
        { id: 1, option: "10 minutes" },
        { id: 2, option: "12 minutes" },
        { id: 3, option: "15 minutes" },
        { id: 4, option: "25 minutes" }
      ],
      answered: false
    },
    {
      id: 9,
      question: "If a person travels 15 km in 2 hours, what is their average speed?",
      options: [
        { id: 1, option: "5 km/hr" },
        { id: 2, option: "6 km/hr" },
        { id: 3, option: "7.5 km/hr" },
        { id: 4, option: "8 km/hr" }
      ],
      answered: false
    },
    {
      id: 10,
      question: "The cost price of 20 articles is equal to the selling price of 15 articles. What is the gain percentage?",
      options: [
        { id: 1, option: "25%" },
        { id: 2, option: "30%" },
        { id: 3, option: "33.33%" },
        { id: 4, option: "35%" }
      ],
      answered: false
    },
    {
      id: 11,
      question: "What is the next number in the series: 2, 6, 12, 20, ...?",
      options: [
        { id: 1, option: "30" },
        { id: 2, option: "32" },
        { id: 3, option: "36" },
        { id: 4, option: "40" }
      ],
      answered: false
    },
    {
      id: 12,
      question: "If 12 men can complete a work in 8 days, how many men are required to complete the same work in 6 days?",
      options: [
        { id: 1, option: "14" },
        { id: 2, option: "16" },
        { id: 3, option: "18" },
        { id: 4, option: "20" }
      ],
      answered: false
    },
    {
      id: 13,
      question: "The difference between a number and its two-third is 12. What is the number?",
      options: [
        { id: 1, option: "18" },
        { id: 2, option: "24" },
        { id: 3, option: "30" },
        { id: 4, option: "36" }
      ],
      answered: false
    },
    {
      id: 14,
      question: "A person covers a certain distance at a speed of 60 km/hr and returns at a speed of 40 km/hr. What is the average speed for the entire journey?",
      options: [
        { id: 1, option: "48 km/hr" },
        { id: 2, option: "50 km/hr" },
        { id: 3, option: "54 km/hr" },
        { id: 4, option: "52 km/hr" }
      ],
      answered: false
    },
    {
      id: 15,
      question: "In a mixture of 60 liters, the ratio of milk to water is 2:1. How much water should be added to make the ratio 1:2?",
      options: [
        { id: 1, option: "30 liters" },
        { id: 2, option: "40 liters" },
        { id: 3, option: "50 liters" },
        { id: 4, option: "60 liters" }
      ],
      answered: false
    },
    {
      id: 16,
      question: "If the circumference of a circle is 44 cm, what is its radius?",
      options: [
        { id: 1, option: "5 cm" },
        { id: 2, option: "7 cm" },
        { id: 3, option: "14 cm" },
        { id: 4, option: "22 cm" }
      ],
      answered: false
    },
    {
      id: 17,
      question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?",
      options: [
        { id: 1, option: "10%" },
        { id: 2, option: "12.5%" },
        { id: 3, option: "15%" },
        { id: 4, option: "20%" }
      ],
      answered: false
    },
    {
      id: 18,
      question: "A clock shows 4:20. What is the angle between the hour hand and the minute hand?",
      options: [
        { id: 1, option: "0°" },
        { id: 2, option: "10°" },
        { id: 3, option: "20°" },
        { id: 4, option: "30°" }
      ],
      answered: false
    },
    {
      id: 19,
      question: "In what ratio must water be mixed with milk to gain 20% on selling the mixture at cost price?",
      options: [
        { id: 1, option: "1:5" },
        { id: 2, option: "1:4" },
        { id: 3, option: "1:6" },
        { id: 4, option: "1:2" }
      ],
      answered: false
    },
    {
      id: 20,
      question: "If 15% of 40% of a number is 30, what is the number?",
      options: [
        { id: 1, option: "400" },
        { id: 2, option: "500" },
        { id: 3, option: "600" },
        { id: 4, option: "700" }
      ],
      answered: false
    }
  ];
  