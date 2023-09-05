const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const googlePlaceApiKkey = process.env.GOOGLE_MAPS_API_KEY;
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { location, type, radius, query } = await request.json();
  try {
    const url = `${BASE_URL}/textsearch/json?query=${query}&type=${type}&location=${location.lat}${location.lng}&radius=${radius}&key=${googlePlaceApiKkey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
