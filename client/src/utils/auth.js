import decode from 'jwt-decode';

class AuthService {
  // Existing methods...

  registerUser(userData) {
    // Assuming you have an endpoint for user registration
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const { token } = data;
        this.login(token); // Call login method to store token in localStorage
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        throw new Error('Error registering user');
      });
  }
}

export default new AuthService();
