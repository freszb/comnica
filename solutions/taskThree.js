async function assignUserColors() {
  try {
    // 1. Felhasználók lekérése
    console.log('Felhasználók lekérése...');
    const users = await fetchUsers();

    // 2. Színek lekérése
    console.log('Színek lekérése...');
    const colors = await fetchColors();

    // 3. Színek hozzárendelése a felhasználókhoz
    console.log('Színek hozzárendelése...');
    const usersWithColors = users.map((user, index) => ({
      ...user,
      color: colors[index % colors.length]
    }));

    console.log('Művelet befejezve!');
    return usersWithColors;

  } catch (error) {
    console.error('Hiba történt:', error.message);
  }
}

// Mock API hívások
async function fetchUsers() {
  const mockUsers = [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Béla' },
    { id: 3, name: 'Cecília' }
  ];

  // Szimulált API késleltetés
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(mockUsers);
      } else {
        reject(new Error('Nem sikerült lekérni a felhasználókat'));
      }
    }, 1000);
  });
}

async function fetchColors() {
  const mockColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

  // Szimulált API késleltetés
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(mockColors);
      } else {
        reject(new Error('Nem sikerült lekérni a színeket'));
      }
    }, 1000);
  });
}

// Használati példa
assignUserColors()
    .then(result => {
      if (result) {
        console.log('Végeredmény:', result);
      }
    });
