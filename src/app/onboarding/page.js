import Image from 'next/image';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Imagem da Sala de Aula ocupando quase tudo */}
      <div className="relative flex-1 w-full">
        <Image 
           src="/assets/classroom_wolf.jpeg" 
           alt="Blue Wolf Classroom" 
           fill
           className="object-contain md:object-cover"
           priority
         />
      </div>

      {/* Área de Confirmação */}
      <div className="h-24 bg-slate-900 border-t border-cyan-600 flex items-center justify-center px-6">
        <Link href="/dashboard" className="w-full max-w-md">
          <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-black text-xl rounded shadow-[0_0_15px_rgba(34,197,94,0.6)] uppercase tracking-wider active:scale-95 transition-transform">
            Entendido, Sensei!
          </button>
        </Link>
      </div>
    </div>
  );
}
