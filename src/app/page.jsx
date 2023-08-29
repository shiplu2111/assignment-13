'use client';
import { useState } from "react";
import Link from "next/link";
export default function Home() {
const [cookie, setCookie] = useState(null);
const [res, setRes] = useState(null);

  const handleSetCookie = () => {
    (async ()=>{
    const response =  await fetch('http://localhost:3000/api/set-cookie');
    })();
    
  }

  const handleGetCookie = () => {
    (async ()=>{
    const response =  await fetch('http://localhost:3000/api/get-cookie');
    const data = await response.json();
    const theme=data.theme;
    setCookie(theme);
    })();
  }
 const handleResponse = () => {
    (async ()=>{
    const response =  await fetch('http://localhost:3000/api/json-response');
    const data = await response.json();
    setRes(data);
    })();
 }
 const handleRedirect = () => {
  (async ()=>{
    const response =  await fetch('http://localhost:3000/api/redirect');
    })();
 }
 
  return (
    <div>
 <div>
  <div className="flex items-center justify-center mt-20">
<button onClick={handleSetCookie} className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Set Cookie <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg></button>

  <button  onClick={handleGetCookie}  className="inline-flex items-center gap-2 rounded border ml-2 border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Get Cookie <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg></button>
  <button  onClick={handleResponse}  className="inline-flex items-center gap-2 rounded border ml-2 border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Json Response<svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg></button>
  <button onClick={handleRedirect} className="inline-flex items-center gap-2 rounded border ml-2 border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Redirect<svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg></button>
  </div>
  {
    cookie&&(
      <div className="mt-20">
    <p className="flex items-center justify-center">Cookie Name: {cookie?.name}</p>
    <p  className="flex items-center justify-center mt-2">Cookie Value: {cookie?.value}</p>
  </div>
    )
  }

{
    res&&(
      <div className="mt-20">
  <p className="flex items-center justify-center">Message: {res?.message}</p>
  <p className="flex items-center justify-center">Version: {res?.version}</p>
  </div>
    )
  }
  
    </div>
    </div>
  )
}
