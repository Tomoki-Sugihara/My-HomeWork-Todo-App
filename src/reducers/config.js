// import axios from 'axios';
import { initialConfig } from '../constant/constant';
import { SET_ACTIVE_INDEX, TOGGLE_SEPARATE } from '../actions/index';

const config = (config = initialConfig, action) => {
   switch (action.type) {
      case SET_ACTIVE_INDEX: {
         return { ...config, activeIndex: action.index };
      }
      case TOGGLE_SEPARATE: {
         return { ...config, separate: !config.separate };
      }
      default: {
         return config;
      }
   }
};

export default config;
