import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
};

// This is and example of how the service above can be called.
// AuthenticationService.register({
//   email: testing@gmail.com',
//   password: '123456'
// });

// Json request example
// {
//     "email": "testing@gmail.com",
//     "password": "123456"
// }
