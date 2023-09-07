// https://maps.googleapis.com/maps/api/place/photo
//   ?maxwidth=400
//   &photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT
//     & key=YOUR_API_KEY

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const googlePlaceApiKey = process.env.GOOGLE_MAPS_API_KEY;

export const getPhotos = async (photoReference: string) => {
  const url = `${BASE_URL}/photo?maxwidth=400&photo_reference=${photoReference}&key=${googlePlaceApiKey}`;
  const response = await fetch(url);
  const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    console.log(file);
  return file;
};
