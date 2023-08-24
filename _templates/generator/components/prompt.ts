module.exports = [
  {
    type: 'input',
    name: 'component_name',
    message: 'Input page name',
    validate: (input: string) => input !== '',
  },
];
