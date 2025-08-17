import { GET_USER_API } from "./apiEndpoints";
import { getFromAPI } from "./apiServices";


export const profileService = {
  // async getSignedURL(payload: {
  //   mime_type: string;
  //   subdirectory: string;
  //   filename: string;
  // }) {
  //   return await postToAPI(MEDIA_UPLOAD_API, payload);
  // },

  async getUserData(isOnServer: boolean) {
    return await getFromAPI(GET_USER_API, true, isOnServer);
  },

};