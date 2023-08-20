module.exports = [
  {
    type: 'select',
    name: 'component_type',
    message: 'Select directory',
    choices: ['feature', 'ui'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'Input component name',
    validate: (input: string) => input !== '',
  },
];
