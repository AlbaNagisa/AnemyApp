import moment from "moment";
moment.defineLocale("fr", null);
export function fetchApi(query, variables) {
  return fetch("https://api.anemy.fr/v3/", {
    body: JSON.stringify({ query, variables }),
    headers: { "Content-type": "application/json" },
    method: "POST",
  }).then((r) => r.json());
}

export async function animeRequest(title) {
  let query = `
    query($nom: String) {
        Page {
            Animes(nom: $nom) {
             id
             noms { 
                romaji
                anglais
                natif
             }
             images { 
                affiche
                banniere
                autres {
                  id
                  nom
                  affiche
                }
            }
            date_debut { 
                jour
                mois
                annee
            }
            date_fin { 
                jour
                mois
                annee
            }
            description 
            episodes 
            format 
            genres
            duree 
            licence 
            pays
            synonymes
            hashtag
            saison {
                annee
                periode
                saison
            }
            studios {
                id
                nom
            }
            date_modification
            id_MAL
            trailer {
                youtube_id
            }
	   hentai
          liens {
            id
            lien
            nom
          }
          like
          statut
          personnages {
            id
          
            noms{
              natif
              prenom 
              nom
              alternatifs
            } 
            image
            }
	      }
    }
 }`;
  const variables = {
    nom: title,
  };

  let results = await fetchApi(query, variables);

  return results;
}

export async function characterRequest(name) {
  let query = `
    query ($nom:String) {
        Page {
            Personnages (nom: $nom) {
                id
                noms {
                    nom
                    prenom
                    alternatifs
                    natif
                }
                anime {
                    noms {
                        romaji
                    }
                    images {
                        affiche
                    }
                    id
                }
                biographie
                image
                
            }
        }
    }`;
  const variables = {
    nom: name,
  };

  let results = await fetchApi(query, variables);

  return results;
}
export async function oneCharacterRequest(name) {
  let query = `
    query ($nom: Int) {
        
            Personnage (id: $nom) {
                id
 
 id               noms {
                    nom
                    prenom
                    alternatifs
                    natif
                }
                anime {
                    noms {
                        romaji
                    }
                    images {
                        affiche
                    }
                    id
                }
                biographie
                image
                
            
        }
    }`;
  const variables = {
    nom: name,
  };

  let results = await fetchApi(query, variables);

  return results;
}

export async function staffRequest(name) {
  let query = `
    query ($nom:String) {
        Page {
            Staffs (nom: $nom) {
                id
			    noms {
				    alternatifs
				    natif
				    nom
				    prenom
			    }
			    image
			    biographie
			    anime {
				    id
				    images {
					    affiche
				    }
				    noms {
					    romaji
				    }
                }
            }
        }
    }`;
  const variables = {
    nom: name,
  };

  let results = await fetchApi(query, variables);

  return results;
}

export function searchSeason() {
  let month = new Date();
  month = moment(month).format("MMMM");
  let years = moment(new Date()).format("YYYY");
  let season = null;
  switch (month) {
    case "January":
      month = month.replace("January", "Janvier");
      season = "Hiver";
      break;
    case "February":
      month = month.replace("February", "Février");
      season = "Hiver";
      break;
    case "March":
      month = month.replace("March", "Mars");
      season = "Hiver";
      break;
    case "April":
      month = month.replace("April", "Avril");
      season = "Printemps";
      break;
    case "May":
      month = month.replace("May", "Mai");
      season = "Printemps";
      break;
    case "June":
      month = month.replace("June", "Juin");
      season = "Printemps";
      break;
    case "July":
      month = month.replace("July", "Juillet");
      season = "Été";
      break;
    case "August":
      month = month.replace("August", "Août");
      season = "Été";
      break;
    case "September":
      month = month.replace("September", "Septembre");
      season = "Été";
      break;
    case "October":
      month = month.replace("October", "Octobre");
      season = "Automne";
      break;
    case "November":
      month = month.replace("November", "Novembre");
      season = "Automne";
      break;
    case "December":
      month = month.replace("December", "Decembre");
      season = "Automne";
      break;
  }

  const date = month + " " + years;
  return `${season} ${years}`;
}

