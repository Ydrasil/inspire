const data = {
  totalCount: 833,
  counts: {
    organizations: {
      "Métropole de Lyon / Direction Innovation Numérique et Systèmes d'Information (DINSI) (Géomatique et données métropolitaines)": 392,
      "Métropole de Lyon / Direction Innovation Numérique et Systèmes d'Information (DINSI)": 282,
      "Métropole de Lyon / Direction Planification et politique d'agglomération (DPPA)": 45,
      "Métropole de Lyon / Direction de la voirie (DV)": 24,
      "SYTRAL": 14,
      "VILLE DE LYON / DSIT / Service Opérations": 13,
      "Air Rhône-Alpes": 13,
      "Métropole de Lyon / Direction de l'eau (DE)": 11,
      "Métropole de Lyon / Direction de la propreté (DP)": 10,
      "Ville de Chassieu": 8,
      "Rhônexpress": 3,
      "SYTRAL (Administrateur OpenData TCL)": 3,
      "Métropole de Lyon / Direction Innovation Numérique et Systèmesd'Information (DINSI) (Géomatique et données métropolitaines)": 2,
      "Aéroports de Lyon (Aéroports de Lyon)": 2,
      "Métropole de Lyon / Direction des assemblées et vie de l'institution (Gestion et animation des assemblées)": 2,
      "Q-Park France": 2,
      "Métropole de Lyon / Direction Innovation Numérique et Systèmes d'Information (DINSI) (Géomatique etdonnées métropolitaines)": 2,
      "Rhônexpress (Administrateur opendata)": 2,
      "Métropole de Lyon / Direction Territoire et Cohésion Métropolitaine (TCM)": 2,
      "EFFIA": 2
      },
    keywords: {
      "données ouvertes": 806,
      "Ortho-imagerie": 359,
      "imageryBaseMapsEarthCover": 217,
      "Occupation des terres": 169,
      "Services d'utilité publique et services publics": 91,
      "Localisation": 74,
      "Imagerie": 68,
      "planningCadastre": 65,
      "Réseaux de transport": 56,
      "Zones de gestion, de restriction ou de réglementation et unités de déclaration": 38,
      "location": 38,
      "Bâtiments": 33,
      "transportation": 29,
      "Adresses": 17,
      "Santé et sécurité des personnes": 17,
      "Usage des sols": 15,
      "Conditions atmosphériques": 15,
      "health": 15,
      "boundaries": 15,
      "Parcelles cadastrales": 14
      },
    distributionFormats: {
      "file-package": 548,
      "wfs-featureType": 194
      }
    },
  partitions: {
    recordType: {
      dataset: 427,
      nonGeographicDataset: 405,
      service: 1
      },
    dataType: {
      none: 408,
      vector: 213,
      grid: 212
      },
    openness: {
      yes: 808,
      "not-determined": 25
      },
    download: {
      yes: 728,
      "not-determined": 105
      },
    metadataType: {
      "ISO 19139": 428,
      "Dublin Core": 405
      }
  }
}

function fetchMetrics(catalogId) {
  if (!catalogId) {
    throw new Error('catalogId is required')
  } else {
    return new Promise( (resolve, reject) => {
      if (catalogId === '1') {
        resolve(data)
      } else {
        reject(new Error('Metrics not found'));
      };
    })
  }
}


module.exports = fetchMetrics;
