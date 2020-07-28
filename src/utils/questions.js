const questions = {
  device: [
    {
      question: 'My device is not new; can i still get a plan',
      answer:
        'Yes, Anyone with an internet enabled device can get a Toga device insurance plan',
    },
    {
      question: 'My device is damaged; can i still get a plan',
      answer:
        'If the device is still working any you can access the internet with it, then you can get a plan and even request for a repair and we would find the cheapest repair service for you.',
    },
    {
      question: 'What would happen to my plan if i misplaced my device',
      answer:
        'We would assist in searching for your device, and migrate the plan to a new device if you get it within the timeframe of the plan.',
    },
    {
      question: 'What would happen if i want to change my plan',
      answer:
        'You can request for a plan upgrade or downgrade without any charge. We would just notify you of the existing payment change and if there would need to be any change in payment',
    },
  ],
  malaria: [
    {
      question: 'What would happen if i want to change my plan',
      answer:
        'We would review your current plan and decide if you need to make any payment to',
    },
    {
      question: "What if there's no pharmacy around me",
      answer: 'We would be able to provide a list of health centers',
    },
    {
      question: 'I have more than 5 people to register, what do i do',
      answer:
        'Contact us and we would make provisions to add the extra individuals',
    },
    {
      question: 'Will i pay any extra fee',
      answer:
        'You would not pay any extra fee for the testing, treatment and after care',
    },
  ],
  'basic-life': [
    {
      question: 'What would happen if my beneficiary is not available',
      answer:
        'We would search for another beneficiary or a next of kin can come forward for the policy',
    },
    {
      question: 'What would happen if i want to change my plan',
      answer:
        'We would review your current plan and decide if you need to make any payment',
    },
    {
      question: 'How would i get the benefit funds',
      answer:
        'We would request for a bank account information that the funds would be paid into',
    },
  ],
};

export function getQuestions(insuranceType) {
  return questions[insuranceType];
}
