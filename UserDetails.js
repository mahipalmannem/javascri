async function getUserDetails(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching user ${userId}: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
    
  } catch (error) {
    console.error('Failed to fetch user details:', error.message);
    throw error; // rethrow for caller to handle if needed
  }
}
getUserDetails(1)
  .then(user => console.log('User Details:', user))
  .catch(error => console.error('Error:', error.message));
