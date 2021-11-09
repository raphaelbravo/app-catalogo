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
  product_id: number;
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
  static save = async (product: Product) => {
    const db = await getDBConnection();
    var productToDB: any = {
      ...product,
      product_id: product.id,
    };
    delete productToDB.id;

    var res = await saveDB(db, 'Favorites', productToDB);
    if (res) {
      const [{insertId}]: any = res;
      return {
        ...product,
        favorite_id: insertId,
      };
    }
  };
  static delete = async ({favorite_id}: Product) => {
    if (favorite_id) {
      const db = await getDBConnection();
      await deleteDB(db, 'Favorites', 'favorite_id', favorite_id);
    }
  };
}
