module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'select directory',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'input component name',
    validate: input => input !== '',
  },
];
