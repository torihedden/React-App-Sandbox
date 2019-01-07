const screens = [
  {
    id: 'ABC1',
    title: 'Welcome',
    contents: 'Welcome! You\'ve been requested to join.',
    button: {
      text: 'Let\'s get started',
      action: 'next'
    },
    fields: [],
    valid: true
  },
  {
    id: '2XYZ',
    title: 'Identity Check',
    contents: 'Confirm your identity.',
    button: {
      text: 'Confirm your address',
      action: 'next'
    },
    fields: [
      { 
        name: 'streetAddress',
        type: 'text',
        maxLength: 4,
        isRequired: true
      }
    ],

    valid: false
  },
  {
    id: '3TUVWX',
    title: 'Identity Check',
    contents: 'Answer the following questions:',
    button: {
      text: 'Confirm your identity',
      action: 'next'
    },
    fields: [
      {
        name: 'challengeQuestion1',
        type: 'checkbox',
        isRequired: true
      },
      {
        name: 'challengeQuestion2',
        type: 'checkbox',
        isRequired: true
      }
    ],
    valid: false
  },
  {
    id: 'QWERTY4',
    title: 'Set your password',
    contents: 'Set password here',
    button: {
      text: 'Save your password',
      action: 'next'
    },
    fields: [
      {
        name: 'password',
        type: 'password',
        maxLength: 4,
        isRequired: true
      },
      {
        name: 'passwordConfirm',
        type: 'password',
        maxLength: 4,
        isRequired: true
      },
      {
        name: 'showPassword',
        type: 'checkbox',
        label: 'Show password',
        isRequired: true
      }
    ],
    valid: false
  },
  {
    id: '5RSTL',
    title: 'Get verified',
    contents: 'To verify your account, we\'ll text you a code.',
    button: {
      text: 'Send my code',
      action: 'next'
    },
    fields: [
      {
        name: 'phoneNumber',
        type: 'text',
        maxLength: 10,
        isRequired: true
      }
    ],
    valid: false
  },
  {
    id: '66LMNOP',
    title: 'Get verified',
    contents: 'Enter verification code',
    button: {
      text: 'Verify my code',
      action: 'next'
    },
    fields: [
      {
        name: 'verificationCode',
        type: 'text',
        maxLength: 4,
        isRequired: true
      }
    ],
    valid: false
  },
  {
    id: '007',
    title: 'Account created',
    contents: 'Congratulations, your account has been created.',
    button: {
      text: 'Visit your dashboard',
      action: 'regFinish'
    },
    fields: [],
    valid: true
  }
]

export default screens;