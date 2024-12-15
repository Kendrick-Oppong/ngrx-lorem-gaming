export const navSteps = [
  { index: 1, step: 'Step 1', title: 'YOUR INFO', path: 'step1' },
  { index: 2, step: 'Step 2', title: 'SELECT PLAN', path: 'step2' },
  { index: 3, step: 'Step 3', title: 'ADD-ONS', path: 'step3' },
  { index: 4, step: 'Step 4', title: 'SUMMARY', path: 'step4' },
];

export const step1Config = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
  },
  {
    label: 'Email Address',
    type: 'text',
    name: 'emailAddress',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
  },
];

export const step2Config = [
  {
    id: 1,
    image: '../../assets/images/icon-arcade.svg',
    plan: 'Arcade',
    monthly: '$9/mo',
    yearly: '$90/yr',
  },
  {
    id: 2,
    image: '../../assets/images/icon-advanced.svg',
    plan: 'Advanced',
    monthly: '$12/mo',
    yearly: '$120/yr',
  },
  {
    id: 3,
    image: '../../assets/images/icon-pro.svg',
    plan: 'Pro',
    monthly: '$15/mo',
    yearly: '$150/yr',
  },
];


export const step3Config = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: '$10/yr',
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '$20/yr',
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '$20/yr',
  },
];
