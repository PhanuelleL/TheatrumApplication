export default function Connexion() {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen p-6">
   <h1 className="text-4xl font-bold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2">
    Connexion
   </h1>

   <div className="p-8 rounded-lg shadow-lg w-full max-w-md border">
    <form className="grid grid-cols-1 gap-6">
     <div>
      <label className="block text-whitte font-semibold">Email</label>
      <input
       type="email"
       placeholder="Entrer votre email"
       className="w-full p-3 rounded border border-gold focus:ring-2"
      />
     </div>

     <div>
      <label className="block text-gold font-semibold">Mot de passe</label>
      <input
       type="password"
       placeholder="Votre mot de passe"
       className="w-full p-3 rounded border border-gold "
      />
     </div>

     <button className="w-full yellow-400 hover:bg-gray-500 hover:text-black text-white py-3 rounded-lg font-bold transition-all duration-300">
      Se connecter
     </button>
    </form>

    <div className="mt-4 text-center">
     <a href="#" className="text-sm hover:text-bordeaux">
      Mot de passe oublié ?
     </a>
    </div>
   </div>
  </div>
 );
}
