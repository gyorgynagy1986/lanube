export const getHeroContent = (lang, heroData, heroDataEn) => {
  return {
    h1Data: !lang ? heroData.h1 : heroDataEn.h1,
    pData: !lang ? heroData.p : heroDataEn.p,
    btnNameName: !lang ? heroData.btn : heroDataEn.btn,
    btnNameSec: !lang ? heroData.btn2 : heroDataEn.btn2,
    btnNameSecUrl: !lang ? heroData.url : heroDataEn.url,
  };
};

export const getStoryContent = (lang, storyData, storyDataEn) => {
  return {
    pText: !lang ? storyData.p : storyDataEn.p,
    pText2: !lang ? storyData.p1 : storyDataEn.p1,
    h2Text: !lang ? storyData.h4 : storyDataEn.h4,
    btnUrl: !lang ? storyData.url : storyDataEn.url,
    btnName: !lang ? storyData.btn : storyDataEn.btn,
  };
};

export const getServiceContent = (lang, servicesData, servicesDataEn) => {
  return {
    titleLogic: !lang ? servicesData.h2 : servicesDataEn.h2,
    liLogic: !lang ? servicesData.p1 : servicesDataEn.p1,
    liLogic2: !lang ? servicesData.p2 : servicesDataEn.p2,
    liLogic3: !lang ? servicesData.p3 : servicesDataEn.p3,
    pLgoic: !lang ? servicesData.p : servicesDataEn.p,
  };
};

export const getJoinUsContent = (lang, JoinUsData, JoinUsDataEn) => {
  return {
    btnLogic: !lang ? JoinUsData.btn : JoinUsDataEn.btn,
    btnUrl: !lang ? JoinUsData.url : JoinUsDataEn.url,
    h2Logic: !lang ? JoinUsData.h2 : JoinUsDataEn.h2,
  };
};

export const getOurEventContent = (lang, ourEventData, ourEventDataEn) => {
  return {
    h2Logic: !lang ? ourEventData.h2 : ourEventDataEn.h2,
    pLogic: !lang ? ourEventData.p : ourEventDataEn.p,
    buttonNameLogic: !lang ? ourEventData.btn : ourEventDataEn.btn,
    urlLogic: !lang ? ourEventData.url : ourEventDataEn.url,
  };
};
