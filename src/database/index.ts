import {
  enablePromise,
  openDatabase,
  ResultSet,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true);

const stringifyForDB = (x: any) => {
  if (typeof x === 'string') {
    return `'${x}'`;
  }
  return x;
};

const convertArray = (data: [ResultSet], array: any[]) => {
  data.forEach(item => {
    for (let index = 0; index < item.rows.length; index++) {
      array.push(item.rows.item(index));
    }
  });
};

export interface DBEntity {
  table_name: string;
}
export const getDBConnection = async () => {
  return openDatabase({name: 'ProductsDB.db', location: 'default'});
};

export const selectDB = async <T>(
  db: SQLiteDatabase,
  tableName: string,
): Promise<T[]> => {
  try {
    const items: T[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    convertArray(results, items);
    return items;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get items!');
  }
};

export const saveDB = async (
  db: SQLiteDatabase,
  tableName: string,
  props: Object,
): Promise<any> => {
  try {
    const template = Object.keys(props).join(', ');
    const values = Object.values(props).map(stringifyForDB).join(', ');
    const insertQuery = `INSERT INTO ${tableName}(${template}) values(${values});`;
    var res = await db.executeSql(insertQuery);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteDB = async (
  db: SQLiteDatabase,
  tableName: string,
  key: string,
  id: number,
): Promise<any> => {
  try {
    const deleteQuery = `DELETE from ${tableName} where ${key} = ${id}`;
    await db.executeSql(deleteQuery);
  } catch (e) {
    console.log(e);
  }
};
