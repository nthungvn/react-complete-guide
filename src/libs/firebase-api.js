const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY;

export const signUp = async (userData) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseKey}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      ...userData,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Cannot create a new user!')
  }

  return data;
};