export async function seasonAnimeRequest(saison) {
  let query = `
    query($season: String) {
        Page(perPage: 50) {
            Animes(saison: $season) {
              id
             noms { 
                romaji
                anglais
                natif
             }
             images { 
                affiche
                banniere
                autres {
                  id
                  nom
                  affiche
                }
            }
            date_debut { 
                jour
                mois
                annee
            }
            date_fin { 
                jour
                mois
                annee
            }
            description 
            episodes 
            format 
            genres
            duree 
            licence 
            pays
            synonymes
            hashtag
            saison {
                annee
                periode
                saison
            }
            studios {
                id
                nom
            }
            date_modification
            id_MAL
            trailer {
                youtube_id
            }
	   hentai
          liens {
            id
            lien
            nom
          }
          like
          statut
          personnages {
            
            biographie
            id
            noms{
              natif
              prenom 
              nom
              alternatifs
            } 
            image
            }
        }
    }
 }`;
  const variables = {
    season: saison,
  };

  let results = await fetchApi(query, variables);

  return results;
}

export async function oneRequestAnime(id) {
  let query = `
      query($nom: Int) {
              Anime(id: $nom) {
               id
               noms {
                  romaji
                  anglais
                  natif
               }
               images {
                  affiche
                  banniere
                  autres {
                    id
                    nom
                    affiche
                  }
              }
              date_debut {
                  jour
                  mois
                  annee
              }
              date_fin {
                  jour
                  mois
                  annee
              }
              description
              episodes
              format
              genres
              duree
              licence
              pays
              synonymes
              hashtag
              saison {
                  annee
                  periode
                  saison
              }
              studios {
                  id
                  nom
              }
              date_modification
              id_MAL
              trailer {
                  youtube_id
              }
	            hentai
              liens {
                  id
                  lien
                  nom
              }
              like
              statut
              personnages {
                
                id
              biographie
              noms{
                natif
                prenom 
                nom
                alternatifs
              } 
              image
            }
        }
   }`;
  const variables = {
    nom: parseInt(id),
  };

  let results = await fetchApi(query, variables);

  return results;
}

export async function tendanceRequest() {
  let query = `
  query($nom: String) {
      Page(perPage: 10) {
          Animes(filtre: $nom) {
           id
           noms { 
              romaji
              anglais
              natif
           }
           images { 
              affiche
              banniere
              autres {
                id
                nom
                affiche
              }
          }
          date_debut { 
              jour
              mois
              annee
          }
          date_fin { 
              jour
              mois
              annee
          }
          description 
          episodes 
          format 
          genres
          duree 
          licence 
          pays
          synonymes
          hashtag
          saison {
              annee
              periode
              saison
          }
          studios {
              id
              nom
          }
          date_modification
          id_MAL
          trailer {
              youtube_id
          }
          hentai
          liens {
            id
            lien
            nom
          }
          like
          statut
          personnages {
            id
            biographie
            noms{
              natif
              prenom 
              nom
              alternatifs
            } 
            image
          }
      }
  }
}`;
  const variables = {
    nom: "TENDANCES",
  };

  let results = await fetchApi(query, variables);

  return results;
}

export function regex(paragraph) {
  const regex = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
  const found = paragraph.match(regex);
  if (found?.length > 0) {
    for (const test of found) {
      if (test === "&#39;") {
        paragraph = paragraph.replace(test, "'");
      } else if (test === ("&quot;" || "&ldquo;" || "&rdquo;")) {
        paragraph = paragraph.replace(test, '"');
      } else if (test === "&ugrave;") {
        paragraph = paragraph.replace(test, "ù");
      } else if (test === "&egrave;") {
        paragraph = paragraph.replace(test, "è");
      } else if (test === "&eacute;") {
        paragraph = paragraph.replace(test, "é");
      } else if (test === "&ecirc;") {
        paragraph = paragraph.replace(test, "ê");
      } else if (test === "&ccedil;") {
        paragraph = paragraph.replace(test, "ç");
      } else if (test === "&agrave;") {
        paragraph = paragraph.replace(test, "à");
      } else if (test === "&lt;") {
        paragraph = paragraph.replace(test, "<");
      } else if (test === "&ocirc;") {
        paragraph = paragraph.replace(test, "ô");
      } else if (test === "&nbsp;") {
        paragraph = paragraph.replace(test, "");
      } else if (test === "&Agrave;") {
        paragraph = paragraph.replace(test, "À");
      } else if (test === "&acirc;") {
        paragraph = paragraph.replace(test, "â");
      } else if (test === "&oelig;") {
        paragraph = paragraph.replace(test, "œ");
      }
    }
  }
  return paragraph;
}
export async function Actualites() {
  let query = `
  query{
    Page {
      Actualites  {
        id
        auteur {
          id
          images{
            logo
            banniere
          }
          pseudo
          url
        }
        categories
        date_creation
        epingle
        images {
          image
          banniere
        }
        prive
        texte
        titre
        url
      }
    }
  }`;
  const variables = {};

  let results = await fetchApi(query, variables);

  return results;
}
