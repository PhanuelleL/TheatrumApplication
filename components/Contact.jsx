"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
 const [result, setResult] = useState("");
 const [success, setSuccess] = useState(true);

 const {
  register,
  handleSubmit,
  getValues,
  formState: { errors },
 } = useForm({
  defaultValues: {
   nom: "",
   email: "",
   objet: "",
   message: "",
  },
 });

 const sendMail = () => {
  const values = getValues();
  console.log(values);
  const templateParams = {
   name: values.nom,
   email: values.email,
   subject: values.objet,
   message: values.message,
  };

  emailjs
   .send(
    "service_7eejsm2",
    "template_8tkgbbw",
    templateParams,
    "4WP52q8KHhrUBeeF6"
   )
   .then(
    (response) => {
     setResult("Message envoyé avec succès !");
     setSuccess(true);
    },
    (error) => {
     setResult("Erreur lors de l'envoi du message.");
     setSuccess(true);
    }
   )

   .catch(() => alert);
 };

 return (
  <div className="flex justify-center items-center bg-black min-h-screen border-yellow-400 text-white p-6">
   <form
    onSubmit={handleSubmit(sendMail)}
    className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg border-2 border-yellow-400"
   >
    <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center border-b-4 border-yellow-400 pb-2">
     Contactez-nous
    </h1>
    <label className="block text-white font-semibold mt-4">
     Nom:
     <input
      {...register("nom", { required: "Champ obligatoire" })}
      type="text"
      className="w-full p-3 rounded bg-black border border-yellow text-white focus:ring-2 focus:ring-bordeaux"
     />
     {errors.nom && (
      <span className="text-yellow-500 text-xs">{errors.nom.message}</span>
     )}
    </label>
    <label className="block text-gold font-semibold mt-4">
     Email:
     <input
      {...register("email", {
       required: "Champ obligatoire",
       pattern: {
        value:
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email invalide",
       },
      })}
      type="text"
      className="w-full p-3 rounded bg-black border border-gold text-white focus:ring-2 focus:ring-bordeaux"
     />
     {errors.email && (
      <span className="text-yellow-500 text-xs">{errors.email.message}</span>
     )}
    </label>
    <label className="block text-gold font-semibold mt-4">
     Objet:
     <input
      {...register("objet", { required: "Champ obligatoire" })}
      type="text"
      className="w-full p-3 rounded bg-black border border-gold text-white focus:ring-2 focus:ring-bordeaux"
     />
     {errors.objet && (
      <span className="text-yellow-500 text-xs">{errors.objet.message}</span>
     )}
    </label>
    <label className="block text-gold font-semibold mt-4">
     Message:
     <textarea
      {...register("message", { required: "Champ obligatoire" })}
      className="w-full p-3 rounded bg-black border border-gold text-white focus:ring-2 focus:ring-bordeaux"
      rows={5}
     ></textarea>
     {errors.message && (
      <span className="text-yellow-500 text-xs">{errors.message.message}</span>
     )}
    </label>

       <div className="text-green-100">{success && result}</div>
       
    <div className="flex justify-center gap-4 mt-6">
     <input
      type="submit"
      value="Envoyer"
      className="bg-gray-600 hover:bg-yellow-400 text-white py-3 px-6 rounded-lg "
     ></input>
     <input
      type="button"
      value="Annuler"
      className="bg-gray-600 hover:bg-yellow-400 text-white py-3 px-6 rounded-lg"
     ></input>
    </div>
   </form>
  </div>
 );
}
