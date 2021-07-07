//initialize firebase
import './firebase/firebase';
import './jwt-auth/jwt-api';

import Amplify from 'aws-amplify';
import {awsConfig} from './aws-cognito/aws-exports';
//initialize aws
Amplify.configure(awsConfig);
