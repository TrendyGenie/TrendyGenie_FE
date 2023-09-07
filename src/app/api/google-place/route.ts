const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const NEARBY_SEARCH = '/nearbysearch/json';
const googlePlaceApiKey = process.env.GOOGLE_MAPS_API_KEY;
import { NextResponse } from 'next/server';

async function fetchData(url: RequestInfo | URL) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  const { location, type, radius, query } = await request.json();

  let url = `${BASE_URL}${NEARBY_SEARCH}?location=${location.lat}%2C${location.lng}&type=${type}&radius=${radius}&key=${googlePlaceApiKey}`;

  if (query) {
    url = `${BASE_URL}/textsearch/json?query=${query}&type=${type}&location=${location.lat}${location.lng}&radius=${radius}&key=${googlePlaceApiKey}`;
  }

  return fetchData(url);
}
