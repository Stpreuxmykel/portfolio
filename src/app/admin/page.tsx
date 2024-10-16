
"use client"

import axios from "axios"
import { useState, useEffect } from "react"

const Admin = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio310.pythonanywhere.com/api/contact/')
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Bienvenue sur votre Dashboard</h2>
      <h4 className="text-xl font-semibold mb-4">Liste des personnes qui m'ont contacté</h4>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-500 text-accent">
              <th className="border border-gray-300 px-4 py-2">Prénom</th>
              <th className="border border-gray-300 px-4 py-2">Nom</th>
              <th className="border border-gray-300 px-4 py-2">Téléphone</th>
              <th className="border border-gray-300 px-4 py-2">Services</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} >
                <td className="border border-gray-300 px-4 py-2">{item.first_name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.last_name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{item.services}</td>
                <td className="border border-gray-300 px-4 py-2">{item.messages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin;
