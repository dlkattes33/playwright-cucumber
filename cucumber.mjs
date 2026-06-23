import 'ts-node/register';

export default {
  default: {
    require: [
      './steps/**/*.ts',
      './support/**/*.ts'
    ],
    format: ['progress'],
    publishQuiet: true
  }
};
