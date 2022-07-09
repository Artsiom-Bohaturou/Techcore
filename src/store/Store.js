import { configureStore } from '@reduxjs/toolkit';
import LocationSettingsReducer from './LocationSettingsReducer';

export default configureStore({
  reducer: {
    locationSettings: LocationSettingsReducer,
  },
});