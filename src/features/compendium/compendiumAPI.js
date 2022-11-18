import { readRemoteFile } from "react-papaparse";


export function getCompendiumData() {
  return new Promise((resolve) => {
    readRemoteFile(
      "https://docs.google.com/spreadsheets/d/1vdbVXRwONKkx59xyKy0eopc8gjeFQLM3dZZM84HPVE8/export?format=csv",
      {
        header: true,
        complete: (results) => {
          resolve(results);
        },
      }
    )
  });
}

