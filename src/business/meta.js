export const Format = {
  label: "Format",
  enum: [
    {id: 'STACK', label: 'Stack'},
    {id: 'SCORE', label: 'Score'},
  ]
};

export const LevelEnum = [
  {id: 1, label: '1'},
  {id: 2, label: '2'},
  {id: 3, label: '3'},
  {id: 4, label: '4'},
];

export const Level = {
  label: 'Level',
  enum: LevelEnum,
};

export const GenericSettings = {
  level: Level,
  format: Format,
};

export const OperationsEnum = [
  {id: '+', label: 'Add'},
  {id: '-', label: 'Subtract'},
  {id: 'x', label: 'Multiply'},
  {id: '/', label: 'Divide'},
];

export const Settings = {
  '+': GenericSettings,
  '-': GenericSettings,
  'x': GenericSettings,
  '/': GenericSettings,
};