"use client";

import { useState } from "react";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    sexe: "",
    problemeSante: false,
    detailsProblemeSante: "",
    poids: 3,
    race: "",
    sterilisation: false,
    niveauActivite: "",
    etatPhysique: "",
  });

  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined; // Type assertion for checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calcul de la portion en fonction des données saisies
    const poids = parseFloat(formData.poids.toString());
    let portion = 0;

    if (poids < 15) {
      // Petit chien
      portion = poids * (formData.etatPhysique === "maigre" ? 0.1 : formData.etatPhysique === "normal" ? 0.08 : 0.06);
    } else if (poids < 40) {
      // Moyen chien
      portion = poids * (formData.etatPhysique === "maigre" ? 0.07 : formData.etatPhysique === "normal" ? 0.06 : 0.05);
    } else {
      // Grand chien
      portion = poids * (formData.etatPhysique === "maigre" ? 0.05 : formData.etatPhysique === "normal" ? 0.04 : 0.035);
    }

    // Ajustement pour stérilisation
    if (formData.sterilisation) {
      portion *= 0.95;
    }

    // Formatage du résultat
    setResult(`Portion quotidienne recommandée : ${portion.toFixed(2)} kg`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Formulaire Nutrition</h1>
      <form onSubmit={handleSubmit}>
        {/* Carte d'identité */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">Carte d'identité</h2>
          <div className="mb-2">
            <label className="block font-medium">Sexe :</label>
            <select name="sexe" onChange={handleInputChange} className="border rounded p-2">
              <option value="">-- Choisir --</option>
              <option value="male">Mâle</option>
              <option value="femelle">Femelle</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block font-medium">Problème de santé :</label>
            <input
              type="checkbox"
              name="problemeSante"
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Oui</span>
          </div>
          {formData.problemeSante && (
            <div className="mb-2">
              <label className="block font-medium">Détails :</label>
              <input
                type="text"
                name="detailsProblemeSante"
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
          )}
          <div className="mb-2">
            <label className="block font-medium">Poids (entre 3kg et 80kg) :</label>
            <input
              type="number"
              name="poids"
              min={3}
              max={80}
              step={0.1}
              value={formData.poids}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Race :</label>
            <input
              type="text"
              name="race"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Stérilisation :</label>
            <input
              type="checkbox"
              name="sterilisation"
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Oui</span>
          </div>
          <div className="mb-2">
            <label className="block font-medium">Niveau d'activité :</label>
            <select
              name="niveauActivite"
              onChange={handleInputChange}
              className="border rounded p-2"
            >
              <option value="">-- Choisir --</option>
              <option value="canape">Canapé</option>
              <option value="actif">Actif</option>
              <option value="sportif">Sportif</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block font-medium">État physique :</label>
            <select
              name="etatPhysique"
              onChange={handleInputChange}
              className="border rounded p-2"
            >
              <option value="">-- Choisir --</option>
              <option value="maigre">Maigre</option>
              <option value="normal">Normal</option>
              <option value="surpoids">Surpoids</option>
            </select>
          </div>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calculer la portion
        </button>
      </form>

      {/* Résultat */}
      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold">Résultat</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
