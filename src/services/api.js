import axios from "axios";

export async function getAllPatients(){
  try {
    const username = import.meta.env.VITE_API_USERNAME;
    const password = import.meta.env.VITE_API_PASSWORD;

    const headers = username && password ? {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    } : {};

    const response = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      { headers }
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}