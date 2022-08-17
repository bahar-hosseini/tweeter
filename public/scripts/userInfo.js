const mockDb = require('/server/data-files/initial-tweets.json');

const infoFinder = (mockDb,item)=>{
  for (const db of mockDb) {
    if (db[item]) {
      return db[item];
    }
  }
  return 'user was not found';
};

