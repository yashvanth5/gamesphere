export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "Search_Game": {
      return { ...state, searchInput: action.payload };
    }

    case "Sort_By_Price": {
      return { ...state, sortPrice: action.payload };
    }

    case "Filter_By_Price": {
      return { ...state, filterPriceRange: action.payload };
    }

    case "Top_Sellers": {
      return { ...state, topSellers: !state.topSellers };
    }

    case "Special_Games": {
      return { ...state, specialGames: !state.specialGames };
    }

    case "Games_On_Sale": {
      return { ...state, gamesOnSale: !state.gamesOnSale };
    }

    // for all this we can even use nullish coescalting and state false intially

    case "Games_Category_Action": {
      return { ...state, gameCategoryAction: !state.gameCategoryAction };
    }
    case "Games_Category_Horror": {
      return { ...state, gameCategoryHorror: !state.gameCategoryHorror };
    }
    case "Games_Category_Shooter": {
      return { ...state, gameCategoryShooter: !state.gameCategoryShooter };
    }
    case "Games_Category_Strategy": {
      return { ...state, gameCategoryStrategy: !state.gameCategoryStrategy };
    }
    case "Games_Category_OpenWorld": {
      return { ...state, gameCategoryOpenWorld: !state.gameCategoryOpenWorld };
    }
    case "Games_Category_Indie": {
      return { ...state, gameCategoryIndie: !state.gameCategoryIndie };
    }
    case "Games_Category_Rpg": {
      return { ...state, gameCategoryRpg: !state.gameCategoryRpg };
    }

    case "Category_Filter":
      return {
        ...state,
        [action.payload]: true,
      };

    case "Games_Rating": {
      return { ...state, rating: action.payload };
    }

    case "Windows_Platform": {
      return { ...state, gamePlatformWindow: !state.gamePlatformWindow };
    }

    case "Mac_Platform": {
      return { ...state, gamePlatformMac: !state.gamePlatformMac };
    }

    case "Games_Reset": {
      return {
        ...state,
        filterPriceRange: 4000,
        sortPrice: "",

        topSellers: false,
        specialGames: false,
        gamesOnSale: false,

        gameCategoryAction: false,
        gameCategoryHorror: false,
        gameCategoryShooter: false,
        gameCategoryStrategy: false,
        gameCategoryOpenWorld: false,
        gameCategoryIndie: false,
        gameCategoryRpg: false,

        rating: null,
        gamePlatformWindow: false,
        gamePlatformMac: false,
      };
    }

    default:
      return state;
  }
};

export const initialState = {
  filterPriceRange: 4000,
  sortPrice: "",

  topSellers: false,
  specialGames: false,
  gamesOnSale: false,

  gameCategoryAction: false,
  gameCategoryHorror: false,
  gameCategoryShooter: false,
  gameCategoryStrategy: false,
  gameCategoryOpenWorld: false,
  gameCategoryIndie: false,
  gameCategoryRpg: false,

  rating: null,
  gamePlatformWindow: false,
  gamePlatformMac: false,

  searchInput: "",
};
