import { BookOpen, Brain, Map, Type } from 'lucide-react'; // Instalar: npm install lucide-react

export default function Dashboard() {
  const menuItems = [
    { title: 'ILHA DE ATIVIDADES', icon: <Map size={48} />, color: 'text-cyan-400', border: 'border-cyan-500' },
    { title: 'MATERIAL IMERSIVO', icon: <BookOpen size={48} />, color: 'text-blue-400', border: 'border-blue-500' },
    { title: 'MEMORIZAÇÃO CIBER.', icon: <Brain size={48} />, color: 'text-purple-400', border: 'border-purple-500' },
    { title: 'VOCABULÁRIO', icon: <Type size={48} />, color: 'text-emerald-400', border: 'border-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      {/* Top Bar */}
      <div className="w-full p-4 flex justify-between items-center bg-slate-900 border-b border-gray-800">
        <span className="font-bold text-cyan-400 tracking-wider">BLUEWOLF IDIOMAS</span>
        <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-white border border-gray-600">
          NÍVEL 1
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-white text-xl font-bold mb-8 uppercase tracking-widest text-center">
          Selecione o Protocolo
        </h2>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {menuItems.map((item, index) => (
            <div key={index} className={`aspect-square bg-slate-800/50 rounded-xl border-2 ${item.border} flex flex-col items-center justify-center gap-3 p-2 cursor-pointer hover:bg-slate-800 transition-all active:scale-95 shadow-[0_0_10px_rgba(0,0,0,0.5)] group`}>
              <div className={`${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}>
                {item.icon}
              </div>
              <span className="text-white text-xs md:text-sm font-bold text-center uppercase leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Botão de Inscrever (Premium) - Estilo do seu design */}
      <div className="p-6 pb-10">
         <button className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-cyan-400/30 text-cyan-400 font-bold rounded-lg tracking-[0.2em] shadow-lg hover:border-cyan-400 hover:text-white transition-all">
            INSCREVER PRO
         </button>
      </div>
    </div>
  );
}
