import {DBEntity, deleteDB, getDBConnection, saveDB, selectDB} from 'database';
export interface Product {
  id: number;
  favorite_id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
  categoryName: string;
  image: string;
}

export interface FavoriteSchema {
  favorite_id: number;
  product_id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
  categoryName: string;
  image: string;
}

export class FavoritestDB implements DBEntity {
  table_name: string = 'Favorites';
  static get = async () => {
    const db = await getDBConnection();
    /* await db.executeSql('DROP TABLE Favorites'); */
    const query = `CREATE TABLE IF NOT EXISTS Favorites(
      favorite_id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER,
      name VARCHAR(30),
      description VARCHAR(50),
      price REAL,
      quantity INTEGER,
      categoryId INTEGER,
      categoryName VARCHAR(30),
      image TEXT
  );`;
    await db.executeSql(query);
    var res = await selectDB<FavoriteSchema>(db, 'Favorites');
    return res;
  };
  static save = async ({
    id,
    name,
    description,
    price,
    quantity,
    categoryId,
    categoryName,
    image,
  }: Product) => {
    const db = await getDBConnection();
    var res = await saveDB(db, 'Favorites', {
      product_id: id,
      name,
      description,
      price,
      quantity,
      categoryId,
      categoryName,
      image,
    });
    console.log(res);
    if (res) {
      const [{insertId}]: any = res;
      return {
        favorite_id: insertId,
        id,
        name,
        description,
        price,
        quantity,
        categoryId,
        categoryName,
        image,
      };
    }
    return null;
  };
  static delete = async ({favorite_id}: Product) => {
    if (favorite_id) {
      const db = await getDBConnection();
      await deleteDB(db, 'Favorites', 'favorite_id', favorite_id);
    }
  };
}
