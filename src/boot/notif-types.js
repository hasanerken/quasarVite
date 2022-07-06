import { Notify } from 'quasar';

Notify.registerType('warning', {
  icon: 'error',
  progress: true,
  color: 'grey',
  textColor: 'white',
  classes: 'glossy',
});
