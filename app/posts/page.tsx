"use client"; // Pastikan untuk menyertakan ini

import React, { useState, useEffect } from 'react';
import data from '../public/data/data.json'; // Mengimpor JSON langsung

interface ICharacter {
  name: string;
  gender: string;
  age: number;
  height: string;
  hair_color: string;
  eye_color: string;
  anime: string;
}

const Posts = () => {
  const [characters, setCharacters] = useState<ICharacter[]>(data); // Menggunakan data dari JSON
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    // Update waktu setiap detik
    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Ambil waktu saat komponen pertama kali dimuat

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen tidak lagi digunakan
  }, []);

  return (
    <>
      {/* Waktu diposisikan di tengah halaman */}
      <p className="text-center text-xl font-bold">{currentTime}</p>

      <h1 className="text-fuchsia-500 text-center text-2xl mt-4">Daftar Waifu Saya</h1>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-blue-500 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Gender</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Height</th>
              <th className="py-2 px-4 text-left">Hair Color</th>
              <th className="py-2 px-4 text-left">Eye Color</th>
              <th className="py-2 px-4 text-left">Anime</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, index) => (
              <tr key={index} className="border-b hover:bg-blue-100">
                <td className="py-2 px-4 text-white">{character.name}</td>
                <td className="py-2 px-4 text-white">{character.gender}</td>
                <td className="py-2 px-4 text-white">{character.age}</td>
                <td className="py-2 px-4 text-white">{character.height}</td>
                <td className="py-2 px-4 text-white">{character.hair_color}</td>
                <td className="py-2 px-4 text-white">{character.eye_color}</td>
                <td className="py-2 px-4 text-white">{character.anime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;
