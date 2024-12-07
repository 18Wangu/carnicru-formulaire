"use client";

import { useState } from "react";

const Formulaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomChien: "",
    sexe: "",
    poids: "",
    activite: "",
    corpulence: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleConfirm = () => {
    console.log("Résumé des informations :");
    console.log(formData);
    alert("Les informations ont été affichées dans la console !");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="bg-green-600 rounded-lg p-6 shadow-lg w-[400px]">
        {/* Étape 1 */}
        {currentStep === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Quelques questions...</h2>
            <label className="block text-center mb-4">Mon chien s'appelle :</label>
            <input
              type="text"
              name="nomChien"
              value={formData.nomChien}
              onChange={handleInputChange}
              placeholder="Entrer son nom ici ..."
              className="w-full p-2 rounded-lg border-none focus:outline-none text-center text-black"
            />
            <button
              onClick={goToNextStep}
              className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg w-full mt-4"
            >
              Suivant
            </button>
          </>
        )}

        {/* Étape 2 */}
        {currentStep === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Son sexe :</h2>
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "mâle" }))}
                className={`py-2 px-4 rounded-lg font-bold ${
                  formData.sexe === "mâle" ? "bg-red-700" : "bg-red-500"
                }`}
              >
                Mâle
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, sexe: "femelle" }))}
                className={`py-2 px-4 rounded-lg font-bold ${
                  formData.sexe === "femelle" ? "bg-red-700" : "bg-red-500"
                }`}
              >
                Femelle
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 3 */}
        {currentStep === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Son poids :</h2>
            <div className="flex justify-center mb-6">
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleInputChange}
                placeholder="Entrer le poids (kg)"
                className="text-center text-black py-2 px-4 rounded-lg w-[100px]"
              />
              <span className="ml-2 text-lg">kg</span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 4 */}
        {currentStep === 4 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Niveau d'activité :</h2>
            <div className="flex justify-around mb-6">
              {["Canapé", "Actif", "Sportif"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData((prev) => ({ ...prev, activite: level }))}
                  className={`py-2 px-4 rounded-lg font-bold ${
                    formData.activite === level ? "bg-red-700" : "bg-red-500"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 5 */}
        {currentStep === 5 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Corpulence :</h2>
            <div className="flex justify-around mb-6">
              {["Maigre", "Normal", "Surpoids"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData((prev) => ({ ...prev, corpulence: type }))}
                  className={`py-2 px-4 rounded-lg font-bold ${
                    formData.corpulence === type ? "bg-red-700" : "bg-red-500"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={goToNextStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {/* Étape 6 */}
        {currentStep === 6 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Résumé des informations :</h2>
            <ul className="mb-6">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <strong>{key} :</strong> {value || "Non renseigné"}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button
                onClick={goToPreviousStep}
                className="bg-green-300 text-black font-bold py-2 px-4 rounded-lg"
              >
                Précédent
              </button>
              <button
                onClick={handleConfirm}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Confirmer
              </button>
            </div>
          </>
        )}

        {/* Barre de progression */}
        <div className="mt-4">
          <div className="bg-green-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-green-300 h-full"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
          <p className="text-center mt-2">{6 - currentStep} questions restantes</p>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
