import nonProfitOrganizations from "./_nonprofit-organizations.json";
import recyclingAndWasteManagement from "./_recycling-and-waste-management.json";
import farmersAndCraftsMarkets from "./_farmers-and-crafts-markets.json";

export const data = {
    nonProfitOrganizations: {
        ...nonProfitOrganizations,
        titleTranslationKey: "nonprofitOrganizations",
        link: "/nonprofit-organizations",
    },
    recyclingAndWasteManagement: {
        ...recyclingAndWasteManagement,
        titleTranslationKey: "recyclingAndWasteManagement",
        link: "/recycling-and-waste-management",
    },
    farmersAndCraftsMarkets: {
        ...farmersAndCraftsMarkets,
        titleTranslationKey: "farmersAndCraftsMarkets",
        link: "/farmers-and-crafts-markets",
    },
};
